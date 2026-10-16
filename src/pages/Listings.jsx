import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { clothes } from '../data/clothes'
export default function Listings() {
 
const [savedClothes, setSaveClothes] = useState(() => {
  const storedClothes = JSON.parse(localStorage.getItem('clothes'));

  const needsUpdate =
    !Array.isArray(storedClothes) ||
    storedClothes.some(
      (item) => item.address === 'Gachiboli, Hyderabad'
    ) ||
    !storedClothes.some((item) => item.id === 7);

  if (needsUpdate) {
    localStorage.setItem('clothes', JSON.stringify(clothes));
    return clothes;
  }

  return storedClothes;
});

  const [selectedLocation,setSelectedLocation] =useState('ALL');
    const filterdClothes =savedClothes.filter((item)=>{
    if(selectedLocation=== 'ALL'){
      return true;
    }
    return item.address
    .toLowerCase()
    .includes(selectedLocation.toLowerCase())
    })
  const [editCloth,setEditCloth] =useState(null);
  const handleDelete=(id)=>{
    const confirmDelete= window.confirm("Are You Sure You Wants To Delete These Items")
    if(!confirmDelete){
      return
    }
  const updateClothes=savedClothes.filter(
    (item)=> item.id !==id
  )
   setSaveClothes(updateClothes)
   localStorage.setItem('clothes',JSON.stringify(updateClothes))
  }
   const handleEdit =(id)=>{
    const selectClothes = savedClothes.find(
      (item)=>item.id === id
    )
    setEditCloth(selectClothes);
    
   }
   
   const handleSaveEdit = () => {
  if (!editCloth.name.trim()) {
    alert("Please enter the clothing name");
    return;
  }

  const updatedClothes = savedClothes.map((item) =>
    item.id === editCloth.id ? editCloth : item
  );

  setSaveClothes(updatedClothes);
  localStorage.setItem("clothes", JSON.stringify(updatedClothes));
  setEditCloth(null);
};

  return (
    <>
    
    <div className='py-12 px-8'>
      <h1 className='text-3xl font-bold text-center'>Clothing Listings</h1>
      <p className='text-gray-600  text-center mt-3'>Find clothes available for exchange</p>
    </div>
    <div className='p-8 mb-6'>
      <label className='block font-semibold mb-2'>Filter by Location </label>
      <select
      value={selectedLocation}
      onChange={(e)=>setSelectedLocation(e.target.value)}
      className='border rounded-md p-3 w-full md:w-1/2'>
        <option value='ALL'>All Location</option>
        <option value='Madhapur'>Madhapur</option>
        <option value='Habisguda'>Habisguda</option>
        <option value='Sr Nager'>SR Nager</option>
        <option value='High tech city'>High tech city</option>
        <option value='Ameerpreet'>Ameerpreet</option>
        <option value='Jntu'>Jntu</option>
      </select>
    </div>
     {editCloth &&(
      <div className='p-6'>
        <h2 className='text-3xl font-bold'>Edit Clothing Listing</h2>
        <div className='mb-3'>
          <label className='block semi-bold'>NAME:</label>
          <input 
          type='text' value={editCloth.name} 
          onChange={(e)=>
            setEditCloth({...editCloth,name:e.target.value})
          }
          className='rounded-lg border p-2 w-full'/>
        </div>
        <div className='mb-3'>
          <label className='block semi-bold'>BRAND:</label>
          <input 
          type='text' value={editCloth.brand} 
          onChange={(e)=>
            setEditCloth({...editCloth,brand:e.target.value})
          }
          className='rounded-lg border p-2 w-full'/>
        </div>
        <div className='mb-3'>
          <label className='block semi-bold'>SIZE:</label>
          <input 
          type='text' value={editCloth.size} 
          onChange={(e)=>
            setEditCloth({...editCloth,size:e.target.value})
          }
          className='rounded-lg border p-2 w-full'/>
        </div>
        <div className='mb-3'>
          <label className='block semi-bold'>CONDITION:</label>
          <input 
          type='text' value={editCloth.condition} 
          onChange={(e)=>
            setEditCloth({...editCloth,condition:e.target.value})
          }
          className='rounded-lg border p-2 w-full'/>
        </div>
        <div className='mb-3'>
          <label className='block semi-bold'>ADDRESS:</label>
          <input 
          type='text' value={editCloth.address} 
          onChange={(e)=>
            setEditCloth({...editCloth,address:e.target.value})
          }
          className='rounded-lg border p-2 w-full'/>
        </div>
        <div className='mb-3'>
          <label className='block semi-bold'>SWAPVALUE:</label>
          <input 
          type='number' value={editCloth.swapValue} 
          onChange={(e)=>
            setEditCloth({...editCloth,swapValue:e.target.value})
          }
          className='rounded-lg border p-2 w-full'/>
        </div>
        <div className='mb-3'>
          <label className='block semi-bold'>AVAILABILITY:</label>
          <input 
          type='text' value={editCloth.availability} 
          onChange={(e)=>
            setEditCloth({...editCloth,availability:e.target.value})
          }
          className='rounded-lg border p-2 w-full'/>
        </div>
        
        <button
         onClick={handleSaveEdit}
          className='bg-blue-500 text-white px-6 py-3 rounded-lg mt-3 cursor-pointer'>
          Save Changes
           </button>
           
           <button
            onClick={() => setEditCloth(null)}
             className='bg-gray-500 text-white px-6 py-3 rounded-lg mt-3 ml-3 cursor-pointer'>
              Cancel
             </button>

      </div>
     )}
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
    {filterdClothes.map((items,index) =>{
      return <div key={index}>
        <div className='rounded-lg shadow-md overflow-hidden'> 
        <div className='h-64 bg-gray-300'>
          <img src={items.image} alt='Clothings' className="w-full h-full object-cover"/>
        </div>
        <div className='p-5'>
        <h2 className='text-xl font-semibold'>ID:{items.id}</h2>
        <h2 className='text-xl font-semibold'>NAME:{items.name} </h2>
        <p className='text-lg font-semibold text-gray-600'>BRAND:{items.brand}</p>
        <p className='text-lg font-semibold text-gray-600'>SIZE:{items.size}</p>
        <p className='text-lg font-semibold text-gray-600'>CONDITION:{items.condition}</p>
        <p className='text-lg font-semibold text-gray-600'>ADDRESS:{items.address}</p>
        <p className='text-lg font-semibold text-gray-600'>SWAPVALUE:{items.swapValue}</p>
        <p className='text-lg font-semibold text-gray-600'>AVAILABILITY:{items.availability}</p>
        <Link to={`/item/${items.id}`}>
        <button className='bg-green-500 cursor-pointer text-white px-8 py-3 hover:bg-red-500 transition duration-1000 rounded-lg font-semibold shadow-md'>View Details</button>
        </Link>
        <button 
        onClick={()=>handleDelete(items.id)}
        className='rounded-lg cursor-pointer text-white px-8 py-3 mt-4 shadow-md bg-red-500'>Delete</button>
        <button 
        onClick={()=>handleEdit(items.id)}
        className='rounded-lg cursor-pointer text-white px-8 py-3 mt-4 shadow-md bg-green-500'>Edit</button>
        </div>
        </div>
        </div>
        
    })}
</div>
  
    </>
  
  )
}
 
 






              