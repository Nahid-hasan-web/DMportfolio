import BlogCard from "@/app/common-components/BlogCard";
import MinicontactInfo from "@/app/common-components/MinicontactInfo";
import { Pagination } from "antd";
import React from "react";

const page = () => {
  return (
    <>
      <div className="container">
        <div className="flex gap-10 ">
          <MinicontactInfo />
          <div className="flex flex-wrap gap-5 justify-end">
            {[1, 2, 3, 4, 5, 6,7,9,10,11,12,13].map((item , i) => (
              <BlogCard key={i} />
            ))}
            <Pagination defaultCurrent={1} total={50} />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
