import React from 'react'
import { useState } from 'react'
import { useNavigate , useSearchParams} from 'react-router-dom'
import { clothes } from '../data/clothes'

export default function SwapRequest() {
    const[myClothing,setmyClothing]=useState("")
    const [swapValue, setSwapValue] = useState("")
    const [message, setMessage] = useState("")
    const[error,setError] =useState("")
    const navigate = useNavigate()
    const[searchParams] =useSearchParams()
    const itemId = searchParams.get("itemId")
    const clothing= clothes.find(items=>items.id===Number(itemId))
  return (
    <>
    <div className='min-h-screen bg-gray-100 p-6'>
    <h1 className='text-2xl font-bold'>Swap Request</h1>
    <div className='min-h-screen flex justify-center items-center'>
    <form className='flex flex-col gap-3'onSubmit={(e)=>{e.preventDefault()
        if(myClothing===''){
         setError('Plz Enter The clothing Details')
        return
        }
        if(swapValue===""){
        setError('Plz Enter The SwapValue')
        return
        }
        if(message===""){
        setError('Plz Enter The Message')
        return
        } 
        let newRequest={
          itemId:itemId,
          myClothing:myClothing,
          swapValue:swapValue,
          message:message,
          status :"pending"
        }
        let swapRequests =JSON.parse(localStorage.getItem("swapRequests")) || []
        swapRequests.push(newRequest)
        localStorage.setItem("swapRequests",JSON.stringify(swapRequests))
        navigate(`/Chat?itemId=${itemId}`)
    }}>
      <p>Requesting Swap For:{clothing.name}</p>
    <label className='text-lg font-bold'>My Clothing</label>
    <input type='text' placeholder='Plz Enter The Cloth Items' className="border rounded-md p-2 w-full" value={myClothing}
    onChange={(e)=>{setmyClothing(e.target.value) 
    setError("")}}/>
    <label className='text-lg font-bold'>My Clothing Swap Value</label>
    <input type="number"placeholder="Enter swap value"  className="border rounded-md p-2 w-full" value={swapValue}
    onChange={(e) =>{ setSwapValue(e.target.value)
    setError("") }} />
     <label className='text-lg font-bold'>Message</label>
     <textarea placeholder="Write a message to the clothing owner"  className="border rounded-md p-2 w-full" value={message}
     onChange={(e)=>{setMessage(e.target.value)
        setError("")}}/> 
        <p>{error}</p>
      <button type="submit" className='rounded-lg px-8 py-3 bg-green-300 hover:bg-red-300 transition duration-1000 cursor-pointer text-white shadow-md'>Send Swap Request</button> 
      
    </form>
    </div>
     </div>

    </>

  )
}
