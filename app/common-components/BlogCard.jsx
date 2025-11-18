import React from 'react'

const BlogCard = () => {
  return (
    <>
        <div className='w-[312px] rounded-lg overflow-hidden border border-[#F0F1F3]'>
            <div className='w-full h-[226px] bg-gray-200'></div>
            <div className='p-5'>
            <p className='text-sm font-normal text-[#87909D] mt-6 mb-2'>22 Oct, 2020 / 246 Comments</p>
            <h2 className='text-lg font-medium text-[#333333]'>Lorem ipsum dolor sit consea. Nulla purus arcu</h2>
            </div>
        </div>
    </>
  )
}

export default BlogCard