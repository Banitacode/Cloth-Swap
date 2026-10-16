import React, {useEffect,useState} from 'react'
import {clothes} from '../data/clothes'

export default function SwapRequestDetails() {
  const [swapRequests,setSwapRequests]=useState(JSON.parse(localStorage.getItem('swapRequests'))||[] )
  useEffect(()=>{
  const handleStorageChange = () => {
    const updatedRequests =
      JSON.parse(localStorage.getItem('swapRequests')) || []

    setSwapRequests(updatedRequests)
  }

  window.addEventListener('storage', handleStorageChange)

  return () => {
    window.removeEventListener('storage', handleStorageChange)
  }
},[])
  return (
    <div className='min-h-screen bg-gray-300 p-8'>
    <h1 className='text-3xl font-bold text-center mb-8'>SwapRequest Details</h1>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {swapRequests.map((items,index)=>{
         return (
          <div className='bg-white rounded-lg shadow-md p-6' key={index}>
          <p className='text-lg font-semibold'>ID:{items.itemId}</p>
          <p className='text-lg font-semibold'>
            NAME:{clothes.find(cloth=>cloth.id===Number(items.itemId))?.name}
          </p>
          <p className='text-lg font-semibold'>MYCLOTHING:{items.myClothing}</p>
          <p className='text-lg font-semibold'>SWAPVALUE:{items.swapValue}</p>
          <p className='text-lg font-semibold'>MESSAGE:{items.message}</p>
          <p className='text-lg font-semibold'>STATUS:{items.status}</p>
          {items.status==="pending" && (
            <button 
            onClick={()=>{
                let requests=JSON.parse(localStorage.getItem('swapRequests')) || []
                let selectRequest = requests[index]
                selectRequest.status='ACCEPTED'
                setSwapRequests(requests)
                localStorage.setItem("swapRequests", JSON.stringify(requests))
                }}
                className='bg-green-500 text-white px-8 py-3  font-semibold rounded-lg cursor-pointer '>ACCEPT</button>
                )}
                {items.status==="pending" && (
                <button 
                onClick={()=>{
                let requests=JSON.parse(localStorage.getItem('swapRequests')) || []
                let selectRequest = requests[index]
                selectRequest.status='REJECTED'
                setSwapRequests(requests)
                localStorage.setItem("swapRequests", JSON.stringify(requests))
                }} 
                
                className='bg-red-500 text-white px-8 py-3  font-semibold rounded-lg cursor-pointer '>REJECT</button>
            )}
            
{items.status?.toUpperCase() === "ACCEPTED" && (
  <button
    onClick={() => {
      const requests =
        JSON.parse(localStorage.getItem("swapRequests")) || []

      const selectedRequest = requests[index]

      if (selectedRequest) {
        selectedRequest.status = "COMPLETED"

        localStorage.setItem(
          "swapRequests",
          JSON.stringify(requests)
        )

        setSwapRequests([...requests])
       }
        }}
         className="bg-blue-500 text-white px-8 py-3 font-semibold rounded-lg cursor-pointer mt-3">
          COMPLETE EXCHANGE
          </button>
         )}

          </div>
         )
         })}
          </div>
        </div>
       )
      }
