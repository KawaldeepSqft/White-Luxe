import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineLocationMarker, HiOutlineMail } from 'react-icons/hi';
import { BsTelephone } from 'react-icons/bs';
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-black text-[15px]"> {/* Overall font size */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Discover */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-[#A3743D] ">Discover</h3>
          <ul className="space-y-2">
            <li className="flex items-center space-x-1">
              <span className="text-gray-500">{'›'}</span><span>DLF Parivana</span>
            </li>
            <li className="flex items-center space-x-1">
              <span className="text-gray-500">{'›'}</span><span>Tulip Monsella</span>
            </li>
            <li className="flex items-center space-x-1">
              <span className="text-gray-500">{'›'}</span><span>Tulip Crimson</span>
            </li>
            <li className="flex items-center space-x-1">
              <span className="text-gray-500">{'›'}</span><span>Godrej Astra</span>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-[#A3743D]">Contact Us</h3>
          <ul className="space-y-3">
            <li className="flex items-start space-x-2">
              <HiOutlineLocationMarker className="mt-0.5 text-lg" />
              <span>Sector 49, Gurgaon </span>
            </li>
            <li className="flex items-start space-x-2">
              <BsTelephone className="mt-0.5 text-base" />
              <span>9815202102</span>
            </li>
            <li className="flex items-start space-x-2">
              <HiOutlineMail className="mt-0.5 text-lg" />
              <span>support@Whiteluxe.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-[#A3743D] ">Newsletter</h3>
          <div className="flex mb-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-l focus:outline-none text-[15px]"
            />
            <button className="bg-gradient-to-r from-[#A3743D] to-[#C49A6C] text-white px-4 rounded-r hover:bg-[#a3733dd8] text-[15px]">Submit</button>
          </div>
          <p>
            White Luxe - Real Estate.
          </p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="border-t border-gray-300 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-[15px]">

          {/* Icons */}
          <div className="flex flex-wrap gap-4 mb-4 md:mb-0 text-gray-700">
            <div className="flex items-center gap-1"><FaFacebookF /> Facebook</div>
            <div className="flex items-center gap-1"><FaXTwitter/></div>
            <div className="flex items-center gap-1"><FaInstagram /> Instagram</div>
            <div className="flex items-center gap-1"><FaLinkedinIn /> Linkedin</div>
            <div className="flex items-center gap-1"><FaYoutube /> Youtube</div>
          </div>

          {/* Copyright */}
          <p className="text-gray-600">© White Luxe – All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
