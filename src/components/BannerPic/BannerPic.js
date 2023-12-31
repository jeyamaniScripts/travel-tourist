import React from 'react'

export const BannerPic = ({Img}) => {
  const bgImage={

        backgroundImage:`url(${Img})`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        height:'400px'
  }
  return (
    <div style={bgImage} className='w-full h-[400px]'></div>
  )
}
