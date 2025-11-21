import React from "react";
import { BsCalendar2Date } from "react-icons/bs";

const WorkPorcess = () => {
  return (
    <section
      id="WorkProcess"
      className="bg-[#F0F1F3] pt-16 md:pt-24 lg:pt-[248px] pb-16 md:pb-24 lg:pb-[140px]"
    >
      <div className="container px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-6">
          {/* work process text */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-semibold text-gray-900">
              Work Process
            </h2>
            <p className="max-w-full lg:max-w-[529px] text-base md:text-lg font-normal text-[#697484] mt-6 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris
              ultrices eget lorem ac vestibulum. Suspendis imperdiet,
            </p>
            <p className="max-w-full lg:max-w-[529px] text-base md:text-lg font-normal text-[#697484] mt-4 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. eget
              lorem ac vestibulum. Suspendis imperdiet,
            </p>
          </div>
          {/* ------- work process cards */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              <div className="w-full max-w-[312px] p-6 md:p-8 rounded-xl bg-white">
                <div className="w-14 h-14 md:w-[72px] md:h-[72px] rounded-md bg-brandColor flex justify-center items-center text-xl md:text-2xl text-white">
                  <BsCalendar2Date />
                </div>
                <h2 className="text-lg md:text-xl font-semibold text-gray-900 mt-6 md:mt-8 mb-3">
                  1. Research
                </h2>
                <p className="text-sm md:text-base font-normal text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  purus arcu.
                </p>
              </div>
              <div className="w-full max-w-[312px] p-6 md:p-8 rounded-xl bg-white">
                <div className="w-14 h-14 md:w-[72px] md:h-[72px] rounded-md bg-[#edd8ff80] flex justify-center items-center text-xl md:text-2xl text-brandColor">
                  <BsCalendar2Date />
                </div>
                <h2 className="text-lg md:text-xl font-semibold text-gray-900 mt-6 md:mt-8 mb-3">
                  1. Research
                </h2>
                <p className="text-sm md:text-base font-normal text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  purus arcu.
                </p>
              </div>
              <div className="w-full max-w-[312px] p-6 md:p-8 rounded-xl bg-white">
                <div className="w-14 h-14 md:w-[72px] md:h-[72px] rounded-md bg-[#edd8ff80] flex justify-center items-center text-xl md:text-2xl text-brandColor">
                  <BsCalendar2Date />
                </div>
                <h2 className="text-lg md:text-xl font-semibold text-gray-900 mt-6 md:mt-8 mb-3">
                  1. Research
                </h2>
                <p className="text-sm md:text-base font-normal text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  purus arcu.
                </p>
              </div>
              <div className="w-full max-w-[312px] p-6 md:p-8 rounded-xl bg-white">
                <div className="w-14 h-14 md:w-[72px] md:h-[72px] rounded-md bg-[#edd8ff80] flex justify-center items-center text-xl md:text-2xl text-brandColor">
                  <BsCalendar2Date />
                </div>
                <h2 className="text-lg md:text-xl font-semibold text-gray-900 mt-6 md:mt-8 mb-3">
                  1. Research
                </h2>
                <p className="text-sm md:text-base font-normal text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  purus arcu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkPorcess;
