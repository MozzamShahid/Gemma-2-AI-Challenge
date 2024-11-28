from flask import Blueprint, request, jsonify
from flask_login import current_user, login_required
from models.message import Message, db
from services.gemma_service import gemma_service

bp = Blueprint('chat', __name__)

@bp.route('/messages', methods=['GET'])
@login_required
def get_messages():
    messages = Message.query.order_by(Message.timestamp.desc()).limit(50).all()
    return jsonify([{
        'id': m.id,
        'content': m.content,
        'user_id': m.user_id,
        'timestamp': m.timestamp.isoformat()
    } for m in messages])

@bp.route('/messages', methods=['POST'])
@login_required
def send_message():
    data = request.json
    user_message = Message(content=data['content'], user_id=current_user.id)
    db.session.add(user_message)
    db.session.commit()

    # Generate AI response using Gemma
    ai_response = gemma_service.generate_response(data['content'])
    ai_message = Message(content=ai_response, user_id=None)  # None for AI user
    db.session.add(ai_message)
    db.session.commit()

    return jsonify({
        'user_message': {'id': user_message.id, 'content': user_message.content, 'user_id': user_message.user_id},
        'ai_message': {'id': ai_message.id, 'content': ai_message.content, 'user_id': None}
    }), 201

@bp.route('/upload', methods=['POST'])
@login_required
def upload_file():
    # Implement file upload logic here
    return jsonify({'message': 'File uploaded successfully'}), 201

