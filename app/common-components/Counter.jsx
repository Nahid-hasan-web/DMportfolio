'use client'
import React from 'react'
import CountUp from 'react-countup';

const Counter = ({countNo , countSymbol}) => {
  return (
    <>
    <div className='text-[32px] text-[#424E60]  font-semibold flex'>
     <CountUp end={countNo} />
    {countSymbol}
    </div>

    </>
  )
}

export default Counter