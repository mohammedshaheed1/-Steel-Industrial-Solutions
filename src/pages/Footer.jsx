import React from 'react';
import footer from '../assets/foot.png';
import logo from '../assets/six.png';
import insta from '../assets/setInsta.jpg';
import linkedin from '../assets/linkedin.png';

const Footer = () => {
  return (
    <div
      className="flex items-center justify-center w-full"
      style={{
        backgroundImage: `url(${footer})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Ensures the container takes up full viewport height
        paddingBottom: '3rem', // Adds space at the bottom
      }}
    >
      <div className="flex flex-col items-center sm:flex-row sm:justify-between sm:items-start w-full max-w-6xl bg-white bg-opacity-80 p-6 rounded-lg shadow-lg">
        <div className="flex items-center justify-center sm:justify-start mb-4 sm:mb-0">
          <img
            src={logo}
            alt="Steel Industrial Solutions Logo"
            className="h-12 sm:w-16 md:w-20 cursor-pointer mr-3"
          />
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-center sm:text-left text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
            Steel Industrial Solutions
          </p>
        </div>
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <p className="text-base sm:text-lg md:text-xl font-semibold text-black mb-2">
            sis.steelindustrialsolutions@gmail.com
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.instagram.com/steel_industrial_solutions?igsh=MXBwbjl3c3dsbW0zMg=="
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-all duration-300 hover:scale-110"
            >
              <img
                src={insta}
                alt="Instagram"
                className="h-8 sm:h-10 md:h-12 hover:opacity-80"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/steel-industrial-solutions-sis/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-all duration-300 hover:scale-110"
            >
              <img
                src={linkedin}
                alt="LinkedIn"
                className="h-8 sm:h-10 md:h-12 hover:opacity-80"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
