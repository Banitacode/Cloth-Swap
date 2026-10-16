import React from 'react'
import { useState } from 'react'
import { useSearchParams ,useNavigate} from 'react-router-dom'
import { clothes } from '../data/clothes' 


export default function Chat() {
    const[message,setMessage]=useState("")
    const[messages,setMessages]=useState( JSON.parse(localStorage.getItem("messages"))||[])
    const[error,setError]=useState("")
    const[searchParams]=useSearchParams()
    const itemId=searchParams.get("itemId")
 
    const navigate =useNavigate()
    function handleSend() {
        if(message===''){
        setError('PLz Enter Your Message')
        }
        else
        {
      setError('')

      const newMessage={
        text:message,
        itemId:Number(itemId)
      }
      setMessages([...messages,newMessage])//for multiply messages
      localStorage.setItem("messages",JSON.stringify([...messages,newMessage]))
      setMessage("");
      navigate(`/Negotiation?itemId=${itemId}`)
        }
        
    }
  return (
    <div>
    <div className='text-2xl font-bold '>CHAT BOX</div>
    <p className='text-xl font-semibold'>item ID:{itemId}</p>
    <label className='text-lg font-bold'>MESSAGE</label>
    <input type='text' placeholder='Plz Enter Y our message' value={message} className='border rounded-lg px-3 py-2 P-3'
    onChange={(e)=>
    {setMessage(e.target.value)}
    }
    />
    <p>{error}</p>
    <button  onClick={handleSend}className='px-3 py-2 cursor-pointer rounded-lg bg-green-500 hover:bg-red-500 transition duration-1000 shadow-mg'>SEND</button>
    {messages
    .filter((msg)=>{
      return msg.itemId===Number(itemId)
    })
    .map((msg,index)=>
     <p key={index}>{msg.text}</p>
    )}
  
    </div>
  )
} 
