import React from 'react';
import land from '../assets/land.png';

const Descriptions = () => {
  return (
    <div id='about' className='flex flex-col md:flex-row items-center w-full h-[100vh] bg-black px-6'>
      {/* Text Section */}
      <div className='w-full mt-15 md:w-1/2'>
        <p className='text-white text-sm leading-8 md:text-2xl lg:leading-12  font-bold'>
          SIS is a team of dedicated professionals with extensive experience in the steel industry. We specialize in providing innovative solutions that leverage technology to enhance efficiency, optimize processes, and support our partners in the industry. Our focus is on delivering technical solutions that reduce time, labor costs, and waste while maximizing profitability for companies in the steel sector.
        </p>
      </div>

      {/* Image Section */}
      <div className='w-full md:w-1/2 mt-6 md:mt-0'>
        <div className='w-full'>
          <img src={land} alt="" className='h-80 w-full object-cover   h-auto border border-gray-400 rounded-lg px-4 py-6 sm:px-8 sm:py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500' />
        </div>
      </div>
    </div>
  );
}

export default Descriptions;
