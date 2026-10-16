import React, {useEffect, useState} from 'react'
import { clothes } from '../data/clothes'
import { useNavigate } from 'react-router-dom'
export default function UserDashboard() {
    const navigate=useNavigate()
  const savedClothes =JSON.parse(localStorage.getItem('clothes')) || clothes
  const [swapRequests,setSwapRequest] =useState(
    JSON.parse(localStorage.getItem('swapRequests')) || [] )
  const[negotiation,setNegotiation] =useState(
    JSON.parse(localStorage.getItem('negotiation')) || [] )
    const[messages,setMessages] =useState(JSON.parse(localStorage.getItem('messages')) || [])
    const completedExchanges =swapRequests.filter((request)=>{
    return request.status=== "COMPLETED";
    })
    useEffect(()=>{
  const handleStorageChange = () => {
    const updatedRequests =
      JSON.parse(localStorage.getItem('swapRequests')) || []

    setSwapRequest(updatedRequests)
  }

  window.addEventListener('storage', handleStorageChange)

  return () => {
    window.removeEventListener('storage', handleStorageChange)
  }
},[])
  
  return (
    <div>
   <button
   onClick={()=>{navigate('/Home')}}
   className='bg-green-500 text-white px-8 py-3  font-semibold rounded-lg cursor-pointer hover:bg-red-500 transition duration-1000'>HOME</button>
   <div className='rounded-xl shadow-md boredr border-green-200 mx-6 my-6 p-6 bg-green-50'>
    <h2 className='text-2xl font-bold text-green-800 mb-3'>Sustainability Tracker</h2>
    <p className='text-gray-700 mb-4'> Every clothing exchange helps give clothes a second life
    and encourages sustainable fashion.</p>
    <div className='bg-white p-4 rounded-lg'>
    <p className='text-gray-600 font-semibold'>Complete Exchanges</p>
    <p className='text-3xl font-bold text-green-700'>{completedExchanges.length}</p>
    </div>
   </div>
    <h1 className='text-3xl font-bold text-center mb-6'>
     My Clothing Listings
     </h1>
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6'>
    {savedClothes.map((items,index)=>{
     return<div key={index} className='w-80 shadow-md bg-white border rounded-lg mb-6 '>
        <div className='w-64 bg-gray-300'>
        <img src={items.image} alt='clothing' className='w-full object-contain'/>
        </div>
    <div className='p-5'>
     <h2 className='text-xl font-semibold'>Id:{items.id}</h2>
     <h2 className='text-xl font-semibold'>Name:{items.name}</h2> 
     <p className='text-lg font-semibold text-gray-600'>Brand:{items.brand}</p>
     <p className='text-lg font-semibold text-gray-600'>Size:{items.size}</p>
     <p className='text-lg font-semibold text-gray-600'>Condition:{items.condition}</p>
     <p className='text-lg font-semibold text-gray-600'>Address:{items.address}</p>
     <p className='text-lg font-semibold text-gray-600'>SwapValue:{items.swapValue}</p>
     <p className='text-lg font-semibold text-gray-600'>Availability:{items.availability}</p>
     <button  
     onClick={()=>{
        navigate(`/item/${items.id}`)
     }}
     className='px-6 py-2 rounded-lg cursor-pointer font-semibold text-white bg-green-500 hover:bg-red-400 transition duration-1000'>View Detail</button>
     <h2 className='text-2xl font-bold mt-4 mb-2'>Negotiation</h2>
                {negotiation
                .filter((proposal)=>{
                return Number(proposal.itemId) === Number(items.id)
                })
                .map((proposal,index)=>{
                  return (
                  <div key={index} className='border top-t pt-2 mt-2'>
                    <p className='text-lg font-semibold '>ID:{proposal.itemId}</p>
                    <p className='text-lg font-semibold '>SWAPVALUE:{proposal.swapValue}</p>
                    </div>
                    )
                })}
                 <p className='text-lg font-bold mt-4mb-2'>CHAT</p>
                {messages
                .filter((msg)=>{
                  return Number(msg.itemId)===Number(items.id);
                })
                .map((msg,index)=>{
                 return (
                  
                  <div key={index} className='border-t pt-2 mt-2'>
                   <p className='text-lg text-bold'>{msg.text}</p>
                  </div>
                 )
                })
                }
              
                <h2 className='text-2xl font-bold mt-5 mb-3'>SWAP REQUEST</h2>
                {swapRequests
                .filter((request)=>{
                  return Number(request.itemId)===Number(items.id)
                })
               .map((request,index)=>{
                return (
               <div key={index} className='border-t pt-3 mt-3'>
               <p className='text-xl font-semibold'>ID:{request.itemId}</p>
                 <p className='text-lg font-semibold text-gray-600'>MYCLOTHING:{request.myClothing}</p>
                 <p className='text-lg font-semibold text-gray-600'>SWAPVALUE:{request.swapValue}</p>
                <p className='text-lg font-semibold text-gray-600'>MESSAGE:{request.message}</p>
                <p className='text-lg font-semibold text-gray-600'>STATUS:{request.status}</p>
               </div>
                 )
               })
                }

     </div>
     </div>
    })}
    </div>
    
      
    </div>
    
  )
}
