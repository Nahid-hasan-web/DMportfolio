import ButtonV1 from "@/app/common-components/ButtonV1";
import CommonWorkCard from "@/app/common-components/CommonWorkCard";
import React from "react";

const Work = () => {
  return (
    <>
      <section id="work" className="py-[150px] bg-[#F0F1F3]">
        <div className="container">
          <div className="flex items-center flex-wrap justify-between">
            <div className="">
                <h2 className="text-5xl  font-semibold text-[#333333]">What I do?</h2>
                <p className="text-base font-normal text-gray-400 lg:w-[529px] w-full mt-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet,
                </p>
                <p className="text-base font-normal text-gray-400 lg:w-[529px] w-full mt-4 mb-[50px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non.
                </p>
                <ButtonV1 buttonContent={'Say hello!'} />
            </div>
            <CommonWorkCard/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
