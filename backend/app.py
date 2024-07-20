from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd
import numpy as np

app = Flask(__name__)
CORS(app)

# Load the trained ML model
model = joblib.load('best_model.pkl')
preprocessor = joblib.load('preprocessor.pkl')

@app.route('/predictRate', methods=['POST'])
def predict_modal_price():
    data = request.get_json()
    # input_data = {
    # 'Year': 2024,
    # 'Month': 8,
    # 'Day': 15,
    # 'Monthly Rainfall': 25,
    # 'District Name': 'Nashik',
    # 'Market Name': 'Yeola',
    # 'Commodity': 'Soyabean',
    # 'Season': 'Post-Monsoon'
    # }   
    # data = request.get_json()
    try:
        # Extract the year, month, and day from the date
        date_parts = data['date'].split('-')
        year = int(date_parts[0])
        month = int(date_parts[1])
        day = int(date_parts[2])
        season = {
            1:"Winter",
            2:"Winter",
            3:"Summer",
            4:"Summer",
            5:"Summer",
            6:"Monsoon",
            7:"Monsoon",
            8:"Monsoon",
            9:"Monsoon",
            10:"Post-Monsoon",
            11:"Post-Monsoon",
            12:"Winter"
        }
        # print(year, month, day)
        input_data = {
            'Year': year,
            'Month': month,
            'Day': day,
            'Monthly Rainfall': data['monthly_rainfall'],
            'District Name': data['district_name'],
            'Market Name': data['market_name'],
            'Commodity': data['commodity'],
            'Season': season[month]
        }   
        # Convert input data to DataFrame
        input_df = pd.DataFrame([input_data])

        # Extract the preprocessor from the pipeline and transform the input data
        X_processed = model.named_steps['preprocessor'].transform(input_df)

        # Make prediction using the trained model
        predicted_modal_price = model.named_steps['model'].predict(X_processed)
        print(predicted_modal_price[0])
        return jsonify({'prediction': int(predicted_modal_price[0])})
    
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
