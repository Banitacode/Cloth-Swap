import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { clothes } from '../data/clothes'

export default function CreateListing() {
    const[productName,setProductName]=useState("")
    const[productType,setProductType]=useState("")
    const[productSize,setProductSize]=useState("")
    const[productBrand,setProductBrand]=useState("")
    const[productCondition,setProductCondition]=useState("")
    const[productSwapValue,setProductSwapValue]=useState("")
    const[productAddress,setProductAddress]=useState("")
    const[productAvailability,setProductAvailability]=useState("")
    const[productImage,setProductImage]=useState(null)
    const[error,setError]=useState("")
     const navigate =useNavigate()
  return (
    <>
    <div className='min-h-screen bg-gray-100 p-6'>
    <h1 className='text-2xl font-bold'>Create Clothing Listing</h1>
    <div className='min-h-screen flex justify-center items-center'>
    <form className='flex flex-col gap-3'onSubmit={(e)=>{e.preventDefault()
    
        if(productName===''){
            setError('Plz Enter The ProductName')
            return
        }
          if(productType===''){
            setError('Plz Enter The ProductType')
            return
        }
                if(productSize===''){
            setError('Plz Enter The ProductSize')
            return
        }
                if(productBrand===''){
            setError('Plz Enter The ProductBrand')
            return
        }
                if(productCondition===''){
            setError('Plz Enter The ProductCondition')
            return
        }
                if(productSwapValue===''){
            setError('Plz Enter The ProductSwapValue')
            return
        }
                if(productAddress===''){
            setError('Plz Enter The Address')
            return
        }
                if(productAvailability===''){
            setError('Plz Enter The ProductAvailability')
            return
        }
        console.log(productImage)
        if(!productImage){
            setError('Plz Enter The product Image')
            return
        }
        let newLists={
        id:clothes.length+1,
        name:productName,
        type:productType,
        size:productSize,
        brand:productBrand,
        condition:productCondition,
        swapValue:productSwapValue,
        address:productAddress,
        availability:productAvailability,
        image:productImage
        
    }
    clothes.push(newLists)
    localStorage.setItem("clothes", JSON.stringify(clothes))
    console.log(JSON.parse(localStorage.getItem("clothes")))

        navigate('/')
        console.log(productName,productType,productSize,productBrand,productCondition,productSwapValue,productAddress,productAvailability);
        
    }}>
    <label className='text-lg font-bold'>Product Name</label>
    <input type='text' id='productName' placeholder='Plz Enter The Product Name' className="border rounded-md p-2 w-full" value={productName} onChange={(e)=>{setProductName(e.target.value)
     setError("")}}/>
    <label className='text-lg font-bold'>Product Type</label>
    <input type='text' id='productType' placeholder='Plz Enter The Product Type' className="border rounded-md p-2 w-full" value={productType} onChange={(e)=>{setProductType(e.target.value)
        setError("")}}/>
    <label className='text-lg font-bold'>Product Size</label>
    <input type='text' id='productSize' placeholder='Plz Enter The Product Size' className="border rounded-md p-2 w-full" value={productSize} onChange={(e)=>{setProductSize(e.target.value)
        setError("")}}/>
    <label className='text-lg font-bold'>Product Brand</label>
    <input type='text' id='productBrand' placeholder='Plz Enter The Product Brand' className="border rounded-md p-2 w-full" value={productBrand} onChange={(e)=>{setProductBrand(e.target.value)
    setError("")}}/>
    <label className='text-lg font-bold'>Product Condition</label>
    <input type='text' id='productCondition' placeholder='Plz Enter The Product Condition' className="border rounded-md p-2 w-full" value={productCondition} onChange={(e)=>{setProductCondition(e.target.value)
    setError("")}}/>
    <label className='text-lg font-bold'>Product swapValue </label>
    <input type='number' id='productSwapValue' placeholder='Plz Enter The Product SwapValue'className="border rounded-md p-2 w-full" value={productSwapValue} onChange={(e)=>{setProductSwapValue(e.target.value)
    setError("")}}/>
    <label className='text-lg font-bold'>Address</label>
    <input type='text' id='address' placeholder='Plz Enter The Address' className="border rounded-md p-2 w-full" value={productAddress} onChange={(e)=>{setProductAddress(e.target.value)
    setError("")}}/>
    <label className='text-lg font-bold'>Product Availability</label>
    <input type='text' id='availability' placeholder='Plz Enter Whether Product Is Avail Or Not' className="border rounded-md p-2 w-full" value={productAvailability} onChange={(e)=>{setProductAvailability(e.target.value)
    setError("")}}/>
    <label className='text-lg font-bold'>Product Image</label>
    <input type="file" id="files" accept="image/*"  className="border rounded-md p-2 w-full" onChange={(e)=>{
    const file=e.target.files[0] 
    const reader= new FileReader()
    reader.onloadend =()=>{
       setProductImage(reader.result)
    }
        reader.readAsDataURL(file)
    
    
    setError("")}}/>
    <p>{error}</p>
    <button type='submit' className='rounded-lg px-8 py-3 bg-green-300 hover:bg-red-300 transition duration-1000 cursor-pointer text-white shadow-md'>Add Listing</button>
    </form>
    </div>
    </div>
    </>

  )
}