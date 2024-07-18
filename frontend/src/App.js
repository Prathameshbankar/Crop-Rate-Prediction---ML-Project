// src/App.js
import React, { useState } from 'react';

function App() {
  const [inputData, setInputData] = useState({
    feature1: '',
    feature2: '',
  });
  const [prediction, setPrediction] = useState(null);

  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Call the backend API
    const response = await fetch('http://localhost:5000/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputData),
    });
    const result = await response.json();
    setPrediction(result.prediction);
  };

  return (
    <div>
      <h1>Crop Yield Prediction</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="feature1"
          placeholder="Feature 1"
          value={inputData.feature1}
          onChange={handleChange}
        />
        <input
          type="number"
          name="feature2"
          placeholder="Feature 2"
          value={inputData.feature2}
          onChange={handleChange}
        />
        <button type="submit">Predict</button>
      </form>
      {prediction !== null && <p>Predicted Yield: {prediction}</p>}
    </div>
  );
}

export default App;
