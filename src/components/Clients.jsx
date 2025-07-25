import React, { useEffect } from "react";
import client1 from "/img/dlf.png";
// import client2 from "/img/dlf.png";
import client3 from "/img/emaar.png";
import client4 from "/img/ganga.png";
import client5 from "/img/ROF.png";
import client6 from "/img/download.png";
import client7 from "/img/godrejj.png";
import client8 from "/img/tarc.png";
import Marquee from "react-fast-marquee";


// aos
import AOS from "aos";
import "aos/dist/aos.css";

const Clients = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div data-aos="fade-down" className="text-blue-600 bold">
      <h1 className="text-3xl font-semibold text-center">We Work With</h1>
      <div className="flex justify-center items-center mt-2">
        <div className="bg-blue-600 h-1 w-16 rounded"></div>
      </div>
      {/* <p className="text-gray-700 text-center mt-7 mb-10 text-lg">
        Our Learners Work at Global Companies & Startups
      </p> */}
      {/* Logo slider */}
      <Marquee pauseOnHover="true" className="flex items-center">
        <img className="w-28 mr-20" src={client1} alt="img1" />
        {/* <img className="w-28 mr-20" src={client2} alt="img2" />*/}
        <img className="w-28 mr-20" src={client3} alt="img3" />
        <img className="w-28 mr-20" src={client4} alt="img4" />
        <img className="w-28 mr-20" src={client5} alt="img5" />
        <img className="w-28 mr-20" src={client6} alt="img6" />
        <img className="w-28 mr-20" src={client7} alt="img7" />
        <img className="w-28 mr-20" src={client8} alt="img8" />
      </Marquee>
    </div>
  );
};
export default Clients;
