import pandas as pd
from sklearn.model_selection import train_test_split, GridSearchCV
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.metrics import mean_absolute_error, mean_squared_error
from xgboost import XGBRegressor
import joblib
from sklearn.metrics import explained_variance_score, mean_squared_error, mean_absolute_percentage_error


# Load the data
data = pd.read_csv('Yeola-2016-2024.csv')

# Handle missing values (example: fill with median)
data['Monthly Rainfall'].fillna(data['Monthly Rainfall'].median(), inplace=True)

# Define features and target
data['Date'] = pd.to_datetime(data['Date'])
data['Year'] = data['Date'].dt.year
data['Month'] = data['Date'].dt.month
data['Day'] = data['Date'].dt.day

X = data.drop(columns=['Modal Price (Rs./Quintal)', 'Date','Min Price (Rs./Quintal)','Max Price (Rs./Quintal)'])
y = data['Modal Price (Rs./Quintal)']

# Convert categorical variables to numerical (example: one-hot encoding)
categorical_features = ['District Name', 'Market Name', 'Commodity', 'Season']
numeric_features = [col for col in X.columns if col not in categorical_features]

preprocessor = ColumnTransformer(
    transformers=[
        ('num', StandardScaler(), numeric_features),
        ('cat', OneHotEncoder(handle_unknown='ignore'), categorical_features)
    ])

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Define the model
xgb = XGBRegressor(objective='reg:squarederror')

# Create a pipeline
pipeline = Pipeline(steps=[
    ('preprocessor', preprocessor),
    ('model', xgb)
])

# Define hyperparameters for grid search
param_grid = {
    'model__n_estimators': [100, 200, 300],
    'model__learning_rate': [0.01, 0.1, 0.2],
    'model__max_depth': [3, 5, 7]
}

# Perform grid search
grid_search = GridSearchCV(pipeline, param_grid, cv=5, scoring='neg_mean_squared_error', n_jobs=-1)
grid_search.fit(X_train, y_train)

# Get the best model
best_model = grid_search.best_estimator_

# Make predictions
y_pred = best_model.predict(X_test)

# Evaluate the model
# Evaluate the model
mae = mean_absolute_error(y_test, y_pred)
rmse = mean_squared_error(y_test, y_pred, squared=False)
r2_score = best_model.score(X_test, y_test)
mape = mean_absolute_percentage_error(y_test, y_pred)
explained_variance = explained_variance_score(y_test, y_pred)

print(f"Mean Absolute Error: {mae}")
print(f"Root Mean Squared Error: {rmse}")
print(f"R-squared: {r2_score}")
print(f"Mean Absolute Percentage Error: {mape}")
print(f"Explained Variance Score: {explained_variance}")

# Save the best model and preprocessor if needed
joblib.dump(best_model, 'best_model.pkl')
joblib.dump(preprocessor, 'preprocessor.pkl')
