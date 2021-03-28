import datetime
import os
import couchdb
import cv2
from guizero import App, Text, TextBox, PushButton, Picture, Box
import sqlite3
import uuid
from faker import Faker
from PIL import Image
import piexif
couch = couchdb.Server('http://buttblaster:butts@127.0.0.1:5984/')
fake = Faker()
try:
    db = couch['butts']
except couchdb.http.ResourceNotFound:
    db = couch.create('butts')
    pass
adjectives = [
'Stinky','Cockblocker','Luminous',
'Candy','Toothless','Constipated',
'Cherry','Jelly','Crusty',
'Sugar','Loud','Ice','Granola' ]
verbs = []
fun = []
last_butt_path = "catbutt.png"

def blast():
    global guid, last_butt_path
    cap = cv2.VideoCapture(0)
    # Check if the webcam is opened correctly
    if not cap.isOpened():
        raise IOError("Cannot open webcam")
    while True:
        ret, frame = cap.read()
        frame = cv2.resize(frame, None, fx=0.75, fy=0.75, interpolation=cv2.INTER_AREA)
        cv2.imshow('Input', frame)
        c = cv2.waitKey(1)
        if c == 27:
            last_butt_path = "/home/lpreimesberger/tmp/{}.png".format(guid.value)
            final_butt = "butts/{}.png".format(guid.value)
            cv2.imwrite(last_butt_path, frame)
            # put luser info into the exif
            with open(last_butt_path, 'rb') as image_file:
                my_image = Image.open(image_file)
                exif_dict = {"Exif": {piexif.ExifIFD.DateTimeOriginal: b"2099:09:29 10:10:10", # ascii
             piexif.ExifIFD.LensMake: b"LensMake", # ascii
             piexif.ExifIFD.OECF: b"\xaa\xaa\xaa\xaa\xaa\xaa",  # undefined
             piexif.ExifIFD.Sharpness: 65535, # short
             piexif.ExifIFD.ISOSpeed: 4294967295, # long
             piexif.ExifIFD.ExposureTime: (4294967295, 1), # rational
             piexif.ExifIFD.LensSpecification: ((1, 1), (1, 1), (1, 1), (1, 1)),
             piexif.ExifIFD.ExposureBiasValue: (2147483647, -2147483648), # srational
             }
}

                # process im and exif_dict...
                w, h = my_image.size
                exif_bytes = piexif.dump(exif_dict)
                # trash the exif data just in case
                image_clean = Image.new(my_image.mode, my_image.size)
                image_clean.putdata(list(my_image.getdata()))
                image_clean.save(final_butt, "png", exif=exif_bytes)
            os.remove(last_butt_path)
            last_butt_path = final_butt
            db.save(
                {'_id': guid.value, 'name': name.value, 'bio': bio.value, 'added': datetime.datetime.utcnow().isoformat()}
            )
            fake_info()
            break
    cap.release()
    cv2.destroyAllWindows()


def fake_info():
    global name, bio, guid, last_butt
    name.value = fake.sentence(ext_word_list=adjectives, nb_words=1).replace('.', '') + " " + fake.unique.first_name()
    bio.value = "Loves to " + fake.sentence(ext_word_list=verbs, nb_words=1).replace('.', '') + " " + fake.sentence(ext_word_list=fun, nb_words=1)
    guid.value = uuid.uuid4()
    last_butt.image = last_butt_path
    last_butt.hide()
    last_butt.show()
    print(name)


# load adjectives
with open('adjectives.csv', newline='') as f:
    for line in f.readlines():
        l = line.strip()
        adjectives.append(l)
with open('verbs.csv', newline='') as f:
    for line in f.readlines():
        l = line.strip()
        verbs.append(l)
with open('fun.csv', newline='') as f:
    for line in f.readlines():
        l = line.strip()
        fun.append(l)

app = App(title="Butt Blaster 2.0", height=786, width=1024, layout="grid")
app.bg = "white"
app.text_color = "black"
picture = Picture(app, image="header.png", grid=[0,0], align="center")
last_butt = Picture(app, image="goat.png", grid=[1,0], align="center")
logo = Text(app, text="last butt", grid=[1,0], align="center")
Text(app, text="Ready to get blasted?  We made up a name an info for you - change if you want.\n  Press the cat butt-on to activate the Butt Cam", grid=[0,5])
name_label = Text(app, text="Playa Name\t", grid=[0, 1], align="right")
name = TextBox(app, grid=[1, 1], width=50)
bio_label = Text(app, text="Bio\t", grid=[0, 2], align="right")
bio = TextBox(app, grid=[1, 2], width=50)
dob_label = Text(app, text="email (if want a copy sent to you)\t", grid=[0, 3], align="right")
dob = TextBox(app, grid=[1, 3], width=50)
guid_label = Text(app, text="Image ID (your butt signature)\t\t", grid=[0, 4], align="right")
guid = TextBox(app, grid=[1, 4], width=50, enabled=False)
buttons_box = Box(app, width="fill", align="bottom", grid=[1,5])
button = PushButton(buttons_box, image="catbutt.png", command=blast, grid=[1,5])
button.align = "center"
button.width = 200
fake_info()
redo_button = PushButton(app, text="wtf - new name plz", command=fake_info, grid=[0,6])
app.display()
