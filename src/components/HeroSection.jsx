import React, { useState } from "react";

const categories = ["All", "Residential", "Commercial"];

const HeroSection = () => {
  const [active, setActive] = useState("All");

  return (
    <section className="relative w-full min-h-screen flex items-start md:items-center justify-center px-4 md:px-1 pt-16 md:pt-0">

      {/* Background with dark overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/img/background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 1,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center text-white w-full">
        <h1 className="text-3xl md:text-[3.25rem] font-bold leading-tight">
          Discover Luxury Living with White Luxe{" "}
          <br className="hidden md:block" /> Your Trusted Real Estate Partner
        </h1>

        <p className="text-white/80 mt-6 text-lg md:text-xl">
          From modern apartments to premium villas, explore curated homes across
          Gurugram’s prime locations.{" "}
          <a href="#" className="text-blue-400 font-semibold hover:underline">
            View Listings
          </a>
        </p>

        {/* ===== Mobile Layout (Buttons on Top) ===== */}
      {/* ===== Mobile Layout (Visible on small screens only) ===== */}
<div className="mt-10 flex flex-col items-center gap-4 w-full md:hidden">
  {/* Category Buttons */}
  <div className="flex flex-wrap justify-center gap-2">
    {categories.map((cat) => (
      <button
        key={cat}
        onClick={() => setActive(cat)}
        className={`px-4 py-2 rounded-full text-sm font-medium ${
          active === cat
            ? "bg-blue-500 text-white"
            : "bg-white text-blue-600"
        }`}
      >
        {cat}
      </button>
    ))}
  </div>

  {/* Input + Button */}
<div className="flex w-full max-w-[100%] sm:max-w-sm gap-2 px-1">


    <input
      type="text"
      placeholder="Enter a keyword"
      className="flex-1 px-4 py-3 bg-white rounded-full text-gray-800 text-sm outline-none shadow"
    />
    <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 text-sm font-semibold rounded-full">
      Search
    </button>
  </div>
</div>


        {/* ===== Desktop Layout (Dropdown Search) ===== */}
        <div className="hidden md:flex justify-center mt-12">
          <div className="flex bg-white rounded-full shadow-lg overflow-hidden w-full max-w-3xl">
            {/* Dropdown */}
            <select
              value={active}
              onChange={(e) => setActive(e.target.value)}
              className="bg-blue-500 text-white text-base md:text-lg font-semibold px-6 py-4 outline-none rounded-l-full cursor-pointer"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            {/* Input */}
           <input
  type="text"
  placeholder="Enter a keyword"
  className="flex-1 px-4 py-3 rounded-full text-gray-700 text-sm outline-none"
/>

            {/* Button */}
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



// import React, { useState } from "react";
// import "./HeroSection.css";

// const categories = ["All", "Residential", "Commercial"];

// const HeroSection = () => {
//   const [active, setActive] = useState("All");

//   return (
//     <section className="hero-section">
//       {/* Background with overlay */}
//       <div className="hero-bg">
//         <div className="hero-overlay" />
//       </div>

//       {/* Main content */}
//       <div className="hero-content">
//         <h1 className="hero-title">
//           Discover Luxury Living with White Luxe
//           <br className="hide-on-mobile" /> Your Trusted Real Estate Partner
//         </h1>

//         <p className="hero-description">
//           From modern apartments to premium villas, explore curated homes across
//           Gurugram’s prime locations. <a href="#">View Listings</a>
//         </p>

//         {/* Mobile Layout */}
//         <div className="mobile-search">
//           <div className="category-buttons">
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => setActive(cat)}
//                 className={`category-btn ${active === cat ? "active" : ""}`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>

//           <div className="mobile-input-wrapper">
//             <input
//               type="text"
//               placeholder="Enter a keyword"
//               className="mobile-input"
//             />
//             <button className="mobile-search-btn">Search</button>
//           </div>
//         </div>

//         {/* Desktop Layout */}
//         <div className="desktop-search">
//           <select
//             value={active}
//             onChange={(e) => setActive(e.target.value)}
//             className="desktop-dropdown"
//           >
//             {categories.map((cat) => (
//               <option key={cat} value={cat}>
//                 {cat}
//               </option>
//             ))}
//           </select>

//           <input
//             type="text"
//             placeholder="Enter a keyword"
//             className="desktop-input"
//           />

//           <button className="desktop-search-btn">Search</button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

