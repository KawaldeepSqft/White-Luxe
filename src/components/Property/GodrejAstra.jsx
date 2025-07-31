import React, { useState, useEffect } from "react";
import { FaMapMarkedAlt, FaBuilding, FaRupeeSign } from "react-icons/fa";
import { MdApartment } from "react-icons/md";
import { RiBuilding2Line } from "react-icons/ri";
import { TbRulerMeasure } from "react-icons/tb";

import img1 from "/img/Trac-ishca/g1.jpg";
import img2 from "/img/Trac-ishca/g2.webp";
import img3 from "/img/Trac-ishca/g3.webp";
import img4 from "/img/Trac-ishca/g4.jpg";
import img5 from "/img/Trac-ishca/g6.jpg";
import img6 from "/img/Trac-ishca/g7.jpg";
import img7 from "/img/background.jpg";
import img8 from "/img/background.jpg";
import { FaCheckCircle } from "react-icons/fa";
import Footer from "../Footer";
const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const GodrejAstra = () => {
  const units = [
    // { type: "3BHK", size: "2250 Sq.ft", price: "Price on call" },
    { type: "4 BHK", size: "Size on call", price: "Price on call" },
  ];

  const data = [
    {
      icon: <TbRulerMeasure size={24} />,
      title: "Total Land",
      value: "10.5 Acres",
    },
    {
      icon: <RiBuilding2Line size={24} />,
      title: "Total Tower",
      value: "1",
    },
    {
      icon: <MdApartment size={24} />,
      title: "Total Units",
      value: "150",
    },
    {
      icon: <FaBuilding size={24} />,
      title: "Payment Plan",
      value: "Flexible",
    },
    {
      icon: <FaRupeeSign size={24} />,
      title: "Price",
      value: "5.18 Cr - 6.33 Cr",
    },
    {
      icon: <FaRupeeSign size={24} />,
      title: "Status",
      value: "Under Construction",
    },
  ];

  const amenities = [
    { image: "/img/background.jpg", label: "Club House" },
    { image: "/img/background.jpg", label: "Park" },
    { image: "/img/background.jpg", label: "Intercom Facility" },
    { image: "/img/background.jpg", label: "Swimming Pool" },
    { image: "/img/background.jpg", label: "GYM" },
    { image: "/img/background.jpg", label: "Community Centre" },
    { image: "/img/background.jpg", label: "Security Guard" },
    { image: "/img/background.jpg", label: "Maintenance Staff" },
    { image: "/img/background.jpg", label: "Piped Gas" },
    { image: "/img/background.jpg", label: "Visitor Parking" },
    { image: "/img/background.jpg", label: "Lift" },
    { image: "/img/background.jpg", label: "Kids Play Area" },
    { image: "/img/background.jpg", label: "Jogging Track" },
    { image: "/img/background.jpg", label: "ATMs" },
    { image: "/img/background.jpg", label: "Library" },
    { image: "/img/background.jpg", label: "Conference Room" },
    { image: "/img/background.jpg", label: "Cafeteria/Food Court" },
    { image: "/img/background.jpg", label: "Waste Disposal" },
  ];

  const floorPlans = [
    // {
    //   label: "3 BHK Floor Plan",
    //   image: "/img/background1.jpg",
    // },
    {
      label: "4 BHK Floor Plan",
      image: "/img/Trac-ishca/f1.webp",
    },
    // {
    //   label: "5 BHK Floor Plan",
    //   image: "/img/DLF-Privana.jpg",
    // },
  ];

  const [current, setCurrent] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % floorPlans.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + floorPlans.length) % floorPlans.length);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
   <section
  className="relative w-full h-screen bg-cover bg-center"
  style={{ backgroundImage: "url('/img/Trac-ishca/Main-banner.webp')" }}
