import React, { useState } from 'react'

function Doctors({posts,setDoctor,doctor}) {

  
  return (
    <>
      <div className=' md:w-1/4 md:h-screen  bg-teal-100 md:flex md:flex-col md:justify-start h-20 w-full flex justify-evenly  items-center'>
      <div className= 'justify-center   h-16 flex items-center hover:cursor-pointer text-center text-black font-bold  text-base  sm:text-xl' >Select your Doctor:</div>
      {posts.dr.map((product, index) => (
     <> <div className={doctor.index==index?' md:w-full justify-center  hover:bg-slate-100 h-16 flex items-center hover:cursor-pointer text-center text-slate-900  bg-teal-300 shadow-md font-medium text-lg p-2':'md:w-full p-2 justify-center  hover:bg-slate-100 h-16 flex items-center hover:cursor-pointer text-center text-slate-500 font-medium  text-base  sm:text-xl'} onClick={()=>{setDoctor({index,product})}}>{product.name}</div>
             
                        
              </>          ))}
       
         
    

      {/* <div className= 'h-16 justify-center hover:border hover:border-slate-700 flex items-center hover:cursor-pointer  text-center text-slate-500 font-medium text-lg'>My Doctor's Clinic</div>

      <div className='h-16 justify-center hover:border hover:border-slate-700 flex items-center hover:cursor-pointer text-center text-slate-500 font-medium text-lg'>Dr Mohan joshi</div> */}

    </div>

    </>
  )
}

export default Doctors