import React from 'react'
import Banner from './components/Banner'
import WorkPorcess from './components/WorkPorcess'
import Portfolio from './components/home/Portfolio'
import Contact from './components/home/Contact'
import Blog from './components/home/Blog'

const page = () => {
  return (
    <>
      <Banner/>
      <WorkPorcess/>
      <Portfolio/>
      <Contact/>
      <Blog/>
    </>
  )
}

export default page