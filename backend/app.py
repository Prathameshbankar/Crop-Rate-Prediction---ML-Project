# backend/app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np

app = Flask(__name__)
CORS(app)

# Load the trained ML model
model = joblib.load('crop_yield_model.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    
    try:
        # Convert input features to float
        feature1 = float(data['feature1'])
        feature2 = float(data['feature2'])
        
        # Perform prediction
        prediction = model.predict(np.array([[feature1, feature2]]))
        
        return jsonify({'prediction': prediction[0]})
    
    except ValueError as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