>
  {/* Overlay */}
  <div className="absolute inset-0" />

  {/* Main Content */}
  <div className="relative z-10 flex flex-col justify-between h-full px-6 md:px-20 py-10 md:py-20">
    {/* Top Content */}
    <div className="flex flex-col md:flex-row items-start justify-between">
      {/* Left Text Info */}
      <div className="text-white max-w-xl">
        <h4 className="text-xl font-semibold mb-2">GURGAON</h4>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Tarc Ishva</h1>
        <p className="text-lg mb-1">Luxury Apartment</p>
        <p className="text-lg mb-4">Sector - 63A, Gurugram</p>

        <div className="flex items-center">
          <span className="text-xl font-semibold">Starting Price</span>
          <span className="bg-white text-[#a16e20] text-xl font-bold px-4 py-1 rounded ml-2">
            ₹ 9.7 Cr*
          </span>
        </div>
      </div>

      {/* Right Form Box */}
      <div className="bg-gradient-to-r from-[#A3743D] to-[#C49A6C] text-white p-8 rounded-lg w-full max-w-md mt-10 md:mt-0 md:ml-12 shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4">
          Let’s Find Your Dream Home!
        </h2>
        <p className="text-center text-sm mb-6">
          Please fill out the form below, our expert will get back to you soon.
        </p>

        <form className="space-y-4">
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white">
              <i className="fas fa-user" />
            </span>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full pl-10 pr-4 py-2 rounded bg-transparent border-b border-white placeholder-white focus:outline-none"
            />
          </div>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white">
              <i className="fas fa-envelope" />
            </span>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full pl-10 pr-4 py-2 rounded bg-transparent border-b border-white placeholder-white focus:outline-none"
            />
          </div>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white">
              <i className="fas fa-phone" />
            </span>
            <input
              type="tel"
              placeholder="Your Number"
              className="w-full pl-10 pr-4 py-2 rounded bg-transparent border-b border-white placeholder-white focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-white text-[#7A5520] font-semibold py-2 rounded mt-2 hover:bg-gray-200 transition"
          >
            Reserve Your Spot
          </button>
        </form>
      </div>
    </div>

    {/* Bottom Info Boxes (Center Aligned) */}
   <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg flex flex-wrap justify-center items-center px-4 md:px-10 py-6 mt-6 md:mt-18 gap-6">
  {data.map((item, index) => (
    <div
      key={index}
      className="flex flex-col items-center text-center min-w-[120px] px-4"
    >
      <div className="text-white mb-1">{item.icon}</div>
      <div className="text-sm text-white/80">{item.title}</div>
      <div className="font-semibold text-white mt-1">{item.value}</div>
    </div>
  ))}
