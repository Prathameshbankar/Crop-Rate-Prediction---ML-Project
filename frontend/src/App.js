import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

import Banner from './components/home/Banner';
import Introduction from './components/home/Introduction';

import PredictionForm from './components/predict/PredictionForm';
import PredictionResult from './components/predict/PredictionResult';
import PredictionGraphForm from './components/predict/PredictionGraphForm';
import PredictionGraphResult from './components/predict/PredictionGraphResult';

import About from './components/about/AboutUs';

function App() {
  const [inputData, setInputData] = useState({
    date: '',
    monthly_rainfall: '',
    district_name: '',
    market_name: '',
    commodity: '',
    from_date: '',
    to_date: ''
  });
  const [prediction, setPrediction] = useState(null);
  const [graphUrl, setGraphUrl] = useState(null);

  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/predictRate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputData),
      });
      const result = await response.json();
      if (response.ok) {
        setPrediction(result.prediction);
      } else {
        console.error('API error:', result.error);
        setPrediction(null);
      }
    } catch (error) {
      console.error('Network error:', error);
      setPrediction(null);
    }
  };

  const handleSubmitGraph = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/predictRateRange', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputData),
      });
      if (response.ok) {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setGraphUrl(url);
      } else {
        const result = await response.json();
        console.error('API error:', result.error);
        setGraphUrl(null);
      }
    } catch (error) {
      console.error('Network error:', error);
      setGraphUrl(null);
    }
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<><Banner /><Introduction /></>} />
          <Route path="/predict" element={
            <>
              <div className="flex flex-wrap justify-center gap-2 px-4 pt-1">
                <div className="flex-1 max-w-[480px]">
                  <PredictionGraphForm 
                    inputData={inputData} 
                    handleChange={handleChange} 
                    handleSubmitGraph={handleSubmitGraph} 
                  />
                </div>
                <div className="flex-1 max-w-[720px]">
                  <PredictionGraphResult graphUrl={graphUrl} />
                </div>
                <hr className='w-11/12' />
              </div>
              <div className="flex flex-wrap justify-center gap-6 px-4 pt-1">
                <div className="flex-1 max-w-[480px]">
                  <PredictionForm 
                    inputData={inputData} 
                    handleChange={handleChange} 
                    handleSubmit={handleSubmit} 
                  />
                </div>
                <div className="flex-1 max-w-[720px]">
                  <PredictionResult prediction={prediction} />
                </div>
                <hr className='w-11/12' />
              </div>
            </>
          } />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
