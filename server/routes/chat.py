from flask import Blueprint, request, jsonify
from models.message import Message, db
from services.gemma_service import gemma_service

bp = Blueprint('chat', __name__)

@bp.route('/messages', methods=['GET'])
def get_messages():
    messages = Message.query.order_by(Message.timestamp.desc()).limit(50).all()
    return jsonify([{'id': m.id, 'content': m.content, 'user_id': m.user_id, 'timestamp': m.timestamp} for m in messages])

@bp.route('/messages', methods=['POST'])
def send_message():
    data = request.json
    user_message = Message(content=data['content'], user_id=data['user_id'])
    db.session.add(user_message)
    db.session.commit()

    # Generate AI response using Gemma
    ai_response = gemma_service.generate_response(data['content'])
    ai_message = Message(content=ai_response, user_id=None)  # None for AI user
    db.session.add(ai_message)
    db.session.commit()

    return jsonify({
        'user_message': {'id': user_message.id, 'content': user_message.content},
        'ai_message': {'id': ai_message.id, 'content': ai_message.content}
    }), 201

@bp.route('/upload', methods=['POST'])
def upload_file():
    # Implement file upload logic here
    return jsonify({'message': 'File uploaded successfully'}), 201

