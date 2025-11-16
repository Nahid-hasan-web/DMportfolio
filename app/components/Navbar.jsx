import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    const navbaritems = [
        {
            navbarContent:"Home",
            navbarLink:"/"
        },
        {
            navbarContent:"About",
            navbarLink:"/"
        },
        {
            navbarContent:"Process",
            navbarLink:"/"
        },
        {
            navbarContent:"Portfolio",
            navbarLink:"/"
        },
        {
            navbarContent:"Blog",
            navbarLink:"/"
        },
        {
            navbarContent:"Services",
            navbarLink:"/"
        },
    ]
  return (
    <>
        <nav className='py-5'>
            <div className="container">
                <div className="navRow flex items-center  justify-between">
                        <Link  href='/'>
                            Logo
                        </Link>
                        <ul className='text-base font-medium flex gap-12 items-center'>
                            {
                                navbaritems.map((item , i)=>(

                                    <li key={i}><Link href={item.navbarLink} className='text-[#333333]'>{item.navbarContent}</Link></li>
                                ))
                            }
                            <button className='w-[111px] h-12 bg-brandColor rounded-sm text-base font-semibold  text-white'>Contact</button>
                        </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar