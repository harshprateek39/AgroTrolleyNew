import React, { useState } from 'react'
import chocolate from '../assets/chocolate.png'
import {BsPlus} from 'react-icons/bs'
import {BiMinus} from 'react-icons/bi'

const Card = () => {
    const [quantity, setQuantity]=useState(0)
  return (
    <div  className='flex flex-col bg-green-50 p-2 rounded-sm outline-1 outline outline-gray-200 shadow-md drop-shadow-md hover:shadow-2xl hover:drop-shadow-2xl cursor-pointer'>
    <div className='  flex justify-center items-center p-2 '  >
     <img className=' ' src={chocolate}></img></div>
    
     <div className='flex flex-col '>
     <h1 className='font-medium text-gray-900 hover:text-blue-700'> Perk With extra cheese and combo to get</h1>
    <h2 className= ' font-semibold  text-gray-600 text-sm '>contain 200ml</h2>
     </div>
     <hr className='    border-1 border-gray-300 py-1' ></hr>
    <div className=' flex justify-between w-full'>
    <h1 className=' font-bold text'>Rs 26 <span className=' line-through text-gray-500  text-sm' > Rs 32</span></h1>
    <div className=' bg-green-600 rounded-sm px-1 '> <h2 className='font-semibold  text-gray-100 text-sm'> Rating 4.2 </h2></div>
    
    
     </div>
     <hr className='border-1 border-gray-300 py-1' ></hr>
     {quantity===0?
     <button className=' bg-yellow-400 rounded-md font-medium py-1 text-gray-200' onClick={()=>setQuantity(1)}> ADD</button>:
     <div className='flex justify-between gap-2'>
      
       <button className=' p-1 bg-green-500 w-full hover:bg-green-400 outline outline-1 outline-gray-200 rounded-sm text-gray-100 font-medium'  > Cart!</button> 
       <div className=' flex justify-around gap-1'>
            <button className=' p-1 bg-yellow-300 w-full outline outline-1 outline-gray-200 rounded-sm'  onClick={()=>{quantity<5 &&setQuantity(quantity+1)}} > <BsPlus/> </button> 
       <input className=' w-10 outline outline-1 rounded-sm  outline-gray-200 text-center' type="text" disabled="true" value={quantity} ></input>
           <button className=' p-1 bg-red-500 w-full outline outline-1 outline-gray-200 rounded-sm' onClick={()=>{quantity>0 && setQuantity(quantity-1)}}  > <BiMinus/> </button> </div>
     </div>}
    </div>
  )
}

export default Card