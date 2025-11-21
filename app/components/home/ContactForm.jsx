import React from "react";
import { MdOutlineLocationOn, MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube, IoLogoPinterest } from "react-icons/io5";
import { LuInstagram } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa6";
import { PiPaperPlaneRightLight } from "react-icons/pi";

const ContactForm = () => {
  return (
    <>
      <section id="contact-form" className=" lg:absolute w-full bottom-[50px] md:bottom-[90px]">
        <div className="container px-4">
          <div
            className="
              w-full bg-white rounded-[15px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]
              p-6 md:p-10 lg:p-[88px]
              flex flex-col lg:flex-row 
              gap-10 lg:gap-0 
              justify-between
            "
          >
            {/* ------------ Left Side Text */}
            <div className="w-full lg:w-[45%]">
              <h2 className="text-2xl md:text-[38px] font-semibold text-[#132238]">
                Let’s discuss your Project
              </h2>

              <p className="text-base md:text-lg text-[#87909D] mt-3 md:mt-4 mb-6 md:mb-[35px] max-w-[480px]">
                There are many variations of passages of Lorem Ipsu available.
                but the majority have suffered alte.
              </p>

              {/* Address */}
              <div className="p-5 w-full sm:w-[340px] rounded-[10px] flex items-center gap-3.5 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                <div className="w-12 h-12 bg-brandColor flex justify-center items-center text-white rounded-sm">
                  <MdOutlineLocationOn className="text-3xl" />
                </div>
                <div>
                  <p className="text-sm text-[#424E60]">Address:</p>
                  <h2 className="text-base font-medium text-[#132238]">New Mexico 31134</h2>
                </div>
              </div>

              {/* Email */}
              <div className="p-5 w-full sm:w-[340px] rounded-[10px] flex items-center gap-3.5 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] my-3">
                <div className="w-12 h-12 bg-[#EDD8FF] flex justify-center items-center text-brandColor rounded-sm">
                  <MdOutlineEmail className="text-3xl" />
                </div>
                <div>
                  <p className="text-sm text-[#424E60]">Email:</p>
                  <h2 className="text-base font-medium text-[#132238]">your@gmail.com</h2>
                </div>
              </div>

              {/* Phone */}
              <div className="p-5 w-full sm:w-[340px] rounded-[10px] flex items-center gap-3.5 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                <div className="w-12 h-12 bg-[#EDD8FF] flex justify-center items-center text-brandColor rounded-sm">
                  <FiPhone className="text-3xl" />
                </div>
                <div>
                  <p className="text-sm text-[#424E60]">Phone No:</p>
                  <h2 className="text-base font-medium text-[#132238]">018541146516</h2>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4 mt-8">
                {[
                  <FaFacebookF />,
                  <FaXTwitter />,
                  <IoLogoYoutube />,
                  <LuInstagram />,
                  <FaLinkedinIn />,
                  <IoLogoPinterest />,
                ].map((Icon, i) => (
                  <div
                    key={i}
                    className="
                      w-12 h-12 
                      flex justify-center items-center 
                      rounded-sm cursor-pointer
                      bg-[#EDD8FF] lg:bg-white
                      hover:bg-brandColor 
                      text-brandColor hover:text-white 
                      duration-300
                    "
                  >
                    {Icon}
                  </div>
                ))}
              </div>
            </div>

            {/* ------------ Right Side Form */}
            <form className="w-full lg:w-[50%]">
              <p className="text-base md:text-lg text-[#87909D] mb-8 md:mb-[50px]">
                There are many variations of passages of Lorem Ipsu available,
                but the majority have suffered alte.
              </p>

              <input
                className="w-full border-b-2 border-gray-200 text-gray-500 focus:border-brandColor text-lg md:text-xl outline-none mb-6"
                placeholder="Name*"
                type="text"
              />

              <input
                className="w-full border-b-2 border-gray-200 text-gray-500 focus:border-brandColor text-lg md:text-xl outline-none mb-6"
                placeholder="Email*"
                type="email"
              />

              <input
                className="w-full border-b-2 border-gray-200 text-gray-200 focus:border-brandColor text-lg md:text-xl outline-none mb-6"
                placeholder="Address*"
                type="text"
              />

              <div className="flex flex-col md:flex-row gap-6">
                <input
                  className="w-full md:w-[45%] border-b-2 border-gray-200 text-gray-500 focus:border-brandColor text-lg md:text-xl outline-none mb-6"
                  placeholder="Phone"
                  type="text"
                />
                <input
                  className="w-full md:w-[50%] border-b-2 border-gray-200 text-gray-500 focus:border-brandColor text-lg md:text-xl outline-none mb-6"
                  placeholder="City*"
                  type="text"
                />
              </div>

              <input
                className="w-full border-b-2 border-gray-200 text-gray-500 focus:border-brandColor text-lg md:text-xl outline-none mb-6"
                placeholder="Message*"
                type="text"
              />

              <button
                className="
                  py-3.5 px-6 bg-brandColor text-base font-semibold text-white 
                  flex gap-2 items-center rounded-[5px] 
                "
              >
                Submit <PiPaperPlaneRightLight />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
