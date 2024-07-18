# backend/model.py
import pandas as pd
from sklearn.linear_model import LinearRegression
import joblib

# Create a dummy dataset
data = {
    'feature1': [1, 2, 3, 4, 5],
    'feature2': [2, 4, 6, 8, 10],
    'yield': [2, 3, 5, 7, 11]
}
df = pd.DataFrame(data)

# Prepare the data
X = df[['feature1', 'feature2']]
y = df['yield']

# Train the model
model = LinearRegression()
model.fit(X, y)

# Save the model
joblib.dump(model, 'crop_yield_model.pkl')
