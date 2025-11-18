import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const PortfolioCard = ({portfolioImage ,porfoliotopic , portfolioheading , portfoliobody }) => {
  return (
    <>
      <div className="w-full lg:w-[424px] rounded-lg border-2 border-gray-100">
        <div className="w-full h-[248px] bg-gray-200"></div>
        <div className="p-5">
          <p className="text-sm font-medium text-gray-400 mb-1">{porfoliotopic}</p>
          <h2 className="text-lg font-semibold gray-900 mb-3">{portfolioheading}</h2>
          <p className="text-base mb-5 font-normal text-gray-600">{portfoliobody}</p>
          <button className="py-3 px-6  rounded-sm flex  gap-3 items-center border hover:bg-brandColor hover:text-white duration-[.4s] active:scale-[1.1] border-brandColor text-base font-semibold text-brandColor">
            Case Study
            <FaArrowRightLong />
          </button>
        </div>
      </div>
    </>
  );
};

export default PortfolioCard;
