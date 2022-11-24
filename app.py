import numpy as np
import pandas as pd
import datetime as dt

import sqlite3
import json
from flask import Flask, jsonify, request, render_template

#################################################
# Database Setup                                #
#################################################
conn = sqlite3.connect("Raw_Data/property.sqlite")

#################################################
# Flask Setup                                   #
#################################################
app = Flask(__name__)

#################################################
# Flask Routes                                  #
#################################################

@app.route("/")
@app.route("/home")
def home():
    return render_template('Home.html')

@app.route("/Data_Comparison")
def datacomparison():
    avg_price = pd.read_sql_query("SELECT COUNT(*) AS total_sales, ROUND(AVG(price),0) avg_sale_price, property_type, date_sold,"
                                    "IIF(date_sold LIKE '%2018', 2018,"
                                    "IIF(date_sold LIKE '%2019', 2019,"
                                    "IF(date_sold LIKE '%2020', 2020,"
                                    "IIF(date_sold LIKE '%2021', 2021, Null)))) AS year"
                                    "FROM salesGROUP BY date_sold, property_type ORDER BY year, date_sold", conn)
    conn.close()

    avg_result = avg_price.to_json(orient= "records")
    avg_parsed = json.loads(avg_result)

    avg_json = json.dumps(avg_parsed)

    return render_template('Data Comparison.html', avg_json=avg_json)

@app.route("/Data_Set")
def dataset():
    all_data = pd.read_sql_query("SELECT * FROM sales", conn)
    conn.close()

    data_result = all_data.to_json(orient = "records")
    data_parsed = json.loads(data_result)

    data_json = json.dumps(data_parsed)
    return render_template('Data set.html', data_json=data_json)

@app.route("/Location_View")
def locationview():
    all_sales = pd.read_sql_query("SELECT latitude, longitude, property_type, state, price, date_sold FROM sales", conn)
    conn.close()

    sales_result = all_sales.to_json(orient = "records")
    sales_parsed = json.loads(sales_result)

    sales_json = json.dumps(sales_parsed)

    #return (sales_json)
    return render_template('Location View.html', sales_json=sales_json)

if __name__ == '__main__':
    app.run(debug=True)

