import React from 'react'

const BlogsCard = ({items}) => {
  return (
    <div className='shadow-lg transition-all duration-500 hover:shadow-lg'>
        <div className=' overflow-hidden'> 
            <img src={items.image} alt="" className='hover:skew-x-2 hover:scale-110' />
        </div>
        <div>
            <h4>{items.title}</h4>
            <p className='line-clamp-2'>{items.description}</p>
            <div>
                <p>{items.author}</p>
                <p>{items.date}</p>
            </div>
        </div>
    </div>
  )
}

export default BlogsCard