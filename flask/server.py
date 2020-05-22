from flask import Flask
from flask import request
from flask_cors import CORS
from flask_pymongo import PyMongo
from bson.json_util import dumps
import sys
sys.path.insert(1, 'library/')
import os

from arabic_entity_classifier_using_pattern import classify

app = Flask(__name__)
app.config['MONGO_URI'] = "mongodb://127.0.0.1:27017/TA"

mongo = PyMongo(app)
cors = CORS(app)

@app.route('/API/get_surah/<surah_number>')
def get_surah(surah_number):

    def pattern_to_array(row):
        return row['pattern'].split(',')

    patterns = list(map(pattern_to_array, list(mongo.db.mongo_patterns.find())))
    surah = list(mongo.db.mongo_quran.find({'SURAH_NUMBER' : str(surah_number)}))

    classified_surah = dumps(classify(patterns, surah))

    return classified_surah