from flask_pymongo import PyMongo
from flask import Flask, request, render_template

from bson.json_util import dumps
import json

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/project_2_db"
mongo = PyMongo(app)

@app.route("/")
def home_page():
    bo_data = mongo.db.bottle_shops.find_one()
    return render_template("data.html",
        bo_data=bo_data)


if __name__ == "__main__":
    app.run(debug=True)
