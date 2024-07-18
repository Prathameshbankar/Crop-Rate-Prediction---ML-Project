import React from 'react';
import { Link } from 'react-router-dom';
const Banner = () => (
    <div className="px-40 flex flex-1 justify-center">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="@container">
                <div className="@[480px]:p-4">
                    <div
                        className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
                        style={{
                            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/ac667a27-0272-4735-8311-5253c3e0bd9b.png")',
                        }}
                    >
                        <div className="flex flex-col gap-2 text-left">
                            <h1
                                className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
                            >
                                Welcome to Crop Rate Predictor
                            </h1>
                            <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                                Use our AI model to predict the crop rate you'll get from your farm. This can help you plan your business and make better decisions.
                            </h2>
                        </div>
                        <Link to="/predict">
                        <button
                            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#80e619] text-[#141b0e] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
                        >
                            <span className="truncate">Predict</span>
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Banner;
