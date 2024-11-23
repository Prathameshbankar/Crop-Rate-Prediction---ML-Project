from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
import joblib
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import io

app = Flask(__name__)
CORS(app)

# Load the trained ML model
model = joblib.load('best_model.pkl')
preprocessor = joblib.load('preprocessor.pkl')

# Season and Rainfall dictionaries
season = {
    1: "Winter", 2: "Winter", 3: "Summer", 4: "Summer", 5: "Summer",
    6: "Monsoon", 7: "Monsoon", 8: "Monsoon", 9: "Monsoon",
    10: "Post-Monsoon", 11: "Post-Monsoon", 12: "Winter"
}

# rainfall_2024 = {
#     1: 0, 
#     2: 0, 
#     3: 20.1, 
#     4: 0, 
#     5: 0,
#     6: 142.8, 
#     7: 114.8, 
#     8: 24.8, 
#     9: 229.6,
#     10: 15.5, 
#     11: 30.5, 
#     12: 4.1
# }

@app.route('/predictRate', methods=['POST'])
def predict_modal_price():
    data = request.get_json()
    try:
        # Extract the year, month, and day from the date
        date_parts = data['date'].split('-')
        year = int(date_parts[0])
        month = int(date_parts[1])
        day = int(date_parts[2])
        input_data = {
            'Year': year,
            'Month': month,
            'Day': day,
            # 'Monthly Rainfall': data['monthly_rainfall'],
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
        return jsonify({'prediction': int(predicted_modal_price[0])})
    
    except Exception as e:
        return jsonify({'error': str(e)})

@app.route('/predictRateRange', methods=['POST'])
def predict_rate_range():
    data = request.get_json()
    try:
        from_date = pd.to_datetime(data['from_date'])
        to_date = pd.to_datetime(data['to_date'])

        date_range = pd.date_range(from_date, to_date, freq='D')
        
        predictions = []

        for single_date in date_range:
            year = single_date.year
            month = single_date.month
            day = single_date.day
            input_data = {
                'Year': year,
                'Month': month,
                'Day': day,
                # 'Monthly Rainfall': rainfall_2024[month],
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
            predictions.append((single_date, predicted_modal_price[0]))

        # Create a DataFrame with the predictions
        predictions_df = pd.DataFrame(predictions, columns=['Date', 'Predicted Rate'])

        # Plotting
        plt.figure(figsize=(10, 5))
        plt.plot(predictions_df['Date'], predictions_df['Predicted Rate'], marker='', linestyle='-')
        plt.xlabel('Date')
        plt.ylabel('Predicted Rate (Rs./Quintal)')
        plt.title('Predicted Crop Rates Over Time')
        plt.grid(True)
        
        # Save the plot to a BytesIO object
        img = io.BytesIO()
        plt.savefig(img, format='png')
        img.seek(0)
        
        return send_file(img, mimetype='image/png')
    
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
