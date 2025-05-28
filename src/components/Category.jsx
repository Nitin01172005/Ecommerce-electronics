import React from 'react'
import WireImg from '../assets/earphone.png';
import WatchImg from '../assets/watch.png';
import LapImg from '../assets/macbook.png';
import GamImg from '../assets/gaming.png';
import VrImg from '../assets/vr.png';
import SpeakImg from '../assets/speaker.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; // if you want theme styles

const Category = () => {
  return (
    <div className='py-8'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='bg-gradient-to-br relative from-black/90 to-black/70 rounded-2xl h-[320px] pl-5 py-10 flex items-end'>
            <div className='mb-4 '>
            <p className='text-gray-300'>Enjoy</p>
            <p className='text-2xl font-bold text-white'>With</p>
            <p className='text-gray-400 font-bold text-5xl'>Earphone</p>
            <button className='bg-primary cursor-pointer relative z-10 hover:scale-105 transition-all duration-300 px-6 py-1.5 text-sm mt-1  text-white rounded-full'>Browse</button>
            </div>
            <img className='absolute bottom-0 z-0' src={WireImg} alt="" />
          </div>

          <div className='bg-gradient-to-br relative from-brandYellow to-brandYellow/80 rounded-2xl  h-[320px] pl-5 py-10 flex items-end'>
            <div className='mb-4 '>
            <p className='text-gray-100'>Enjoy</p>
            <p className='text-2xl font-bold text-white'>With</p>
            <p className='text-gray-100 font-bold text-5xl opacity-60'>Gadget</p>
            <button className='bg-white hover:scale-105 transition-all duration-300 px-6 py-1.5 text-sm mt-1  text-yellow rounded-full'>Browse</button>
            </div>
            <img className='absolute top-7' src={WatchImg} alt="" />
          </div>

          <div className='bg-gradient-to-br relative from-primary to-primary/80 rounded-2xl col-span-2 h-[320px] pl-5 py-10 flex items-end'>
            <div className='mb-4 '>
            <p className='text-gray-100'>Enjoy</p>
            <p className='text-2xl font-bold text-white'>With</p>
            <p className='text-gray-100 font-bold text-5xl opacity-60'>Laptop</p>
            <button className='bg-white hover:scale-105 transition-all duration-300 px-6 py-1.5 text-sm mt-1  text-red rounded-full'>Browse</button>
            </div>
            <img className='absolute  right-0 h-64' src={LapImg} alt="" />
          </div>

          <div className='bg-gradient-to-br relative from-gray-500 to-gray-300/80 rounded-2xl col-span-2 h-[320px] pl-5 py-10 flex items-end'>
            <div className='mb-4 '>
            <p className='text-gray-100'>Enjoy</p>
            <p className='text-2xl font-bold text-white'>With</p>
            <p className='text-gray-100 font-bold text-5xl opacity-60'>Console</p>
            <button className='bg-primary hover:scale-105 transition-all duration-300 px-6 py-1.5 text-sm mt-1  text-white rounded-full'>Browse</button>
            </div>
            <img className='absolute  right-0 h-64' src={GamImg} alt="" />
          </div>

          <div className='bg-gradient-to-br relative from-brandGreen to-brandGreen/80 rounded-2xl  h-[320px] pl-5 py-10 flex items-start'>
            <div className='mb-4  '>
            <p className='text-gray-100 '>Enjoy</p>
            <p className='text-2xl font-bold text-white'>With</p>
            <p className='text-gray-100 font-bold text-5xl opacity-60'>Gadget</p>
            <button className='bg-white hover:scale-105 relative z-10 transition-all duration-300 px-6 py-1.5 text-sm mt-1  text-yellow rounded-full'>Browse</button>
            </div>
            <img className='absolute bottom-0 z-0' src={VrImg} alt="" />
          </div>

          <div className='bg-gradient-to-br relative from-brandBlue to-brandBlue/80 rounded-2xl  h-[320px] pl-5 py-10 flex items-start'>
            <div className='mb-4 '>
            <p className='text-gray-100'>Enjoy</p>
            <p className='text-2xl font-bold text-white'>With</p>
            <p className='text-gray-100 font-bold text-5xl opacity-60'>Speaker</p>
            <button className='bg-white hover:scale-105 relative z-10  transition-all duration-300 px-6 py-1.5 text-sm mt-1  text-yellow rounded-full'>Browse</button>
            </div>
            <img className='absolute bottom-0 h-[210px] z-0' src={SpeakImg}  alt="" />
          </div>



     
        </div>
      </div>
    </div>
  )
}

export default Category
