from flask import Flask, request, jsonify
import os
import requests
from dotenv import load_dotenv
from flask_cors import CORS
from werkzeug.utils import secure_filename

# Завантаження змінних середовища
load_dotenv()
load_dotenv('.env')

TOKEN = os.getenv('TELEGRAM_TOKEN')
CHAT_ID = os.getenv('TELEGRAM_CHAT_ID')
API_URL_MSG = f"https://api.telegram.org/bot{TOKEN}/sendMessage"
API_URL_FILE = f"https://api.telegram.org/bot{TOKEN}/sendDocument"

UPLOAD_FOLDER = 'uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

app = Flask(__name__)
CORS(app)  # Дозволяє запити з frontend

# 📞 Обробка форми "Замовити консультацію"
@app.route('/api/consult', methods=['POST'])
def consult():
    data = request.json
    name = data.get('name')
    phone = data.get('phone')
    message = data.get('message', 'Без опису')

    if not name or not phone:
        return jsonify({'error': 'Імʼя та телефон є обовʼязковими'}), 400

    text = f"📞 Нова заявка на консультацію:\nІм'я: {name}\nТелефон: {phone}\nОпис: {message}"
    response = requests.post(API_URL_MSG, data={'chat_id': CHAT_ID, 'text': text})

    if response.status_code == 200:
        return jsonify({'message': 'Заявка відправлена!'})
    else:
        return jsonify({'error': 'Помилка відправки'}), 500

# 📄 Обробка форми "Надіслати резюме"
@app.route('/api/send_resume', methods=['POST'])
def resume():
    name = request.form.get('name')
    phone = request.form.get('phone')
    file = request.files.get('resume')

    if not name or not phone or not file:
        return jsonify({'error': 'Імʼя, телефон і файл резюме обовʼязкові'}), 400

    filename = secure_filename(file.filename)
    filepath = os.path.join(UPLOAD_FOLDER, filename)
    file.save(filepath)

    # Відправити файл у Telegram
    with open(filepath, 'rb') as f:
        response = requests.post(
            API_URL_FILE,
            data={
                'chat_id': CHAT_ID,
                'caption': f"📄 Нове резюме:\nІмʼя: {name}\nТелефон: {phone}"
            },
            files={'document': f}
        )

    if response.status_code == 200:
        return jsonify({'message': 'Резюме відправлено!'})
    else:
        return jsonify({'error': 'Помилка надсилання до Telegram'}), 500

if __name__ == '__main__':
    app.run(port=5000, debug=True)
