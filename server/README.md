# Gemma-2-AI-Challenge 
# BackEnd


# Google authentication backend, here are the steps to set it up:

1. Go to the Google Cloud Console ([https://console.cloud.google.com/](https://console.cloud.google.com/)).
2. Create a new project or select an existing one.
3. Navigate to "APIs & Services" > "Credentials".
4. Click "Create Credentials" and select "OAuth client ID".
5. Choose "Web application" as the application type.
6. Add "[http://localhost:5000/login/google/authorized](http://localhost:5000/login/google/authorized)" to the list of authorized redirect URIs.
7. Note down the Client ID and Client Secret.

# To run the updated project with Google authentication:

1. Set up environment variables for your Google OAuth credentials:

```
export GOOGLE_OAUTH_CLIENT_ID="your_client_id"
export GOOGLE_OAUTH_CLIENT_SECRET="your_client_secret"
```


2. Update your virtual environment:

```
pip install -r requirements.txt
```


3. Run the Flask app:

```
python app.py
```

The backend supports both traditional username/password login and Google OAuth login. 

# To use Google login in your frontend:

1. Add a "Login with Google" button to your login page.
2. When clicked, redirect the user to "[http://localhost:5000/login/google](http://localhost:5000/login/google)".
3. After successful authentication, the user will be redirected back to your application.
```