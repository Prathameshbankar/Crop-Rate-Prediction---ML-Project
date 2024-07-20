import React from 'react';

const PredictionResult = ({ prediction }) => {
  return (
    prediction !== null && (
      <div className="flex justify-center py-5">
        <div className="bg-[#f1f8e9] border border-[#dbe7d0] rounded-xl p-4 max-w-[480px] w-full text-center">
          <p className="text-[#141b0e] text-2xl font-bold leading-tight">Predicted Rate :</p>
          <p className="text-[#73974e] text-xl font-medium leading-normal mt-2">
            {prediction} Rs./Quintal
          </p>
        </div>
      </div>
    )
  );
};

export default PredictionResult;
