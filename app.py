from flask import Flask, render_template

app = Flask(__name__)

###############ROUTES###############
@app.route("/")
def index():
    return render_template("index.html")

@app.route("/contact")
def contact():
    return render_template("contact.html")

@app.route("/donate")
def donate():
    return render_template("donate.html")

@app.route("/getinvolved")
def getinvolved():
    return render_template("getinvolved.html")

@app.route("/articles")
def articles():
    return render_template("articles.html")

@app.route("/causesandprev")
def causesandprev():
    return render_template("causesandprev.html")

if __name__ == "__main__":
    app.run(debug=True)
