import React from 'react'

function Doctors({posts,setDoctor,doctor}) {

  
  return (
    <>
      <div className=' md:w-1/4 md:h-screen  bg-gray-900 md:flex md:flex-col md:justify-start h-20 w-full flex justify-evenly  items-center static md:fixed'>
      <div className= 'justify-center   h-16 flex items-center hover:cursor-pointer text-center text-white font-bold  text-base  md:text-xl' >Select your Doctor:</div>
      {posts.dr.map((product, index) => (
     <> <div className={doctor.index==index?' md:w-full justify-center  hover:bg-slate-300 h-16 flex items-center hover:cursor-pointer text-center text-slate-900  bg-white shadow-md font-medium text-lg p-2':'md:w-full p-2 justify-center  hover:bg-slate-300 h-16 flex items-center hover:cursor-pointer text-center text-slate-500 font-medium  text-base  md:text-xl'} onClick={()=>{setDoctor({index,product})}}>{product.name}</div>
             
                        
              </>          ))}
       
         
    

      {/* <div className= 'h-16 justify-center hover:border hover:border-slate-700 flex items-center hover:cursor-pointer  text-center text-slate-500 font-medium text-lg'>My Doctor's Clinic</div>

      <div className='h-16 justify-center hover:border hover:border-slate-700 flex items-center hover:cursor-pointer text-center text-slate-500 font-medium text-lg'>Dr Mohan joshi</div> */}

    </div>

    </>
  )
}

export default Doctors