import CommonHead from "@/app/common-components/CommonHead";
import PortfolioCard from "@/app/common-components/PortfolioCard";
import Link from "next/link";
import React from "react";

const Portfolio = () => {
  return (
    <>
      <section id="portfolio" className="py-[100px]">
        <div className="container">
          <CommonHead
            headTitle={"Portfolio"}
            headBody={
              "There are many variations of passages of Lorem Ipsum available,but the majority have suffered alteration"
            }
          />
          <div className="flex gap-6 flex-wrap mt-[70px]">
            {[1, 2, 3, 4, 5, 6].map((item, i) => (
              <PortfolioCard
                key={i}
                porfoliotopic={"keyword research "}
                portfolioheading={"Product Admin Dashboard"}
                portfoliobody={
                  "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus."
                }
              />
            ))}
          </div>
          <div className="flex justify-center mt-[50px]">
            <Link
              href={"#"}
              className="py-3 px-6 bg-brandColor rounded-sm text-base font-semibold text-white active:scale-[1.1]"
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
