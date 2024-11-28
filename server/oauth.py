from flask_dance.contrib.google import make_google_blueprint
from flask_dance.consumer import oauth_authorized
from flask_dance.consumer.storage.sqla import SQLAlchemyStorage
from flask_login import LoginManager, login_user
from models.user import User, db

def init_oauth(app):
    google_bp = make_google_blueprint(
        client_id="YOUR_GOOGLE_CLIENT_ID",
        client_secret="YOUR_GOOGLE_CLIENT_SECRET",
        scope=["profile", "email"]
    )
    app.register_blueprint(google_bp, url_prefix="/login")

    login_manager = LoginManager()
    login_manager.init_app(app)

    @login_manager.user_loader
    def load_user(user_id):
        return User.query.get(int(user_id))

    @oauth_authorized.connect_via(google_bp)
    def google_logged_in(blueprint, token):
        resp = blueprint.session.get("/oauth2/v2/userinfo")
        if resp.ok:
            google_info = resp.json()
            google_user_id = str(google_info["id"])

            user = User.query.filter_by(google_id=google_user_id).first()
            if not user:
                user = User(
                    username=google_info["email"],
                    email=google_info["email"],
                    google_id=google_user_id
                )
                db.session.add(user)
                db.session.commit()

            login_user(user)

        return False  # Disable Flask-Dance's default behavior
