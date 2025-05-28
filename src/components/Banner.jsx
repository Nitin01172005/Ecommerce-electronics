import React from 'react'
import Img from '../assets/smartwatch2-removebg-preview.png'
const Banner = () => {
  return (
    <div className='py-10 pt-40 mb-20 container'>
      <div>
       <div className='h-[340px] relative bg-brandGreen grid grid-cols-3 rounded-3xl  justify-center'>
        <div data-aos="zoom-in-down" className='flex flex-col text-white items-start px-8 justify-center'>
          <p className=''>30% OFF</p>
          <p className='text-7xl font-bold'>HAPPY </p>
          <p className='text-7xl font-bold '>HOURS</p>
          <p>14 Jan to 18 Jan </p>
        </div>

        <div data-aos="zoom-in">
          <img  src={Img} className='duration-200 scale-110 absolute h-[380px] -top-4 drop-shadow-[-10px_10px_12px_rgba(0,4,0,0.6)]' alt="" />
        </div>

        <div data-aos="zoom-in-down" className='flex flex-col text-white items-start px-8 justify-center'>
          <p className=''>30% OFF</p>
          <p className='text-7xl font-bold'>HAPPY </p>
          <p className='text-7xl font-bold '>HOURS</p>
          <p>14 Jan to 18 Jan </p>
        </div>
      </div>
      </div>

      
    </div>
  )
}

export default Banner
