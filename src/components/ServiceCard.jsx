import React from 'react'
import steel from '../assets/steeldetail.png'
import interior from '../assets/interior.png'
import estimation from '../assets/estimation.png'

const ServiceCard = () => {
  return (
    <div>
      <h1 className='text-black text-4xl  m-10 font-extrabold '>Services</h1>
      <div className='flex justify-between gap-4 mb-10'>
          <div className='w-1/2'>
            <img src={steel} alt="Steel" className='w-full' />
            <p className='text-xl text-black font-extrabold px-20'>Steel Detailing</p>
          </div>
          <div className='w-1/2'>
            <img src={interior} alt="Interior" className='w-200 h-100' />
            <p className='text-xl text-black font-extrabold '>Interior Designing for Steel
            Structures</p>
          </div>
      </div>
      <div className='flex justify-center items-center mb-10'>
        <div>
         <img src={estimation} alt="" className='w-150' />
         <p className='text-xl text-black font-extrabold '>Estimation
         </p>
         </div>
      </div>
    </div>
  )
}

export default ServiceCard
