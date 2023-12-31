import React, { useState } from 'react'
import { NavLink} from 'react-router-dom';
import Button from '../../Layouts/Button';
import logo from '../../asset/pictures/logo2.png'

const Navbar = () => {
    const NavbarLinks = [
        {
          name: "Home",
          link: "/",
        },
        {
          name: "About",
          link: "/about",
        },
        {
          name: "Blogs",
          link: "/blogs",
        },
        {
          name: "Best Places",
          link: "/best-places",
        },
      ];
      
      const DropdownLinks = [
        {
          id:1,
          name: "Our Services",
          link: "/#services",
        },
        {
          id:2,
          name: "Top Brands",
          link: "/#mobile_brands",
        },
        {
          id:3,
          name: "Location",
          link: "/#location",
        },
      ];

      const barIcon=<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
      <path fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
    </svg>
    const closrIcon=<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
    <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
    </svg>
      // const avatorIcon=<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
      // <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clip-rule="evenodd" />
      // </svg>
    

    const[showMenu,setShowMenu]=useState(true)

    const handleToggle=()=>{
      setShowMenu(!showMenu)
    }
  
    
  return (
    <>
    <nav className='fixed top-0 right-0 shadow-lg bg-white w-full z-50'>
        <div className=' bg-gradient-to-r from-primaryColor to-secondaryColor text-white'>
            <div className='  container py-1 sm:block hidden' >
                <div className='flex justify-between items-center'> 
                <p>20% off on next bookin</p>
                <p>mobile no. +91 123456789</p>
                </div>
            </div>
        </div>
        {/* TO SHOW LOGO,NAVLINKS,BOOKING BUTTON AND MOBILE RESPONSIVE MENU  */}
        <div className='container sm:py-1 md:py-3' >
           <div className='flex justify-between items-center'>
             {/* LOGO  */}
             <div>
                <img src={logo} alt="" className='w-12 h-13' />
            </div>
            {/* NAVLINKS  */}
            <div className='hidden md:block'>
                <ul className='flex items-center gap-6'>
                    {NavbarLinks.map((list,index)=>(
                        <li key={index} activeclassname='active'>
                            <NavLink to={list.link}>{list.name}</NavLink>
                        </li>
                    ))}
                    <select className='bg-white'>
                      <option value="">Quick Links</option>
                      {DropdownLinks.map((droplinks,index)=>(
                        <option key={droplinks.id} value={droplinks.link} activeclassname='active' className='outline-none focus:outline-none focus:bg-primaryColor/25'>
                          <NavLink to={droplinks.link}>{droplinks.name}</NavLink>
                        </option>
                      ))}
                    </select>
                </ul>
            </div>
            {/* BOOKING BUTTON  */}
            <div className=''> 
              <Button/>
            </div>
            {/* MOBILE RESPONSIVE  */}
            <div onClick={handleToggle} className='md:hidden'>
              {showMenu ? (barIcon) :(closrIcon)}
              {/* <div className={`${ showMenu ? '-left-[-100%]' :'-left-0'} absolute top-0 bottom-0 h-screen w-[75%] shadow-lg`}>
                          hello
              </div> */}
            </div>
           </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar