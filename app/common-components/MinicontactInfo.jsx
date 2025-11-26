import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
const MinicontactInfo = () => {
    const socialLiks = [
      {isActive:true , socailLink: "/", socialIcon: <FaLinkedinIn /> },
      { socailLink: "/", socialIcon: <FaFacebookF /> },
      { socailLink: "/", socialIcon: <IoLogoYoutube/> },
      { socailLink: "/", socialIcon: <FaInstagram/> },
    ];
  return (
    <>
      <div className='w-[250px] h-fit p-3 bg-white rounded-[5px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>
        
        <div className='w-full h-[200px] overflow-hidden bg-gray-100'>
          {/* <img src="" alt="" /> */}
        </div>
        <h2 className='text-sm font-medium  font-poppins text-black mt-3'>Phone: <a className='text-gray-500' tel="tell:01765465415">01765465415</a></h2>
        <h2 className='text-sm font-medium  font-poppins text-black mt-3'>Email: <a className='text-gray-500' mailto="tell:01765465415">demo@gmail.com</a></h2>
      <div className='flex gap-4 items-center'>

        {
          socialLiks.map((item , i)=>(
            
            <a key={i} className={`p-2  flex justify-center items-center text-xl mt-5 rounded-sm  ${item.isActive?"text-white! bg-brandColor!" : "text-brandColor! bg-[#F6EBFF]!"}`} target='_blank' href={item.socailLink} >
              {item.socialIcon}
            </a>
          ))
        }
      </div>
      </div>
    </>
  )
}

export default MinicontactInfo