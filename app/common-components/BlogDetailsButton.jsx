'use client'
import { useRouter } from "next/navigation";
import React from "react";
import { LuSquareArrowOutUpRight } from "react-icons/lu";

const BlogDetailsButton = () => {
      const router = useRouter()
  return (
    <>
      <button
        onClick={()=>router.push("/blogDetails")}
        className="w-full h-full absolute top-full group-hover:top-0 duration-[.4s] left-0 text-white  bg-[#0000007b] flex justify-center items-center text-xl font-medium font-poppins  gap-4  "
      >
        View Details <LuSquareArrowOutUpRight />
      </button>
    </>
  );
};

export default BlogDetailsButton;
