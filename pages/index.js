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
      <main className='p-2 bg-gradient-to-b from-gray-200 to-white' >
        <div className='font-semibold text-2xl font-serif text-black'>Select Category:</div>

        <section className=' p-2 m-2 min-[375px]:flex flex-wrap sm:grid grid-cols-3 justify-evenly'>
          <Link href={`/shops/general-store`}>
            <a >
              <content className='m-2 border-2 bg-zinc-200 rounded-md border-gray-500  hover:bg-green-200  flex flex-col '>
                <div className='flex justify-center'>
                  <img className='hover:cursor-pointer h-44 w-44 p-2' src='https://res.cloudinary.com/darkillisour/image/upload/v1675695099/general-store_bkhln6.jpg'></img>
                </div>
                <span className='text-center text-black font-semibold text-sm'>General Store</span>
              </content>
            </a></Link>

          <Link href={`/shops/Grocery-Store`}>
            <a >
              <content className='m-2  bg-zinc-100 rounded-md border-2 border-gray-500  hover:bg-green-200  flex flex-col '>
                <div className='flex justify-center'>
                  <img className='hover:cursor-pointer p-2 h-44 w-44' src='https://res.cloudinary.com/darkillisour/image/upload/v1675695098/grocery_eewvz9.jpg'></img>
                </div>
                <span className='text-center text-black font-semibold text-sm'>Grocery Store</span>
              </content>
            </a></Link>
            <Link href={`/shops/Electronic-Store`}><a >
          <content className='m-2 bg-zinc-100 rounded-md  border-2 border-gray-500  hover:bg-green-200  flex flex-col '>
            <div className='flex justify-center'>
              <img className='hover:cursor-pointer p-2 h-44 w-44' src='https://res.cloudinary.com/darkillisour/image/upload/v1675695098/electronics_nor18i.webp'></img>
            </div>
            <span className='text-center text-black font-semibold text-sm'>Electronic Store</span>
          </content></a>
</Link> <Link href={`/shops/Books-Store`}><a >
          <content className='m-2 bg-zinc-100 rounded-md border-2 border-gray-500  hover:bg-green-200 flex flex-col justify-center '>
            <div className='flex justify-center'>
              <img className='hover:cursor-pointer p-2 h-44 w-44' src='https://res.cloudinary.com/darkillisour/image/upload/v1675695098/bookstore_dgllup.webp'></img>
            </div>
            <span className='text-center text-black font-semibold text-sm'>Book Store</span>
          </content>
          </a>
          </Link>
          <Link href={`/shops/Pharmacy-Store`}><a >
          <content className='m-2 bg-zinc-100 rounded-md border-2 border-gray-500  hover:bg-green-200 flex flex-col justify-center '>
            <div className='flex justify-center'>
             <img className='hover:cursor-pointer p-2 h-44 w-44' src='https://res.cloudinary.com/darkillisour/image/upload/v1675695099/pharmacy_lqxwqa.jpg'></img>
            </div>
            <span className='text-center text-black font-semibold text-sm'>Pharmacy Store</span>
          </content>
</a>
</Link>
<Link href={`/shops/Pharmacy-Store`}><a >
          <content className='m-2 bg-zinc-100 rounded-md border-2 border-gray-500  hover:bg-green-200 flex flex-col justify-center '>
            <div className='flex justify-center'>
             <img className='hover:cursor-pointer p-2 h-44 w-44' src='https://res.cloudinary.com/darkillisour/image/upload/v1675695100/stationary_scvf5p.jpg'></img>
            </div>
            <span className='text-center text-black font-semibold text-sm'>Stationary Store</span>
          </content>
</a>
</Link>
          <content className='m-2 bg-zinc-100 rounded-md border-2 border-gray-500  hover:bg-green-200  flex flex-col justify-center '>
            <div className='flex justify-center'>
              <a href='/clothes'><img className='hover:cursor-pointer  p-2 h-44 w-44' src='https://res.cloudinary.com/darkillisour/image/upload/v1675695099/clothes_izqzks.webp'></img></a>
            </div>
            <span className='text-center text-black font-semibold text-sm'>Clothes Store</span>
          </content>



          <content onMouseEnter={accordian} onMouseLeave={accordian} className='m-2 border-2 bg-zinc-100 rounded-md border-gray-500 hover:bg-green-200 flex flex-col justify-center '>
            <div className={` ${showAccordian ? 'mt-2 flex flex-col shadow-md justify-evenly m-auto animate-popup  relative h-32  w-44 rounded-sm bg-lime-100' : 'mt-2 flex flex-col justify-evenly m-auto relative h-0 transition-all duration-700 overflow-hidden w-44 rounded-sm bg-lime-100 '} `} >

              <div className=''>
               <Link href={`/shops/Doctor`}><a > <div className='rounded-sm hover:shadow-md hover:border-2 hover:cursor-pointer hover:bg-lime-200 hover:border-green-800 h-14 flex items-center justify-center text-slate-700  text-center font-normal text-base'>         Doctor Appointment</div>
                </a></Link><hr />
                <div className='rounded-sm hover:shadow-md hover:bg-lime-200  hover:border-2 text-slate-700 hover:cursor-pointer hover:border-green-800 h-14 flex items-center justify-center text-center font-normal text-base'><a href='/bookings'>Auto Bookings</a></div>
              </div>
            </div>
            <div className='flex justify-center'  >
              <img className='hover:cursor-pointer  p-2 h-44 w-44' src='https://res.cloudinary.com/darkillisour/image/upload/v1675581238/ydgfcy7hvpyp3xkizodl.jpg'></img>
            </div>
            <span className='text-center text-black font-semibold text-sm'>Appointment/Bookings</span>
          </content>



        </section>
      </main>
    </>
  )
}

export default Index