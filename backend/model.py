import pandas as pd
from sklearn.model_selection import train_test_split, GridSearchCV
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.metrics import mean_absolute_error, mean_squared_error, mean_absolute_percentage_error, explained_variance_score
from xgboost import XGBRegressor
import joblib

# Load the data
file_path = "C:\\Users\\banka\\Downloads\\mazeSoya.xlsx"
data = pd.read_excel(file_path, sheet_name="Sheet1")

# Handle missing values (if any)
# data['Monthly Rainfall'].fillna(data['Monthly Rainfall'].median(), inplace=True)  # Uncomment if needed

# Extract Date features
data['Date'] = pd.to_datetime(data['Date'])
data['Year'] = data['Date'].dt.year
data['Month'] = data['Date'].dt.month
data['Day'] = data['Date'].dt.day

# Define features and target
X = data.drop(columns=['Modal Price (Rs./Quintal)', 'Date', 'Min Price (Rs./Quintal)', 'Max Price (Rs./Quintal)'])
y = data['Modal Price (Rs./Quintal)']

# Identify categorical and numeric features
categorical_features = ['District Name', 'Market Name', 'Commodity', 'Season']
numeric_features = [col for col in X.columns if col not in categorical_features]

# Preprocessor: Scale numeric features and one-hot encode categorical features
preprocessor = ColumnTransformer(
    transformers=[
        ('num', StandardScaler(), numeric_features),
        ('cat', OneHotEncoder(handle_unknown='ignore'), categorical_features)
    ])

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Define the XGBoost model
xgb = XGBRegressor(objective='reg:squarederror')

# Create a pipeline that first preprocesses the data, then applies the model
pipeline = Pipeline(steps=[
    ('preprocessor', preprocessor),
    ('model', xgb)
])

# Hyperparameters for GridSearchCV
param_grid = {
    'model__n_estimators': [100, 200, 300],
    'model__learning_rate': [0.01, 0.1, 0.2],
    'model__max_depth': [3, 5, 7]
}

# Perform GridSearchCV to tune hyperparameters
grid_search = GridSearchCV(pipeline, param_grid, cv=5, scoring='neg_mean_squared_error', n_jobs=-1)
grid_search.fit(X_train, y_train)

# Get the best model from GridSearchCV
best_model = grid_search.best_estimator_

# Make predictions on the test set
y_pred = best_model.predict(X_test)

# Evaluate the model's performance
mae = mean_absolute_error(y_test, y_pred)
rmse = mean_squared_error(y_test, y_pred, squared=False)
r2_score = best_model.score(X_test, y_test)
mape = mean_absolute_percentage_error(y_test, y_pred)
explained_variance = explained_variance_score(y_test, y_pred)

# Print evaluation metrics
print(f"Mean Absolute Error: {mae}")
print(f"Root Mean Squared Error: {rmse}")
print(f"R-squared: {r2_score}")
print(f"Mean Absolute Percentage Error: {mape}")
print(f"Explained Variance Score: {explained_variance}")

# Save the best model and preprocessor to files
joblib.dump(best_model, 'best_model.pkl')
joblib.dump(preprocessor, 'preprocessor.pkl')
