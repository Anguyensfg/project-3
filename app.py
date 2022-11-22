import numpy as np
import pandas as pd
import datetime as dt

import sqlite3
import json
from flask import Flask, jsonify, request, render_template

#################################################
# Database Setup
#################################################
conn = sqlite3.connect(r"Raw_Data/property.sqlite")

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

#################################################
# Flask Routes
#################################################

@app.route("/")
def home():
    return render_template('index.html', name=name)

@app.route("/allsales")
def alldata():
    conn = sqlite3.connect(r"Raw_Data/property.sqlite")
    all_sales = pd.read_sql_query("SELECT latitude, longitude from sales", conn)
    conn.close()

    sales_result = all_sales.to_json(orient = "records")
    sales_parsed = json.loads(sales_result)

    sales_json = json.dumps(sales_parsed, indent = 4)

    return (sales_json)
    return render_template('index.html', name = sales_json)

@app.route("/townhouse")
def townhouse():
    conn = sqlite3.connect(r"Raw_Data/property.sqlite")
    all_townhouse = pd.read_sql_query("SELECT latitude, longitude from sales WHERE property_type = 'townhouse'", conn)
    conn.close()

    townhouse_result = all_townhouse.to_json(orient = "records")
    townhouse_parsed = json.loads(townhouse_result)

    return (json.dumps(townhouse_parsed, indent = 4))

@app.route("/unit")
def unit():
    conn = sqlite3.connect(r"Raw_Data/property.sqlite")
    all_unit = pd.read_sql_query("SELECT latitude, longitude from sales WHERE property_type = 'unit'", conn)
    conn.close()

    unit_result = all_unit.to_json(orient = "records")
    unit_parsed = json.loads(unit_result)

    return (json.dumps(unit_parsed, indent = 4))

@app.route("/house")
def house():
    conn = sqlite3.connect(r"Raw_Data/property.sqlite")
    all_house = pd.read_sql_query("SELECT latitude, longitude from sales WHERE property_type = 'house'", conn)
    conn.close()

    house_result = all_house.to_json(orient = "records")
    house_parsed = json.loads(house_result)

    return (json.dumps(house_parsed, indent = 4))

if __name__ == '__main__':
    app.run(debug=True)

