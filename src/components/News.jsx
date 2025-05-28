import React from 'react'
import Img1 from '../assets/blog-1.jpg';
import Img2 from '../assets/blog-2.jpg';
import Img3 from '../assets/blog-3.jpg';
import "slick-carousel/slick/slick.css";

const NewsData = [
  
    {
      id:1,
      img:Img1,
      title: "How to choose perfect smartwatch",
      para: "Watches blend craftsmanship and precision, offering a timeless accessory that showcases style, functionality, and sophistication elegantly.",
      heading: "Jan 2024, by DISHA "
    },
  
    {
      id:2,
      img:Img2,
      title: "How to choose perfect gadget",
      para: "Mechanical or digital, watches measure moments, symbolizing heritage, luxury, personal milestones, and the art of timekeeping.",
      heading: "Jan 2024, by NIsh"
    },
  
    {
      id:3,
      img:Img3,
      title: "How to choose perfect VR headset",
      para: "From sleek modern designs to classic vintage styles, watches capture time's essence with beauty and innovation.",
      heading: "Jan 2024, by AISH"
      
    },
  
  
]

const News = () => {
  return (
    <div className='container py-10 pt-30'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-4xl font-bold'>Recent News</h1>
        <p className='text-gray-400 text-xs pt-2 mb-5'>Explore Our Blogs</p>
        <div className='grid grid-cols-3 gap-5'>
          {
            NewsData.map((data) => (
              <div key={data.id}>
                <div className='flex flex-col'>
                <img src={data.img} className='h-[225px] rounded-2xl my-2' alt="" />
                <p className='text-xs text-gray-500 py-2'> {data.heading}</p>
                <p className='font-bold pb-2'>{data.title}</p>
                <p className='text-xs text-gray-700'>{data.para}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default News
