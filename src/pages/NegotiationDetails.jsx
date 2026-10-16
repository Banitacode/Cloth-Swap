import React from 'react'

export default function NegotiationDetails() {
  const NegotiationDetails = JSON.parse(localStorage.getItem('negotiation')) || []
  return (
    <>
    <div className='min-h-screen bg-gray-300 p-6 '>
    <div className='text-3xl font-bold text-center py-6'>Negotiation Details</div>
    {NegotiationDetails.map((items,index)=> {
      return (
        <div className='shadow-md  rounded-lg bg-white p-6 mb-4' key={index}>
          <p className='text-xl font-semibold'> ID:{items.itemId}</p>
          <p className='text-xl font-semibold'>SWAPVALUE:{items.swapValue}</p>
        </div>
      )
    })}
    </div>
    </>
  )
}
