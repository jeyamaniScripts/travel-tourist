import React from 'react'
import bgImage from '../asset/pictures/nopage.jpg'

const NoPage = () => {
  return (
    <div className='bg-black/30 h-full relative z-10'>
      <img src={bgImage} alt="" className=' absolute object-cover w-full' />
      <div className='text-white'>
        there is no way to start your journey 
      </div>
    </div>
  )
}

export default NoPage