"""
    'final' buttblaster version for kiosk and losers

    note:  SQL is:

    CREATE TABLE "butts" (
	"_id"	TEXT,
	"name"	TEXT,
	"bio"	TEXT,
	"likes"	INTEGER DEFAULT 0,
	"image"	TEXT,
	"inserted"	INTEGER DEFAULT 0,
	PRIMARY KEY("_id")
);

there is an index on inserted too - but prolly does nothing
"""
import datetime
import pathlib
import sqlite3
from flask import Flask, send_from_directory, request, logging
from flask_cors import CORS
from flask.logging import default_handler
from waitress import serve

app = Flask(__name__)
CORS(app)

LOG = logging.create_logger(app)
LOG.addHandler(default_handler)


@app.route('/api/addbutt/<bid>', methods=['POST'])
@app.route('/addbutt/<bid>', methods=['POST'])
def addbutt(bid: str):
    """
    noop - old api
    :param bid:
    :return:
    """
    content = request.json
    print('addbutt/' + bid)
    print(content)
    return {}


@app.route('/api/sendbutt/<bid>', methods=['POST'])
@app.route('/sendbutt/<bid>', methods=['POST'])
def sendbutt(bid: str):
    """
    upload a new butt
    :param bid:
    :return:
    """
    content = request.json
    LOG.info('sendbutt/' + bid)
    connection = sqlite3.connect("butts.db")
    cursor = connection.cursor()
    # new - add butt timestamp so can show latest only
    x = cursor.execute("insert into butts values(?,?,?,?,?,?)",
                   (content['uuid'],
                    content['name'],
                    content['bio'],
                    0,
                    content['butt'],
                    datetime.datetime.utcnow().timestamp()
                    ))
    connection.commit()
    cursor.close()
    return {}


@app.route('/butt/<bid>')
def butt(bid: str):
    """
    single butt upload - legacy api
    :param bid:
    :return:
    """
    print('Trying to serve butts/' + bid)
    if not pathlib.Path('butts/'+bid).exists():
        return send_from_directory('.', 'catbutt.png')
    return send_from_directory('butts', bid)


@app.route('/buttsnap')
def buttsnap():
    """
    single butt return - legacy api
    :return:
    """
    if not pathlib.Path('/tmp/buttsnap.png').exists():
        return send_from_directory('.', "defaultbutt.jpg")
    return send_from_directory('/tmp', "buttsnap.png")


@app.route('/api/ratebutt/<bid>/<value>', methods=['PUT'])
@app.route('/ratebutt/<bid>/<value>', methods=['PUT'])
def rate_butt(bid: str, value):
    """
    like the given butt
    :param bid:
    :param value:
    :return:
    """
    try:
        LOG.info("Butt rating")
        print("getting butt {}".format(bid))
        connection = sqlite3.connect("butts.db")
        cursor = connection.cursor()
        print("rating butt ", bid)
        cursor.execute(
            "UPDATE butts set likes=likes+1 where _id=?;",
            (bid,))
        connection.commit()
        cursor.close()
    except Exception as e:
        print(e)
    return {}


@app.route('/api/butts')
@app.route('/butts')
def butts():
    """
    send batch of butts to be judged
    :return:
    """
    LOG.info("Butt query")
    results = []
    connection = sqlite3.connect("butts.db")
    cursor = connection.cursor()
    # latest first, limit to 100
    rows = cursor.execute("SELECT * from butts order by inserted DESC limit 100;").fetchall()
#    print(rows.count('*'))
    for row in rows:
#        print('lite', row)
        results.append( {"bio": row[2],
            "butt": row[4],
            "name": row[1],
            "likes": row[3],
            "_id": row[0]} )
    return {"data": results}


@app.route('/')
def root():
    """
    send app
    :return:
    """
    print("sending default root -> index.html")
    return send_from_directory('./', 'index.html')


@app.route(('/<page_name>'))
def page(page_name):
    """
    prolly unused - need info page up?
    :param page_name:
    :return:
    """
    print("Sending request page -> ", page_name)
    return send_from_directory('./', page_name)


@app.errorhandler(404)
def page_not_found(e):
    # note that we set the 404 status explicitly
    print("404 -> ", e)
    print(request.url)
    return send_from_directory('./', 'index.html')


#app.run(host="0.0.0.0", debug=True)
LOG.info("Buttserver starting on 5000")
serve(app, port=5000)
