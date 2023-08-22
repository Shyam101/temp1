from flask import Flask, request

app = Flask(__name__)

@app.route('/', methods=['POST'])
def log_post_request():
    # Log the incoming POST request data to the terminal
    request_data = request.data.decode('utf-8')
    print("Received POST request data:")
    print(request_data)

    return 'Request logged successfully', 200

@app.route('/', methods=['POST'])
def log_post_request():
    print("Get Request")

    return 'get Request logged successfully', 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
