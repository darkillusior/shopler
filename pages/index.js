import React, { useState } from 'react'
import Navbar2 from '../components/navbar2'
import Link from 'next/link';
function Index({ user1 }) {
  const [showAccordian, setShowAccordian] = useState(false)
  const accordian = () => {
    setShowAccordian(!showAccordian)
  
  }

  return (
    <>
      <Navbar2 user={user1} />
      <main className='p-2 bg-[#e3e6e6] ' style={{ backgroundImage: "url('/bg3.jpg')" }} >
      

        <section className='  m-2 mt-4  sm:flex sm:flex-row sm:flex-wrap flex flex-col sm:justify-around '>
      
          <content className='m-2  bg-slate-900   rounded-md shadow-md  hover:bg-slate-800 flex flex-col sm:w-[25%] w-full'>
            <Link href={`/shops/general-store`}>
              <a >
                <div className='flex flex-col justify-center w-full p-5'>
                  <img className='hover:cursor-pointer  p-2 rounded-[100px] md:h-[340px] md:w-[350px] ' src='general.png'></img>
                  <div className='flex  justify-evenly w-full mt-5 '>
                    <img className='md:w-28 md:h-28 w-20 h-20 rounded-full' src='/generalItems1.jpg' />
                    <img className='md:w-28 md:h-28 w-20 h-20 rounded-full ' src='/generalItems1.webp' />
                  </div>
                </div>
                <div className='mb-2 text-center text-white font-semibold text-xl'>General Store</div>
              </a></Link>
              </content>
             
            

         
          <content className='m-2  bg-slate-900  rounded-md shadow-md  hover:bg-slate-800 flex flex-col sm:w-[25%] w-full'>
            <Link href={`/shops/Grocery-Store`}>
              <a >
                <div className='flex flex-col justify-center w-full p-5'>
                  <img className='hover:cursor-pointer  p-2 rounded-[100px] md:h-[340px] md:w-[350px] ' src='/grocery.jpg'></img>
                  <div className='flex  justify-evenly w-full mt-5 '>
                    <img className='md:w-28 md:h-28 w-20 h-20 rounded-full' src='/groceryItems.jpg' />
                    <img className='md:w-28 md:h-28 w-20 h-20 rounded-full ' src='/groceryItmes2.jpg' />
                  </div>
                </div>
                <div className='mb-2 text-center text-white font-semibold text-xl'>Grocery Store Store</div>
              </a></Link>
          </content>

           
           
          <content className='m-2  bg-slate-900  rounded-md shadow-md  hover:bg-slate-800 flex flex-col sm:w-[25%] w-full'>
            <Link href={`/shops/Grocery-Store`}>
              <a >
                <div className='flex flex-col justify-center w-full p-5'>
                  <img className='hover:cursor-pointer  p-2 rounded-[100px] md:h-[340px] md:w-[350px] ' src='stationary.jpg'></img>
                  <div className='flex  justify-evenly w-full mt-5 '>
                    <img className='md:w-28 md:h-28 w-20 h-20 rounded-full' src='/staionaryItems1.jpg' />
                    <img className='md:w-28 md:h-28 w-20 h-20 rounded-full ' src='/staionaryItems2.webp' />
                  </div>
                </div>
                <div className='mb-2 text-center text-white font-semibold text-xl'>Stationary Store</div>
              </a></Link>
          </content>

         
          {/* <content className='m-2  bg-white  rounded-md shadow-md  hover:bg-[#feffea] flex flex-col sm:w-[25%] w-full'>
            <Link href={`/shops/Grocery-Store`}>
              <a >
                <div className='flex flex-col justify-center w-full p-5'>
                  <img className='hover:cursor-pointer  p-2 rounded-[100px] md:w-[350px] ' src='https://res.cloudinary.com/darkillisour/image/upload/v1675695099/general-store_bkhln6.jpg'></img>
                  <div className='flex  justify-evenly w-full mt-5 '>
                    <img className='md:w-28 md:h-28 w-20 h-20 rounded-full' src='/demo.jpg' />
                    <img className='md:w-28 md:h-28 w-20 h-20 rounded-full ' src='/demo.jpg' />
                  </div>
                </div>
                <div className='mb-2 text-center text-white font-semibold text-xl'>General Store</div>
              </a></Link>
          </content>

         
          <content className='m-2  bg-white  rounded-md shadow-md  hover:bg-[#feffea] flex flex-col sm:w-[25%] w-full'>
            <Link href={`/shops/Grocery-Store`}>
              <a >
                <div className='flex flex-col justify-center w-full p-5'>
                  <img className='hover:cursor-pointer  p-2 rounded-[100px] md:w-[350px] ' src='https://res.cloudinary.com/darkillisour/image/upload/v1675695099/general-store_bkhln6.jpg'></img>
                  <div className='flex  justify-evenly w-full mt-5 '>
                    <img className='md:w-28 md:h-28 w-20 h-20 rounded-full' src='/demo.jpg' />
                    <img className='md:w-28 md:h-28 w-20 h-20 rounded-full ' src='/demo.jpg' />
                  </div>
                </div>
                <div className='mb-2 text-center text-black font-semibold text-xl'>General Store</div>
              </a></Link>
          </content>


          <content className='m-2  bg-white  rounded-md shadow-md  hover:bg-[#feffea] flex flex-col sm:w-[25%] w-full'>
            <Link href={`/shops/Grocery-Store`}>
              <a >
                <div className='flex flex-col justify-center w-full p-5'>
                  <img className='hover:cursor-pointer  p-2 rounded-[100px] md:w-[350px] ' src='https://res.cloudinary.com/darkillisour/image/upload/v1675695099/general-store_bkhln6.jpg'></img>
                  <div className='flex  justify-evenly w-full mt-5 '>
                    <img className='md:w-28 md:h-28 w-20 h-20 rounded-full' src='/demo.jpg' />
                    <img className='md:w-28 md:h-28 w-20 h-20 rounded-full ' src='/demo.jpg' />
                  </div>
                </div>
                <div className='mb-2 text-center text-black font-semibold text-xl'>General Store</div>
              </a></Link>
          </content>


          <content className='m-2  bg-white  rounded-md shadow-md  hover:bg-[#feffea] flex flex-col sm:w-[25%] w-full'>
            <Link href={`/shops/Grocery-Store`}>
              <a >
                <div className='flex flex-col justify-center w-full p-5'>
                  <img className='hover:cursor-pointer  p-2 rounded-[100px] md:w-[350px] ' src='https://res.cloudinary.com/darkillisour/image/upload/v1675695099/general-store_bkhln6.jpg'></img>
                  <div className='flex  justify-evenly w-full mt-5 '>
                    <img className='md:w-28 md:h-28 w-20 h-20 rounded-full' src='/demo.jpg' />
                    <img className='md:w-28 md:h-28 w-20 h-20 rounded-full ' src='/demo.jpg' />
                  </div>
                </div>
                <div className='mb-2 text-center text-black font-semibold text-xl'>General Store</div>
              </a></Link>
          </content>
 */}


          <content onMouseEnter={accordian} onMouseLeave={accordian} className='m-2 mt-5  bg-slate-900  rounded-md shadow-md hover:bg-slate-800 flex flex-col sm:w-[25%] w-full   justify-center '>
            <div className={` ${showAccordian ? 'mt-2 flex flex-col shadow-md justify-evenly m-auto animate-popup  relative h-32  w-44 rounded-sm bg-lime-100' : 'mt-2 flex flex-col justify-evenly m-auto relative h-0 transition-all duration-700 overflow-hidden  w-44 rounded-sm bg-lime-100 '} `} >


              <div className=''>
                <Link href={`/shops/Doctor`}><a > <div className='rounded-sm hover:shadow-md hover:border-2 hover:cursor-pointer hover:bg-lime-200  hover:border-green-800 h-14 flex items-center justify-center text-slate-700  text-center font-normal text-base'>  Doctor Appointment</div>
                </a></Link><hr />
                <div className='rounded-sm hover:shadow-md hover:bg-lime-200  hover:border-2 text-slate-700 hover:cursor-pointer hover:border-green-800 h-14 flex items-center justify-center text-center font-normal text-base'><a href='/bookings'>Auto Bookings</a></div>
              </div>
            </div>
            <div className='flex justify-center p-5'  >
              
              <img className='hover:cursor-pointer rounded-full ' src='https://res.cloudinary.com/darkillisour/image/upload/v1675581238/ydgfcy7hvpyp3xkizodl.jpg'></img>
            </div>
            
            <div className='mb-2 text-center text-white font-semibold text-xl'>Appointments/Booking</div>
            
           
          
          </content>



        </section>
      </main>
    </>
  )
}

export default Index