import React from 'react'

const HomeText = () => {
  return (
    <div className='flex flex-col items-start px-6 lg:px-30'>
      <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4'>
        The Solutions All
      </h1>
      <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-10'>
        You Need
      </h1>
      <a
         href='https://wa.me/917034641834'
         target='blank'
        className=' bg-white lg:flex font-bold items-center gap-3 px-10 py-2.5 border border-gray-500 ml-4 dark:border-white/50'
      >
        GET IN TOUCH
      </a>
    </div>
  )
}

export default HomeText;
