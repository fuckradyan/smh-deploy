from flask import Flask, render_template, request
from flask.json import jsonify
app = Flask(__name__)
app.config.from_pyfile('config.py')

@app.route('/')
def index():
    return render_template('index.html')
if __name__ == "__main__":
    app.run(host='0.0.0.0')