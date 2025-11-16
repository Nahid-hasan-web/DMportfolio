import React from "react";
import ButtonV1 from "../common-components/ButtonV1";
import Counter from "../common-components/Counter";
import Image from "next/image";
import bannerImage from "../../public/images/banneImage.png";
const Banner = () => {
  return (
    <>
      <section id="Banner" className=" relative h-[1712px] pt-[126px] ">
        <div className="container">
          <div className="flex justify-between">
            <div className="banner_text">
              <h1 className="max-w-[578px] text-[72px] font-semibold text-[#132238]">
                Hello, I’m Brooklyn Gilbert
              </h1>
              <p className="commonp max-w-[648px] my-6">
                I'm a Freelance{" "}
                <span className="font-bold">React Developer</span> based in
                London, England. I strives to build immersive and beautiful web
                applications through carefully crafted code and user-centric
                design.
              </p>
              <ButtonV1 buttonContent={"Say Hello!"} />

              <div className="flex gap-1 items-center rounded-md overflow-hidden w-fit mt-[142px]">
                <div className=" w-[209px] h-[106px] bg-[#edd8ff80] flex flex-col gap-2 justify-center items-center">
                  <Counter countNo={15} countSymbol={"Y."} />
                  <p className=" text-base  font-normal font-work text-[#697484] ">
                    Experience
                  </p>
                </div>
                <div className=" w-[209px] h-[106px] bg-[#edd8ff80] flex flex-col gap-2 justify-center items-center">
                  <Counter countNo={250} countSymbol={"+"} />
                  <p className=" text-base  font-normal font-work text-[#697484] ">
                    Project Completed
                  </p>
                </div>
                <div className=" w-[209px] h-[106px] bg-[#edd8ff80] flex flex-col gap-2 justify-center items-center">
                  <Counter countNo={58} />
                  <p className=" text-base  font-normal font-work text-[#697484] ">
                    Happy Client
                  </p>
                </div>
              </div>
            </div>
            <div className="bannerImge">
              <Image src={bannerImage} alt="banner image" />
            </div>
          </div>
        </div>
        <div
          class="w-1 h-1  rounded-xl shadow-[0_0_250px_150px_rgba(218,77,241,0.40)] absolute top-0 right-0"
        ></div>
        <div
          class="w-1 h-1  rounded-xl shadow-[0_0_250px_150px_rgba(196,245,233,0.70)] absolute top-[60%] right-40"
        ></div>
        <div
          class="w-1 h-1  rounded-xl shadow-[0_0_250px_150px_rgba(255,223,168,0.80)] absolute top-[90%] left-0"
        ></div>
      </section>
    </>
  );
};

export default Banner;
