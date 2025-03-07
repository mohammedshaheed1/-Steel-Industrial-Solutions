import React from 'react'
import interior from '../assets/interior.png'

const Interior = () => {
  return (
    <div>

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
        
    </div>
  )
}

export default Interior