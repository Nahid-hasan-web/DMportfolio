import Link from "next/link";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import ButtonV1 from "../common-components/ButtonV1";
import { GoDownload } from "react-icons/go";

const AboutMe = () => {
  const socialLiks = [
    { socailLink: "/", socialIcon: <FaFacebookF /> },
    { socailLink: "/", socialIcon: <FaBehance /> },
    { socailLink: "/", socialIcon: <FaInstagram /> },
    { socailLink: "/", socialIcon: <FaLinkedinIn /> },
  ];
  return (
    <>
      <section id="AboutMe" className="py-5 absolute z-20 w-full -bottom-[10%]  ">
        <div className="container">
          <div className="p-28 bg-white rounded-4 flex justify-between  shadow-[0px_10px_20px_0px_rgba(0,0,0,0.15)]  ">
          {/* --- about me images */}
            <div className="w-[424px] h-[468px]  relative bg-gray-100 ">
              <div className=" absolute -bottom-9 left-[50%] translate-x-[-50%] w-[264px] h-[72px]  bg-white rounded-sm p-3 flex justify-between items-center shadow-[0px_8px_16px_-2px_rgba(0,_0,_0,_0.1)]">
                {socialLiks.map((item, i) => (
                  <Link
                    key={i}
                    className=" flex justify-center items-center w-12 h-12 rounded-sm bg-white hover:bg-brandColor text-xl text-brandColor hover:text-white"
                    href={item.socailLink}
                  >
                    {item.socialIcon}
                  </Link>
                ))}
              </div>
            </div>
            {/* ---- about me text */}
            <div>
                <h2 className="w-[426px] text-[38px] font-semibold font-work text-[#132238]">I am Professional User Experience Designer</h2>
                <p className=" w-[536px] mt-8 max-w-[536px] leading-6 text-[#556070]">
                    I design and develop services for customers specializing creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences.
                </p>
                <p className=" w-[536px] mt-4 max-w-[536px] leading-6 text-[#556070] ">
                    I design and develop services for customers specializing creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences.
                </p>
                <div className="flex items-center gap-6 mt-8">
                    <ButtonV1 buttonContent={'My Project'}/>
                    <a className="border flex items-center gap-3 border-brandColor rounded-1 py-3 px-6 text-base font-work font-semibold text-brandColor">
                      <GoDownload/>  Download CV
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
