import React from 'react'
import { useState } from 'react'
import { clothes } from '../data/clothes'

export default function SwapValuesCalculator() {
const [selectedId,setSelectedId] =useState('')
const selectedCloth=clothes.find(
    (cloth)=>cloth.id===Number(selectedId))
  return (
    <div className='min-h-screen bg-gray-50 p-6 flex flex-col items-center'>
        <h1 className='text-3xl font-bold  text-center text-green-900 mb-6'>Swap Values Calculator</h1>
        <label className='text-xl font-semibold px-4 py-3  text-green-800 border-2  border-green-400 rounded-lg '>Select a clothing item</label>
        <select className=' mt-3 w-72 border-2 border-green-300 bg-white rounded-lg p-3 text-gray-700 shadow-sm focus:border-green-600 focus:outline-none'
        value={selectedId}
         onChange={(e)=>setSelectedId(e.target.value)}>
        <option value=''  className='text-xl font-semibold px-4 py-2   text-green-800 border rounded-lg' >Choose a cloth</option>  
        {clothes.map((cloth)=>{
            return(
            <option key={cloth.id} value={cloth.id}>{cloth.name}</option>
            )
        })}
        </select>
        {selectedCloth &&(
            <div className='rounded-xl border-2 border-green-200 bg-white  shadow-md w-full max-w-md  mt-6 p-4 text-lg font-semibold text-green-800'>
            <h2 className='block text-2xl font-bold text-green-900'>
            {selectedCloth.name}
            </h2>
             <p className='mt-2 text-base font-semibold text-green-700'>
             Brand:{selectedCloth.brand}</p>
              <p className='mt-2 text-base font-semibold text-green-700'>
             Size:{selectedCloth.size}</p>
            <p className='mt-2 text-base font-semibold text-green-700'>
             Condition:{selectedCloth.condition}</p>
              <p className='mt-2 text-base font-semibold text-green-700'>
             Address:{selectedCloth.address}</p>
             <p className='mt-2 text-xl font-bold text-green-800'>
             Estimated Swap Value:₹{selectedCloth.swapValue}</p>
              <p className='mt-2 text-base font-semibold text-green-700'>
             Availability:{selectedCloth.availability}</p>
            </div>
        )}
     </div>
  )
}
