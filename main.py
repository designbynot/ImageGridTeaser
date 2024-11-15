from flask import Flask, render_template
import os
import shutil

app = Flask(__name__)

# Create static/images directory if it doesn't exist
os.makedirs('static/images', exist_ok=True)

# Copy and rename images on startup
for i in range(1, 13):
    source = f'psyop dot fun {i}.png'
    destination = f'static/images/psyop{i}.png'
    if os.path.exists(source):
        shutil.copy2(source, destination)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
