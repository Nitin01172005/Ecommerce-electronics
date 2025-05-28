import React from 'react'
import { FaCarSide } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { FaWallet } from "react-icons/fa";
import { FaHeadphonesAlt } from "react-icons/fa";
import Headphones from '../assets/headphone.png'
import "slick-carousel/slick/slick.css";

const Mid = () => {
  return (
    <>
    <div className='py-20 container'>
      <div className='flex justify-between text-black dark:white'>
        <div className='flex gap-4'><FaCarSide className='text-primary ' size={42} />
        <div className='flex-col'>
          <p className='font-bold text-lg'>Free Shipping</p>
          <p className='text-sm text-gray-400'>Free Shiping On All Order</p>
        </div>
        </div>
        <div className='flex gap-4'><TiTick className='text-primary ' size={42}/>
        <div className='flex-col '>
          <p className='font-bold text-lg'>Safe Money</p>
          <p className='text-sm text-gray-400'>Free Shiping On All Order</p>
        </div>
        </div>
        <div className='flex gap-4'><FaWallet className='text-primary ' size={42}/>
        <div className='flex-col '>
          <p className='font-bold text-lg'>Secure Payment</p>
          <p className='text-sm text-gray-400'>Free Shiping On All Order</p>
        </div>
         </div>
        <div className='flex gap-4'><FaHeadphonesAlt className='text-primary ' size={42}/>
        <div className='flex-col '>
          <p className='font-bold text-lg'>Online Support 24/7</p>
          <p className='text-sm text-gray-400'>Free Shiping On All Order</p>
        </div>
        </div>
      </div>
    </div>
   
    <div className='container py-8'>
      <div className='h-[340px] rounded-3xl relative z-0 bg-primary grid grid-cols-3 items-center'>
      
          <div className='px-4 py-10 mt-5'>
              <div className='flex flex-col items-start px-8 justify-center '>
            <p className='text-white'>30% OFF</p>
            <p className='text-white uppercase font-bold text-4xl sm:text-5xl lg:text-7xl'>fine </p>
            <p className='text-white uppercase font-bold text-4xl sm:text-5xl lg:text-7xl'>smile</p>
            <p className='text-white'>10 Jan to 28 Jan</p>
              </div>
          </div>

          <div className=''>
            <img src={Headphones} alt="" 
            className='h-[420px] drop-shadow-[-10px_10px_12px_rgba(0,4,0,0.5)] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[420px]'
            />
          </div>

          <div className='px-4 py-10 mt-5'>
              <div className='flex flex-col items-start px-4 gap-4 justify-center '>
            <p className='text-white font-bold text-lg'>Air Solo Bass</p>
            <p className='text-white uppercase font-extrabold text-2xl sm:text-3xl lg:text-5xl'>Winter Sale </p>
            <p className='text-white '>Take proper benefit of the sale we would be delighted to have you as a customer</p>
            <button className='bg-white  text-primary py-2 px-6 rounded-full hover:scale-105 object-cover transition-all '>Shop Now</button>
              </div>
          </div>
        </div>

      </div>
    </>
    
  )
}

export default Mid
