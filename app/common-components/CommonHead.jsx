import React from 'react'

const CommonHead = ({headTitle , headBody}) => {
  return (
    <>
     <h2 className=' text-4xl lg:text-5xl  font-semibold text-[#132238] text-center '>{headTitle}</h2>
        <p className='w-full lg:w-[577px] text-sm lg:text-lg font-normal text-[#87909D] mt-6 text-center mx-auto' >
            {headBody}
        </p>
    </>
  )
}

export default CommonHead