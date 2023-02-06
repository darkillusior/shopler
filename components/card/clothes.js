import React from 'react'

function Clothes() {
  return (
    <div className=' bg-[#e2e2e1] h-fit text-center text-black font-bold text-5xl'>
    <div className='flex flex-wrap  items-center justify-evenly'>
          <div className='bg-white w-80 flex flex-col justify-evenly h-[34rem] mt-9 font-normal text-2xl'>
            Step 1
            <div className='p-8 font-bold text-lg'><img src='/location.png' className='h-28 m-auto'></img> Select station <div className='text-black text-center font-normal font-sm'>Choose a suitable station to get your food delivered.</div></div>

        </div>
          
          <div className='bg-white flex flex-col justify-evenly w-80 h-[34rem] mt-9  font-normal text-2xl'>
            Step 2
            <div className='p-8 font-bold text-lg'><img src='/cart.png' className='h-28 m-auto'></img>Place Order <div className='text-black text-center font-normal font-sm'>Choose from a wide variety of delicious meals.</div></div>

          </div>
          
          <div className='bg-white flex flex-col justify-evenly w-80 h-[34rem] mt-9  font-normal text-2xl'>
            Step 3
            
            <div className=' p-8 font-bold text-lg'><img src='/sms.png' className='h-28 m-auto'></img>Real time order status<div className='text-black text-center font-normal font-sm'>Track your food order in real time right from your berth.</div></div>

          </div>
          
          <div className='bg-white flex flex-col justify-evenly w-80 h-[34rem] mt-9  font-normal text-2xl'>
            Step 4
            <div className='p-8 font-bold text-lg'><img src='/seat.png' className='h-28 m-auto'></img>On-Seat Delivery <div className='text-black text-center font-normal font-sm'>Enjoy yummy meals delivered at the right time!</div></div>

          </div>

     </div>
    </div>
  )
}

export default Clothes