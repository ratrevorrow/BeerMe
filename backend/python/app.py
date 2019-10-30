from flask import Flask, render_template, request, redirect, url_for, session, jsonify
import mysql.connector as mc
import sys
import requests
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app) #, resources={r"/api/*": {"origins": "*"}})

@app.route("/beerlist", methods=["GET"])
def get_beer_list():
    beer_objects = requests.get('http://www.beerknurd.com/api/brew/list/13877')
    # print(bleh.json())
    objs = beer_objects.json()
    beerlist = dict()
    for item in objs:
        if item['style'] in beerlist.keys():
            # append
            beerlist[item['style']].append(item)
        else:
            # create
            beerlist[item['style']] = [item]

    return jsonify(beerlist)

if __name__ == "__main__":
    app.run()
