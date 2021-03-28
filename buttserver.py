import datetime

import couchdb
from flask import Flask, send_from_directory

app = Flask(__name__)
couch = couchdb.Server('http://buttblaster:butts@127.0.0.1:5984/')
try:
    db = couch['butts']
except couchdb.http.ResourceNotFound:
    db = couch.create('butts')
    pass


@app.route('/butt/<bid>')
def butt(bid: str):
# return request butt image
    print('butts/' + bid )
    return send_from_directory('butts', bid)


@app.route('/rateButt/<bid>/<value>')
def rateButt(bid: str, value):
    doc = db.get(bid)
    if 'ratings' not in doc.keys():
        doc['ratings'] = []
        doc['ratings'].append({"posted": datetime.datetime.utcnow().isoformat(), "value": value})
        db.save(doc)
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
def hello_world():
    return 'Cat Butt'


if __name__ == '__main__':
    app.run(host="0.0.0.0", debug=True)
