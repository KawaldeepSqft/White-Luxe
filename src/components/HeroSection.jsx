import React, { useState } from "react";

const categories = ["All", "For Sale", "New Listing"];

const HeroSection = () => {
  const [active, setActive] = useState("All");

  return (
    <section className="w-full min-h-screen bg-[#f9f9f9] px-4 md:px-10 flex items-center justify-center">
     <div className="max-w-5xl mx-auto text-center relative -translate-y-10 md:-translate-y-16">
        <h1 className="text-3xl md:text-[3.25rem] font-bold text-[#1d3557] leading-tight">
  Discover Luxury Living with White Luxe{" "}
  <br className="hidden md:block" /> Your Trusted Real Estate Partner
</h1>


        <p className="text-gray-500 mt-6 text-lg md:text-xl">
          From modern apartments to premium villas, explore curated homes across
          Gurugram’s prime locations.
          <a href="#" className="text-blue-600 font-semibold hover:underline">
            View Listings
          </a>
        </p>

        {/* Category Buttons */}
        <div className="flex justify-center gap-4 mt-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-3 rounded-lg text-base md:text-lg  ${
                active === cat
                  ? "bg-blue-500 text-white"
                  : " text-[#1d3557] font-medium"
              } hover:bg-blue-500 transition hover-text-[#fff]`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="mt-8 flex justify-center">
          <div className="flex bg-white rounded-full shadow-lg overflow-hidden w-full max-w-2xl">
            <input
              type="text"
              placeholder="Enter a keyword"
              className="flex-1 px-6 py-4 outline-none text-gray-600 text-base md:text-lg rounded-l-full"
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-base md:text-lg font-semibold rounded-r-full">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
