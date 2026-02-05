import React from 'react';
import { Link } from 'react-router-dom';

import {
  FaFacebookF,
  FaInstagram,
} from 'react-icons/fa';

import { HiOutlineDocumentText, HiOutlineLocationMarker, HiOutlineMail } from 'react-icons/hi';
import { BsTelephone } from 'react-icons/bs';

export default function Footer() {
  return (
    <footer className="bg-[#232323] text-white text-[15px]">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Discover */}
        <div>
          <h3 className="font-bold text-lg mb-4 bg-gradient-to-r from-[#AF882E] to-[#D7AE29] bg-clip-text text-transparent">
            Discover
          </h3>
          <ul className="space-y-2">

  <li className="flex items-center space-x-1">
    <span>{'›'}</span>
    <Link
      to="/properties/DLF-Privana-North"
      className="hover:text-[#AF882E] transition"
    >
      DLF Parivana
    </Link>
  </li>

  <li className="flex items-center space-x-1">
    <span>{'›'}</span>
    <Link
      to="/properties/Tulip-Monsella"
      className="hover:text-[#AF882E] transition"
    >
      Tulip Monsella
    </Link>
  </li>

  <li className="flex items-center space-x-1 text-gray-400 cursor-not-allowed">
    <span>{'›'}</span>
    <span>Tulip Crimson</span>
  </li>

  <li className="flex items-center space-x-1">
    <span>{'›'}</span>
    <Link
      to="/properties/Godrej-Astra"
      className="hover:text-[#AF882E] transition"
    >
      Godrej Astra
    </Link>
  </li>

</ul>

        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-4 bg-gradient-to-r from-[#AF882E] to-[#D7AE29] bg-clip-text text-transparent">
            Contact Us
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start space-x-2">
              <HiOutlineLocationMarker className="mt-0.5 text-lg" />
              <span>Sector 49, Gurgaon</span>
            </li>
            <li className="flex items-start space-x-2">
              <BsTelephone className="mt-0.5 text-base" />
              <span>9958009492</span>
            </li>
            <li className="flex items-start space-x-2">
              <HiOutlineMail className="mt-0.5 text-lg" />
              <span>support@whiteluxe.com</span>
            </li>

            {/* ✅ TERMS LINK */}
           <li className="flex items-start space-x-2">
  <HiOutlineDocumentText className="mt-0.5 text-lg text-white" />

  <Link
    to="/terms-and-conditions"
    className="hover:text-[#AF882E] transition"
  >
    Terms And Conditions
  </Link>
</li>

          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold text-lg mb-4 bg-gradient-to-r from-[#AF882E] to-[#D7AE29] bg-clip-text text-transparent">
            Newsletter
          </h3>
          <div className="flex mb-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-l focus:outline-none text-[15px] text-black placeholder-gray-400"
            />
            <button className="bg-gradient-to-r from-[#AF882E] to-[#D7AE29] text-white px-4 rounded-r text-[15px]">
              Submit
            </button>
          </div>
          <p>White Luxe - Real Estate.</p>
        </div>
      </div>

      {/* Social + Copyright */}
      <div className="border-t border-gray-600 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-[15px]">

          <div className="flex gap-4 mb-4 md:mb-0">
            <a
              href="https://www.facebook.com/profile.php?id=61578629881423"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-[#AF882E]"
            >
              <FaFacebookF /> Facebook
            </a>

            <a
              href="https://www.instagram.com/whiteluxe_real_estate/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-[#AF882E]"
            >
              <FaInstagram /> Instagram
            </a>
          </div>

          <p className="text-gray-300">
            © White Luxe – All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
