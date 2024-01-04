import React, { useState } from "react";

const Hero = () => {

const[price,setPrice]=useState(150) 
 
  return (
    <div className=" bg-black/20 h-full ">
      <div className="h-full flex justify-center items-center bg-primaryColor/10 p-4">
        <div className="container grid grid-cols-1 gap-4">
          <div className="text-white">
            <p className="text-xl font-semibold">Our Packages </p>
            <p className="text-2xl font-bold">Search Your Destination</p>
          </div>

          <div className=" bg-white p-4 rounded-sm space-y-4 ">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-3">
              <div className="flex flex-col space-y-2">
                <label htmlFor="destination">Search Your Destinations</label>
                <input
                  type="text"
                  placeholder="Dubai"
                  className="bg-gray-100 rounded-full outline-none hover:outline-primaryColor/50 px-2 h-10"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="destination">Date</label>
                <input
                  type="date"
                  className="bg-gray-100 rounded-full outline-none hover:outline-primaryColor/50 px-2 h-10"
                />
              </div>
              <div className="flex flex-col justify-evenly  ">
            <label htmlFor="" className="flex justify-between px-3">
                <p>MaxPrice</p>
                <p>
                  <span>$</span>{price}
                </p>
              </label>
             <div className=" bg-gray-100 rounded-full h-10 px-3 flex items-center">
             <input
                type="range"
                className="appearance-none w-full bg-gradient-to-r from-primaryColor to-secondaryColor h-2 rounded-full "
                min={150}
                max={1500}
                step={10}
                value={price}
                onChange={(e)=>setPrice(e.target.value)}
              />
             </div>
            </div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
