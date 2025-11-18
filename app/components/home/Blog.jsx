import BlogCard from '@/app/common-components/BlogCard'
import CommonHead from '@/app/common-components/CommonHead'
import React from 'react'

const Blog = () => {
  return (
    <>
        <section id='Blog' className='py-[100px]'>
            <div className="container">
                <CommonHead headTitle={'Blog'} headBody={'There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.'}/>
                <BlogCard/>
            </div>
        </section>
    </>
  )
}

export default Blog