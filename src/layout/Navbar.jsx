import React, { useState } from 'react';
import { FaLinkedin, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const navigate = useNavigate(); // Fonction de navigation

  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className="w-full fixed top-0 left-0 z-50 backdrop-blur-md bg-white/30 border-b border-gray-200">
      <div className="mx-auto px-4 lg:px-20 py-6 flex justify-between items-center w-full h-full">
        <div>
          <h1 className="font-bold text-xl text-black">UpEvent.</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex">
          <ul className="flex items-center gap-x-6 text-sm">
            <li className='cursor-pointer hover:border-b-2 hover:font-semibold pb-1 hover:border-black' onClick={() => navigate("/")}>Home</li>
            <li className='cursor-pointer hover:border-b-2 hover:font-semibold pb-1 hover:border-black'>Upcoming Events</li>
            <li className='cursor-pointer hover:border-b-2 hover:font-semibold pb-1 hover:border-black'>Browse Events</li>
            <li className='cursor-pointer hover:border-b-2 hover:font-semibold pb-1 hover:border-black' onClick={() => navigate("/about")}>About</li>
            <li className='cursor-pointer hover:border-b-2 hover:font-semibold pb-1 hover:border-black'>Login</li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="hidden lg:flex items-center gap-3">
          <FaLinkedin />
          <FaFacebook />
          <FaXTwitter />
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button onClick={handleNavToggle}>
            {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden ${navOpen ? 'block' : 'hidden'} w-full bg-white/80 backdrop-blur-md border-t`}
      >
        <ul className="flex flex-col items-center gap-y-4 py-6">
          <li onClick={() => { handleNavToggle(); navigate("/"); }} className='cursor-pointer hover:font-semibold'>Home</li>
          <li onClick={handleNavToggle} className='cursor-pointer hover:font-semibold'>Upcoming Events</li>
          <li onClick={handleNavToggle} className='cursor-pointer hover:font-semibold'>Browse Events</li>
          <li onClick={() => { handleNavToggle(); navigate("/about"); }} className='cursor-pointer hover:font-semibold'>About</li>
          <li onClick={handleNavToggle} className='cursor-pointer hover:font-semibold'>Login</li>
          <div className="flex items-center gap-4">
            <FaLinkedin />
            <FaFacebook />
            <FaXTwitter />
          </div>
        </ul>
      </div>
    </div>
  );
}
