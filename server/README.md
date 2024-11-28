# Gemma-2-AI-Challenge 
# BackEnd


# Backend Setup and Run Instructions:

1. Navigate to the backend directory:

```
cd path/to/server
```


2. Create a virtual environment:

```
python -m venv venv
```


3. Activate the virtual environment:

1. On Windows:

```
venv\Scripts\activate
```


2. On macOS and Linux:

```
source venv/bin/activate
```





4. Install the required packages:

```
pip install -r requirements.txt
```


5. Create a `.env` file in the root of the backend directory with the following content:

```
SECRET_KEY=your_secret_key
DATABASE_URL=sqlite:///app.db
GOOGLE_OAUTH_CLIENT_ID=your_google_client_id
GOOGLE_OAUTH_CLIENT_SECRET=your_google_client_secret
KAGGLE_USERNAME=your_kaggle_username
KAGGLE_KEY=your_kaggle_api_key
```

Replace the placeholder values with your actual credentials.


6. Initialize the database:

```
flask db init
flask db migrate
flask db upgrade
```


7. Clone the Gemma PyTorch repository:

```
git clone https://github.com/google/gemma_pytorch.git
```


8. Update the `gemma_path` in `services/gemma_service.py` to point to the cloned repository:

```python
gemma_path = Path("/path/to/gemma_pytorch")
```


9. Run the Flask application:

```
python app.py
```


10. The backend should now be running on `http://localhost:5000`


Additional Setup:

1. Ensure you have a Kaggle account and have accepted the terms for using the Gemma model.
2. Download your Kaggle API credentials (kaggle.json) from the Kaggle website and place it in the appropriate directory (usually `~/.kaggle/` on Linux/macOS or `C:\Users\<Windows-username>\.kaggle\` on Windows).
3. Make sure you have sufficient disk space and computational resources to download and run the Gemma model.


Running the Complete Application:

1. Start the backend server first by following the backend setup and run instructions.
2. Once the backend is running, start the frontend development server by following the frontend setup and run instructions.
3. Open a web browser and navigate to `http://localhost:3000` to use the application.


Troubleshooting:

- If you encounter any CORS issues, ensure that the backend CORS settings in `app.py` are correctly configured to allow requests from the frontend origin.
- If the Gemma model fails to download or initialize, check your Kaggle API credentials and ensure you have accepted the terms for the Gemma model on the Kaggle website.
- For any package-related issues, make sure you're using compatible versions as specified in the `requirements.txt` file for the backend and `package.json` for the frontend.







# Detailed explanation of the workflow for the updated GemmaAIChat project:

1. Project Initialization:
a. When the Flask application starts (`app.py`):

1. The configuration is loaded from `config.py`, which uses python-dotenv to load environment variables.
2. CORS is set up to allow cross-origin requests with credentials.
3. Kaggle API credentials are set as environment variables.
4. The database is initialized using SQLAlchemy.
5. OAuth for Google authentication is set up.
6. The Gemma service is initialized.
7. Blueprints for authentication, chat, and analysis are registered.
8. Database tables are created if they don't exist.


b. Gemma Service Initialization (`services/gemma_service.py`):

1. The Gemma model is downloaded using Kaggle API.
2. The model configuration is set up for the 2B parameter version.
3. The model and tokenizer are loaded and prepared for inference.



2. Authentication Flow:
a. Traditional Login:

1. User submits credentials to `/auth/login`.
2. The server checks the credentials against the database.
3. If valid, a session is created for the user using Flask-Login.
4. User information is returned to the frontend.


b. Google OAuth Login:

1. User initiates Google login from the frontend.
2. The backend redirects to Google's OAuth service using Flask-Dance.
3. After successful authentication, Google redirects back to the backend.
4. The backend creates or updates the user in the database.
5. A session is created for the user using Flask-Login.
6. User information is returned to the frontend.



3. Chat Functionality:
a. Fetching Messages (`routes/chat.py`):

1. Frontend requests messages from `/chat/messages` (GET request).
2. Backend queries the database for the 50 most recent messages.
3. Messages are returned in JSON format, including user ID, content, and timestamp.


b. Sending Messages (`routes/chat.py`):

1. User sends a message to `/chat/messages` (POST request).
2. Backend saves the user's message to the database.
3. The Gemma service is called to generate a response.
4. The AI response is saved to the database.
5. Both the user's message and AI response are returned to the frontend.



4. AI Integration (Gemma):
a. Message Generation (`services/gemma_service.py`):

1. The user's message is formatted using the chat template.
2. The formatted prompt is tokenized.
3. The Gemma model generates a response using the tokenized input.
4. The generated response is decoded and cleaned up.
5. The final response is returned to the chat route.



5. Startup Analysis:
a. Analysis Request (`routes/analysis.py`):

1. User sends startup data to `/analysis/analyze` (POST request).
2. The `analyze_startup_stats` function in `services/ai_analysis.py` is called.


b. Analysis Processing (`services/ai_analysis.py`):

1. The startup data is formatted into a prompt for the Gemma model.
2. The Gemma service generates an analysis based on the prompt.
3. The response is parsed as JSON.
4. If parsing fails, a default analysis structure is returned.
5. The analysis results are sent back to the frontend.



6. File Handling:

1. The `/chat/upload` endpoint in `routes/chat.py` is set up to handle file uploads.
2. (Note: The actual file upload logic is not implemented in the current version)



7. Database Interactions:

1. User data is stored and retrieved using the `User` model.
2. Chat messages are stored and retrieved using the `Message` model.
3. SQLAlchemy ORM is used for all database operations.



8. Error Handling and Security:

1. Flask's error handling manages exceptions throughout the application.
2. Password hashing is used for traditional authentication.
3. OAuth tokens are securely handled for Google authentication.
4. The `@login_required` decorator ensures only authenticated users can access protected routes.



9. Environment and Configuration:

1. Sensitive information like database URLs, OAuth credentials, and Kaggle API keys are stored in environment variables.
2. The `Config` class in `config.py` manages these configurations and loads them using python-dotenv.





This workflow ensures a secure, efficient, and AI-enhanced chat experience with startup analysis capabilities. The backend handles authentication, manages real-time chat functionality, integrates AI responses using the Gemma model, and provides startup analysis, all while maintaining user sessions and data integrity.

The use of Flask blueprints allows for a modular structure, making it easier to maintain and extend the application. The integration of the Gemma model through Kaggle's API provides powerful natural language processing capabilities, enhancing both the chat and analysis features of the application.


