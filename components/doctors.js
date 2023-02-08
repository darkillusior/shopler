import React, { useState } from 'react'
import Doctor1 from '../components/doctor1'
function Doctors({posts,setDoctor,doctor}) {

  
  return (
    <>
      <div className=' w-1/4 h-screen  bg-teal-100 flex flex-col '>
      <div className= 'justify-center hover:border hover:border-slate-700 h-16 flex items-center hover:cursor-pointer text-center text-black font-bold  text-base  sm:text-xl' >Select your Doctor:</div>
      {posts.dr.map((product, index) => (
     <> <div className={doctor.index==index?' justify-center hover:border hover:border-slate-700 h-16 flex items-center hover:cursor-pointer text-center text-slate-900  bg-teal-300 shadow-md font-medium text-lg':' justify-center hover:border hover:border-slate-700 h-16 flex items-center hover:cursor-pointer text-center text-slate-500 font-medium  text-base  sm:text-xl'} onClick={()=>{setDoctor({index,product})}}>{product.name}</div>
             
                        
              </>          ))}
       
         
    

      {/* <div className= 'h-16 justify-center hover:border hover:border-slate-700 flex items-center hover:cursor-pointer  text-center text-slate-500 font-medium text-lg'>My Doctor's Clinic</div>

      <div className='h-16 justify-center hover:border hover:border-slate-700 flex items-center hover:cursor-pointer text-center text-slate-500 font-medium text-lg'>Dr Mohan joshi</div> */}

    </div>

    </>
  )
}

export default Doctors