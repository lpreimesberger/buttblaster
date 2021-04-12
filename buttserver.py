import datetime

import couchdb
from flask import Flask, send_from_directory, request

app = Flask(__name__)
couch = couchdb.Server('http://buttblaster:butts@127.0.0.1:5984/')
try:
    db = couch['butts']
except couchdb.http.ResourceNotFound:
    db = couch.create('butts')
    pass


@app.route('/addbutt/<bid>', methods=['POST'])
def addbutt(bid: str):
    content = request.json
    print('addbutt/' + bid)
    print(content)
    xxxx = db.save(
        {'_id': content['uuid'], 'name': content['name'], 'bio': content['name'], 'added': datetime.datetime.utcnow().isoformat()}
    )
    print(xxxx)
    print('done')
    return {}


@app.route('/butt/<bid>')
def butt(bid: str):
# return request butt image
    print('butts/' + bid )
    return send_from_directory('butts', bid)


@app.route('/buttsnap')
def buttsnap():
# return request butt image
    print('buttsnap/' + datetime.datetime.utcnow().isoformat())
    print("Sending /tmp/buttsnap.png")
    return send_from_directory('/tmp', "buttsnap.png")


@app.route('/ratebutt/<bid>/<value>', methods=['PUT'])
def rateButt(bid: str, value):
    try:
        print("getting butt {}".format(bid))
        doc = db.get(bid)
        if 'ratings' not in doc.keys():
            doc['ratings'] = []
            doc['ratings'].append({"posted": datetime.datetime.utcnow().isoformat(), "value": value})
            db.save(doc)
    except Exception as e:
        print(e)
    return send_from_directory('butts', bid)


@app.route('/butts')
def butts():
# return all the butts
    results = []
    for butt in db:
        print(butt)
        results.append(db.get(butt))
    return {"data": results}


@app.route('/')
def root():
    print("root")
    return send_from_directory('./', 'catbutt.png')


@app.route('/<file>', defaults={'file': '1.jpg'})
def hello_world(file: str):
    print("./{}".format(file))
    return send_from_directory('./', file)


if __name__ == '__main__':
    app.run(host="0.0.0.0", debug=True)
