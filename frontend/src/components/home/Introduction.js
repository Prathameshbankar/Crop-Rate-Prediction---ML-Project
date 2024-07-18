import React from "react";
import { Link } from "react-router-dom";

const Introduction = () => (
  <>
    <div className="px-40 flex justify-center">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex flex-col gap-10 px-4 @container">
          <div className="flex flex-col gap-4">
            <h1 className="text-[#141b0e] tracking-light text-[32px] font-bold leading-tight md:text-4xl md:font-black md:leading-tight md:tracking-[-0.033em] max-w-[720px]">
              Why use Crop Rate Predictor?
            </h1>
            <p className="text-[#141b0e] text-base font-normal leading-normal max-w-[720px]">
              Farmers need to know how much they can expect to harvest from their fields. This helps them plan their business, make better decisions, and get the most out of
              their land. Our AI model uses data about your farm to predict the crop rate you'll get.
            </p>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3">
            <div className="flex flex-col gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/stability/1eacba02-ea33-4b07-9319-af7a34ed8c7f.png")' }}
              ></div>
              <div>
                <p className="text-[#141b0e] text-base font-medium leading-normal">Accurate predictions</p>
                <p className="text-[#73974e] text-sm font-normal leading-normal">Our model has been trained on large datasets, so it's very accurate at predicting crop rates.</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/stability/99fa6717-d252-45da-ac35-0384d2e6ab17.png")' }}
              ></div>
              <div>
                <p className="text-[#141b0e] text-base font-medium leading-normal">Easy to use</p>
                <p className="text-[#73974e] text-sm font-normal leading-normal">Just input a few details about your farm, and we'll do the rest.</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/stability/f0419f4a-3ef6-4ee8-a0e3-3a08e6c1a594.png")' }}
              ></div>
              <div>
                <p className="text-[#141b0e] text-base font-medium leading-normal">Fast results</p>
                <p className="text-[#73974e] text-sm font-normal leading-normal">You'll have your results in seconds, so you can start making better decisions right away.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="@container">
          <div className="flex flex-col justify-end gap-2 px-4 gap-8 px-10 py-2">
            <div className="flex flex-col gap-2 text-center">
              <h1 className="text-[#141b0e] tracking-light text-[32px] font-bold leading-tight md:text-4xl md:font-black md:leading-tight md:tracking-[-0.033em] max-w-[720px]">
                Ready to try it?
              </h1>
            </div>
            <div className="flex justify-center">
              <Link to="/predict">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 md:h-12 md:px-5 bg-[#80e619] text-[#141b0e] text-sm font-bold leading-normal tracking-[0.015em] md:text-base md:font-bold md:leading-normal md:tracking-[0.015em] grow">
                  <span className="truncate">Predict</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Introduction;
