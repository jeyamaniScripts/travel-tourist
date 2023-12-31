import React from 'react'

const Hero = () => {
  return (
   <div className=' bg-black/20 h-full '>
    <div className='h-full flex justify-center items-center bg-primaryColor/10 p-4'>
        <div className='container grid grid-cols-1 gap-4'>
           <div className='text-white'>
           <p className='text-xl font-semibold'>Our Packages </p>
           <p className='text-2xl font-bold'>Search Your Destination</p>
           </div>
           <div className='grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 '>
                <div className='bg-white p-4 rounded-sm'>
                  <div className='flex flex-col py-2'>
                    <label htmlFor="destination">Search Your Destinations</label>
                    <input type="text" 
                          placeholder='Dubai'
                          className='bg-gray-100 rounded-full outline-none hover:outline-primaryColor/50 px-2 h-10'/>
                  </div>
                  <div className='flex flex-col py-2'>
                    <label htmlFor="destination">Date</label>
                    <input type="date" 
                         
                          className='bg-gray-100 rounded-full outline-none hover:outline-primaryColor/50 px-2 h-10'/>
                  </div>
                  <div className='flex flex-col'>
                    <label htmlFor="name">muthu pandi</label>
                    <input type="text" placeholder='jeyamani'
                    className=''/>
                  </div>
                  <div>

                  </div>
                </div>
           </div>
        </div>
    </div>
   </div>
  )
}

export default Hero