import React, { useState } from 'react';
import { FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["HOME", "SEARCH", "BUY", "ABOUT", "CONTACT"];

  return (
    <nav className="w-full bg-white shadow-sm px-3  md:px-10 md:py-4 py-3 flex items-center justify-between relative z-50">
      
      {/* Logo */}
      <div className="flex items-center gap-2 text-2xl font-bold text-[#1d3557]">
        <IoLocationSharp className="text-sky-500" />
        <span className="text-[#1d3557]">Whiteluxe</span>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-8 font-semibold text-m text-[#1d3557] uppercase ">
        {navItems.map((item, index) => (
          <li key={index} className="cursor-pointer hover:text-blue-600">{item}</li>
        ))}
      </ul>

      {/* Right Actions */}
      <div className="hidden md:flex items-center gap-4">
        {/* <FaUserCircle className="text-2xl text-[#1d3557]" /> */}
        <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded">
         9815202102
        </button>
      </div>

      {/* Hamburger Button */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <FaTimes className="text-2xl text-[#1d3557]" />
          ) : (
            <FaBars className="text-2xl text-[#1d3557]" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start px-4 pt-4 pb-6 md:hidden">
          {navItems.map((item, index) => (
            <span key={index} className="py-2 text-[#1d3557] font-semibold uppercase w-full hover:text-blue-600">
              {item}
            </span>
          ))}
          <div className="flex items-center gap-4 mt-4">
            <FaUserCircle className="text-2xl text-[#1d3557]" />
            <button className="bg-sky-500 hover:bg-sky-600 text-white text-sm font-semibold px-4 py-2 rounded">
              CREATE A LISTING
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
