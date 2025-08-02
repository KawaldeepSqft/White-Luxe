import React, { useState, useEffect } from "react";
import { FaMapMarkedAlt, FaBuilding, FaRupeeSign } from "react-icons/fa";
import { MdApartment } from "react-icons/md";
import { RiBuilding2Line } from "react-icons/ri";
import { TbRulerMeasure } from "react-icons/tb";

import img1 from '/img/AiplAutograp/g1.jpg';
import img2 from '/img/AiplAutograp/g2.jpg';
import img3 from '/img/AiplAutograp/g3.jpg';
import img4 from '/img/AiplAutograp/g5.jpg';
import img5 from'/img/AiplAutograp/g7.jpg';
import img6 from '/img/AiplAutograp/g8.jpg';
// import img7 from "/img/Godrej-Astra/h1.png"
// import img8 from "/img/Godrej-Astra/h1.png"
import { FaCheckCircle } from "react-icons/fa";
import Footer from "../Footer";
const images = [img1, img2, img3, img4, img5, img6];

const AiplAutograph = () => {
  const units = [
    { type: "Virtual Office ", size: "500 Sq.Ft*", price: "Price on call" },
    { type: "Self Use Office", size: "4698 Sq.Ft*", price: "Price on call" },
    { type: "Restaurants", size: "951 SQ.FT", price: "Price on call" },

  ];

  const data = [
    {
      icon: <TbRulerMeasure size={24} />,
      title: "Total Land",
      value: "6.67 Acres",
    },
    {
      icon: <RiBuilding2Line size={24} />,
      title: "Total Tower",
      value: "3",
    },
    
    {
      icon: <FaBuilding size={24} />,
      title: "Payment Plan",
      value: "CLP",
    },
    {
      icon: <FaRupeeSign size={24} />,
      title: "Price",
      value: " 7.18 Cr",
    },
    {
      icon: <FaRupeeSign size={24} />,
      title: "Status",
      value: "Under Construction",
    },
  ];

  const amenities = [
    // {
    //   image: "https://www.propertydekho247.com/img/FreshAmenities/Library.jpeg",
    //   label: "Library",
    // },
    // {
    //   image:
    //     "https://www.propertydekho247.com/img/FreshAmenities/IntercomFacility.jpeg",
    //   label: "Intercom Facility",
    // },
    {
      image:
        "https://www.propertydekho247.com/img/FreshAmenities/Security_guard.jpeg",
      label: "Security Guard",
    },
    // {
    //   image:
    //     "https://www.propertydekho247.com/img/FreshAmenities/swiiming_pool.jpeg",
    //   label: "Swimming Pool",
    // },
    // {
    //   image:
    //     "https://www.propertydekho247.com/img/FreshAmenities/Community_Center.jpeg",
    //   label: "Community Centre",
    // },
    {
      image:
        "https://www.propertydekho247.com/img/FreshAmenities/Visitor_parking.jpeg",
      label: "Visitor Parking",
    },
    // {
    //   image:
    //     "https://www.propertydekho247.com/img/FreshAmenities/Piped_gas.jpeg",
    //   label: "Piped Gas",
    // },
    // {
    //   image: "https://www.propertydekho247.com/img/FreshAmenities/Gym.jpeg",
    //   label: "GYM",
    // },
    {
      image:
        "https://www.propertydekho247.com/img/FreshAmenities/Waste_disposal.png",
      label: "Waste Disposal",
    },
    {
      image:
        "https://www.propertydekho247.com/img/FreshAmenities/CafeteriaFoodCourt.jpeg",
      label: "Dining Options",
    },
    {
      image: "https://www.propertydekho247.com/img/FreshAmenities/park.jpeg",
      label: "Park",
    },
    {
      image: "https://www.propertydekho247.com/img/FreshAmenities/Lift.jpeg",
      label: "Lift",
    },
    {
      image:
        "https://www.propertydekho247.com/img/FreshAmenities/Maintainance_Staff.jpeg",
      label: "Maintenance Staff",
    },
   
   
    {
      image: "https://www.propertydekho247.com/img/FreshAmenities/ATMs.jpeg",
      label: "ATMs",
    },
    {
      image:
        "https://www.propertydekho247.com/img/FreshAmenities/Conference_room.jpeg",
      label: "Restrooms",
    },
  
  ];

  const floorPlans = [
    // {
    //   label: " Floor Plan",
    //   image: '/img/AiplAutograp/map.jpg',
    // },
    // {
    //   label: "3 BHK Floor Plan",
    //     image: "/img/TulipMonsella/3bhk2.jpeg",
    // },
    // {
    //   label: "4 BHK Floor Plan",
    //    image: "/img/TulipMonsella/4bhk.jpeg",
    // },
    // {
    //   label: "5 BHK Floor Plan",
    //     image: "/img/TulipMonsella/5bhk.jpeg",
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
      style={{ backgroundImage: "url('/img/AiplAutograp/b1.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-between h-full px-6 md:px-20 pt-24 pb-10 md:py-20">
        {/* Top Content */}
        <div className="flex flex-col md:flex-row items-start justify-between">
          {/* Left Text Info */}
          <div className="text-white max-w-xl">
            <h4 className="text-2xl font-semibold mb-2">GURGAON</h4>
            <h1 className="text-5xl md:text-5xl font-bold mb-4">
             Aipl Autograph
            </h1>
            <p className="text-xl font-bold mb-1">Office Space &
Restaurants (Retail)</p>
            <p className="text-xl  font-bold mb-4">
            Sector 108, Gurugram
            </p>

            <div className="flex items-center">
              <span className="text-xl font-semibold">Starting Price</span>
              <span className="bg-white text-[#a16e20] text-xl font-bold px-4 py-1 rounded ml-2">
                ₹ 71 Lakhs*
              </span>
            </div>
          </div>

          {/* Right Form Box */}
          <div className="bg-gradient-to-r from-[#A3743D] to-[#C49A6C] text-white p-8 rounded-lg w-full max-w-md mt-10 md:mt-0 md:ml-12 shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-4">
              Let’s Find Your Dream Home!
            </h2>
            <p className="text-center text-sm mb-6">
              Please fill out the form below, our expert will get back to you
              soon.
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

      <div className="relative bg-[#eaf6ff] py-16 px-4 lg:px-20 overflow-hidden">
        {/* Half circle background effect */}
        <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] bg-[#A3743D] rounded-full opacity-60 z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <img
              src="/img/AiplAutograp/g1.jpg"
              alt="Puri The Aravallis"
              className="rounded-xl shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 bg-gradient-to-r from-[#A3743D] to-[#C49A6C] text-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-2 text-white">About Project</h3>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Aipl Autograph
            </h2>
            <p className="text-white text-base leading-relaxed">
            AIPL Autograph is a Grade ‘A’ office development spread over 6.13 acres, offering a modern, interactive environment for tenants and retail patrons. With unique floor plates ranging from 12,000 to 120,000 sq. ft., it maximizes workspace and views. A 15,000 sq. ft. triple-height entrance lobby sets a grand tone, while 15–24 PAX high-speed elevators with Destination Control ensure smooth movement. The iconic, energy-efficient façade features a double-glazed unitized system with stone cladding. The project includes four levels of basement parking, a dedicated drop-off area, and excellent retail visibility—making it a landmark commercial destination.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full px-4 py-12 lg:px-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How Much <br />
            <span className="text-[#A3743D]">
             Aipl Autograph, Sector 54, Golf Course Road, Gurugram
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
         Aipl Autograph
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
           Aipl Autograph Amenities
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
          <h3 className="text-[#A3743D] text-2xl font-bold mb-4">
           Aipl Autograph
          </h3>
          <hr className="border-gray-300 mb-6" />

          <ul className="space-y-4 text-lg text-gray-800">
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-[#A3743D] mt-1 text-base sm:text-lg" />
             0.8 km. - DPS International
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-[#A3743D] mt-1 text-base sm:text-lg" />
    0.3 km. - St. Xavier’s School
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-[#A3743D] mt-1 text-base sm:text-lg" />
            5.6 km. - Rapid Metro Sector 55-56
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-[#A3743D] mt-1 text-base sm:text-lg" />
             0.3 km. - Golf Course Extn. Road
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-[#A3743D] mt-1 text-base sm:text-lg" />
      8.0 km. - Huda City Centre Metro Station
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-[#A3743D] mt-1 text-base sm:text-lg" />
          25 km. - IGI Airport
            </li>
           
          </ul>
        </div>

        {/* Image Section */}
        <div className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
          <img
            src='/img/AiplAutograp/map.webp'
            alt="Location Map"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* floor plan  */}

     


      {/* site map */}

      <div className="bg-blue-50 py-12 px-4">
        {/* Heading */}
        <div className="text-left max-w-7xl mx-auto mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#444]">
            Site Map
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-[#A3743D]">
            Master Plan Of Aipl Autograph
          </h3>
        </div>

        {/* Image with hover effect */}
        <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-md transition-transform duration-300 hover:scale-105">
          <img
            src='/img/AiplAutograp/map.jpg' // 🔁 Replace with actual image path
            alt="Master Plan of TulipMonsella"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default AiplAutograph;
