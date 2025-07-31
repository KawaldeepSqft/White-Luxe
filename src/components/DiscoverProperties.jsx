import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link

const properties = [
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
  {
    name: 'Tarc Ishva',
    location: 'SECTOR 106, DWARKA EXPRESSWAY',
    image: './img/tarc-ishva.jpg',
    path: '/properties/godrej-astra',
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
              <img
                src={property.image}
                alt={property.name}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute bottom-0 w-full text-white p-5 bg-gradient-to-t from-black via-black/50 to-transparent transition-all duration-500">
                <h3 className="text-xl font-bold uppercase">{property.name}</h3>

                <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <p className="text-sm mt-2">{property.location}</p>

                  <Link to={property.path}>
                    <button className="mt-3 bg-blue-500 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2 rounded-full">
                      View Details
                    </button>
                  </Link>
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
