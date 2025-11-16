import React from "react";
import ButtonV1 from "../common-components/ButtonV1";
import Counter from "../common-components/Counter";
import Image from "next/image";
import bannerImage from "../../public/images/banneImage.png";
const Banner = () => {
  return (
    <>
      <section
        id="Banner"
        className="relative h-auto md:h-[1712px] pt-8 md:pt-[126px] px-1 lg:px-0"
      >
        <div className="container">
          <div className="flex flex-wrap-reverse md:flex-row md:justify-between gap-8 md:gap-0">
            <div className="banner_text w-full md:w-auto">
              <h1 className="max-w-full md:max-w-[578px] text-4xl sm:text-5xl md:text-[72px] font-semibold text-[#132238] leading-tight">
                Hello, I'm Brooklyn Gilbert
              </h1>
              <p className="commonp max-w-full md:max-w-[648px] my-4 md:my-6 text-sm sm:text-base">
                I'm a Freelance{" "}
                <span className="font-bold">React Developer</span> based in
                London, England. I strives to build immersive and beautiful web
                applications through carefully crafted code and user-centric
                design.
              </p>
              <ButtonV1 buttonContent={"Say Hello!"} />

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-1 items-stretch sm:items-center rounded-md overflow-hidden w-full sm:w-fit mt-8 md:mt-[142px]">
                <div className="flex-1 sm:flex-none w-full sm:w-[209px] h-[106px] bg-[#edd8ff80] flex flex-col gap-2 justify-center items-center">
                  <Counter countNo={15} countSymbol={"Y."} />
                  <p className="text-xs sm:text-base font-normal font-work text-[#697484]">
                    Experience
                  </p>
                </div>
                <div className="flex-1 sm:flex-none w-full sm:w-[209px] h-[106px] bg-[#edd8ff80] flex flex-col gap-2 justify-center items-center">
                  <Counter countNo={250} countSymbol={"+"} />
                  <p className="text-xs sm:text-base font-normal font-work text-[#697484]">
                    Project Completed
                  </p>
                </div>
                <div className="flex-1 sm:flex-none w-full sm:w-[209px] h-[106px] bg-[#edd8ff80] flex flex-col gap-2 justify-center items-center">
                  <Counter countNo={58} />
                  <p className="text-xs sm:text-base font-normal font-work text-[#697484]">
                    Happy Client
                  </p>
                </div>
              </div>
            </div>
            <div className="bannerImge w-full md:w-auto flex justify-center md:justify-end z-10">
              <Image
                src={bannerImage}
                alt="banner image"
                className="w-full md:w-auto max-w-xs md:max-w-none"
              />
            </div>
          </div>
        </div>
        <div className="w-1 h-1  rounded-xl shadow-[0_0_250px_150px_rgba(218,77,241,0.40)] absolute top-0 right-0"></div>
        <div className="w-1 h-1 hidden lg:block  rounded-xl shadow-[0_0_250px_150px_rgba(196,245,233,0.70)] absolute top-[60%] right-40"></div>
        <div className="w-1 h-1 hidden lg:block  rounded-xl shadow-[0_0_250px_150px_rgba(255,223,168,0.80)] absolute top-[90%] left-0"></div>
      </section>
    </>
  );
};

export default Banner;
