import React from 'react'

const ButtonV1 = ({buttonContent}) => {
  return (
    <>
        <button className='px-6 py-3 bg-brandColor rounded-sm font-base font-semibold text-white'>{buttonContent}</button>
    </>
  )
}

export default ButtonV1