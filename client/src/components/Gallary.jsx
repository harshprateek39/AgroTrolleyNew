import React from 'react'

const Gallary = () => {
  return (
    <div className='  flex justify-center gap-4 mt-10 flex-col items-center  xl:pl-1 xl:pr-1 xl:grid-cols-2  2xl:pr-36 2xl:pl-36 ' >
        <h1 className=' font-normal'> Customers Choice  </h1>
        <h2 className=' text-3xl font-semibold'>Check Our Products</h2>
        <div className=' grid  2xl:grid-cols-4 md:grid-cols-2   mt-16  gap-5 '>
            <div className=' 2xl:col-span-2 xl:col-span-1 rounded-2xl overflow-hidden '> <img  className=' object-none h-72  w-full' src='https://www.tastingtable.com/img/gallery/13-most-affordable-grocery-stores-in-2023/l-intro-1679073677.jpg' ></img></div>
            <div className='  rounded-2xl overflow-hidden '><img  className=' object-none h-72  w-full' src='https://www.tastingtable.com/img/gallery/13-most-affordable-grocery-stores-in-2023/l-intro-1679073677.jpg'></img></div>
            <div className=' rounded-2xl overflow-hidden '><img  className=' object-none h-72  w-full' src='https://www.tastingtable.com/img/gallery/13-most-affordable-grocery-stores-in-2023/l-intro-1679073677.jpg'></img></div>
            <div className=' rounded-2xl overflow-hidden  '><img  className=' object-none h-72  w-full' src='https://www.tastingtable.com/img/gallery/13-most-affordable-grocery-stores-in-2023/l-intro-1679073677.jpg'></img></div>
            <div className=' 2xl:col-span-2 xl:col-span-1  rounded-2xl overflow-hidden '><img  className=' object-none h-72  w-full' src='https://www.tastingtable.com/img/gallery/13-most-affordable-grocery-stores-in-2023/l-intro-1679073677.jpg'></img></div>
            <div className='  rounded-2xl overflow-hidden'><img  className=' object-none h-72  w-full' src='https://www.tastingtable.com/img/gallery/13-most-affordable-grocery-stores-in-2023/l-intro-1679073677.jpg'></img></div>
        </div>
    </div>
  )
}

export default Gallary