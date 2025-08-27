import React, { useState, useEffect } from "react";
import { FaMapMarkedAlt, FaBuilding, FaRupeeSign } from "react-icons/fa";
import { MdApartment } from "react-icons/md";
import { RiBuilding2Line } from "react-icons/ri";
import { TbRulerMeasure } from "react-icons/tb";

import img1 from "/img/DlfPrivena/g2.jpg";
import img2 from "/img/DlfPrivena/g1.jpg";
import img3 from "/img/DlfPrivena/g3.jpg";
import img4 from "/img/DlfPrivena/g4.jpg";
import img5 from "/img/DlfPrivena/g5.jpg";
// import img6 from "/img/DlfPrivena/g2.jpg";
// import img7 from "/img/background.jpg";
// import img8 from "/img/background.jpg";
import { FaCheckCircle } from "react-icons/fa";
import Footer from "../Footer";
const images = [img1, img2, img3, img4, img5,];

const DLFPrivanaNorth = () => {
  const units = [
    { type: "4 BHK + SR", size: "3977 Sq.ft", price: "Price on call" },
    { type: "Penthouse", size: "7714 Sq.ft ", price: "Price on call" },
  ];

  const data = [
    {
      icon: <TbRulerMeasure size={24} />,
      title: "Total Land",
      value: "17.7 Acres",
    },
    {
      icon: <RiBuilding2Line size={24} />,
      title: "Total Tower",
      value: "6",
    },
    {
      icon: <MdApartment size={24} />,
      title: "Total Units",
      value: "1152",
    },
    {
      icon: <FaBuilding size={24} />,
      title: "Payment Plan",
      value: "Flexible",
    },
    {
      icon: <FaRupeeSign size={24} />,
      title: "Price",
      value: "9.34Cr",
    },
    {
      icon: <FaRupeeSign size={24} />,
      title: "Possession",
      value: "July 2031",
    },
  ];

  const amenities = [
    { image: "https://www.propertydekho247.com/img/FreshAmenities/Library.jpeg", label: "Library" },
    { image: "https://www.propertydekho247.com/img/FreshAmenities/IntercomFacility.jpeg", label: "Intercom Facility" },
    { image: "https://www.propertydekho247.com/img/FreshAmenities/Security_guard.jpeg", label: "Security Guard" },
    { image: "https://www.propertydekho247.com/img/FreshAmenities/swiiming_pool.jpeg", label: "Swimming Pool" },
    { image: "https://www.propertydekho247.com/img/FreshAmenities/Community_Center.jpeg", label: "Community Centre" },
    { image: "https://www.propertydekho247.com/img/FreshAmenities/Visitor_parking.jpeg", label: "Visitor Parking" },
    { image: "https://www.propertydekho247.com/img/FreshAmenities/Piped_gas.jpeg", label: "Piped Gas" },
    { image: "https://www.propertydekho247.com/img/FreshAmenities/Gym.jpeg", label: "GYM" },
    { image: "https://www.propertydekho247.com/img/FreshAmenities/Waste_disposal.png", label: "Waste Disposal" },
    { image: "https://www.propertydekho247.com/img/FreshAmenities/CafeteriaFoodCourt.jpeg", label: "Cafeteria/Food Court" },
    { image: "https://www.propertydekho247.com/img/FreshAmenities/park.jpeg", label: "Park" },
    { image: "https://www.propertydekho247.com/img/FreshAmenities/Lift.jpeg", label: "Lift" },
    { image: "https://www.propertydekho247.com/img/FreshAmenities/Maintainance_Staff.jpeg", label: "Maintenance Staff" },
    { image: "https://www.propertydekho247.com/img/FreshAmenities/Kids_playarea.jpeg", label: "Kids Play Area" },
    { image: "http://propertydekho247.com/img/FreshAmenities/jogging_track.jpeg", label: "Jogging Track" },
    { image: "https://www.propertydekho247.com/img/FreshAmenities/ATMs.jpeg", label: "ATMs" },
    { image: "https://www.propertydekho247.com/img/FreshAmenities/Conference_room.jpeg", label: "Conference Room" },
    { image: "https://www.propertydekho247.com/img/FreshAmenities/Club_house.jpeg", label: "Club House" },
  ]

  const floorPlans = [
    // {
    //   label: "3 BHK Floor Plan",ha
    //   image: "/img/background1.jpg",
    // },
    {
      label: "4 BHK Floor Plan",
      image: "/img/DlfPrivena/f1.jpg",
    },
    {
      label: "Pent House",
      image: "/img/DlfPrivena/f2.jpg",
    },
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
      style={{ backgroundImage: "url('/img/DlfPrivena/Banner.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-between h-full px-6 md:px-20 pt-19 pb-10 md:py-20">
        {/* Top Content */}
        <div className="flex flex-col md:flex-row items-start justify-between">
          {/* Left Text Info */}
          <div className="text-white max-w-xl">
            <h4 className="text-2xl text-[#333] font-semibold mb-2">GURGAON</h4>
            <h1 className="text-5xl  text-[#333] md:text-5xl font-bold mb-4">DLF Privana North</h1>
            <p className="text-xl   text-[#333] font-bold mb-1">Luxury Apartment</p>
            <p className="text-xl  text-[#333]  font-bold mb-4">Sector 77, Southern Peripheral Road, Gurugram</p>

            <div className="flex items-center">
              <span className="text-xl text-[#333] font-semibold">Starting Price</span>
              <span className="bg-white  text-[#a16e20] text-xl font-bold px-4 py-1 rounded ml-2">
                ₹ 9.7 Cr*
              </span>
            </div>
          </div>

          {/* Right Form Box */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 text-white p-8 rounded-lg w-full max-w-md mt-10 md:mt-0 md:ml-12 shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-4 text-[#333] ">
              Let’s Find Your Dream Home!
            </h2>
            <p className="text-center text-sm mb-6 text-[#333]">
              Please fill out the form below, our expert will get back to you
              soon.
            </p>

            <form className="space-y-4">
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#333]">
                  <i className="fas fa-user" />
                </span>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full pl-10 pr-4 py-2 rounded bg-transparent border-b border-white placeholder-white focus:outline-none text-white"
                />
              </div>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#333]">
                  <i className="fas fa-envelope" />
                </span>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full pl-10 pr-4 py-2 rounded bg-transparent border-b border-white placeholder-white focus:outline-none text-white"
                />
              </div>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white">
                  <i className="fas fa-phone" />
                </span>
                <input
                  type="tel"
                  placeholder="Your Number"
                  className="w-full pl-10 pr-4 py-2 rounded bg-transparent border-b border-white placeholder-white focus:outline-none text-white"
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
        {/* Bottom Info Boxes (Hidden on Mobile, Visible on md and above) */}
        <div className="hidden md:flex bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg flex-wrap justify-center items-center px-4 md:px-10 py-6 mt-6 md:mt-18 gap-6">
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
      {/* Mobile Only Info Box Section (visible <600px) */}
      <div className="md:hidden bg-white border-[#fff] rounded-xl shadow-lg flex flex-wrap justify-center items-center px-4 py-6 mt-6 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center min-w-[120px] px-4"
          >
            <div className="text-black mb-1 text-2xl flex items-center justify-center h-10 w-10">
              {item.icon}
            </div>
            <div className="text-sm text-gray-700">{item.title}</div>
            <div className="font-semibold text-black mt-1">{item.value}</div>
          </div>
        ))}
      </div>

      {/* table  */}

      {/* banner and about */}

      <div className="relative bg-[#fff] py-16 px-4 lg:px-20 overflow-hidden">
        {/* Half circle background effect */}
        <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] bg-[#D7AE29] rounded-full opacity-60 z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <img
              src="/img/Trac-ishca/g3.webp"
              alt="DLF Privana North"
              className="rounded-xl shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 bg-gradient-to-r from-[#fff] to-[#fff] text-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-2 text-black">About Project</h3>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">

            </h2>
            <p className="text-black text-base leading-relaxed">
             DLF Privana North is a premium luxury residential development located in Gurugram, India. Thoughtfully designed with modern architecture and expansive living spaces, it offers a perfect blend of elegance, comfort, and functionality. With a wide range of world-class amenities, this upscale project redefines contemporary living—making it the ideal choice for those who seek both sophistication and convenience in one address.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full px-4 py-12 lg:px-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How Much <br />
            <span className="text-[#D7AE29]">
             DLF Privana North - Sector 77, Southern Peripheral Road, Gurugram
            </span>
          </h2>

          <div className="overflow-x-auto rounded-xl shadow-lg">
            <table className="min-w-full border border-gray-200">
              <thead>
                <tr className="bg-gradient-to-r from-[#D7AE29] to-[#D7AE29] text-white text-left text-sm md:text-base">
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
        <h3 className="text-2xl text-[#D7AE29] font-semibold mb-6">
         DLF Privana North
        </h3>

        {/* Main Image */}
        <div className="w-fit mx-auto mb-6">
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
                selectedImage === img ? "[#D7AE29]" : "border-transparent"
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
          <h3 className="text-3xl font-bold text-[#D7AE29] mb-8">
           DLF Privana North Amenities
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
          <h3 className="text-[#D7AE29] text-2xl font-bold mb-4">DLF Privana North</h3>
          <hr className="border-gray-300 mb-6" />

          <ul className="space-y-4 text-lg text-gray-800">
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-[#D7AE29] mt-1 text-base sm:text-lg" />
             Broadways Int'l School – 0.6 km
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-[#D7AE29] mt-1 text-base sm:text-lg" />
          Yaduvanshi Int'l School – 2.9 km
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-[#D7AE29] mt-1 text-base sm:text-lg" />
              HUDA City Centre – 10.9 km


            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-[#D7AE29] mt-1 text-base sm:text-lg" />
            Cyber City – 14.8 km
            </li>

          </ul>
        </div>

        {/* Image Section */}
        <div className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
          <img
            src="/img/DlfPrivena/map.jpg"
            alt="Location Map"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* floor plan  */}

      <section className="bg-white py-12 px-4 lg:px-32 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#D7AE29] mb-8">
          FLOOR PLANS
          <div className="w-16 h-1 bg-[#D7AE29] mx-auto mt-2" />
        </h2>

        <div className="relative flex items-center justify-center max-w-6xl mx-auto">
          {/* Left Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 bg-gradient-to-r from-[#D7AE29] to-[#D7AE29] text-white p-3 rounded-sm z-20"
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
            className="absolute right-0 bg-gradient-to-r from-[#D7AE29] to-[#D7AE29] text-white p-3 rounded-sm z-20"
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
          <h3 className="text-2xl md:text-3xl font-bold text-[#D7AE29]">
            Master Plan Of DLF Privana North
          </h3>
        </div>

        {/* Image with hover effect */}
        <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-md transition-transform duration-300 hover:scale-105">
          <img
            src="/img/DlfPrivena/sitemap.jpg" // 🔁 Replace with actual image path
            alt="Master Plan of DLF Privana North"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default DLFPrivanaNorth;
