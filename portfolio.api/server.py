from http.server import BaseHTTPRequestHandler, HTTPServer
import time
import tensorflow as tf
from tensorflow.keras import backend as K
from flask import Flask, jsonify
import predictions
from flask_cors import CORS, cross_origin

hostName = "localhost"
serverPort = 8080

app = Flask(__name__, static_folder='./../portfolio-spa/build', static_url_path='/')
app.config['CORS_HEADERS'] = '*'
CORS(app)

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/api/<cardIndex>', methods=['GET'])
def getCardGrade(cardIndex):
    grades = predictions.predict_one_card(cardIndex)
    response = app.response_class(response=jsonify(grades), status=200, mimetype='application/json', headers={'Access-Control-Allow-Origin': '*'})
    return jsonify(grades)


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000, threaded=True)