from flask import Flask
from flask_cors import CORS
from config import Config
from routes import auth, chat, analysis
from models.user import db

app = Flask(__name__)
app.config.from_object(Config)
CORS(app)

# Initialize the database
db.init_app(app)

# Register blueprints
app.register_blueprint(auth.bp)
app.register_blueprint(chat.bp)
app.register_blueprint(analysis.bp)

@app.before_first_request
def create_tables():
    db.create_all()

if __name__ == '__main__':
    app.run(debug=True)