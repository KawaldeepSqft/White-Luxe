import React from "react";

const GodrejAstra = () => {
  return (
    <>
    <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('./img/background.jpg')" }}>
      <div className="absolute inset-0  bg-opacity-50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-start justify-between h-full px-6 md:px-20 py-10 md:py-20">
        {/* Left Text Info */}
        <div className="text-white max-w-xl">
          <h4 className="text-xl font-semibold mb-2">GURGAON</h4>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">M3M Capital By M3M India</h1>
          <p className="text-lg mb-1">Luxury Apartment</p>
          <p className="text-lg mb-4">Sector 113, Gurgaon</p>

          <div className="flex items-center">
            <span className="text-xl font-semibold">Starting Price</span>
            <span className="bg-white text-blue-600 text-xl font-bold px-4 py-1 rounded ml-2">
              ₹ 2.54 Cr*
            </span>
          </div>
        </div>

        {/* Right Form Box */}
        <div className="bg-blue-700 text-white p-8 rounded-lg w-full max-w-md mt-10 md:mt-0 md:ml-12 shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-4">Let’s Find Your Dream Home!</h2>
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
              className="w-full bg-white text-blue-700 font-semibold py-2 rounded mt-2 hover:bg-gray-200 transition"
            >
              Reserve Your Spot
            </button>
          </form>
        </div>
      </div>
    </section>


    <div className="w-full bg-white py-10 px-4 md:px-20">
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-8 gap-x-4 text-center text-gray-700">
    {/* Total Land */}
    <div className="flex flex-col items-center">
      <img src="/icons/land.png" alt="Land Icon" className="w-6 h-6 mb-2" />
      <p className="text-sm">Total Land</p>
      <p className="font-bold text-blue-900">12 Acres</p>
    </div>

    {/* Total Tower */}
    <div className="flex flex-col items-center border-l border-gray-300">
      <img src="/icons/tower.png" alt="Tower Icon" className="w-6 h-6 mb-2" />
      <p className="text-sm">Total Tower</p>
      <p className="font-bold text-blue-900">12 Acres</p>
    </div>

    {/* Total Units */}
    <div className="flex flex-col items-center border-l border-gray-300">
      <img src="/icons/units.png" alt="Units Icon" className="w-6 h-6 mb-2" />
      <p className="text-sm">Total Units</p>
      <p className="font-bold text-blue-900">1212</p>
    </div>

    {/* Payment Plan */}
    <div className="flex flex-col items-center border-l border-gray-300">
      <img src="/icons/plan.png" alt="Plan Icon" className="w-6 h-6 mb-2" />
      <p className="text-sm">Payment Plan</p>
      <p className="font-bold text-blue-900">23</p>
    </div>

    {/* Price */}
    <div className="flex flex-col items-center border-l border-gray-300">
      <img src="/icons/price.png" alt="Price Icon" className="w-6 h-6 mb-2" />
      <p className="text-sm">Price</p>
      <p className="font-bold text-blue-900">₹123 Cr - ₹123 Cr</p>
    </div>

    {/* Status */}
    <div className="flex flex-col items-center border-l border-gray-300">
      <img src="/icons/status.png" alt="Status Icon" className="w-6 h-6 mb-2" />
      <p className="text-sm">Status</p>
      <p className="font-bold text-blue-900">Under Construction</p>
    </div>
  </div>
    </div>


  <section className="bg-gradient-to-r from-cyan-300 to-blue-600 py-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src='./img/background.jpg'
            alt="M3M Crown"
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">M3M Crown</h2>
          <p className="text-base md:text-lg leading-relaxed">
            M3M Crown is an ultra-luxury residential development strategically located
            on Dwarka Expressway, offering an unmatched blend of elegance, exclusivity,
            and modern lifestyle. These upscale residences are designed for those who
            appreciate the finer things in life. Residents enjoy access to a magnificent
            clubhouse featuring world-class amenities, curated to enhance every aspect
            of luxurious living. From wellness and recreation to entertainment and
            community, every detail at M3M Crown is crafted for refined urban living.
          </p>
        </div>
      </div>
    </section>
    </>
    
  );
};

export default GodrejAstra;
