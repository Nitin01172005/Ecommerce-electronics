import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='pt-10 py-10 ' >
      <div className='container pb-32'>
        <div className='grid grid-cols-5 gap-4'>
          <div className='flex flex-col col-span-2 gap-4'>
          <a href="#" className="text-primary font-semibold sm:text-3xl text-2xl tracking-widest">ESHOP</a>
          <p> Mechanical or digital, watches </p>
          <p>measure moments, symbolizing heritage</p>
          </div>
          <div className='flex flex-col'>
            <p className='font-bold text-xl pb-5'>Important Links</p>
            <ul className='flex flex-col gap-4 text-gray-600'>
              <a href="">Home</a>
              <a href="">About</a>
              <a href="">Contact</a>
              <a href="">Blog</a>
            </ul>
          </div>

          <div className='flex flex-col'>
            <p className='font-bold text-xl pb-5'>Quick Links</p>
            <ul className='flex flex-col gap-4 text-gray-600'>
              <a href="">Home</a>
              <a href="">About</a>
              <a href="">Contact</a>
              <a href="">Blog</a>
            </ul>
          </div>
          
          <div className='flex flex-col gap-4'>
            <p className='font-bold text-xl'>Address</p>
            <div className='flex gap-4 items-center'>
              <FaLocationArrow />
              <p>Noida, Uttar Pradesh</p>
            </div>
            <div className='flex gap-4 items-center'>
             <FaMobileAlt />
             <p>+91 1234567890</p>
            </div>
            <div className='flex gap-3'>
              <FaInstagram size={28}/>
              <FaFacebook size={28} />
              <FaLinkedin size={28} />
            </div>
            


          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
