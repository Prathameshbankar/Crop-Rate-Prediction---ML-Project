import React from 'react';

const PredictionForm = ({ inputData, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <div className="flex min-w-72 flex-col gap-3">
              <p className="text-[#141b0e] tracking-light text-[32px] font-bold leading-tight">Predict Crop Rate</p>
              <p className="text-[#73974e] text-sm font-normal leading-normal">Get a crop rate prediction for your farm</p>
            </div>
          </div>
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-[#141b0e] text-base font-medium leading-normal pb-2">Date</p>
              <input
                required
                type="date"
                name="date"
                value={inputData.date}
                onChange={handleChange}
                placeholder="Select the date"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#141b0e] focus:outline-0 focus:ring-0 border border-[#dbe7d0] bg-[#fafcf8] focus:border-[#dbe7d0] h-14 placeholder:text-[#73974e] p-[15px] text-base font-normal leading-normal"
              />
            </label>
          </div>
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-[#141b0e] text-base font-medium leading-normal pb-2">Monthly Rainfall (mm)</p>
              <input
                required
                name="monthly_rainfall"
                value={inputData.monthly_rainfall}
                onChange={handleChange}
                placeholder="Enter the monthly rainfall"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#141b0e] focus:outline-0 focus:ring-0 border border-[#dbe7d0] bg-[#fafcf8] focus:border-[#dbe7d0] h-14 placeholder:text-[#73974e] p-[15px] text-base font-normal leading-normal"
              />
            </label>
          </div>
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-[#141b0e] text-base font-medium leading-normal pb-2">District Name</p>
              <select
                required
                name="district_name"
                value={inputData.district_name}
                onChange={handleChange}
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#141b0e] focus:outline-0 focus:ring-0 border border-[#dbe7d0] bg-[#fafcf8] focus:border-[#dbe7d0] h-14 placeholder:text-[#73974e] p-[15px] text-base font-normal leading-normal"
              >
                <option value="">Select a district</option>
                <option value="Nashik">Nashik</option>
                <option value="Pune">Pune</option>
                <option value="Mumbai">Mumbai</option>
                {/* Add more options as needed */}
              </select>
            </label>
          </div>
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-[#141b0e] text-base font-medium leading-normal pb-2">Market Name</p>
              <select
                required
                name="market_name"
                value={inputData.market_name}
                onChange={handleChange}
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#141b0e] focus:outline-0 focus:ring-0 border border-[#dbe7d0] bg-[#fafcf8] focus:border-[#dbe7d0] h-14 placeholder:text-[#73974e] p-[15px] text-base font-normal leading-normal"
              >
                <option value="">Select a market</option>
                <option value="Yeola">Yeola</option>
                {/* Add more options as needed */}
              </select>
            </label>
          </div>
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-[#141b0e] text-base font-medium leading-normal pb-2">Commodity</p>
              <select
                required
                name="commodity"
                value={inputData.commodity}
                onChange={handleChange}
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#141b0e] focus:outline-0 focus:ring-0 border border-[#dbe7d0] bg-[#fafcf8] focus:border-[#dbe7d0] h-14 placeholder:text-[#73974e] p-[15px] text-base font-normal leading-normal"
              >
                <option value="">Select a commodity</option>
                <option value="Soyabean">Soyabean</option>
                {/* Add more options as needed */}
              </select>
            </label>
          </div>
          <div className="flex px-4 py-3">
            <button
              type="submit"
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 flex-1 bg-[#80e619] text-[#141b0e] text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span className="truncate">Predict</span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PredictionForm;
