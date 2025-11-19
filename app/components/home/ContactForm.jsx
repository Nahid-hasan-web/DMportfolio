import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { IoBasketballOutline } from "react-icons/io5";
import { PiPaperPlaneRightLight } from "react-icons/pi";

import { FaBehance } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa6";

const ContactForm = () => {
  return (
    <>
      <section id="contact form">
        <div className="container">
          <div className="w-full p-[88px] rounded-[15px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex justify-between">
            {/* ------------ form text */}
            <div className="">
              <h2 className="text-[38px] font-semibold text-[#132238]">
                Let’s discuss your Project
              </h2>
              <p className="w-[481px] text-lg font-normal text-[#87909D] mt-4 mb-[35px]">
                There are many variations of passages of Lorem Ipsu available.
                but the majority have suffered alte.
              </p>
              <div className="p-6 w-[336px] rounded-[10px] flex items-center  gap-3.5 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                <div className="w-12 h-12 bg-brandColor flex justify-center items-center text-white rounded-sm">
                  <MdOutlineLocationOn className="text-3xl" />
                </div>
                <div>
                  <p className="text-sm font-normal text-[#424E60] ">
                    Address:
                  </p>
                  <h2 className="text-base font-medium text-[#132238] ">
                    New Mexico 31134
                  </h2>
                </div>
              </div>
              <div className="p-6 w-[336px] rounded-[10px] flex items-center  gap-3.5 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] my-3">
                <div className="w-12 h-12 bg-[#EDD8FF] flex justify-center items-center text-brandColor rounded-sm">
                  <MdOutlineEmail className="text-3xl" />
                </div>
                <div>
                  <p className="text-sm font-normal text-[#424E60] ">Email:</p>
                  <h2 className="text-base font-medium text-[#132238] ">
                    your@gmail.com
                  </h2>
                </div>
              </div>
              <div className="p-6 w-[336px] rounded-[10px] flex items-center  gap-3.5 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                <div className="w-12 h-12 bg-[#EDD8FF] flex justify-center items-center text-brandColor rounded-sm">
                  <FiPhone className="text-3xl" />
                </div>
                <div>
                  <p className="text-sm font-normal text-[#424E60] ">
                    Phone No:
                  </p>
                  <h2 className="text-base font-medium text-[#132238] ">
                    018541146516
                  </h2>
                </div>
              </div>
              <div className="flex gap-4 mt-[35px]">
                <div className="w-12 h-12 bg-brandColor flex justify-center items-center text-white rounded-sm">
                  <FaFacebookF className="text-xl" />
                </div>
                <div className="w-12 h-12 hover:bg-brandColor flex justify-center items-center text-brandColor duration-[.4s] hover:text-white rounded-sm">
                  <IoBasketballOutline className="text-xl" />
                </div>
                <div className="w-12 h-12 hover:bg-brandColor flex justify-center items-center text-brandColor duration-[.4s] hover:text-white rounded-sm">
                  <FaBehance className="text-xl" />
                </div>
                <div className="w-12 h-12 hover:bg-brandColor flex justify-center items-center text-brandColor duration-[.4s] hover:text-white rounded-sm">
                  <LuInstagram className="text-xl" />
                </div>
                <div className="w-12 h-12 hover:bg-brandColor flex justify-center items-center text-brandColor duration-[.4s] hover:text-white rounded-sm">
                  <FaLinkedinIn className="text-xl" />
                </div>
              </div>
            </div>
            {/* ------------ input form  */}
            <form className="w-[520px]">
              <p className="text-lg  font-normal text-[#87909D] mb-[50px]">
                There are many variations of passages of Lorem Ipsu available,
                but the majority have suffered alte.
              </p>
              <input
                className="w-full border-b-3 border-gray-200 text-gray-500 focus-within:border-brandColor text-xl outline-none font-normal focus-within:placeholder:text-brandColor mb-6"
                placeholder="Name*"
                type="text"
              />
              <input
                className="w-full border-b-3 border-gray-200 text-gray-500 focus-within:border-brandColor text-xl outline-none font-normal focus-within:placeholder:text-brandColor mb-6"
                placeholder="Email*"
                type="text"
              />
              <input
                className="w-full border-b-3 border-gray-200 text-gray-500 focus-within:border-brandColor text-xl outline-none font-normal focus-within:placeholder:text-brandColor mb-6"
                placeholder="Location*"
                type="text"
              />
              <div className="flex gap-6">
                <input
                  className="w-[200px] border-b-3 border-gray-200 text-gray-500 focus-within:border-brandColor text-xl outline-none font-normal focus-within:placeholder:text-brandColor mb-6"
                  placeholder="Email*"
                  type="text"
                />
                <input
                  className="w-[336px] border-b-3 border-gray-200 text-gray-500 focus-within:border-brandColor text-xl outline-none font-normal focus-within:placeholder:text-brandColor mb-6"
                  placeholder="Location*"
                  type="text"
                />
              </div>
              <input
                className="w-full border-b-3 border-gray-200 text-gray-500 focus-within:border-brandColor text-xl outline-none font-normal focus-within:placeholder:text-brandColor mb-6"
                placeholder="Message*"
                type="text"
              />
              <button className="py-3.5 px-6 bg-brandColor text-base font-semibold text-white ">Submit<PiPaperPlaneRightLight/></button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
