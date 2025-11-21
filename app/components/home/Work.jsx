import ButtonV1 from "@/app/common-components/ButtonV1";
import CommonWorkCard from "@/app/common-components/CommonWorkCard";
import React from "react";

const Work = () => {
  return (
    <>
      <section id="work" className="py-12 md:py-16 lg:py-[150px] bg-[#F0F1F3]">
        <div className="container px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-6">
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-[#333333]">
                What I do?
              </h2>
              <p className="text-sm md:text-base font-normal text-gray-400 max-w-full lg:max-w-[529px] mt-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                purus arcu, varius eget velit non, laoreet imperdiet orci.
                Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet,
              </p>
              <p className="text-sm md:text-base font-normal text-gray-400 max-w-full lg:max-w-[529px] mt-4 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                purus arcu, varius eget velit non.
              </p>
              <div className="mt-2">
                <ButtonV1 buttonContent={"Say hello!"} />
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <CommonWorkCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
