import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const categories = ["All", "Residential", "Commercial"];

const projects = [
  { name: "Tarc Ishva", path: "/properties/Tarc-Ishva" },
  { name: "Godrej Astra", path: "/properties/Godrej-Astra" },
  { name: "Tulip Monsella", path: "/properties/Tulip-Monsella" },
  { name: "Aipl Autograph", path: "/properties/Aipl-Autograph" },
];

const HeroSection = () => {
  const [active, setActive] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() === "") {
      setSuggestions([]);
      return;
    }

    const filtered = projects.filter((proj) =>
      proj.name.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(filtered);
  };

  const handleSuggestionClick = (path) => {
    navigate(path);
    setSearchTerm("");
    setSuggestions([]);
  };

  return (
    <section className="relative w-full min-h-screen flex items-start md:items-center justify-center px-4 md:px-1 pt-16 md:pt-0">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/img/background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center text-white w-full">
        <h1 className="text-3xl md:text-[3.25rem] font-bold leading-tight">
          Discover Luxury Living with White Luxe <br className="hidden md:block" />
          Your Trusted Real Estate Partner
        </h1>

        <p className="text-white/80 mt-6 text-lg md:text-xl">
          From modern apartments to premium villas, explore curated homes across
          Gurugram’s prime locations.{' '}
          <a href="#" className="text-[#A3743D] font-semibold hover:underline">
            View Projects
          </a>
        </p>

        {/* ===== Mobile Layout ===== */}
        <div className="mt-10 flex flex-col items-center gap-4 w-full md:hidden">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  active === cat
                    ? "bg-[#A3743D] text-white"
                    : "bg-white text-[#a3733dcb]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full max-w-sm px-1">
            <input
              type="text"
              placeholder="Enter a keyword"
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full px-4 py-3 bg-white rounded-full text-gray-800 text-sm outline-none shadow"
            />
            {suggestions.length > 0 && (
              <div className="absolute mt-2 w-full bg-white rounded-lg shadow-lg text-left z-20">
                {suggestions.map((proj) => (
                  <div
                    key={proj.path}
                    className="px-4 py-2 hover:bg-[#f6f3ef] cursor-pointer text-[#A3743D] font-medium"
                    onClick={() => handleSuggestionClick(proj.path)}
                  >
                    {proj.name}
                  </div>
                ))}
              </div>
            )}
          </div>

          <button className="bg-[#A3743D] hover:bg-[#a3733d9d] text-white px-5 py-3 text-sm font-semibold rounded-full">
            Search
          </button>

          <div className="mt-6 flex flex-col items-center gap-3 text-white text-sm px-4 text-center">
            <div>
              <p>✔ Need help choosing the right property?</p>
              <p>✔ Personalized Property Assistance</p>
              <p>✔ Prime Gurugram Locations</p>
            </div>
            <button className="mt-2 bg-white text-[#A3743D] font-semibold px-5 py-2 rounded-full shadow-md">
              Get Free Consultation
            </button>
          </div>
        </div>

        {/* ===== Desktop Layout ===== */}
        <div className="hidden md:flex flex-col items-center gap-6 mt-12">
          <div className="flex bg-white rounded-full shadow-lg overflow-hidden w-full max-w-3xl relative">
            <select
              value={active}
              onChange={(e) => setActive(e.target.value)}
              className="bg-[#A3743D] text-white text-base font-semibold px-4 py-3 outline-none cursor-pointer"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            <div className="relative w-full">
              <input
                type="text"
                placeholder="Enter a keyword"
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full px-4 py-3 text-gray-700 text-sm outline-none"
              />
              {suggestions.length > 0 && (
                <div className="absolute top-full mt-1 w-full bg-white rounded-md shadow-lg z-20 text-left">
                  {suggestions.map((proj) => (
                    <div
                      key={proj.path}
                      className="px-4 py-2 hover:bg-[#f6f3ef] cursor-pointer text-[#A3743D] font-medium"
                      onClick={() => handleSuggestionClick(proj.path)}
                    >
                      {proj.name}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button className="bg-gradient-to-r from-[#A3743D] to-[#C49A6C] hover:opacity-90 text-white px-8 py-3 text-base font-semibold">
              Search
            </button>
          </div>

          <div className="text-white text-sm text-center">
            <p>✔ Need help choosing the right property?</p>
            <p>✔ Personalized Property Assistance</p>
            <p>✔ Prime Gurugram Locations</p>
            <button className="mt-4 bg-white text-[#A3743D] font-semibold px-6 py-2 rounded-full shadow-md">
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;