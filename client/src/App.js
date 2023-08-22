import logo from './logo.svg';
import './App.css';
import {BsArrowRight,BsTruck} from 'react-icons/bs'
import person from './assets/person.png'
import Gallary from './components/Gallary';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import Card from './components/Card';

function App() {

  
  return (
    <div className="App relative p-2">
    
    
      <div className=' grid grid-cols-1 grid-flow-row 2xl:pr-36 2xl:pl-36 mt-16  Apax items-center xl:pl-1 xl:pr-1 gap-1 lg:grid-cols-2 lg:grid-flow-col'>
      <div className=' flex flex-col  gap-4 '>
        <h3 className=' text-lg font-semibold text-gray-700 pl-0 ml-0'>Super Fast Delivery</h3>
        <h1 className=' text-6xl font-extrabold text-gray-800 leading-normal'> Healthy <span className=' text-green-500'> Life </span>  With Fresh Groceries </h1>
        <p  className=' text-gray-800 font-bold text-lg'> simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever
        t</p>
        <div className='flex justify-between '>
          <button className=' flex justify-between items-center bg-yellow-400 pt-3 pb-3 pl-5 pr-5 gap-4 rounded-full '> <span className=' font-semibold text-xl'> Shop Now </span>  <BsArrowRight className='font-semibold text-xl'/> </button>
         </div>
      </div>
      <div className='flex justify-center lg:justify-end h-full  Extracss  relative '>
        <div className=' bg-green-600 aspect-square h-full 
         rounded-full'>
            <div className=' bg-green-200 aspect-square h-5/6 mx-auto FFlow   overflow-hidden
         rounded-full  relative '>
          <img src={person} className=' Person h-full absolute left-1/2'></img>
            
        </div>
        </div>
      </div>
      
      </div>
      <div className=' flex justify-between items-center xl:pl-1 xl:pr-1 2xl:pr-36 2xl:pl-36 mt-16  gap-5 flex-col md:flex-row sm:py-1   '>
      <div  className='flex justify-start items-center gap-4  ring-green-500 ring-1 rounded-full pl-3 py-3 pr-10 flex-grow' >
         <div className=' bg-green-500 p-4 rounded-full '><BsTruck className=' text-white text-2xl'/></div>
        <div>
          <h1 className=' font-semibold'> Free Shipping</h1>
          <p> With Any Purchase Over 500rs</p>
        </div>
      </div>
      <div  className='flex justify-start items-center gap-4  ring-green-500 ring-1 rounded-full pl-3 py-3 pr-10 flex-grow' >
         <div className=' bg-green-500 p-4 rounded-full '><BsTruck className=' text-white text-2xl'/></div>
        <div>
          <h1 className=' font-semibold'> Free Shipping</h1>
          <p> With Any Purchase Over 500rs</p>
        </div>
      </div>
      <div  className='flex justify-start items-center gap-4  ring-green-500 ring-1 rounded-full pl-3 py-3 pr-10 flex-grow' >
         <div className=' bg-green-500 p-4 rounded-full '><BsTruck className=' text-white text-2xl'/></div>
        <div>
          <h1 className=' font-semibold'> Free Shipping</h1>
          <p> With Any Purchase Over 500rs</p>
        </div>
      </div>
       </div>
       <Gallary/>
       <div className=' grid 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-2 py-10 lg:px-36'>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    </div>
    
    </div>
  );
}

export default App;
