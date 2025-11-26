import Link from 'next/link'
import React from 'react'
import { LuSquareArrowOutUpRight } from "react-icons/lu";

const BlogCard = () => {
  return (
    <>
        <div className='w-[312px] rounded-lg overflow-hidden border border-[#F0F1F3]'>
            <div className='w-full h-[226px] bg-gray-200 relative overflow-hidden group'>
              <button className='w-full h-full absolute top-full group-hover:top-0 duration-[.4s] left-0 text-white  bg-[#0000007b] flex justify-center items-center text-xl font-medium font-poppins  gap-4  '>View Details <LuSquareArrowOutUpRight/></button>
            </div>
            <div className='p-5'>
            <p className='text-sm font-normal text-[#87909D] mt-6 mb-2'>22 Oct, 2020 / 246 Comments</p>
            <h2 className='text-lg font-medium text-[#333333]'>Lorem ipsum dolor sit consea. Nulla purus arcu</h2>
            </div>
        </div>
    </>
  )
}

export default BlogCard