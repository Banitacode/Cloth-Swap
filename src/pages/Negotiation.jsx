import React from 'react'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { clothes } from '../data/clothes'

export default function Negotiation() {
    const[swapValue,setswapValue]= useState("")
    const[negotiation,setNegotiation] =useState(JSON.parse(localStorage.getItem("negotiation")) || [])
    const[searchParams] =useSearchParams()
    const itemId =searchParams.get('itemId')

    
    const[error,setError] =useState("")
    
    function handleProposal(){
        if(swapValue===''){
         setError('Plz enter the swap value')
        }
        else{
        
       console.log(swapValue);
       console.log(itemId);
       setswapValue('')
        
        let newNegotiation ={
            swapValue:swapValue,
            itemId:Number(itemId)
        }
        const updateNegotiation =[...negotiation,newNegotiation]
        setNegotiation(updateNegotiation)
        localStorage.setItem('negotiation',JSON.stringify(updateNegotiation))
    }
    }

  return (
    <div>
        <div className='text-xl font-bold'>DETAILS NEGOTIATION</div>
       {negotiation
       .filter((proposal)=>{
        return proposal.itemId === Number(itemId)
       })
        .map((proposal,index)=>{
         return<div key={index}>
        <p>itemId:{proposal.itemId},swapValue:{proposal.swapValue}</p>
         </div>
        })
        }

        <div>
            <p className='text-lg font-bold'>ID:{itemId}</p>
           
        <label className='text-lg font-semibold'>PROPOSE SWAP VALUE</label>
        <input type='text' placeholder='Please enter your value' className='text-xl border rounded-lg px-6 py-3'value={swapValue} 
        onChange={(e)=>{
        setswapValue(e.target.value)
        setError('')
        }} />
        <p>{error}</p>
        <button onClick={handleProposal} className='cursor-pointer px-6 py-3 rounded-lg bg-green-500 hover:bg-red-500 transition duration-1000 '>SUBMIT</button>
        </div>
    </div>

  )
}
 