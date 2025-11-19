import Link from 'next/link'
import React from 'react'
import ContactForm from '../components/home/ContactForm'

const Footer = () => {
      const navbaritems = [
    {
      navbarContent: "Home",
      navbarLink: "/",
    },
    {
      navbarContent: "About Us",
      navbarLink: "/",
    },
    {
      navbarContent: "Blog",
      navbarLink: "/",
    },
    {
      navbarContent: "Terms and condition",
      navbarLink: "/",
    },
  ];
  return (
    <>
        <footer id='Footer' className='bg-[#2B384C] pt-40 pb-[60px] mt-[700px] '>
            <div className="container">
                <div className="footer_row flex justify-between relative">
                    <ContactForm/>
                    <Link href={'#'} className='text-3xl font-medium text-white'>Logo</Link>
                    <ul className='flex gap-5  items-center'>
                        {
                            navbaritems.map((item , i)=>(

                                <li key={i} className='text-base font-normal text-gray-50'><Link href={'#'}>{item.navbarContent}</Link></li>
                            ))
                        }
                    </ul>

                    <p  className='text-base font-normal text-gray-50' >
                        Copyright © 2022 Picto.
                    </p>
                
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer