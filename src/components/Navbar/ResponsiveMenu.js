import React from 'react'
import { Link } from 'react-router-dom'

export const ResponsiveMenu = ({ showMenu,avatorIcon,NavbarLinks, DropdownLinks}) => {
  return (
    <div className={`${showMenu ? ' -left-[100%]':' left-0'} fixed bottom-0  top-0 right-0 bg-white  w-[75%] z-20 flex  flex-col justify-between items-center p-16`}>
           <div className='flex flex-col items-center'>
           <div className='w-50 h-50'>
            {avatorIcon}
           </div>
           <h1>Hello! user</h1>
           </div>
           <div className='flex flex-col space-y-4'>
            {NavbarLinks.map((list,i)=>(
                <div key={i}>
                    <Link to={list.link}>{list.name}</Link>
                </div>
            ))}
            {/* {DropdownLinks.map((list,i)=>(
                <select name="" id="" key={i}>
                    <option value="">Quick Links</option>
                    <a href={list.link}>
                        <option value={list.name}>{list.name}</option>
                    </a>
                </select>
            ))} */}
           </div>
           <div>jemes</div>
    </div>
  )
}
