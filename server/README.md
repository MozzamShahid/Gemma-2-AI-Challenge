# Gemma-2-AI-Challenge 
# BackEnd


# Backend Setup and Run Instructions of GemmaAIChat project:



# Frontend Setup and Run Instructions:

1. Navigate to the frontend directory:

```
cd path/to/frontend
```


2. Install dependencies:

```
npm install
```


3. Create a `.env.local` file in the root of the frontend directory with the following content:

```
NEXT_PUBLIC_API_URL=http://localhost:5000
```


4. Run the development server:

```
npm run dev
```


5. The frontend should now be running on `http://localhost:3000`


# Backend Setup and Run Instructions:

1. Navigate to the backend directory:

```
cd path/to/backend
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


9. Install Tesseract OCR:

1. On Ubuntu/Debian:

```
sudo apt-get install tesseract-ocr
```


2. On macOS:

```
brew install tesseract
```


3. On Windows, download the installer from the GitHub releases page and add the Tesseract-OCR directory to your system PATH.



10. Create an 'uploads' directory in the backend folder:

```
mkdir uploads
```


11. Run the Flask application:

```
python app.py
```


12. The backend should now be running on `http://localhost:5000`


Additional Setup:

1. Ensure you have a Kaggle account and have accepted the terms for using the Gemma model.
2. Download your Kaggle API credentials (kaggle.json) from the Kaggle website and place it in the appropriate directory:

1. On Linux/macOS: `~/.kaggle/`
2. On Windows: `C:\Users\<Windows-username>\.kaggle\`



3. Make sure you have sufficient disk space and computational resources to download and run the Gemma model.


Running the Complete Application:

1. Start the backend server first by following the backend setup and run instructions.
2. Once the backend is running, start the frontend development server by following the frontend setup and run instructions.
3. Open a web browser and navigate to `http://localhost:3000` to use the application.


Troubleshooting:

- If you encounter any CORS issues, ensure that the backend CORS settings in `app.py` are correctly configured to allow requests from the frontend origin.
- If the Gemma model fails to download or initialize, check your Kaggle API credentials and ensure you have accepted the terms for the Gemma model on the Kaggle website.
- For any package-related issues, make sure you're using compatible versions as specified in the `requirements.txt` file for the backend and `package.json` for the frontend.
- If you encounter issues with file processing, ensure that Tesseract OCR is correctly installed and accessible in your system PATH.






# Detailed explanation of the workflow for the updated GemmaAIChat project:

1. Project Initialization:
a. Frontend (Next.js):

1. The Next.js application starts with the `_app.tsx` file, which wraps the entire application with necessary providers.
2. The main layout is defined in `layout.tsx`, which includes the Sidebar and ChatContainer components.


b. Backend (Flask):

1. The Flask application is initialized in `app.py`.
2. Configuration is loaded from `config.py`, which uses python-dotenv to load environment variables.
3. CORS is set up to allow cross-origin requests with credentials.
4. The SQLAlchemy database is initialized.
5. OAuth for Google authentication is set up.
6. The Gemma service is initialized.
7. Blueprints for authentication, chat, and analysis are registered.
8. A route for file uploads is added.



2. Authentication Flow:
a. Frontend:

1. The Sidebar component includes a login button (not shown in the provided code, but assumed to be implemented).
2. When a user clicks the login button, it triggers the authentication process.


b. Backend:

1. Traditional Login:

1. User submits credentials to `/auth/login`.
2. The server checks the credentials against the database.
3. If valid, a session is created for the user using Flask-Login.
4. User information is returned to the frontend.



2. Google OAuth Login:

1. User initiates Google login from the frontend.
2. The backend redirects to Google's OAuth service using Flask-Dance.
3. After successful authentication, Google redirects back to the backend.
4. The backend creates or updates the user in the database.
5. A session is created for the user using Flask-Login.
6. User information is returned to the frontend.






3. Chat Functionality:
a. Frontend:

1. The ChatContainer component manages the state of messages and handles sending/receiving messages.
2. On component mount, it fetches existing messages from the backend.
3. The ChatMessages component renders the list of messages.
4. The ChatInput component allows users to type and send messages.


b. Backend:

1. Fetching Messages:

1. Frontend requests messages from `/chat/messages` (GET request).
2. Backend queries the database for recent messages.
3. Messages are returned in JSON format, including user ID, content, and timestamp.



2. Sending Messages:

1. User sends a message to `/chat/messages` (POST request).
2. Backend saves the user's message to the database.
3. The Gemma service is called to generate a response.
4. The AI response is saved to the database.
5. Both the user's message and AI response are returned to the frontend.






4. AI Integration (Gemma):
a. Backend:

1. The `GemmaService` class in `gemma_service.py` handles interactions with the Gemma model.
2. When a user sends a message, the content is passed to the Gemma model.
3. The model generates a response based on the input.
4. This response is then saved and sent back as part of the chat flow.



5. File Upload and Processing:
a. Frontend:

1. The ChatInput component now includes a file input field.
2. When a file is selected, it's stored in the component's state.
3. On form submission, if a file is present, it's sent to the backend using a FormData object.


b. Backend:

1. The `/chat/upload` endpoint handles file uploads.
2. The uploaded file is temporarily saved.
3. Based on the file type (PDF, DOCX, PPTX, or image), the appropriate processing function is called.
4. The `process_document` function in `document_processor.py` extracts text content from the file.
5. For PDFs, it uses PyPDF2 to extract text from each page.
6. For DOCX files, it uses python-docx to extract text from paragraphs.
7. For PPTX files, it uses python-pptx to extract text from slides.
8. For images, it uses pytesseract (OCR) to extract text.
9. The extracted content is returned to the frontend.
10. The temporary file is deleted after processing.



6. Startup Analysis:
a. Frontend:

1. (Not implemented in the provided code, but could be added as a separate component or feature in the chat)


b. Backend:

1. When a user requests an analysis, data is sent to `/analysis/analyze`.
2. The `analyze_startup_stats` function in `ai_analysis.py` processes this data.
3. It uses the Gemma model to generate insights based on the provided startup stats.
4. The analysis results are returned to the frontend in JSON format.



7. Database Structure:

1. The `User` model stores user information, including Google ID for OAuth users.
2. The `Message` model stores chat messages, linking them to users and including timestamps.



8. Error Handling and Security:

1. The backend uses Flask's error handling to manage exceptions.
2. Password hashing is used for traditional authentication.
3. OAuth tokens are securely handled for Google authentication.
4. The `@login_required` decorator ensures only authenticated users can access protected routes.



9. Environment and Configuration:

1. Sensitive information like database URLs, OAuth credentials, and Kaggle API keys are stored in environment variables.
2. The `Config` class in `config.py` manages these configurations and loads them using python-dotenv.





This workflow ensures a secure, efficient, and AI-enhanced chat experience with document processing capabilities. The integration of the Gemma model through Kaggle's API provides powerful natural language processing for both chat responses and potential startup analysis. The addition of document processing allows users to upload and analyze various file types, enhancing the AI's ability to provide context-aware responses.