import React from 'react'
import Navbar from './navbar2'

function Cart() {
  return (
    <>
    <div className='m-auto p-2 h-1/4 w-1/4 top-1/2    bg-white rounded-md shadow-md  z-0 fixed '>
        <div className='flex justify-evenly'>
            <img className='w-20 h-20' src='/tomatoes.jpg'></img>            
            <h1>Tomatoes</h1>
            <div className='flex'>
                <button className='rounded-full bg-red text-white'>-</button>
                <h1>2</h1>
                <button className='rounded-full bg-red text-white'>+</button>
            </div>
        
        </div>
    </div>
    </>

  )
}

export default Cart