import ButtonV1 from "@/app/common-components/ButtonV1";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
      <section id="contact" className="py-[100px] bg-[#132238]">
        <div className="container">
          <h2 className="text-5xl font-semibold text-white text-center w-full lg:w-[619px] mx-auto">
            Do you have Project Idia? Let's discuss your project!
          </h2>
          <p className=" w-full lg:w-[577px] text-lg font-normal text-[#A5ACB5] mt-8 text-center mx-auto">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
          <div className="flex justify-center mt-8">

            <button className='px-6 py-3 bg-brandColor rounded-sm font-base font-semibold text-white flex gap-3 items-center active:scale-[1.1]'>
               Let’s work Together <FaArrowRightLong/>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
