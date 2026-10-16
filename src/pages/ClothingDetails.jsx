import React from 'react'
import {clothes} from '../data/clothes'
export default function ClothingDetails() {
        const clothingDetails = clothes
  return (
    <div className='min-h-screen bg-gray-300 p-8'>
    <div className='text-3xl font-bold text-center mb-8'>Clothing Details</div>
    <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
    {clothingDetails.map((items,index)=>{
      return (
        <div className=' bg-white rounded-lg shadow-md p-6' key={index} >
          <p className='text-xl font-semibold'>ID:{items.id}</p>
        <p className='text-xl font-semibold'>NAME:{items.name}</p>
        <p className='text-xl font-semibold'>BRAND:{items.brand}</p>
        <p className='text-xl font-semibold'>SIZE:{items.size}</p>
        <p className='text-xl font-semibold'>CONDITION:{items.condition}</p>
        <p className='text-xl font-semibold'>SWAPVALUE:{items.swapValue}</p>
        <p className='text-xl font-semibold'>ADDRESS:{items.address}</p>
        <p className='text-xl font-semibold'>AVAILABILITY:{items.availability}</p>
        <div className='rounded-lg shadow-md overflow-hidden'>
        <div className='h-60 w-full bg-gray-300 overflow-hidden'>
        <img src={items.image} alt='clothing' className='w-full h-full object-cover  '/>
       </div>
       </div>
       </div>  
      )
    })}
    </div>
    </div>
  )
}
