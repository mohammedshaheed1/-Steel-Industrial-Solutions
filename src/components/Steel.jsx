import React from 'react'
import estimation from '../assets/estimation.png'

const Steel = () => {
  return (
    <div>
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

export default Steel