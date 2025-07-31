import React from 'react';
import { Link } from 'react-router-dom';

const properties = [
  {
    name: 'Tarc Ishva',
    location: 'Sector - 63A, Gurugram',
    image: './img/tarc-ishva.jpg',
    path: '/properties/godrej-astra',
  },
  {
    name: 'Godrej Astra',
    location: 'Sector 54, Golf Course Road, Gurgaon',
    image: './img/godrej-astra-popup.webp',
    path: '/properties/godrej-astra',
  },
  {
    name: 'Tulip Monsella',
    location: 'GOLF COURSE ROAD, GURUGRAM',
    image: './img/a438f6_f40e3430b8e540948f3c7a7e59ef26c5~mv2.avif',
    path: '/properties/godrej-astra',
  },
];

const DiscoverProperties = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-[#A3743D]">Discover Our Properties</h2>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {properties.map((property, index) => (
            <div
              key={index}
              className="relative h-[500px] overflow-hidden rounded-xl shadow-md cursor-pointer"
            >
              <Link to={property.path}>
              <img
                src={property.image}
                alt={property.name}
                className="w-full h-full object-cover"
              />

              <div className="absolute bottom-0 w-full text-white p-5 bg-gradient-to-t from-black via-black/50 to-transparent">
                <h3 className="text-xl font-bold uppercase">{property.name}</h3>

                <p className="text-sm mt-2">{property.location}</p>

                  <button className="mt-3 bg-gradient-to-r from-[#A3743D] to-[#C49A6C] hover:bg-[#a3733dc5] text-white text-sm font-medium px-5 py-2 rounded-full">
                    View Details
                  </button>
              </div>
                </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscoverProperties;
