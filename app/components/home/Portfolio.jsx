import CommonHead from "@/app/common-components/CommonHead";
import PortfolioCard from "@/app/common-components/PortfolioCard";
import Link from "next/link";
import React from "react";

const Portfolio = () => {
  return (
    <>
      <section id="portfolio" className="py-16 md:py-20 lg:py-[100px]">
        <div className="container px-4 sm:px-6">
          <CommonHead
            headTitle={"Portfolio"}
            headBody={
              "There are many variations of passages of Lorem Ipsum available,but the majority have suffered alteration"
            }
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-14 md:mt-20 lg:mt-[70px]">
            {[1, 2, 3, 4, 5, 6].map((item, i) => (
              <div key={i} className="flex justify-center">
                <PortfolioCard
                  porfoliotopic={"keyword research "}
                  portfolioheading={"Product Admin Dashboard"}
                  portfoliobody={
                    "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus."
                  }
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-12 md:mt-[50px]">
            <Link
              href={"#"}
              className="py-2 md:py-3 px-4 md:px-6 bg-brandColor rounded-sm text-sm md:text-base font-semibold text-white active:scale-[1.1]"
            >
              More Project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
