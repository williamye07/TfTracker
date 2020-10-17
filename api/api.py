import os
from flask import Flask, session

app = Flask(__name__, static_folder='../build', static_url_path='/')

app.secret_key = os.environ['SECRET_KEY']

@app.route('/')
def index():
    return app.send_static_file('index.html')


@app.route('/addOpponent/<int:id>/<int:numDead>')
def hello_world(id, numDead):
    if ('opponentQ' not in session):
        session['opponentQ'] = []
    temp = session['opponentQ']
    size = len(temp)

    if (numDead == 0 and size == 4):
        idQ = temp.pop(0)
        temp.append(id)
        session['opponentQ'] = temp
        session.modified = True
        return {'id': idQ}
    elif (numDead == 1 and size == 3):
        idQ = temp.pop(0)
        temp.append(id)
        session['opponentQ'] = temp
        session.modified = True
        return {'id': idQ}
    elif (numDead == 2 and size == 2):
        idQ = temp.pop(0)
        temp.append(id)
        session['opponentQ'] = temp
        session.modified = True
        return {'id': idQ}
    elif (numDead >= 3 and size == 1):
        idQ = temp.pop(0)
        temp.append(id)
        session['opponentQ'] = temp
        session.modified = True
        return {'id': idQ}
    else:
        temp.append(id)
        session['opponentQ'] = temp
        session.modified = True
        return {'id': 8}

@app.route('/clear')
def clearSession():
    if 'opponentQ' in session:
        session.pop('opponentQ')
    return('', 200)
        