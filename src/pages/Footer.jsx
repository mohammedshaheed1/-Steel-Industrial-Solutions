import React from 'react'
import footer from '../assets/foot.png'
import logo from '../assets/Logo.png'

const Footer = () => {
    return (
        <div
            className=" flex   items-end w-full"
            style={{
                backgroundImage: `url(${footer})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh', // Ensures the container takes up full viewport height
            }}
        >

            <div className="flex  ">
                <img src={logo} alt="" className="w-5 sm:w-14 md:w-6 cursor-pointer mr-2" />
                <p
                    className="text-sm sm:text-sm md:text-sm italic py-2 font-extrabold text-black bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 cursor-pointer transform transition-all duration-300 hover:scale-110 text-center md:text-left"
                >
                    Steel Industrial Solutions
                </p>

            </div>
            <p className="text-sm px-100 sm:text-sm md:text-sm italic py-2 font-extrabold text-black bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 cursor-pointer transform transition-all duration-300 hover:scale-110 text-center md:text-left">sis.steelindustrialsolutions@gmail.com</p>

        </div>
    )
}

export default Footer