import React from 'react'

const about={
  title:"Why choose us?",
  sub_title:"LonelyEscapes offers hundreds of tours and activities for travelers around the globe.",
  content:{
    help:{
      title:'Get Help',
      icon:"",
      sub_title:'Let us know your query on any pakages and would love to help you out',

    },
    money:{
      title:'Save money',
      icon:"",
      sub_title:'Let us know your query on any pakages and would love to help you out',
      
    },
    guid:{
      title:'Proper Guid',
      icon:"",
      sub_title:'Let us know your query on any pakages and would love to help you out',
      
    },
  
  }
 

}

const About = () => {
  return (
    <div className=' bg-primaryColor/40 h-[500px]'>
          <div className='flex flex-col items-center py-10'>
            <h1 className='font-bold text-2xl'>{about.title}</h1>
            <p className='text-xl text-center'>{about.sub_title}</p>
          </div>
          <div>
           
          </div>
    </div>
  )
}

export default About