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

@app.route('/addbutt/<bid>', methods=['POST'])
def addbutt(bid: str):
    content = request.json
    print('addbutt/' + bid)
    print(content)
    return {}


@app.route('/sendbutt/<bid>', methods=['POST'])
def sendbutt(bid: str):
    content = request.json
    LOG.info('sendbutt/' + bid)
    connection = sqlite3.connect("butts.db")
    cursor = connection.cursor()
#    print(content)
    x = cursor.execute("insert into butts values(?,?,?,?,?)",
                   (content['uuid'],
                    content['name'],
                    content['bio'],
                    0,
                    content['butt'],
                    ))
    connection.commit()
    cursor.close()
    print(x)
    print('done')
    return {}


@app.route('/butt/<bid>')
def butt(bid: str):
# return request butt image
    print('Trying to serve butts/' + bid)
    if not pathlib.Path('butts/'+bid).exists():
        return send_from_directory('.', 'catbutt.png')
    return send_from_directory('butts', bid)


@app.route('/buttsnap')
def buttsnap():
# return request butt image
    if not pathlib.Path('/tmp/buttsnap.png').exists():
        return send_from_directory('.', "defaultbutt.jpg")
    return send_from_directory('/tmp', "buttsnap.png")


@app.route('/ratebutt/<bid>/<value>', methods=['PUT'])
def rateButt(bid: str, value):
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


@app.route('/butts')
def butts():
# return all the butts
    LOG.info("Butt query")
    results = []
    connection = sqlite3.connect("butts.db")
    cursor = connection.cursor()
    print("Select from sqlite")
    rows = cursor.execute("SELECT * from butts;").fetchall()
    print(rows.count('*'))
    for row in rows:
        print('lite', row)
        results.append( {"bio": row[2],
            "butt": row[4],
            "name": row[1],
            "likes": row[3],
            "_id": row[0]} )
    return {"data": results}


@app.route('/')
def root():
    print("sending default root -> index.html")
    return send_from_directory('./', 'index.html')


@app.route(('/<page_name>'))
def page(page_name):
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
