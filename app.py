from flask import Flask, send_from_directory, request, jsonify
import mysql.connector
from mysql.connector import Error
import bcrypt
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Database connection function
def get_db_connection():
    try:
        return mysql.connector.connect(
            host="localhost",
            user="root",  
            password="celes",  
            database="ecommerce"
        )
    except Error as e:
        print(f"Error connecting to MySQL: {e}")
        return None

# Serve static files
@app.route('/')
def index():
    return send_from_directory('static', 'register.html')

@app.route('/<path:filename>')
def static_files(filename):
    return send_from_directory('static', filename)

# Register endpoint
@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    if not username or not email or not password:
        return jsonify({'success': False, 'message': 'All fields are required'}), 400

    # Hash the password
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

    connection = get_db_connection()
    if not connection:
        return jsonify({'success': False, 'message': 'Database connection failed'}), 500

    try:
        cursor = connection.cursor()
        cursor.execute("INSERT INTO customers (username, email, password) VALUES (%s, %s, %s)",
                       (username, email, hashed_password.decode('utf-8')))  # Decode hashed password to string
        connection.commit()
        return jsonify({'success': True, 'message': 'Thank you for registering!'}), 200
    except Error as e:
        return jsonify({'success': False, 'message': str(e)}), 500
    finally:
        if cursor:
            cursor.close()
        if connection:
            connection.close()
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({'success': False, 'message': 'Email and password are required'}), 400

    connection = get_db_connection()
    if not connection:
        return jsonify({'success': False, 'message': 'Database connection failed'}), 500

    try:
        cursor = connection.cursor(dictionary=True)
        cursor.execute("SELECT * FROM customers WHERE email = %s", (email,))
        user = cursor.fetchone()

        if user and bcrypt.checkpw(password.encode('utf-8'), user['password'].encode('utf-8')):
            return jsonify({'success': True, 'message': 'Login successful!'}), 200
        else:
            return jsonify({'success': False, 'message': 'Invalid email or password'}), 401
    except Error as e:
        return jsonify({'success': False, 'message': str(e)}), 500
    finally:
        if cursor:
            cursor.close()
        if connection:
            connection.close()
if __name__ == '__main__':
    app.run(debug=True)