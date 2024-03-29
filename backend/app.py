from flask import Flask, jsonify, abort, request, make_response
from flask_cors import CORS

app = Flask(__name__)

CORS(app, supports_credentials=True)

vans = [
    {
        "id": "1",
        "name": "Modest Explorer",
        "price": 60,
        "description": "The Modest Explorer is a van designed to get you out of the house and into nature.",
        "imageUrl": "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png",
        "type": "simple",
        "hostId": "123"
    },
    {
        "id": "2",
        "name": "Beach Bum",
        "price": 80,
        "description": "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home.",
        "imageUrl": "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png",
        "type": "rugged",
        "hostId": "123"
    },
    {
        "id": "3",
        "name": "Reliable Red",
        "price": 100,
        "description": "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy.",
        "imageUrl": "https://assets.scrimba.com/advanced-react/react-router/reliable-red.png",
        "type": "luxury",
        "hostId": "456"
    },
    {
        "id": "4",
        "name": "Dreamfinder",
        "price": 65,
        "description": "Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van.",
        "imageUrl": "https://assets.scrimba.com/advanced-react/react-router/dreamfinder.png",
        "type": "simple",
        "hostId": "789"
    },
    {
        "id": "5",
        "name": "The Cruiser",
        "price": 120,
        "description": "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space.",
        "imageUrl": "https://assets.scrimba.com/advanced-react/react-router/the-cruiser.png",
        "type": "luxury",
        "hostId": "789"
    },
    {
        "id": "6",
        "name": "Green Wonder",
        "price": 70,
        "description": "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport.",
        "imageUrl": "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png",
        "type": "rugged",
        "hostId": "123"
    },
]

users = [{ "id": "123", "email": "b@b.com", "password": "p123", "name": "Bob" }]

@app.route('/api/vans', methods=['GET'])
def get_vans():
    #for testing error handling
    # error_code = 500
    # error_message = "Simulated error response for testing purposes."
    # error_response = {
    #     'error': {
    #         'code': error_code,
    #         'message': error_message
    #     }
    # }
    # response = make_response(jsonify(error_response), error_code)
    # return response
    return jsonify(vans)

@app.route('/api/vans/<string:v_id>', methods=['GET'])
def get_van(v_id):
    van = next((van for van in vans if van["id"] == v_id), None)
    if van is None:
        abort(404)
    return jsonify(van)

@app.route('/api/host/vans', methods=['GET'])
def get_host_vans():
    host_id = "123"
    filtered_vans = [van for van in vans if van["hostId"] == host_id]
    return jsonify(filtered_vans)

@app.route('/api/host/vans/<string:v_id>', methods=['GET'])
def get_host_van(v_id):
    van = next((van for van in vans if van["id"] == v_id), None)
    if van is None:
        abort(404)
    return jsonify(van)

@app.route('/login', methods=['POST'])
def login():
    if not request.is_json:
        return jsonify({"message": "Invalid request, must provide JSON"}), 400

    data = request.json
    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({"message": "Email and password are required"}), 400

    found_user = next((user for user in users if user["email"] == email and user["password"] == password), None)

    if not found_user:
        return jsonify({"message": "No user with those credentials found!"}), 401

    token = "Enjoy your pizza, here's your token."

    sanitized_user = {"name": found_user.get("name"), "id": found_user.get("id"), "email": found_user.get("email")}

    return jsonify({"user": sanitized_user, "token": token})

@app.route('/translations', methods=['GET'])
def get_translations():
    lang = request.args.get('lang', 'en')  # Default to English if no language is specified
    translations = {} 
    if lang == 'bs':
        translations = {
            'host': 'Vi',
            'about': 'O nama',
            'vans': 'Vozila',
            'dashboard': 'Platforma',
            'income': 'Prihod',
            'reviews': 'Recenczije',
            'simple': 'Jednostavni',
            'luxury': 'Luksuzni',
            'rugged': 'Polovni',
            'vansmessage': 'Istraži naša kombi vozila',
            'signInMessage': 'Prijavi se na korisnički račun'


        }
    else:
        translations = {
            'host': 'Host',
            'about': 'About Us',
            'vans': 'Vans',
            'dashboard': 'Dashbaord',
            'income': 'Income',
            'reviews': 'Reviews',
            'simple': 'Simple',
            'luxury': 'Luxury',
            'rugged': 'Rugged',
            'vansmessage': 'Explore our van options',
            'signInMessage': 'Sign in to your account'

            
        }
    return jsonify(translations)



if __name__ == '__main__':
    app.run(debug=True)
