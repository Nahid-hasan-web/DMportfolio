"use client";
import CommonHead from "@/app/common-components/CommonHead";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const Testimonial = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
      <section id="Testimonial" className="py-12 md:py-20">
        <div className="container">
          <CommonHead
            headTitle={"Testimonial"}
            headBody={
              "There are many variations of passages of Lorem Ipsum available,but the majority have suffered alteration."
            }
          />

          <Slider {...settings}>
            {[...Array(9)].map((_, i) => (
              <div key={i}>
                <div
                  className="
                    text-center m-auto 
                    w-full 
                    max-w-[90%] 
                    sm:max-w-[500px] 
                    md:max-w-[700px] 
                    lg:max-w-[872px] 
                    mt-8 md:mt-14 
                    px-3 sm:px-4 md:px-6
                  "
                >
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed text-[#2B384C] font-medium">
                    “Nulla efficitur nisl sit amet velit malesuada dapibus. Duis
                    mollis felis turpis, nec semper odio convallis at. Curabitur
                    imperdiet semper arcu, a finibus arcu suscipit in. Donec quis
                    placerat nibh. Maecenas est purus, eleifend ac cursus sed,
                    tincidunt ut sapien. Morbi ornare elit at libero suscipit
                    porta.”
                  </p>

                  <h2 className="text-sm sm:text-base md:text-lg font-bold font-poppins mt-4 md:mt-6">
                    Esther Howard
                  </h2>

                  <p className="text-xs sm:text-sm md:text-base font-poppins font-light">
                    Managing Director, ABC company
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
