import React from 'react'
const user=[
  {
  id:1,
  name:"Banita",
  address:"Hyderabad",
  accountStatus:"Active"
  }
]

export default function UserDetails() {
  const swapRequests=JSON.parse(localStorage.getItem('swapRequests'))||[]
  const negotiation =JSON.parse(localStorage.getItem('negotiation'))||[]
  const messages =JSON.parse(localStorage.getItem('messages'))||[]
  return (
  <div className='min-h-screen bg-gray-300 p-8'>
    <div className='text-3xl font-bold text-center mb-8'>UserDetails</div>
      {user.map((items,index)=>{
        return (
          
    <div className='bg-white rounded-lg shadow-md p-6 max-w-md mx-auto' key={index}>
      <p className='text-xl font-semibold'>ID:{items.id}</p>
      <p className='text-xl font-semibold'>NAME:{items.name}</p>
      <p className='text-xl font-semibold'>ADDRESS:{items.address}</p>
      <p className='text-xl font-semibold'>ACCOUNT STATUS:{items.accountStatus}</p>
      <h2 className='text-xl font-bold mt-5'>USER ACTIVITY</h2>
      <p className='text-lg font-semibold'>Swap Requests:{swapRequests.length}</p>
      <p className='text-lg font-semibold'>Negotiations:{negotiation.length}</p>
      <p className='text-lg font-semibold'>Messages:{messages.length}</p>
     </div>
     
        )    
  })}
  </div>
  )
}
