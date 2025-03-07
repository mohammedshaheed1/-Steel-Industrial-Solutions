import React from 'react';
import background from '../assets/imagehome.png';
import Navbar from '../components/Navbar';
import HomeText from '../components/HomeText';

const Home = () => {
  return (
    <div
      className="w-full"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Ensures the container takes up full viewport height
      }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <div
        className="flex items-center  h-full"
        style={{
          paddingTop: '80px', // To account for the fixed navbar height (adjust this as needed)
          boxSizing: 'border-box', // Ensures padding doesn't affect the height of the container
        }}
      >
        <HomeText />
      </div>
    </div>
  );
};

export default Home;
