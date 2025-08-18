import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Qualified Agents',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar leo.',
      img: './img/Customer.svg',
   
      },
    {
      title: 'Excellent service',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar leo.',
      img: './img/Legal-Assistance.svg',
    },
    {
      title: 'Customer Care',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar leo.',
      img: './img/doco.svg',

    },
  ];

return (
  <section className="py-16 px-4 md:px-10 bg-white text-center">
    <div className="max-w-4xl mx-auto mb-10">
      <p className="font-medium tracking-widest uppercase mb-2 bg-gradient-to-r from-[#AF882E] to-[#D7AE29] bg-clip-text text-transparent">
        Buy • Sell
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-[#444] mb-4">
        We help people buy and sell homes
      </h2>
      <p className="text-gray-600">
        Home buying can be a stressful process, but we take the guess work out of finding a real estate agent.
        We’ll help you find the perfect match to purchase your ideal home.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
      {services.map((service, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center p-6 hover:shadow-xl rounded-lg transition"
        >
          <div className="w-36 h-36 flex items-center justify-center mb-6">
            <img
              src={service.img}
              alt={service.title}
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
          <p className="text-gray-600 text-sm">{service.description}</p>
          <a
            href="#"
            className="mt-4 inline-block font-medium hover:underline bg-gradient-to-r from-[#AF882E] to-[#D7AE29] bg-clip-text text-transparent"
          >
            Learn More
          </a>
        </div>
      ))}
    </div>
  </section>
);
};

export default Services;
