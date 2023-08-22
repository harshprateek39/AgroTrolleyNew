import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { ClassNames } from '@emotion/react';
import chocolate from '../assets/chocolate.png'
import { CardDetail } from '../assets/cardData';
import { useState } from 'react';
import {GrNext, GrPrevious} from 'react-icons/gr';
import {BiSolidOffer} from 'react-icons/bi';
import {BsPlus} from 'react-icons/bs'
import {BiMinus} from 'react-icons/bi'
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function BasicGrid() {
  const [viewImage,SetviewImage]=useState({data:CardDetail.images[0], index:0});

  // changing wallpaper casorel

  const changeImage= (data,index)=>{ 
    const x=document.getElementById("yes");
    if(index>viewImage.index){
      x.classList.add('mango');
      setTimeout(()=>{
        x.classList.remove('mango');
      },300);
    }
     else if(index<viewImage.index) {x.classList.add('fango');
    setTimeout(()=>{
      x.classList.remove('fango');
    },300);}
    SetviewImage({data,index});
    
    }
    // change button scroll
    const handleScroll=(direction)=>{
    const x= document.getElementById('scrollable');
     if(direction==true){
      
    x.scrollBy({left:-200,behavior:'smooth'})}
    if(direction==false){
      x.scrollBy({left:200,behavior:'smooth'})
    }
    }
    const [quantity, setQuantity]=useState(0)
  return (
    
    <Box className='Apax App xl:mx-36 xs:mx-2 ' sx={{ flexGrow: 1   }} >
      <Grid container spacing={4} className=''>
        <Grid item xs={12} md={6} spacing={2} className='    justify-center items-center gap-2  '>
           <div className='  flex justify-center p-2 bg-gray-100  ring-1 ring-gray-200 rounded-sm overflow-hidden'><img id='yes' className=' h-96  '  src={viewImage.data}></img></div>

{/* 
slider */}

           <div className='flex  justify-center bg-gray-100  rounded-sm p-1  gap-1 '>
           <button className=' bg-white rounded-sm ring-2 ring-gray-300 px-2' onClick={()=>{handleScroll(true)}}><GrPrevious/></button>
           <div className='  '>
                <div  className=' flex  justify-between  gap-1  PicG overflow-y-auto  p-1' id='scrollable' >
             {CardDetail.images.map((data,index)=>
                  <img  key={index} onClick={()=>changeImage(data,index)} className=" focus:ring-2  h-16 w-16 aspect-square object-cover hover:ring-2 rounded-sm  ring-green-200 hover:shadow-md hover:drop-shadow-md  " src={data}></img>
             )}
           </div></div>
           <button className=' bg-white rounded-sm ring-2 ring-gray-300 px-2'  onClick={()=>{handleScroll(false)}}><GrNext/></button>
           
           </div>

   {/* cart button */}
      <div className=' flex justify-stretch my-2'>
           {quantity===0?
           
     <button className=' bg-yellow-400 rounded-md font-medium py-3 text-gray-200 w-1/2  ' onClick={()=>setQuantity(1)}> ADD</button>:
     
     <div className='flex justify-center gap-2 grow'>
      
       <button className=' p-3 bg-green-500 w-2/3 hover:bg-green-400 outline outline-1 outline-gray-200 rounded-sm text-gray-100 font-medium '  > Cart!</button> 
       <div className=' flex justify-around gap-1'>
            <button className=' p-1 bg-yellow-300 w-full outline outline-1 outline-gray-200 rounded-sm px-2'  onClick={()=>{quantity<5 &&setQuantity(quantity+1)}} > <BsPlus/> </button> 
       <input className=' w-10 outline outline-1 rounded-sm  outline-gray-200 text-center' type="text" disabled="true" value={quantity} ></input>
           <button className=' p-1 bg-red-500 w-full outline outline-1 outline-gray-200 rounded-sm px-2' onClick={()=>{quantity>0 && setQuantity(quantity-1)}}  > <BiMinus/> </button> </div>
     </div>}</div>


        </Grid>
        <Grid item xs={12} md={6} >
         <div className=' flex flex-col items-start '>
         <h1 className=' text-3xl font-semibold '> Cadboury Perk</h1>
         <h2> 50gm </h2>
         <div className='flex gap-3 items-baseline'>
         <h1 className=' text-2xl font-semibold '> Rs 500</h1>
         
         <span className=' line-through text-gray-500  text-sm font-semibold' > Rs 32</span>
         <h3 className=' font-semibold text-green-500'> 20% off </h3>
         
          </div>
          <div className=' px-1 my-2 py-0.5 flex  gap-1 '> 
          <h2 className='font-semibold  rounded-sm   bg-green-600 text-gray-100 text-sm p-1'> Rating 4.2 </h2> 
          <p> 125 Ratings </p>
          </div>
          <div className=' flex flex-col py-3 gap-1'>
          <h1 className=' text-xl font-semibold '> Offers</h1>
          <p className='flex items-baseline gap-2 py-1 '> <BiSolidOffer  className=' text-green-500 font-normal'/> <span> 10% off with ICICI Bank Card </span></p> 
          <p className='flex items-baseline gap-2 py-1 '> <BiSolidOffer  className=' text-green-500 font-normal'/> <span> 5% off with HDFC Bank Card </span></p> 
          <p className='flex items-baseline gap-2 py-1 '> <BiSolidOffer  className=' text-green-500 font-normal'/> <span> 8% off with MASTER  Card </span></p> 
          </div>
         </div>
        </Grid>
    
      </Grid>
    </Box>
  );
}