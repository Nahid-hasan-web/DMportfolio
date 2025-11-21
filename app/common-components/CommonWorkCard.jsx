import React from "react";

const CommonWorkCard = () => {
  return (
    <>
      <div className="w-full max-w-[648px] mx-auto bg-white border-l-4 border-white rounded-md overflow-hidden p-4 md:p-6 lg:p-8 transition duration-300 hover:border-brandColor">
        <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
          User Experience (UX)
        </h2>
        <p className="text-sm md:text-base font-normal text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
          arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices
          eget lorem ac vestibulum.
        </p>
      </div>
    </>
  );
};

export default CommonWorkCard;
