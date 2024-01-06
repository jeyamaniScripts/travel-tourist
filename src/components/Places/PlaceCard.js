import React from "react";
import Modal from "react-modal";
import { useState } from "react";
import logo from '../../asset/pictures/logo2.png'
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");
export const PlaceCard = ({
  img,
  title,
  location,
  description,
  price,
  type,
}) => {
  const locationIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path
        fillRule="evenodd"
        d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        clipRule="evenodd"
      />
    </svg>
  );
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    alert("xksjosjo");
  }
  return (
    <div
      className="shadow-lg transition-all duration-500 hover:shadow-xl cursor-pointer py-10"
      onClick={openModal}
    >
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
       <div className=" flex flex-col justify-center items-center space-y-5">
        <div className="w-20 h-20">
          <img src={logo} alt="" />
        </div>
        <div className="flex bg-primaryColor rounded-full px-5 py-1">
          <button>login</button>
          <button>sign in</button>
        </div>
        <form className="flex flex-col space-y-5">
          <div>
            <label htmlFor="">Name</label>
            <input type="text" placeholder="Name" />
          </div>
          <div>
            <label htmlFor="">E-mail</label>
            <input type="email" placeholder="Email" />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input type="password" placeholder="Password" />
          </div>
          <div>
            <button className=" bg-gradient-to-r from-primaryColor to-secondaryColor px-6 py-2 rounded-md">Submit</button>
          </div>
        </form>
       </div>
      </Modal>
      <div className="overflow-hidden">
        <img
          src={img}
          alt=""
          className="mx-auto h-[220px] w-full object-cover transition-all duration-300 hover:skew-x-2 hover:scale-110"
        />
      </div>
      <div className=" space-y-2 p-3">
        <h1 className=" line-clamp-1 text-2xl font-xl">{title}</h1>
        <div className="flex items-center gap-2 opacity-70">
          <button>{locationIcon}</button>
          <span>{location}</span>
        </div>

        <p className=" line-clamp-2">{description}</p>
      </div>
      <div className="flex items-center justify-between border-t-2 y-3 !mt-3 px-3">
        <p className="">{type}</p>
        <p className="text-lg font-semibold">
          <span className="font-bold text-xl">$</span> {price}
        </p>
      </div>
    </div>
  );
};
