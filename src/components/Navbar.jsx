import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = ["HOME", "SEARCH", "BUY", "ABOUT", "CONTACT"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#232323] shadow-md" : "bg-transparent"
      } px-4 md:px-12 py-3 flex items-center justify-between`}
    >
      {/* Logo */}
      <NavLink to="/">
        <div className="flex items-center gap-2 text-2xl font-bold text-[#AF882E]">
          <img className="w-16  " src="/img/logo.png" alt="logo" />
        </div>
      </NavLink>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-10 font-medium text-sm uppercase tracking-wide">
        {navItems.map((item, index) => (
          <li
            key={index}
            className="cursor-pointer text-white hover:text-[#AF882E] transition-colors"
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Right Actions */}
      <div className="hidden md:flex items-center gap-4">
        <button className="bg-gradient-to-r from-[#D7AE29] to-[#FFF389] text-black font-semibold text-sm px-5 py-2 rounded-full shadow-md hover:from-[#AF882E] hover:to-[#D7AE29] transition-all">
          9815202102
        </button>
      </div>

      {/* Hamburger Button */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <FaTimes className="text-2xl text-black" />
          ) : (
            <FaBars className="text-2xl text-black" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start px-5 pt-5 pb-6 md:hidden">
          {navItems.map((item, index) => (
            <span
              key={index}
              className="py-2 text-black font-medium uppercase w-full hover:text-[#AF882E] transition-colors"
            >
              {item}
            </span>
          ))}
          <button className="mt-4 bg-gradient-to-r from-[#D7AE29] to-[#FFF389] text-black font-semibold text-sm px-5 py-2 rounded-full shadow-md w-full">
            9815202102
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
