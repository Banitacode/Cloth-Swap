import React from 'react'
import {clothes} from '../data/clothes'

export default function AvailabilityDetails() {
  const availability = clothes
  return (
    <div className ='min-h-screen bg-gray-300 p-8'>
    <div className='text-3xl  font-bold text-center p-8'>AVAILABILITY DETAILS</div>
    {availability.map((items,index)=>{
      return (
     <div className ='shadow-md rounded-lg bg-white p-6 mb-4'key={index}>
      <p className='text-xl font-semibold'> ID:{items.id}</p>
      <p className='text-xl font-semibold'>NAME:{items.name}</p>
      <p className='text-xl font-semibold'>AVAILABILITY:{items.availability}</p>
      </div>
      )
    })}
    </div>
  )
}
