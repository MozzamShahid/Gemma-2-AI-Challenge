from flask import Flask, request, jsonify

app = Flask(__name__)

# Endpoint for user to submit data or request information (POST request)
@app.route('/user/request', methods=['POST'])
def user_request():
    user_data = request.json  # Get the JSON data sent by the user
    if not user_data:
        return jsonify({'error': 'No data provided'}), 400

    
    action = user_data.get('action')

    if action == 'get_info':
        response_data = {'info': 'Here is the information you requested'}
    else:
        response_data = {'message': f'Action "{action}" is not supported.'}

    return jsonify(response_data), 200


# Endpoint for system to respond to status or other system-level information (GET request)
@app.route('/system/status', methods=['GET'])
def system_status():
    
    status_info = {
        'system_status': 'Running',
        'uptime': '24 hours',  # Example of system uptime
        'version': '1.0.0'     # Example of system version
    }
    return jsonify(status_info), 200



@app.route('/user/result', methods=['GET'])
def user_result():
    
    result_data = {
        'result': 'Your previous request was successful!',
        'details': 'You requested XYZ and it has been processed.'
    }
    return jsonify(result_data), 200


if __name__ == '__main__':
    app.run(debug=True)
