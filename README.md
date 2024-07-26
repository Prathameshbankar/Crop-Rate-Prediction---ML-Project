# Crop Rate Prediction

This project aims to predict crop rates using machine learning models and provide a frontend interface for users to interact with the prediction system.

## Overview

The project consists of two main components:

1. **Backend (Flask API)**

   - Located in the `backend/` directory.
   - Implements a Flask API that serves machine learning predictions.
   - Uses a pre-trained machine learning model (`best_model.pkl`) stored in the `backend/` directory.
   - Handles POST requests from the frontend to predict crop rates based on input features.

2. **Frontend (React Application)**
   - Located in the `frontend/` directory.
   - Provides a user interface for users to input data and visualize predictions.
   - Communicates with the Flask backend API to fetch predictions and display results.

## Directory Structure

Crop-Rate-Prediction/

│

├── backend/

│ ├── app.py

│ ├── model.py

│ └── crop_yield_model.pkl

│ ├── requirements.txt

│

├── frontend/

│ ├── public/

│ ├── src/

│ │ ├── App.js

│ │ └── index.js

│ ├── package.json

│ └── ... (other React files)

│

├── venv/

│

└── README.md

### Installation

Follow these steps to set up the project on your local machine:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/YashMehetre/Crop-Rate-Prediction.git
   cd Crop-Rate-Prediction
   ```
2. **Backend Setup**
   - **Create and activate a virtual environment**:
     ```bash
     python -m venv venv
     # On Windows
     venv\Scripts\activate
     # On macOS/Linux
     source venv/bin/activate
     ```

     **Configure VS Code:**

      * Open the Command Palette: Ctrl+Shift+P (Windows/Linux) or Cmd+Shift+P (macOS).
         
      * Select Python: Select Interpreter.
         
      * Choose the interpreter from your virtual environment (it should show up as something like venv/bin/python or venv\\Scripts\\python.exe).
      ```json
      {
        "python.pythonPath": "venv/bin/python"  // Adjust the path based on your operating system
      }
      ```
   - **Install Python dependencies**:
     Navigate to the `backend` directory and install the required packages:
     ```bash
     cd backend
     pip install -r requirements.txt
     ```
3. **Frontend Setup**
   - **Navigate to the frontend directory**:
     ```bash
     cd ../frontend
     ```
   - **Install Node.js dependencies**:
     Use npm or yarn to install the dependencies:
     ```bash
     npm install  # or yarn install
     ```
4. **Running the Application**
   - **Start the Flask backend**:
     Navigate back to the `backend` directory and run the Flask application:
     ```bash
     cd ../backend
     python app.py
     ```
   - **Start the React frontend**:
     Navigate to the `frontend` directory and start the development server:
     ```bash
     cd ../frontend
     npm start  # or yarn start
     ```
5. **Access the Application**
   - Open your web browser and go to `http://localhost:3000` to view the React application.

## Troubleshooting

**Python Dependencies Not Installing**: Make sure you have the correct version of Python installed and that pip is up-to-date. You can upgrade pip using:
  ```bash
  pip install --upgrade pip
  ```
**Node Modules Not Installing**: Ensure you have Node.js and npm (or yarn) installed. Check the versions with:
  ```bash
   node -vnpm -v # or yarn -v
  ```
 **Flask Server Not Starting**: Ensure all Python dependencies are installed. Check for any errors in the terminal and install missing packages.
   ```bash
   npm start # or yarn start
   ```

  
  ## Screenshots

  Here are some screenshots of the Crop Rate Prediction application:

  1. Home Page:
    ![Home Page](/screenshots/home.png)

  2. Prediction Graph:
    ![Input Form](/screenshots/pred_graph.png)

  3. Prediction Results:
    ![Prediction Results](/screenshots/pred_result.png)

  Feel free to explore the application and interact with the different features!


