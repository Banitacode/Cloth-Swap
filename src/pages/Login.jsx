import React from 'react'
import { useState } from 'react'
import { useNavigate , useSearchParams } from 'react-router-dom'

export default function Login() {
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[error,setError]=useState("")
    const navigate=useNavigate()
    const[searchParams]=useSearchParams()
    const itemId =searchParams.get('itemId')
  return (
    
    <div className='max-h-screen flex justify-center items-center'>
        <form  className='flex flex-col gap-3'onSubmit={(e)=>{e.preventDefault() 
        if(email===''){
            setError("Plz Enter The Valid Email-id")
            return
            }
              if(!email.includes('@')){
                setError("Please Enter A Valid Email")
                 return
                }
            if(password===''){
             setError("Plz Enter The Password")
             return
            }
              if(password.length < 6){
                setError("Password must be at least 6 characters")
                  return
                 }
                 navigate(`/SwapRequest?itemId=${itemId}`)
          console.log(email,password)}}>
            <h1 className='text-2xl font-bold'>Login</h1>
            <label className='text-lg font-bold'>Email</label>
            <input type='email' id='email' placeholder='Plz Enter The Email Adress'  value={email}onChange={(e)=>{setEmail(e.target.value)
                setError("")}} className='border rounded-lg px-3 py-2'/>
            <label className='text-lg font-bold'>Password</label>
             <input type='password' id="pwd" placeholder='Plz Enter The Password' value={password}onChange={(e)=>{setPassword(e.target.value)
                setError("")}}className='border rounded-lg px-3 py-2' />
             <p>{error}</p>
            <button type="submit" className='font-semibold rounded-lg cursor-pointer px-6 py-2 border bg-green-300 shadow-md'>Login</button>
            
        </form>
    </div>

  )
}
