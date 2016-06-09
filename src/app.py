from flask import Flask, jsonify
import json
app = Flask(__name__)

with open('data.json') as operation_data:
    operations = json.load(operation_data)

with open('AllCards.json') as cards_details:
    card_data = json.load(cards_details)

with open('AllSetsArray.json', encoding="utf8") as cards_sets:
    card_set = json.load(cards_sets)

@app.route("/")
def mainPage():
    return app.send_static_file('Main.html')

@app.route("/simpleNoWorker")
def sendSimple():
    return app.send_static_file('simpleNoWorker.html')

@app.route("/noWorkerComplex")
def sendComplex():
    return app.send_static_file('simpleNoWorkerComplex.html')

@app.route("/simpleWorkerComplex")
def sendWorkerComplex():
    return app.send_static_file('simpleWorkerComplex.html')

@app.route("/getjson")
def operation():
    return jsonify({"operations_data":operations})

@app.route("/cardData")
def getCards():
    return jsonify({"cards":card_data})

@app.route("/hugeFile")
def getPage():
    return app.send_static_file('huge.html')

@app.route("/hugeDataWorker")
def getWorker():
    return app.send_static_file('hugeWorker.html')

@app.route("/hugeDataWorker1")
def getWorker1():
    return app.send_static_file('hugeWorker1.html')

@app.route("/cardSets")
def getSets():
    return jsonify({"sets":card_set})

if __name__ == "__main__":
    app.run(host = '0.0.0.0', debug = True)
