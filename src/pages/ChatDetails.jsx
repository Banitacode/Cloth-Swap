import React from 'react'

export default function ChatDetails() {
  const chatDetails = JSON.parse(localStorage.getItem('messages')) || []
  return (
    <div className='min-h-screen  bg-gray-300 p-8'>
    <div className='text-3xl font-bold mb-8 text-center'>Chat Details</div>
   {chatDetails.map((items ,index)=>{
    return(
   <div className='shadow-md  rounded-lg bg-white p-6 mb-4' key={index}>
   <p className='text-xl font-semibold'>ID:{items.itemId}</p>
   <p className='text-xl font-semibold'>MESSAGE:{items.text}</p>
   </div>
    )
   })}
    </div>
  )
}
 