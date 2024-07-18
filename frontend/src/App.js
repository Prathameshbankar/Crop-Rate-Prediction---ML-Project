// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

import Banner from './components/home/Banner';
import Introduction from './components/home/Introduction';

import PredictionForm from './components/predict/PredictionForm';
import PredictionResult from './components/predict/PredictionResult';

import About from './components/about/AboutUs';

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
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<><Banner /><Introduction /></>} />
          <Route path="/predict" element={
            <>
              <PredictionForm 
                inputData={inputData} 
                handleChange={handleChange} 
                handleSubmit={handleSubmit} 
              />
              <PredictionResult prediction={prediction} />
            </>
          } />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
