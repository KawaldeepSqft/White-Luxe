import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = ['HOME', 'SEARCH', 'BUY', 'ABOUT', 'CONTACT'];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      } px-3 md:px-10 md:py-4 py-3 flex items-center justify-between`}
    >
      {/* Logo */}
      <NavLink to="/">
        <div className="flex items-center gap-2 text-2xl font-bold text-[#A3743D]">
          <IoLocationSharp className="text-[#A3743D]" />
          <span className="text-[#1d3557]">Whiteluxe</span>
        </div>
      </NavLink>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-8 font-semibold text-sm text-[#1d3557] uppercase">
        {navItems.map((item, index) => (
          <li key={index} className="cursor-pointer hover:text-[#A3743D]">
            {item}
          </li>
        ))}
      </ul>

      {/* Right Actions */}
      <div className="hidden md:flex items-center gap-4">
        <button className="bg-gradient-to-r from-[#A3743D] to-[#C49A6C] hover:bg-[#a5835c] text-white text-sm font-semibold px-4 py-2 rounded">
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
            <span
              key={index}
              className="py-2 text-[#1d3557] font-semibold uppercase w-full hover:text-[#A3743D]"
            >
              {item}
            </span>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
