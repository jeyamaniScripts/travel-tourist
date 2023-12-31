import React from 'react'
import beachVideo from '../asset/video/ocean.mp4'
import Hero from '../components/Hero/Hero'
import { BannerPic } from '../components/BannerPic/BannerPic'
import Places from '../components/Places/Places'

const Home = () => {
  return (
    
    
    <div >
      <div className='relative h-[700px]'>
        <video autoPlay loop muted  className=' absolute top-0 right-0 w-full h-[700px] object-cover z-[-1]'>
        <source src={beachVideo} type="video/mp4" />
        </video>
        <Hero/>
      </div>
      <Places/>
    </div>
    
  )
}

export default Home