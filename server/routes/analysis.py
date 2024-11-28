from flask import Blueprint, request, jsonify
from services.ai_analysis import analyze_startup_stats

bp = Blueprint('analysis', __name__)

@bp.route('/analyze', methods=['POST'])
def analyze():
    data = request.json
    analysis_result = analyze_startup_stats(data)
    return jsonify(analysis_result)