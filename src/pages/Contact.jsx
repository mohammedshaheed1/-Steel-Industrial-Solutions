import React from 'react'
import footer from '../assets/footer-bg-color.png'
import right_arrow from '../assets/right-arrow-white.png'

const Contact = () => {
  return (
    <div id='contact' className='w-full bg-black px-[12%] py-10 scroll-mt-20 bg-no-repeat bg-[length:90%_auto] bg-center' style={{ backgroundImage: `url(${footer})` }}>
      <h4 className='text-center mb-2 text-lg font-Ovo text-white '>Connect with Us</h4>
      <h2 className='text-center text-5xl font-Ovo text-white '>Get in touch</h2>
      <p className='text-center text-white font-extrabold max-w-2xl mx-auto mt-5 mb-12 font-Ovo '>We focus on providing cost-effective solutions compared to our competitors. The
        price of each project varies depending on factors such as type, duration, and other
        considerations. You can get a price estimate for your project by submitting the
        necessary documents or information you currently have.</p>

      <form action="https://api.web3forms.com/submit" className='max-w-2xl mx-auto' method="POST">
        <input type="hidden" name="access_key" value="758bc2de-8236-435b-8f58-2dee727b9576"></input>
        <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
          <input type="text" name="name" placeholder='Enter Your name' className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' required />
          <input type="email" name="email" placeholder='Enter Your email' className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' required />
        </div>

        <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
          <div class="relative flex items-center">

            <span class="absolute left-3 text-gray-600">+91</span>
            <input
              type="tel"
              name="mobile"
              placeholder="Enter your mobile number"
              class="pl-12 flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
              required
              pattern="[0-9]{10}"
              maxlength="10"
              minlength="10"
            />
          </div>
        </div>

        <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
          <select name="Selecttheservice" className="p-3 border-[0.5px] border-gray-400 rounded-md bg-white">
            <option value="SteelDetailing">SteelDetailing
            </option>

            <option value="ExteriorDesigning orInteriorDesiging">ExteriorDesigning orInteriorDesiging</option>
            <option value="Extimation">Extimation</option>

          </select>
        </div>


        <textarea name="message" id="" rows={6} placeholder='Enter Your Message' className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6' required></textarea>
        <button className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-white font-bold text-black rounded-full mx-auto '>Submit now
         
        </button>
      </form>
    </div>
  )
}

export default Contact