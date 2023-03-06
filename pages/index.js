import React, { useState } from 'react'
import Navbar2 from '../components/navbar2'
import Link from 'next/link';
function Index({ user }) {
  const [showAccordian, setShowAccordian] = useState(false)
  const accordian = () => {
    setShowAccordian(!showAccordian)
    console.log(showAccordian)
  }

  return (
    <>
      <Navbar2 user={user} />
<<<<<<< HEAD
      <main className='p-2 bg-[#e3e6e6]' >
      
=======
      <main className='p-2 bg-gradient-to-b from-gray-200 to-white' >
        <div className='font-semibold text-2xl font-serif text-black'>Select Category:</div>
>>>>>>> 5ce0bd6f120362cd1b47a804601a1a4a45bb410f

        <section className='  m-2 mt-4 min-[375px]:flex flex-wrap sm:flex sm:flex-wrap justify-around '>
      
          <content className='m-2  bg-white  rounded-md shadow-md  hover:bg-[#feffea] flex flex-col w-[25%] '>
            <Link href={`/shops/Grocery-Store`}>
              <a >
                <div className='flex flex-col justify-center w-full p-5'>
                  <img className='hover:cursor-pointer  p-2 rounded-[100px]' src='https://res.cloudinary.com/darkillisour/image/upload/v1675695099/general-store_bkhln6.jpg'></img>
                  <div className='flex  justify-evenly w-full mt-5 '>
                    <img className='w-28 h-28 rounded-full' src='/demo.jpg' />
                    <img className='w-28 h-28 rounded-full ' src='/demo.jpg' />
                  </div>
                </div>
                <div className='mb-2 text-center text-black font-semibold text-xl'>General Store</div>
              </a></Link>
              </content>
             
            

         
          <content className='m-2 mt-4  bg-white  rounded-md shadow-md  hover:bg-[#feffea] flex flex-col w-[25%] '>
            <Link href={`/shops/Grocery-Store`}>
              <a >
                <div className='flex flex-col justify-center w-full p-5'>
                  <img className='hover:cursor-pointer  p-2 rounded-[100px]' src='https://res.cloudinary.com/darkillisour/image/upload/v1675695099/general-store_bkhln6.jpg'></img>
                  <div className='flex  justify-evenly w-full mt-5 '>
                    <img className='w-28 h-28 rounded-full' src='/demo.jpg' />
                    <img className='w-28 h-28 rounded-full ' src='/demo.jpg' />
                  </div>
                </div>
                <div className='mb-2 text-center text-black font-semibold text-xl'>General Store</div>
              </a></Link>
          </content>
           
           
          <content className='m-2 mt-4  bg-white  rounded-md shadow-md  hover:bg-[#feffea] flex flex-col w-[25%] '>
            <Link href={`/shops/Grocery-Store`}>
              <a >
                <div className='flex flex-col justify-center w-full p-5'>
                  <img className='hover:cursor-pointer  p-2 rounded-[100px]' src='https://res.cloudinary.com/darkillisour/image/upload/v1675695099/general-store_bkhln6.jpg'></img>
                  <div className='flex  justify-evenly w-full mt-5 '>
                    <img className='w-28 h-28 rounded-full' src='/demo.jpg' />
                    <img className='w-28 h-28 rounded-full ' src='/demo.jpg' />
                  </div>
                </div>
                <div className='mb-2 text-center text-black font-semibold text-xl'>General Store</div>
              </a></Link>
          </content>
         
          <content className='m-2 mt-4 bg-white  rounded-md shadow-md  hover:bg-[#feffea] flex flex-col w-[25%] '>
            <Link href={`/shops/Grocery-Store`}>
              <a >
                <div className='flex flex-col justify-center w-full p-5'>
                  <img className='hover:cursor-pointer  p-2 rounded-[100px]' src='https://res.cloudinary.com/darkillisour/image/upload/v1675695099/general-store_bkhln6.jpg'></img>
                  <div className='flex  justify-evenly w-full mt-5 '>
                    <img className='w-28 h-28 rounded-full' src='/demo.jpg' />
                    <img className='w-28 h-28 rounded-full ' src='/demo.jpg' />
                  </div>
                </div>
                <div className='mb-2 text-center text-black font-semibold text-xl'>General Store</div>
              </a></Link>
          </content>
         
          <content className='m-2 mt-4  bg-white  rounded-md shadow-md  hover:bg-[#feffea] flex flex-col w-[25%] '>
            <Link href={`/shops/Grocery-Store`}>
              <a >
                <div className='flex flex-col justify-center w-full p-5'>
                  <img className='hover:cursor-pointer  p-2 rounded-[100px]' src='https://res.cloudinary.com/darkillisour/image/upload/v1675695099/general-store_bkhln6.jpg'></img>
                  <div className='flex  justify-evenly w-full mt-5 '>
                    <img className='w-28 h-28 rounded-full' src='/demo.jpg' />
                    <img className='w-28 h-28 rounded-full ' src='/demo.jpg' />
                  </div>
                </div>
                <div className='mb-2 text-center text-black font-semibold text-xl'>General Store</div>
              </a></Link>
          </content>


          <content className='m-2 mt-4 bg-white  rounded-md shadow-md  hover:bg-[#feffea] flex flex-col w-[25%] '>
            <Link href={`/shops/Grocery-Store`}>
              <a >
                <div className='flex flex-col justify-center w-full p-5'>
                  <img className='hover:cursor-pointer  p-2 rounded-[100px]' src='https://res.cloudinary.com/darkillisour/image/upload/v1675695099/general-store_bkhln6.jpg'></img>
                  <div className='flex  justify-evenly w-full mt-5 '>
                    <img className='w-28 h-28 rounded-full' src='/demo.jpg' />
                    <img className='w-28 h-28 rounded-full ' src='/demo.jpg' />
                  </div>
                </div>
                <div className='mb-2 text-center text-black font-semibold text-xl'>General Store</div>
              </a></Link>
          </content>

          <content className='m-2 mt-4 bg-white  rounded-md shadow-md  hover:bg-[#feffea] flex flex-col w-[25%] '>
            <Link href={`/shops/Grocery-Store`}>
              <a >
                <div className='flex flex-col justify-center w-full p-5'>
                  <img className='hover:cursor-pointer  p-2 rounded-[100px]' src='https://res.cloudinary.com/darkillisour/image/upload/v1675695099/general-store_bkhln6.jpg'></img>
                  <div className='flex  justify-evenly w-full mt-5 '>
                    <img className='w-28 h-28 rounded-full' src='/demo.jpg' />
                    <img className='w-28 h-28 rounded-full ' src='/demo.jpg' />
                  </div>
                </div>
                <div className='mb-2 text-center text-black font-semibold text-xl'>General Store</div>
              </a></Link>
          </content>


          <content onMouseEnter={accordian} onMouseLeave={accordian} className='m-2 mt-5  bg-white  rounded-md shadow-md hover:bg-[#feffea] flex flex-col w-[25%]    justify-center '>
            <div className='flex justify-center'  >
              <img className='hover:cursor-pointer  p-2 ' src='https://res.cloudinary.com/darkillisour/image/upload/v1675581238/ydgfcy7hvpyp3xkizodl.jpg'></img>
            </div>
            <div className={` ${showAccordian ? 'mt-2 flex flex-col shadow-md justify-evenly m-auto animate-popup  relative h-32  w-44 rounded-sm bg-lime-100' : 'mt-2 flex flex-col justify-evenly m-auto relative h-0 transition-all duration-700 overflow-hidden  w-44 rounded-sm bg-lime-100 '} `} >
          
           
              <div className=''>
                <Link href={`/shops/Doctor`}><a > <div className='rounded-sm hover:shadow-md hover:border-2 hover:cursor-pointer hover:bg-lime-200  hover:border-green-800 h-14 flex items-center justify-center text-slate-700  text-center font-normal text-base'>  Doctor Appointment</div>
                </a></Link><hr />
                <div className='rounded-sm hover:shadow-md hover:bg-lime-200  hover:border-2 text-slate-700 hover:cursor-pointer hover:border-green-800 h-14 flex items-center justify-center text-center font-normal text-base'><a href='/bookings'>Auto Bookings</a></div>
              </div>         
            </div>
            <div className='mb-2 text-center text-black font-semibold text-xl'>Appointments/Booking</div>
          </content>



        </section>
      </main>
    </>
  )
}

export default Index