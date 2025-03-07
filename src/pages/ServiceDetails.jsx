import React from 'react'
import steel from '../assets/steeldetail.png'
import interior from '../assets/interior.png'
import estimation from '../assets/estimation.png'

const ServiceDetails = () => {
  return (
    <div>
      <div className='flex flex-col md:flex-row items-center w-full h-[100vh] bg-gray-200 border px-6'>
        {/* Text Section */}
        <div className='w-full md:w-1/2'>
          <p className='text-black text-sm leading-8 md:text-2xl lg:leading-12 font-bold'>
            Our highly skilled team of steel detailers brings extensive experience and in-depth expertise in
            industry standards, including AISC, CISC, BS, and IS codes. We offer comprehensive steel
            detailing services, including fabrication drawings, erection drawings, CNC programs for cutting
            and drilling, and other precision detailing solutions—ensuring accuracy and efficiency for your
            projects.
          </p>
        </div>

        {/* Image Section */}
        <div className='w-full md:w-1/2 mt-6 md:mt-0'>
          <div className='w-full'>
            <img src={steel} alt="" className='h-80 w-full object-cover h-auto border border-gray-400 rounded-lg px-4 py-6 sm:px-8 sm:py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500' />
          </div>
        </div>
      </div>
      <div className='flex flex-col md:flex-row items-center w-full h-[100vh] bg-gray-200 border px-6'>
        {/* Text Section */}
        <div className='w-full md:w-1/2'>
          <p className='text-black text-sm leading-8 md:text-2xl lg:leading-12 font-bold'>
            Our highly skilled interior designers specialize in structural steel interiors, bringing innovative
            designs while respecting cultural elements and to clients unique preferences.

          </p>
        </div>

        {/* Image Section */}
        <div className='w-full md:w-1/2 mt-6 md:mt-0'>
          <div className='w-full'>
            <img src={interior} alt="" className='h-100 w-full cover border border-gray-400 rounded-lg px-4 py-6 sm:px-8 sm:py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500' />
          </div>
        </div>
      </div>


      <div className='flex flex-col md:flex-row items-center w-full h-[100vh] bg-gray-200 border px-6'>
        {/* Text Section */}
        <div className='w-full md:w-1/2'>
          <p className='text-black text-sm leading-8 md:text-2xl lg:leading-12 font-bold'>
            We understand the importance of cost estimation for every project. Our dedicated team
            specializes in providing accurate cost estimation services, working closely with the design
            team and our clients professional teams to ensure precise and efficient budgeting.


          </p>
        </div>

        {/* Image Section */}
        <div className='w-full md:w-1/2 mt-6 md:mt-0'>
          <div className='w-full'>
            <img src={estimation} alt="" className='h-80 w-full cover h-auto border border-gray-400 rounded-lg px-4 py-6 sm:px-8 sm:py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceDetails