import CommonHead from "@/app/common-components/CommonHead";
import Image from "next/image";
import React from "react";
import linkdin from "../../../public/images/linkedin.png";

const Clients = () => {
  return (
    <>
      <section id="Clients" className="py-12 md:py-16 lg:py-[100px]">
        <div className="container px-4 sm:px-6">
          <CommonHead
            headTitle={"Happy Clients"}
            headBody={
              "There are many variations of passages of Lorem Ipsum available,but the majority have suffered alteration."
            }
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8 mt-8 md:mt-14 items-center justify-items-center">
            <div className="w-24 md:w-36 grayscale hover:grayscale-0 transition duration-300">
              <Image
                src={linkdin}
                alt="linkedin image"
                className="w-full h-auto"
              />
            </div>
            <div className="w-24 md:w-36 grayscale hover:grayscale-0 transition duration-300">
              <Image
                src={linkdin}
                alt="linkedin image"
                className="w-full h-auto"
              />
            </div>
            <div className="w-24 md:w-36 grayscale hover:grayscale-0 transition duration-300">
              <Image
                src={linkdin}
                alt="linkedin image"
                className="w-full h-auto"
              />
            </div>
            <div className="w-24 md:w-36 grayscale hover:grayscale-0 transition duration-300">
              <Image
                src={linkdin}
                alt="linkedin image"
                className="w-full h-auto"
              />
            </div>
            <div className="w-24 md:w-36 grayscale hover:grayscale-0 transition duration-300">
              <Image
                src={linkdin}
                alt="linkedin image"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Clients;
