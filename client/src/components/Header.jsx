import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useMediaQuery } from '@mui/material'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import {BsSearch ,BsCart2}from 'react-icons/bs'
import {Button} from '@mui/material'
const Header = () => {
    const isNonMobileScreens = useMediaQuery("(min-width: 100px)");
    
    const [navFix,setnavFIx]=useState(false);
   window.addEventListener('scroll', ()=>{
      if(window.scrollY>45){ setnavFIx(true);}
      else {setnavFIx(false);}
   })
  return (
    <>{ isNonMobileScreens ? 
    <div className= {navFix?'flex justify-between  shadow-md shadow-green-200  pr-36 pl-36 items-center STicky bg-white z-10 pt-1 ': 'flex justify-between pt-10 pb-10 pr-36 pl-36 items-center '}>
        <Link  to={'/'}> <img className=' w-44' src={logo}></img> </Link>
        <div className='flex justify-between gap-8 text-gray-500 '>
        <Link  to={'/'} className=' focus:text-green-500 font-medium transition duration-150 ease-out hover:text-green-500 ' >Home</Link>
        <Link  to={'/about' } className=' focus:text-green-500 font-medium transition duration-150 ease-out hover:text-green-500 '>About</Link>
        <Link  to={'/products'} className=' focus:text-green-500 font-medium transition duration-150 ease-out hover:text-green-500 '>Products</Link>
        <Link  to={'/news'} className=' focus:text-green-500 font-medium transition duration-150 ease-out hover:text-green-500 '>News</Link>
        <Link  to={'/contacts'} className=' focus:text-green-500 font-medium transition duration-150 ease-out hover:text-green-500 '>Contacts</Link>
        
        
        </div>
        <div className='flex justify-center gap-10 items-center text-gray-500'>
            <BsSearch className=' focus:text-green-500 font-medium transition duration-150 ease-out hover:text-green-500  cursor-pointer' />
            <BsCart2 className=' focus:text-green-500 font-medium transition duration-150 ease-out hover:text-green-500 cursor-pointer ' />
            <h6 className='  font-medium transition duration-150 ease-out hover:text-green-500  cursor-pointer '>Sign In</h6>
            <button className=' shadow-none outline-none border-none  p-4  bg-green-500  text-white cursor-pointer rounded-md' >
  Shop Now
</button>
        </div>
    </div>:
    <div className=' flex justify-between bg-red-500'>
        <div className='flex justify-between '>
        <Link  to={'/'}>Home</Link>
        <Link  to={'/about'}>About</Link>
        <Link  to={'/products'}>Products</Link>
        <Link  to={'/news'}>News</Link>
        <Link  to={'/contacts'}>Contacts</Link>

        </div>
        <div>
            
        </div>
        <div></div>
    </div>}
    <Outlet/>
    </>
  ) 
}

export default Header