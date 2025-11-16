import React from 'react'
import { BsCalendar2Date } from "react-icons/bs";

const WorkPorcess = () => {
  return (
    <section  id='WorkProcess' className='bg-[#F0F1F3] pt-[248px] pb-[140px]'>
        <div className="container">
            <div className="flex   items-center">
               {/* work process text */}
                <div >
                    <h2 className='text-[48px] font-semibold text-gray-900'>Work Process</h2>
                    <p className=' w-[529px] text-lg font-normal text-[#697484] mt-6 mb-4'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet,
                    </p>
                    <p className=' max-w-[529px] text-lg font-normal text-[#697484] mt-6 mb-4'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.  eget lorem ac vestibulum. Suspendis imperdiet,
                    </p>
                </div>
                {/* ------- work process cards */}
                <div className='flex gap-6 flex-wrap justify-end'>
                    <div className='w-[312px] p-8 rounded-xl bg-white'>
                        <div className='w-[72px] h-[72px] rounded-md bg-brandColor flex justify-center items-center text-2xl text-white'>
                            <BsCalendar2Date />
                        </div>
                        <h2 className='text-xl  font-semibold text-gray-900 mt-8 mb-3'>1. Research</h2>
                        <p className='text-base font-normal text-gray-600'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.
                        </p>
                    </div>
                    <div className='w-[312px] p-8 rounded-xl bg-white'>
                        <div className='w-[72px] h-[72px] rounded-md bg-[#edd8ff80] flex justify-center items-center text-2xl text-brandColor'>
                            <BsCalendar2Date />
                        </div>
                        <h2 className='text-xl  font-semibold text-gray-900 mt-8 mb-3'>1. Research</h2>
                        <p className='text-base font-normal text-gray-600'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.
                        </p>
                    </div>
                    <div className='w-[312px] p-8 rounded-xl bg-white'>
                        <div className='w-[72px] h-[72px] rounded-md bg-[#edd8ff80] flex justify-center items-center text-2xl text-brandColor'>
                            <BsCalendar2Date />
                        </div>
                        <h2 className='text-xl  font-semibold text-gray-900 mt-8 mb-3'>1. Research</h2>
                        <p className='text-base font-normal text-gray-600'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.
                        </p>
                    </div>
                    <div className='w-[312px] p-8 rounded-xl bg-white'>
                        <div className='w-[72px] h-[72px] rounded-md bg-[#edd8ff80] flex justify-center items-center text-2xl text-brandColor'>
                            <BsCalendar2Date />
                        </div>
                        <h2 className='text-xl  font-semibold text-gray-900 mt-8 mb-3'>1. Research</h2>
                        <p className='text-base font-normal text-gray-600'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default WorkPorcess