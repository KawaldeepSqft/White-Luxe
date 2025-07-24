import React from 'react';

const properties = [
  {
    name: 'DLF parivana',
    location: 'SECTOR 112, DWARKA EXPRESSWAY',
    image: './img/banner.webp',
  },
  {
    name: 'Tulip Monsella',
    location: 'SECTOR 63, GOLF COURSE EXTENSION',
    image: './img/banner.webp',
  },
  {
    name: 'Tarc Ishva',
    location: 'SECTOR 106, DWARKA EXPRESSWAY',
    image: './img/banner.webp',
  },
];

const DiscoverProperties = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Discover Our Properties</h2>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {properties.map((property, index) => (
            <div
              key={index}
              className="group relative h-[500px] overflow-hidden rounded-xl shadow-md cursor-pointer"
            >
              {/* Background image */}
              <img
                src={property.image}
                alt={property.name}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay (title always visible) */}
              <div className="absolute bottom-0 w-full text-white  p-5 bg-gradient-to-t from-black via-black/50 to-transparent transition-all duration-500">
                <h3 className="text-xl font-bold uppercase">{property.name}</h3>

                {/* Location + Button (hidden by default, show on hover) */}
                <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <p className="text-sm mt-2">{property.location}</p>
                  <button className="mt-3 bg-blue-500 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2 rounded-full">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscoverProperties;
