import React from 'react'
import { Link } from 'react-router-dom'
import {clothes} from '../data/clothes'

export default function Home() {
  return (
    <>
    <nav className='flex justify-between items-center px-8 py-4 bg-white shadow-md'>
      <h2 className='text-2xl font-bold text-green-600'>ClothSwap</h2>
      <ul className='flex gap-6'>
        <li>
        <Link to ='/Home' className='text-gray-700 hover:text-blue-600 cursor-pointer'>
        Home</Link>
        </li>
        <li>
        <Link to ='/Listings' className='text-gray-700 hover:text-blue-600 cursor-pointer'>
        Browser Clothes
        </Link>
        </li>
        <li>
        <Link to ='/Listings' className='text-gray-700 hover:text-blue-600 cursor-pointer'>
        Exchange
        </Link></li>
        <li>
          <Link to ='/About' className='text-gray-700 hover:text-blue-600 cursor-pointer'>
          About
          </Link></li>
      </ul>
    </nav>
    <section className='bg-gray-200 py-20 text-center'>
  <h1 className='text-4xl md:text-5xl font-bold'>Clothing Exchange & Swap Marketplace</h1>
  <p className='mt-4 text-gray-600  text-base md:text-lg'>Swap your clothes and discover sustainable fashion.</p>
  <Link to='/Listings'>
  <button className='bg-green-500  text-white px-8 py-3  mt-4 hover:bg-red-500 cursor-pointer rounded-lg transition duration-1000 font-semibold shadow-md'>
    Start Swapping
  </button>
  </Link>
</section>
<section className='py-12 px-8'>
  <h2 className='text-3xl font-bold text-center'>
    Explore Clothing
  </h2>

  <p className='text-center text-gray-600 mt-3'>
    Discover clothes available for exchange.
  </p>

  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
    {clothes.map((items) => (
      <div key={items.id} className='rounded-lg shadow-md overflow-hidden'>
        <div className='h-64 bg-gray-300'>
          <img
            src={items.image}
            alt={items.name}
            className='w-full h-full object-cover'
          />
        </div>

        <div className='p-5'>
          <h2 className='text-xl font-semibold'>
            {items.name}
          </h2>

          <p className='text-lg font-semibold text-gray-600'>
            Brand: {items.brand}
          </p>
          <p className='text-lg font-semibold text-gray-600'>
            Size: {items.size}
          </p>
          <p className='text-lg font-semibold text-gray-600'>
            Condition: {items.condition}
          </p>
          <p className='text-lg font-semibold text-gray-600'>
            Address: {items.address}
          </p>
          <p className='text-lg font-semibold text-gray-600'>
            Estimated Swap Value: ₹{items.swapValue}
          </p>

          <Link to={`/item/${items.id}`}>
            <button className='bg-green-500 text-white px-8 py-3 mt-4 hover:bg-red-500 cursor-pointer rounded-lg transition duration-1000 font-semibold shadow-md'>
              View Details
            </button>
          </Link>
        </div>
      </div>
    ))}
  </div>
</section>
</> 
  )
}

