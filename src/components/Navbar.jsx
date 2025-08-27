import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll"; // react-scroll use karenge smooth scroll ke liye

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: "HOME", to: "home" },
    { label: "BUY", to: "discover" },
    { label: "ABOUT", to: "whoWeAre" },
    { label: "CONTACT", to: "footer" },
  ];

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
      <a href="/">
        <div className="flex items-center gap-2 text-2xl font-bold text-[#AF882E]">
          <img className="w-16" src="/img/logo.png" alt="logo" />
        </div>
      </a>

      {/* Desktop Menu */}
   <ul className="hidden md:flex items-center gap-10 font-medium text-sm uppercase tracking-wide">
  {navItems.map((item, index) => (
    <li key={index}>
      <Link
        to={item.to}
        smooth={true}
        duration={600}
        offset={-70} // navbar height adjust karne ke liye
        className="cursor-pointer text-white hover:text-[#AF882E] transition-colors"
      >
        {item.label}
      </Link>
    </li>
  ))}
</ul>



      {/* Right Actions */}
      <div className="hidden md:flex items-center gap-4">
        <a href="tel:+919815202102">
          <button className="bg-gradient-to-r from-[#D7AE29] to-[#FFF389] text-black font-semibold text-sm px-5 py-2 rounded-full shadow-md">
            9815202102
          </button>
        </a>
      </div>

      {/* Hamburger Button */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <FaTimes className="text-2xl text-white" />
          ) : (
            <FaBars className="text-2xl text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start px-5 pt-5 pb-6 md:hidden">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setMenuOpen(false)}
              className="py-2 text-black font-medium uppercase w-full hover:text-[#AF882E] transition-colors cursor-pointer"
            >
              {item.label}
            </Link>
          ))}
          <a href="tel:+919815202102" className="w-full">
            <button className="mt-4 bg-gradient-to-r from-[#D7AE29] to-[#FFF389] text-black font-semibold text-sm px-5 py-2 rounded-full shadow-md w-full">
              9815202102
            </button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
