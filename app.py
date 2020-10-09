from flask_pymongo import PyMongo
from flask import Flask, request, render_template
from pymongo import MongoClient

from bson.json_util import dumps
import json

app = Flask(__name__)

app.config["MONGO_URI"] = "mongodb://localhost:27017/project_2_db"
mongo = PyMongo(app)

db = mongo.db.loans_db
# conn = f'mongodb://localhost:27017/project_2_db'

# client = pymongo.MongoClient(conn)

# db = client.get_database('project_2_db')

# bars_perth_col = pymongo.collection.Collection(db,'bars_perth')

# app.config["MONGO_URI"] = "mongodb://localhost:27017/project_2_db"
# mongo = PyMongo(app)

@app.route("/")
def home():
  
    return render_template("index.html")



@app.route("/data")
def data():
    bars_data = bars_perth_col.find()

    print(len(bars_data))

    return render_template("data.html", reference = bars_data)





if __name__ == "__main__":
    app.run(debug=True)
