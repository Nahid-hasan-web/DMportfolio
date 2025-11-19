import CommonHead from '@/app/common-components/CommonHead'
import Image from 'next/image'
import React from 'react'
import linkdin from '../../../public/images/linkedin.png'

const Clients = () => {
  return (
    <>
    <section id='Clients' className='py-[100px]'>
        <div className="container">
            <CommonHead headTitle={'Happy Clients'} headBody={'There are many variations of passages of Lorem Ipsum available,but the majority have suffered alteration.'}/>
            <div className='flex items-center justify-between mt-[133px]'>
                <div className='w-[140px] grayscale-100 hover:grayscale-0 duration-[.4s]'>
                    <Image src={linkdin} alt='linkedin image'/>
                </div>
                <div className='w-[140px] grayscale-100 hover:grayscale-0 duration-[.4s]'>
                    <Image src={linkdin} alt='linkedin image'/>
                </div>
                <div className='w-[140px] grayscale-100 hover:grayscale-0 duration-[.4s]'>
                    <Image src={linkdin} alt='linkedin image'/>
                </div>
                <div className='w-[140px] grayscale-100 hover:grayscale-0 duration-[.4s]'>
                    <Image src={linkdin} alt='linkedin image'/>
                </div>
                <div className='w-[140px] grayscale-100 hover:grayscale-0 duration-[.4s]'>
                    <Image src={linkdin} alt='linkedin image'/>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Clients