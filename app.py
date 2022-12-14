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
    #conn = sqlite3.connect("Raw_Data/property.sqlite")
    #avg_price = pd.read_sql_query("SELECT COUNT(*) AS total_sales, ROUND(AVG(price),0) avg_sale_price, property_type, date_sold,"
    #                                "IIF(date_sold LIKE '%2018', 2018,"
    #                                "IIF(date_sold LIKE '%2019', 2019,"
    #                                "IIF(date_sold LIKE '%2020', 2020,"
    #                                "IIF(date_sold LIKE '%2021', 2021, Null)))) AS year "
    #                                "FROM sales GROUP BY date_sold, property_type ORDER BY year, date_sold", conn)
    #conn.close()

    #avg_result = avg_price.to_json(orient= "records")
    #avg_parsed = json.loads(avg_result)

    #avg_json = json.dumps(avg_parsed)

    # Note: The team ran out of time to make the API calls for the data comparison page, so for the comparison graphs we hardcoded the data instead.
    # We included the code above to show the SQL query for the data but commented it out to avoid 404 errors.

    return render_template('Data Comparison.html')

@app.route("/Data_Set")
def dataset():
    conn = sqlite3.connect("Raw_Data/property.sqlite")
    all_data = pd.read_sql_query("SELECT * FROM sales", conn)
    conn.close()

    table = all_data.to_html(index=False)

    return render_template('Data set.html', table=table)
    

@app.route("/Location_View")
def locationview():
    conn = sqlite3.connect("Raw_Data/property.sqlite")
    all_sales = pd.read_sql_query("SELECT latitude, longitude, property_type, state, price, date_sold FROM sales", conn)
    conn.close()

    sales_result = all_sales.to_json(orient = "records")
    sales_parsed = json.loads(sales_result)

    sales_json = json.dumps(sales_parsed)

    #return (sales_json)
    return render_template('Location View.html', sales_json=sales_json)
    

if __name__ == '__main__':
    app.run(debug=True)

