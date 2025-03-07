import React from 'react';
import footer from '../assets/foot.png';
import logo from '../assets/six.png';

const Footer = () => {
  return (
    <div
      className="flex items-end w-full"
      style={{
        backgroundImage: `url(${footer})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Ensures the container takes up full viewport height
      }}
    >
      <div className="flex flex-col mt-10 sm:flex-row items-center sm:items-start w-full bg-white px-4">
        <div className="flex items-center mr-5 mb-10 bg-white  sm:mb-0">
          <img
            src={logo}
            alt=""
            className="h-10 sm:w-16 md:w-20 cursor-pointer mr-2 "
          />
          <p
            className="text-sm sm:text-base md:text-lg italic py-2 font-bold text-black bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 cursor-pointer transform transition-all duration-300 hover:scale-110 text-center sm:text-left"
          >
            Steel Industrial Solutions
          </p>
        </div>
        <p className="text-sm bg-white  sm:text-base md:text-lg italic py-2 font-bold text-black bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 cursor-pointer transform transition-all duration-300 hover:scale-110 text-center sm:text-left">
          sis.steelindustrialsolutions@gmail.com
        </p>
      </div>
    </div>
  );
};

export default Footer;
