import numpy as np
import datetime as dt

import sqlite3

from flask import Flask, jsonify, request

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



if __name__ == '__main__':
    app.run(debug=True)