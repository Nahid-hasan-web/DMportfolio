import React from 'react'
import Banner from './components/Banner'
import WorkPorcess from './components/WorkPorcess'
import Portfolio from './components/home/Portfolio'
import Contact from './components/home/Contact'
import Blog from './components/home/Blog'
import Work from './components/home/Work'

const page = () => {
  return (
    <>
      <Banner/>
      <WorkPorcess/>
      <Portfolio/>
      <Contact/>
      <Blog/>
      <Work/>
    </>
  )
}

export default page