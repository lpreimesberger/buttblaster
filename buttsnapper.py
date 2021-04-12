"""
    this just runs in a loop and puts the butt into /tmp
"""
import datetime
from time import sleep
import shutil
import cv2
adjectives = [
'Stinky','Cockblocker','Luminous',
'Candy','Toothless','Constipated',
'Cherry','Jelly','Crusty',
'Sugar','Loud','Ice','Granola' ]
verbs = []
fun = []
last_butt_path = "catbutt.png"


def blast():
    butt_stage = "/tmp/stage.png"
    last_butt_path = "/tmp/{}.png".format("buttsnap")
    # save images in buttsnap.png
    cap = cv2.VideoCapture(0)
    # Check if the webcam is opened correctly
    if not cap.isOpened():
        raise IOError("Cannot open webcam")
    while True:
        ret, frame = cap.read()
        print("Snap", datetime.datetime.utcnow().isoformat())
        cv2.imwrite(butt_stage, frame)
        # iwrite is slow - leaves blurry images
        shutil.copy(butt_stage, last_butt_path)
        sleep(3)
    cap.release()
    cv2.destroyAllWindows()



blast()
