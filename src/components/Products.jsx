import React from 'react'
import Img1 from '../assets/p-1.jpg';
import Img2 from '../assets/p-5.jpg';
import Img3 from '../assets/p-9.jpg';
import Img4 from '../assets/p-7.jpg';
import Img5 from '../assets/p-2.jpg';
import Img6 from '../assets/p-3.jpg';
import Img7 from '../assets/p-4.jpg';


const ProductsData = [
  {
    id:1,
    img:Img1,
    title: "Boat Headphone",
    cost: "$120"
  },

  {
    id:2,
    img:Img2,
    title: "Rocky Mountain",
    cost: "$320"
  },

  {
    id:3,
    img:Img3,
    title: "Goggles",
    cost: "$150"
  },

  {
    id:4,
    img:Img4,
    title: "Printed",
    cost: "$520"
  },

  {
    id:5,
    img:Img5,
    title: "Boat Headphone",
    cost: "$120"
  },
  {
    id:6,
    img:Img6,
    title: "Goggles",
    cost: "$320"
  },
  {
    id:7,
    img:Img4,
    title: "Rocky Mountain",
    cost: "$220"
  },

  {
    id:8,
    img:Img7,
    title: "Printed",
    cost: "$290"
  },
]

const Products = () => {
  return (
    <div className='py-10 mt-10'>
      <div className='flex flex-col items-center justify-center gap-2'>
        <h1 className='text-4xl font-bold '>Our Products</h1>
        <p className='text-xs text-gray-400 text-semibold mb-10'>Explore Our Products</p>
      </div>
      
      <div className='container'>
        <div className='grid grid-cols-4 gap-9'>
            {
              ProductsData.map((data) => (
                <div key={data.id}>
                  <div className='relative bg-gradient-to-br from-gray-300 to-gray-100 h-[200px] mb-5 '>
                    <img src={data.img} alt="" className='absolute rounded-lg mb-5'/>
                  </div>
                  <p className='font-semibold'>{data.title}</p>
                  <p className='font-bold'>{data.cost}</p>
                </div>
              ))
            }
          </div>
          

        </div>
      </div>
 
  )
}

export default Products
