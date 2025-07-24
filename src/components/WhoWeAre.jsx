import React from 'react';

const WhoWeAre = () => {
  return (
    <section className="py-16 px-4 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div>
          <img
            src="./img/Whoweare.webp"
            alt="City view"
            className="w-full h-auto rounded-md shadow-md"
          />
        </div>

        {/* Right Content */}
        <div className="text-center md:text-left">
          <p className="text-blue-500 italic text-lg mb-2">Who we are</p>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold text-blue-500 mb-6 leading-tight">
            Beyond Transactions, Building Relationships
          </h2>
          <p className="text-gray-700 mb-4">
            At Holistic Realty, we believe real estate is more than an investment—it’s the foundation of your future.
            That’s why we take the time to understand your aspirations, offering personalized solutions that align with
            your goals.
          </p>
          <p className="text-gray-700 mb-6">
            With unwavering transparency, deep industry expertise, and exclusive partnerships with top developers,
            we don’t just connect you to properties—we open doors to opportunities that create lasting success.
          </p>

          <button className="border bg-blue-500-black px-6 py-2 text-black rounded-full text-sm tracking-widest hover:bg-blue-500 hover:text-white transition">
            DISCOVER MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
