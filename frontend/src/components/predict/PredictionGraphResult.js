import React from 'react';

function PredictionGraphResult({ graphUrl }) {
  return (
    <div className='w-full h-full mt-10'>
      {graphUrl ? (
        <img src={graphUrl} alt="Prediction Graph" />
      ) : (
        <p>No graph to display.</p>
      )}
    </div>
  );
}

export default PredictionGraphResult;

