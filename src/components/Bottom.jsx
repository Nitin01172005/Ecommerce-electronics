import React from 'react'
import Img1 from '../assets/br-1.png';
import Img2 from '../assets/br-2.png';
import Img3 from '../assets/br-3.png';
import Img4 from '../assets/br-4.png';
import Img5 from '../assets/br-5.png';



const Bottom = () => {
  return (
    <div className='py-10'>
      <div className='h-[110px] w-full bg-gray-200 flex justify-center items-center'>
        <div className=' flex flex-row gap-32 opacity-50'>
          <img src={Img1} className='h-10 ' alt="" />
          <img src={Img2} className='h-12 ' alt="" />
          <img src={Img3} className='h-6 mt-3 ' alt="" />
          <img src={Img4} className='h-8 ' alt="" />
          <img src={Img5} className='h-12 ' alt="" />
        </div>

      </div>
    </div>
  )
}

export default Bottom
