import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
        <nav className='py-5'>
            <div className="container">
                <div className="navRow flex items-center  justify-between">
                        <Link  href='/'>
                            Logo
                        </Link>
                        <ul className='text-base font-medium flex gap-12 items-center'>
                            <li><Link href='/' className='text-[#333333]'>Home</Link></li>
                            <button className='w-[111px] h-12 bg-brandColor rounded-sm text-base font-semibold  text-white'>Contact</button>
                        </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar