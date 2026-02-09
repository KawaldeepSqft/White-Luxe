import React from 'react';
import { Link } from 'react-router-dom';

import {
  FaFacebookF,
  FaInstagram,
} from 'react-icons/fa';

import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlineDocumentText
} from 'react-icons/hi';
import { BsTelephone } from 'react-icons/bs';
import { MdPolicy, MdGavel } from 'react-icons/md';

export default function Footer() {
  return (
    <footer className="bg-[#232323] text-white text-[15px]">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Discover */}
        <div>
          <h3 className="font-bold text-lg mb-4 bg-gradient-to-r from-[#AF882E] to-[#D7AE29] bg-clip-text text-transparent">
            Discover
          </h3>
          <ul className="space-y-2">
            <li className="flex items-center space-x-1">
              <span className="text-[#AF882E]">›</span>
              <Link
                to="/properties/DLF-Privana-North"
                className="hover:text-[#AF882E] transition"
              >
                DLF Parivana
              </Link>
            </li>

            <li className="flex items-center space-x-1">
              <span className="text-[#AF882E]">›</span>
              <Link
                to="/properties/Tulip-Monsella"
                className="hover:text-[#AF882E] transition"
              >
                Tulip Monsella
              </Link>
            </li>

            <li className="flex items-center space-x-1 text-gray-400 cursor-not-allowed">
              <span>›</span>
              <span>Tulip Crimson</span>
            </li>

            <li className="flex items-center space-x-1">
              <span className="text-[#AF882E]">›</span>
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
          <h3 className="font-bold text-lg mb-4 bg-gradient-to-r from-[#AF882E] to-[#D7AE29] bg-clip-text text-transparent">
            Contact Us
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start space-x-2 hover:text-[#AF882E] transition">
              <HiOutlineLocationMarker className="mt-0.5 text-lg flex-shrink-0" />
              <span>Sector 49, Gurgaon</span>
            </li>
            <li className="flex items-start space-x-2 hover:text-[#AF882E] transition">
              <BsTelephone className="mt-0.5 text-base flex-shrink-0" />
              <a href="tel:9958009492">9958009492</a>
            </li>
            <li className="flex items-start space-x-2 hover:text-[#AF882E] transition">
              <HiOutlineMail className="mt-0.5 text-lg flex-shrink-0" />
              <a href="mailto:support@whiteluxe.com">support@whiteluxe.com</a>
            </li>
          </ul>
        </div>

        {/* Legal Pages */}
        <div>
          <h3 className="font-bold text-lg mb-4 bg-gradient-to-r from-[#AF882E] to-[#D7AE29] bg-clip-text text-transparent">
            Legal
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start space-x-2">
              <HiOutlineDocumentText className="mt-0.5 text-lg flex-shrink-0 text-[#AF882E]" />
              <Link
                to="/terms-and-conditions"
                className="hover:text-[#AF882E] transition"
              >
                Terms & Conditions
              </Link>
            </li>

            <li className="flex items-start space-x-2">
              <MdGavel className="mt-0.5 text-lg flex-shrink-0 text-[#AF882E]" />
              <Link
                to="/legal-disclaimer"
                className="hover:text-[#AF882E] transition"
              >
                Legal Disclaimer
              </Link>
            </li>

            <li className="flex items-start space-x-2">
              <MdPolicy className="mt-0.5 text-lg flex-shrink-0 text-[#AF882E]" />
              <Link
                to="/privacy-policy"
                className="hover:text-[#AF882E] transition"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-bold text-lg mb-4 bg-gradient-to-r from-[#AF882E] to-[#D7AE29] bg-clip-text text-transparent">
            Newsletter
          </h3>
          <p className="text-gray-300 mb-3 text-sm">
            Subscribe for exclusive property updates & offers
          </p>
          <div className="flex mb-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-600 bg-[#2a2a2a] rounded-l focus:outline-none focus:border-[#AF882E] text-[15px] text-white placeholder-gray-500 transition"
            />
            <button className="bg-gradient-to-r from-[#AF882E] to-[#D7AE29] text-white px-5 rounded-r text-[15px] font-semibold hover:from-[#D7AE29] hover:to-[#AF882E] transition">
              Submit
            </button>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            <span className="font-semibold text-white">White Luxe</span> - Premium Real Estate
          </p>
        </div>
      </div>

      {/* Social + Copyright */}
      <div className="border-t border-gray-700 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-[15px]">

          {/* Social Links */}
          <div className="flex gap-6 mb-4 md:mb-0">
            <a
              href="https://www.facebook.com/profile.php?id=61578629881423"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#AF882E] transition transform hover:scale-110"
            >
              <FaFacebookF className="text-lg" />
              <span>Facebook</span>
            </a>

            <a
              href="https://www.instagram.com/whiteluxe_real_estate/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#AF882E] transition transform hover:scale-110"
            >
              <FaInstagram className="text-lg" />
              <span>Instagram</span>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} <span className="text-white font-semibold">White Luxe</span> – All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
