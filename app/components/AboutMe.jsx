import Link from "next/link";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import ButtonV1 from "../common-components/ButtonV1";
import { GoDownload } from "react-icons/go";
import { IoLogoYoutube } from "react-icons/io5";

const AboutMe = () => {
  const socialLiks = [
    { socailLink: "/", socialIcon: <FaLinkedinIn /> },
    { socailLink: "/", socialIcon: <FaFacebookF /> },
    { socailLink: "/", socialIcon: <IoLogoYoutube/> },
    { socailLink: "/", socialIcon: <FaInstagram/> },
  ];
  return (
    <>
      <section
        id="AboutMe"
        className="py-5 relative md:absolute z-20 w-full md:-bottom-[10%]"
      >
        <div className="container">
          <div className="p-6 md:p-28 bg-white rounded-4 flex flex-col md:flex-row md:justify-between gap-6 md:gap-0 shadow-[0px_10px_20px_0px_rgba(0,0,0,0.15)]">
            {/* --- about me images */}
            <div className="w-full md:w-[424px] h-[300px] md:h-[468px] relative bg-gray-100 shrink-0">
              <div className="absolute -bottom-9 left-1/2 transform -translate-x-1/2 w-full max-w-[264px] h-[72px] bg-white rounded-sm p-3 flex justify-between items-center shadow-[0px_8px_16px_-2px_rgba(0,0,0,0.1)]">
                {socialLiks.map((item, i) => (
                  <Link
                    key={i}
                    className="flex justify-center items-center w-10 h-10 sm:w-12 sm:h-12 rounded-sm bg-white hover:bg-brandColor text-lg sm:text-xl text-brandColor hover:text-white"
                    href={item.socailLink}
                    aria-label={`social-${i}`}
                  >
                    {item.socialIcon}
                  </Link>
                ))}
              </div>
            </div>
            {/* ---- about me text */}
            <div className="w-full mt-10 lg:mt-0 md:pl-8">
              <h2 className="w-full md:w-[426px] text-2xl md:text-[38px] font-semibold font-work text-[#132238]">
                I am Professional User Experience Designer
              </h2>
              <p className="w-full md:max-w-[536px] mt-6 md:mt-8 leading-6 text-[#556070] text-sm md:text-base">
                I design and develop services for customers specializing
                creating stylish, modern websites, web services and online
                stores. My passion is to design digital user experiences.
              </p>
              <p className="w-full md:max-w-[536px] mt-4 leading-6 text-[#556070] text-sm md:text-base">
                I design and develop services for customers specializing
                creating stylish, modern websites, web services and online
                stores. My passion is to design digital user experiences.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mt-6 md:mt-8">
                <ButtonV1 buttonContent={"My Project"} />
                <a className="border flex items-center gap-3 border-brandColor rounded-1 py-3 px-6 text-base font-work font-semibold text-brandColor">
                  <GoDownload /> Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
