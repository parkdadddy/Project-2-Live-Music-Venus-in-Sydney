from flask_pymongo import PyMongo
from flask import Flask, request, render_template

from bson.json_util import dumps
import json

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/project_2_db"
mongo = PyMongo(app)

@app.route("/home")
def map():
    bo_data = mongo.db.bottle_shops.find_one()
    return bo_data

if __name__ == "__main__":
    app.run(debug=True)
