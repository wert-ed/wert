from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return 'Hello, World!'

@app.route('/send_notification')
def send_notification():
    # Call the notification sending function
    send_notification()

    return 'Notification sent!'

if __name__ == '__main__':
    app.run(debug=True)
