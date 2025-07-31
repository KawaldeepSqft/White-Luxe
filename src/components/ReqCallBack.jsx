import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const ReqCallBack = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat py-20  px-4 md:px-10 md:py-10  text-white"
      style={{ backgroundImage: `url('./img/cover.jpg')` }}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start bg-black/60 p-5 rounded-lg md:p-10">
      
        {/* Left - Contact Info */}
        <div>
          <p className="text-[#fff] uppercase tracking-widest mb-2">
            [ Contact Us ]
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-8">
            Let's Get in Touch
          </h2>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="border p-3 rounded-sm">
                <FaEnvelope />
              </div>
              <span>support@Whiteluxe.com</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="border p-3 rounded-sm">
                <FaPhoneAlt />
              </div>
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-start gap-4">
              <div className="border p-3 rounded-sm mt-1">
                <FaMapMarkerAlt />
              </div>
              <span>Sector 49, Gurgaon</span>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex gap-4 mt-8">
            <a
              href="#"
              className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

      
        {/* Right - Form */}
        <div className="bg-white text-black p-2 rounded-lg w-full  md:p-8">
          <h3 className="text-3xl font-serif text-[#A3743D] text-center mb-6">
            Request a Call Back
          </h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 px-4 py-2 rounded"
            />
            <select className="w-full border border-gray-300 px-4 py-2 rounded text-gray-500">
              <option>Choose Country</option>
              <option>India</option>
              <option>USA</option>
              <option>UK</option>
            </select>
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-gray-300 px-4 py-2 rounded"
            />
            <input
              type="text"
              placeholder="How did you hear about us"
              className="w-full border border-gray-300 px-4 py-2 rounded"
            />
            <textarea
              placeholder="Comments"
              rows="4"
              className="w-full border border-gray-300 px-4 py-2 rounded resize-none"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#A3743D] to-[#C49A6C] text-white py-2 rounded text-lg font-semibold tracking-wider hover:bg-[#a3733dc5] transition"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ReqCallBack;
