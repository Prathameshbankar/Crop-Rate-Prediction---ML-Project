// src/components/PredictionResult.js
import React from 'react';

const PredictionResult = ({ prediction }) => {
  return prediction !== null && <p>Predicted Yield: {prediction}</p>;
};

export default PredictionResult;
