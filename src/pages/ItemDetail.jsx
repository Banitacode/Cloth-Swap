import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { clothes } from '../data/clothes'

export default function ItemDetail() {
    const { id }=useParams()
    const savedClothes =JSON.parse(localStorage.getItem('clothes')) ||clothes
    const clothing = savedClothes.find(items => items.id === Number(id))
  return (
    <div className='rounded-lg shadow-md overflow-hidden'>
    <div className='h-96 max-w-2xl bg-gray-300 overflow-hidden'>
    <img src={clothing.image} alt='clothing' className="w-full h-full"/>
    </div>
    <div className='p-5'>
    <h2 className='text-xl font-semibold'>Id:{clothing.id}</h2>
    <h2 className='text-xl font-semibold'>Name:{clothing.name}</h2>
    <p className='text-xl font-semibold'>Brand:{clothing.brand}</p>
    <p className='text-xl font-semibold'>Size:{clothing.size}</p>
    <p className='text-xl font-semibold'>Condition:{clothing.condition}</p>
    <p className='text-xl font-semibold'>Address:{clothing.address}</p>
    <p className='text-xl font-semibold'>SwapValue:{clothing.swapValue}</p>
    <p className='text-xl font-semibold'>Availability:{clothing.availability}</p>
    <Link to={`/Login?itemId=${clothing.id}`}>
    <button className='bg-green-500 text-white px-8 py-3  font-semibold round-lg cursor-pointer'>Login to Exchange</button>
    </Link>
    </div>
    </div>
  )
}