</div>


  </div>




      {/* table  */}

      {/* banner and about */}

      <div className="relative bg-[#eaf6ff] py-16 px-4 lg:px-20 overflow-hidden">
        {/* Half circle background effect */}
        <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] bg-[#A3743D] rounded-full opacity-60 z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <img
              src="/img/Trac-ishca/g3.webp"
              alt="Puri The Aravallis"
              className="rounded-xl shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 bg-gradient-to-r from-[#A3743D] to-[#C49A6C] text-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-2 text-white">About Project</h3>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Four-side Open Residences
            </h2>
            <p className="text-white text-base leading-relaxed">
              At TARC Ishva, experience a blend of luxurious and harmonious
              lifestyle that celebrates the essence of your aspirations.
              Inspired by the four directions, TARC Ishva embodies the nurturing
              spirit of the south, the potential of new beginnings from the
              east, the realm of dreams in the west and the ambition to achieve
              in the north. Embrace a home inspired by India, where the openness
              elevates wisdom, balance and peaceful living.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full px-4 py-12 lg:px-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How Much <br />
            <span className="text-[#A3743D]">
              TARC Ishva - Sector - 63A, Gurugram
            </span>
          </h2>

          <div className="overflow-x-auto rounded-xl shadow-lg">
            <table className="min-w-full border border-gray-200">
              <thead>
                <tr className="bg-gradient-to-r from-[#A3743D] to-[#C49A6C] text-white text-left text-sm md:text-base">
                  <th className="py-4 px-6">UNIT TYPE</th>
                  <th className="py-4 px-6">UNIT SIZE</th>
                  <th className="py-4 px-6">UNIT PRICE</th>
                </tr>
              </thead>
              <tbody>
                {units.map((unit, index) => (
                  <tr
                    key={index}
                    className="border-t border-gray-200 hover:bg-blue-50 transition"
                  >
                    <td className="py-4 px-6 text-sm md:text-base font-medium">
                      {unit.type}
                    </td>
                    <td className="py-4 px-6 text-sm md:text-base">
                      {unit.size}
                    </td>
                    <td className="py-4 px-6 text-sm md:text-base">
                      {unit.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* galllry img section  */}
      <section className="bg-[#eaf6ff] py-12 px-4 lg:px-20">
        <h2 className="text-3xl font-bold text-[#444] mb-2">Gallery</h2>
        <h3 className="text-2xl text-[#A3743D] font-semibold mb-6">
          Tarc Ishva
        </h3>

        {/* Main Image */}
        <div className="w-full mx-auto mb-6">
          <img
            src={selectedImage}
            alt="Selected View"
            className="w-full h-[500px] rounded-lg shadow-xl object-cover"
          />
        </div>

        {/* Thumbnail Images */}
        <div className="flex flex-wrap gap-4 justify-center">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              onClick={() => setSelectedImage(img)}
              className={`w-24 h-16 md:w-32 md:h-20 rounded-md cursor-pointer object-cover border-2 transition-all duration-200 ${
                selectedImage === img ? "[#A3743D]" : "border-transparent"
              }`}
            />
          ))}
        </div>
      </section>

      {/* amanities */}

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-800 mb-2 text-[#444]">
            Project Facilities
          </h2>
          <h3 className="text-3xl font-bold text-[#A3743D] mb-8">
            Tarc Ishva Amenities
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {amenities.map((item, index) => (
              <div
                key={index}
                className="bg-white  rounded-xl p-3 shadow hover:shadow-lg transition"
              >
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={item.image}
                    alt={item.label}
                    className="w-full h-28 object-cover rounded-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
                <p className="text-center mt-2 font-medium text-gray-700 text-sm">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* location advanges */}

      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#444] mb-2">
            Location Map
          </h2>
          <h3 className="text-[#A3743D] text-2xl font-bold mb-4">Tarc Ishva</h3>
          <hr className="border-gray-300 mb-6" />

          <ul className="space-y-4 text-lg text-gray-800">
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-[#A3743D] mt-1 text-base sm:text-lg" />
              1 Km From Golf Course Road
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-[#A3743D] mt-1 text-base sm:text-lg" />
              10 Min From Sun City, Heritage
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-[#A3743D] mt-1 text-base sm:text-lg" />
              15 - 20 Min From Artemis, Medanta, Max.
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-[#A3743D] mt-1 text-base sm:text-lg" />
              15 Min From Shri Ram, Shikshantar, DPS, Amity
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-[#A3743D] mt-1 text-base sm:text-lg" />
              10 Min From DLF Golf Club
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-[#A3743D] mt-1 text-base sm:text-lg" />
              1.5 Km From Metro Station (Rapid)
            </li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
          <img
            src="/img/Trac-ishca/location.png"
            alt="Location Map"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* floor plan  */}

      <section className="bg-white py-12 px-4 lg:px-32 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#7A5520] mb-8">
          FLOOR PLANS
          <div className="w-16 h-1 bg-[#7A5520] mx-auto mt-2" />
        </h2>

        <div className="relative flex items-center justify-center max-w-6xl mx-auto">
          {/* Left Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 bg-gradient-to-r from-[#A3743D] to-[#C49A6C] text-white p-3 rounded-sm z-20"
          >
            ❮
          </button>

          {/* Previous Preview Image */}
          <div className="hidden md:block absolute left-20 opacity-40 scale-90 blur-sm z-10">
            <img
              src={
                floorPlans[
                  (current - 1 + floorPlans.length) % floorPlans.length
                ].image
              }
              alt="Previous Plan"
              className="h-48 object-contain rounded "
            />
          </div>

          {/* Main Slide */}
          <div className="mx-12 z-20 w-[400px] h-[400px] relative overflow-hidden shadow">
            {floorPlans.map((plan, index) => (
              <img
                key={index}
                src={plan.image}
                alt={plan.label}
                onClick={() => setShowModal(true)}
                className={`
                  absolute top-0 left-0 w-full h-full object-contain rounded-md shadow-md cursor-zoom-in transition-all duration-500 ease-in-out
                  ${
                    index === current
                      ? "opacity-100 translate-x-0 z-10"
                      : "opacity-0 translate-x-5 z-0"
                  }
                `}
              />
            ))}

            <div className="mt-4 text-[#1f1f1f] font-medium text-sm uppercase tracking-widest bg-white px-4 py-1 inline-block shadow relative z-20">
              {floorPlans[current].label}
            </div>
          </div>

          {/* Next Preview Image */}
          <div className="hidden md:block absolute right-20 opacity-40 scale-90 blur-sm z-10">
            <img
              src={floorPlans[(current + 1) % floorPlans.length].image}
              alt="Next Plan"
              className="h-48 object-contain rounded"
            />
          </div>

          {/* Right Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 bg-gradient-to-r from-[#A3743D] to-[#C49A6C] text-white p-3 rounded-sm z-20"
          >
            ❯
          </button>
        </div>
      </section>

      {/* Fullscreen Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={() => setShowModal(false)}
            className="absolute top-5 right-5 text-white text-4xl font-bold z-50"
          >
            &times;
          </button>

          {/* Fullscreen Image */}
          <img
            src={floorPlans[current].image}
            alt={floorPlans[current].label}
            className="max-w-full max-h-[90vh] rounded-lg shadow-lg"
          />
        </div>
      )}

      {/* site map */}

      <div className="bg-blue-50 py-12 px-4">
        {/* Heading */}
        <div className="text-left max-w-7xl mx-auto mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#444]">
            Site Map
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-[#A3743D]">
            Master Plan Of Puri The Aravallis
          </h3>
        </div>

        {/* Image with hover effect */}
        <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-md transition-transform duration-300 hover:scale-105">
          <img
            src="/img/Trac-ishca/masterPlan.webp" // 🔁 Replace with actual image path
            alt="Master Plan of Puri The Aravallis"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default GodrejAstra;
