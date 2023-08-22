import React, { useState } from 'react'
import {BsInstagram} from 'react-icons/bs';
import {Link} from 'react-router-dom';
import Header from './Header';
const submit =(e)=>{
  e.preventDefault();
  alert(e);
}

const Footer = () => {
  const [email,setEmail]=useState("");
  return (
    <div className=' flex  bg-slate-900 text-white pt-10 mt-10 lg:px-32 pb-10 gap-5 justify-between  flex-col lg:flex-row w-full '  > 
    <div className='flex flex-col gap-6 lg:max-w-xs  '>
    <h1 className=' text-4xl font-semibold'> Grocery Market</h1>
      <h1> We have best sorted product for you that you can get any where</h1>
      <div className=' flex justify-between gap-2 items-center' >
      <a href='https://www.instagram.com/'><div className=' bg-yellow-600 text-black  rounded-full p-3    aspect-square flex justify-center items-center' ><BsInstagram className=' text-3xl' /></div></a>
      <a href='https://www.instagram.com/'><div className=' bg-yellow-600 text-black  rounded-full p-3    aspect-square flex justify-center items-center' ><BsInstagram className=' text-3xl' /></div></a>
      <a href='https://www.instagram.com/'><div className=' bg-yellow-600 text-black  rounded-full p-3    aspect-square flex justify-center items-center' ><BsInstagram className=' text-3xl' /></div></a>
      <a href='https://www.instagram.com/'><div className=' bg-yellow-600 text-black  rounded-full p-3    aspect-square flex justify-center items-center' ><BsInstagram className=' text-3xl' /></div></a>
      </div>
    </div>
    <div className='flex flex-col gap-3 '>
    
      <h1 className=' text-3xl '> Company</h1>
      <Link  to={"/"}>Home</Link>
        <Link  to={'/about'}>About</Link>
        <Link  to={'/products'}>Products</Link>
        <Link  to={'/news'}>News</Link>
        <Link  to={'/contacts'}>Contacts</Link>
    </div>
    <div className='flex flex-col gap-3'>
    
    <h1 className=' text-3xl '> Company</h1>
      <Link  to={'/'}>Home</Link>
        <Link  to={'/about'}>About</Link>
        <Link  to={'/products'}>Products</Link>
        <Link  to={'/news'}>News</Link>
        <Link  to={'/contacts'}>Contacts</Link>
        
    </div>
    <div className='flex flex-col max-w-xs gap-6 ' >
    <h1 className=' text-3xl'> Subscribe to Offers</h1>
    <h1 className=' text-xl '> Subscribe to get our website for upcoming reward and offers</h1>
      <form onSubmit={(e)=>submit(e)} >
        <input className=' text-black outline-none h-12 w-full rounded-md text-center'
        onChange={(e)=>{setEmail(e.target.value)}}
         value={email} type='email'  placeholder='Your Email Address'></input>
        <button className=' bg-yellow-500 p-3 w-2/3 shadow-xl rounded-md text-black text-2xl font-semibold mt-4'>Get Offers!</button>
      </form>
    </div>
    
    </div>
    
  )
}

export default Footer