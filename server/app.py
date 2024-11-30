import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from config import Config
from routes import auth, chat, analysis
from models.user import db
from oauth import init_oauth
from services.gemma_service import init_gemma_service
from services.document_processor import process_document

app = Flask(__name__)
app.config.from_object(Config)
CORS(app, supports_credentials=True)

# Set Kaggle environment variables
os.environ["KAGGLE_USERNAME"] = app.config['KAGGLE_USERNAME']
os.environ["KAGGLE_KEY"] = app.config['KAGGLE_KEY']

# Initialize the database
db.init_app(app)

# Initialize OAuth
init_oauth(app)

# Initialize Gemma Service
init_gemma_service()

# Register blueprints
app.register_blueprint(auth.bp)
app.register_blueprint(chat.bp)
app.register_blueprint(analysis.bp)

@app.before_first_request
def create_tables():
    db.create_all()

@app.route('/chat/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    if file:
        filename = file.filename
        file_path = os.path.join('uploads', filename)
        file.save(file_path)
        content = process_document(file_path)
        os.remove(file_path)  # Remove the file after processing
        return jsonify({'message': 'File processed successfully', 'content': content}), 200

if __name__ == '__main__':
    app.run(debug=True)
