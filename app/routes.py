from flask import send_from_directory, render_template, Flask, request
app = Flask(__name__)

@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')
