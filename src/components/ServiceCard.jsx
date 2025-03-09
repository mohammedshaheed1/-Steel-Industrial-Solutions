import React from 'react'
import steel from '../assets/steeldetail.png'
import interior from '../assets/interior.png'
import estimation from '../assets/estimation.png'
import { Link } from 'react-router-dom'


const ServiceCard = () => {
  return (
    <div className="flex flex-col w-full">
      <h1 className="text-black text-3xl sm:text-4xl m-5 sm:m-10 font-extrabold text-center">Services</h1>

      <div className="flex flex-col sm:flex-row justify-around w-full gap-4 mb-10">
        {/* Steel Detailing Service with Slide-In Animation */}
        
        <Link className="flex-1  sm:w-1/2" to={'/estimation'} >
          <img
            src={steel}
            alt="Steel"
            className="w-full h-auto border border-gray-400 rounded-lg px-4 py-6 sm:px-8 sm:py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500"
          />
          <p className="text-lg sm:text-xl text-black font-extrabold text-center sm:px-20 px-4">Steel Detailing</p>
        </Link>

        {/* Interior Designing Service with Fade-In Animation */}
        <Link className="flex-1 sm:w-1/2" to={'/interior'} >
          <img
            src={interior}
            alt="Interior"
            className="w-full h-131  border border-gray-400 rounded-lg px-4 py-6 sm:px-8 sm:py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500"
          />
          <p className="text-lg sm:text-xl text-black font-extrabold text-center px-4 sm:px-20">Interior Designing for Steel Structures</p>
        </Link>
      </div>

      <div className="flex justify-center items-center mb-10">
        {/* Estimation Service with Zoom-In Animation */}
        <Link className="" to={'/Steel'}>
          <img
            src={estimation}
            alt="Estimation"
            className="w-full  border border-gray-400 rounded-lg px-4 py-6 sm:px-8 sm:py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500"
          />
          <p className="text-lg sm:text-xl text-black font-extrabold text-center px-4 sm:px-20">Estimation</p>
        </Link>
      </div>
    </div>
  )
}

export default ServiceCard
