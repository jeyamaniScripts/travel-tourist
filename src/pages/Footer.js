import React, { createElement } from "react";
import footerVid from "../asset/video/footer.mp4";
import logo from '../asset/pictures/logo2.png'


const Footer = () => {
  return (
    <footer>
      <div className="relative h-[400px]">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 right-0 object-cover w-full z-[-1]"
        >
          <source src={footerVid} type="video/mp4" />
        </video>
        <div className="bg-black/20 h-full">
          <div className=" bg-primaryColor/10 h-full flex justify-center items-center backdrop-blur-sm">
            <div className="container bg-white p-5">
                <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div>
                      {/* {logo} */}
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                    </div>
                    <div>
                      <h2>Quick Links</h2>
                      <ul>
                        <li>Home</li>
                        <li>Places</li>
                        <li>About</li>
                        <li> Services</li>
                      </ul>
                    </div>
                    <div>

                    </div>
                </div>
                
            </div>
            
          </div>
          <div className=" bg-primaryColor p-4">

                </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
