// src/components/PredictionForm.js
import React from 'react';

const PredictionForm = ({ inputData, handleChange, handleSubmit }) => {
  return (
    <>
    {/* <form onSubmit={handleSubmit}>
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
    </form> */}
    <div class="px-40 flex flex-1 justify-center py-5">
          <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div class="flex flex-wrap justify-between gap-3 p-4">
              <div class="flex min-w-72 flex-col gap-3">
                <p class="text-[#141b0e] tracking-light text-[32px] font-bold leading-tight">Predict Crop Rate</p>
                <p class="text-[#73974e] text-sm font-normal leading-normal">Get a crop rate prediction for your farm</p>
              </div>
            </div>
            <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label class="flex flex-col min-w-40 flex-1">
                <p class="text-[#141b0e] text-base font-medium leading-normal pb-2">Crop Type</p>
                <select
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#141b0e] focus:outline-0 focus:ring-0 border border-[#dbe7d0] bg-[#fafcf8] focus:border-[#dbe7d0] h-14 bg-[image:--select-button-svg] placeholder:text-[#73974e] p-[15px] text-base font-normal leading-normal"
                >
                  <option value="one">Select a crop type</option>
                  <option value="two">two</option>
                  <option value="three">three</option>
                </select>
              </label>
            </div>
            <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label class="flex flex-col min-w-40 flex-1">
                <p class="text-[#141b0e] text-base font-medium leading-normal pb-2">Soil Type</p>
                <select
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#141b0e] focus:outline-0 focus:ring-0 border border-[#dbe7d0] bg-[#fafcf8] focus:border-[#dbe7d0] h-14 bg-[image:--select-button-svg] placeholder:text-[#73974e] p-[15px] text-base font-normal leading-normal"
                >
                  <option value="one">Select a soil type</option>
                  <option value="two">two</option>
                  <option value="three">three</option>
                </select>
              </label>
            </div>
            <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label class="flex flex-col min-w-40 flex-1">
                <p class="text-[#141b0e] text-base font-medium leading-normal pb-2">Temperature (°F)</p>
                <input
                  placeholder="Enter the temperature"
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#141b0e] focus:outline-0 focus:ring-0 border border-[#dbe7d0] bg-[#fafcf8] focus:border-[#dbe7d0] h-14 placeholder:text-[#73974e] p-[15px] text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label class="flex flex-col min-w-40 flex-1">
                <p class="text-[#141b0e] text-base font-medium leading-normal pb-2">Humidity (%)</p>
                <input
                  placeholder="Enter the humidity"
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#141b0e] focus:outline-0 focus:ring-0 border border-[#dbe7d0] bg-[#fafcf8] focus:border-[#dbe7d0] h-14 placeholder:text-[#73974e] p-[15px] text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label class="flex flex-col min-w-40 flex-1">
                <p class="text-[#141b0e] text-base font-medium leading-normal pb-2">Rainfall (mm)</p>
                <input
                  placeholder="Enter the rainfall amount"
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#141b0e] focus:outline-0 focus:ring-0 border border-[#dbe7d0] bg-[#fafcf8] focus:border-[#dbe7d0] h-14 placeholder:text-[#73974e] p-[15px] text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <div class="flex px-4 py-3">
              <button
                class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 flex-1 bg-[#80e619] text-[#141b0e] text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span class="truncate">Predict</span>
              </button>
            </div>
          </div>
        </div>
    </>
  );
};

export default PredictionForm;
