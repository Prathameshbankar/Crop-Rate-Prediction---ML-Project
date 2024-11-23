import React, { useState } from "react";

const PredictionGraphForm = ({ inputData, handleChange, handleSubmitGraph }) => {
  const districtMarkets = {
    Nashik: ["Yeola", "Kalvan", "Sinner", "Malegaon", "Nandgaon", "Suragana", "Manmad", "Satana", "Lasalgaon"],
    Ahmednagar: [ "Shrirampur", "Shrigonda","Rahuri", "Kopargaon","Akole", "Sangamner", "Newasa", "Pathardi", "Rahata", "Rahuri(Vambori)"],
    "Chattrapati Sambhajinagar": ["Paithan", "Kannad", "Vaijpur", "Gangapur", "Chattrapati Sambhajinagar"],
  };

  const [filteredMarkets, setFilteredMarkets] = useState([]);

  const handleDistrictChange = (e) => {
    const district = e.target.value;
    handleChange(e); // Update inputData
    setFilteredMarkets(districtMarkets[district] || []);
  };

  return (
    <form onSubmit={handleSubmitGraph}>
      <div className="px-4 pt-5">
        <div className="layout-content-container flex flex-col max-w-[960px]">
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <div className="flex min-w-72 flex-col gap-3">
              <p className="text-[#141b0e] tracking-light text-[32px] font-bold leading-tight">
                Predict Crop Rate Range
              </p>
              <p className="text-[#73974e] text-sm font-normal leading-normal">
                Get a crop rate prediction graph for your farm
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 px-4 py-3">
            <label className="flex flex-col flex-1">
              <p className="text-[#141b0e] text-base font-medium leading-normal pb-2">From Date</p>
              <input
                required
                type="date"
                name="from_date"
                value={inputData.from_date}
                onChange={handleChange}
                className="form-input flex w-full rounded-xl text-[#141b0e] focus:outline-0 focus:ring-0 border border-[#dbe7d0] bg-[#fafcf8] focus:border-[#dbe7d0] h-14 placeholder:text-[#73974e] p-[15px] text-base font-normal leading-normal"
              />
            </label>
            <label className="flex flex-col flex-1">
              <p className="text-[#141b0e] text-base font-medium leading-normal pb-2">To Date</p>
              <input
                required
                type="date"
                name="to_date"
                value={inputData.to_date}
                onChange={handleChange}
                className="form-input flex w-full rounded-xl text-[#141b0e] focus:outline-0 focus:ring-0 border border-[#dbe7d0] bg-[#fafcf8] focus:border-[#dbe7d0] h-14 placeholder:text-[#73974e] p-[15px] text-base font-normal leading-normal"
              />
            </label>
          </div>
          <div className="flex flex-wrap gap-4 px-4 py-3">
            <label className="flex flex-col flex-1">
              <p className="text-[#141b0e] text-base font-medium leading-normal pb-2">District Name</p>
              <select
                required
                name="district_name"
                value={inputData.district_name}
                onChange={handleDistrictChange}
                className="form-input flex w-full rounded-xl text-[#141b0e] focus:outline-0 focus:ring-0 border border-[#dbe7d0] bg-[#fafcf8] focus:border-[#dbe7d0] h-14 placeholder:text-[#73974e] p-[15px] text-base font-normal leading-normal"
              >
                <option value="">Select a district</option>
                {Object.keys(districtMarkets).map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col flex-1">
              <p className="text-[#141b0e] text-base font-medium leading-normal pb-2">Market Name</p>
              <select
                required
                name="market_name"
                value={inputData.market_name}
                onChange={handleChange}
                className="form-input flex w-full rounded-xl text-[#141b0e] focus:outline-0 focus:ring-0 border border-[#dbe7d0] bg-[#fafcf8] focus:border-[#dbe7d0] h-14 placeholder:text-[#73974e] p-[15px] text-base font-normal leading-normal"
              >
                <option value="">Select a market</option>
                {filteredMarkets.map((market) => (
                  <option key={market} value={market}>
                    {market}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="flex flex-wrap gap-4 px-4 py-3">
            <label className="flex flex-col flex-1">
              <p className="text-[#141b0e] text-base font-medium leading-normal pb-2">Commodity</p>
              <select
                required
                name="commodity"
                value={inputData.commodity}
                onChange={handleChange}
                className="form-input flex w-full rounded-xl text-[#141b0e] focus:outline-0 focus:ring-0 border border-[#dbe7d0] bg-[#fafcf8] focus:border-[#dbe7d0] h-14 placeholder:text-[#73974e] p-[15px] text-base font-normal leading-normal"
              >
                <option value="">Select a commodity</option>
                <option value="Maize">Maize</option>
                <option value="Soyabean">Soyabean</option>
              </select>
            </label>
          </div>
          <div className="flex px-4 py-3">
            <button
              type="submit"
              className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-xl h-10 px-4 bg-[#80e619] text-[#141b0e] text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span className="truncate">Get Prediction Graph</span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PredictionGraphForm;
