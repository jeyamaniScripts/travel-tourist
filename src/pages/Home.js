import React from 'react'
import beachVideo from '../asset/video/ocean.mp4'
// import footer from '../asset/video/footer.mp4'
import Hero from '../components/Hero/Hero'
import { BannerPic } from '../components/BannerPic/BannerPic'
import Places from '../components/Places/Places'
import bannerImg from '../asset/cover-women.jpg'
import Blogs from './Blogs'
import About from './About'
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
      <BannerPic Img={bannerImg}/>
      <Blogs/>
      <About/>
    </div>
    
  )
}

export default Home