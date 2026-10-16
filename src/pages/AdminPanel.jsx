import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function AdminPanel() {

    const navigate=useNavigate()

  return (
    
    <div className='min-h-screen bg-gray-300 p-8'>
    <h1 className='text-3xl font-bold text-center mb-8'>Admin Panel</h1>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6'>
        <div className='bg-white p-6 rounded-lg shadow-md text-center'>
    <div className='text-xl font-bold mb-4'>CLOTHING DETAILS</div>
    <button
    onClick={()=>{
        navigate('/ClothingDetails')
    }}
    className='bg-green-500 text-white px-8 py-3  font-semibold rounded-lg cursor-pointer hover:bg-red-500 transition duration-1000' >CHECK</button>
    </div>
    <div className='bg-white p-6 rounded-lg shadow-md text-center'>
    <div className='text-xl font-bold mb-4'>USER DETAILS</div>
    <button 
    onClick={()=>{
        navigate('/UserDetails')
    }}
    className='bg-green-500 text-white px-8 py-3  font-semibold rounded-lg cursor-pointer hover:bg-red-500 transition duration-1000' >CHECK</button>
    </div>
    <div className='bg-white p-6 rounded-lg shadow-md text-center'>
    <div className='text-xl font-bold mb-4'>SWAP REQUEST DETAILS</div>
    <button 
    onClick={()=>{
        navigate('/SwapRequestDetails')
    }}
    className='bg-green-500 text-white px-8 py-3  font-semibold rounded-lg cursor-pointer hover:bg-red-500 transition duration-1000' >CHECK</button>
    </div>
    <div className='bg-white p-6 rounded-lg shadow-md text-center'>
    <div className='text-xl font-bold mb-4'>NEGOTIATION DETAILS</div>
    <button
    onClick={()=>{
        navigate('/NegotiationDetails')
    }}
    className='bg-green-500 text-white px-8 py-3  font-semibold rounded-lg cursor-pointer hover:bg-red-500 transition duration-1000' >CHECK</button>
    </div>
    <div className='bg-white p-6 rounded-lg shadow-md text-center'>
    <div className='text-xl font-bold mb-4'>CHAT DETAILS</div>
    <button 
    onClick={()=>{
        navigate('/ChatDetails')
    }}
    className='bg-green-500 text-white px-8 py-3  font-semibold rounded-lg cursor-pointer hover:bg-red-500 transition duration-1000' >CHECK</button>
    </div>
    <div className='bg-white p-6 rounded-lg shadow-md text-center'>
    <div className='text-xl font-bold mb-4'>AVAILABILITY DETAILS</div>
    <button 
    onClick={()=>{
        navigate('/AvailabilityDetails')
    }}
    className='bg-green-500 text-white px-8 py-3  font-semibold rounded-lg cursor-pointer hover:bg-red-500 transition duration-1000' >CHECK</button>
    </div>
    </div>
    </div>
    
  )
}
