import React from 'react'
import { useState } from "react";

import Navbar2 from '../components/navbar2'

function UserProfile({  user ,user1}) {
  const [products, setMoreproducts] = useState(user.Appointment||[]);
  return (
   <>
        <Navbar2 user={user1} />
            <div className='h-1/3 w-full bg-orange-50 p-2 flex shadow-md'>
            <img className='m-2 w-60 h-60 border-4 border-indigo-800 border-double  rounded-full' src="\44732.jpg" />               
            <div className='  w-1/2 justify-items-center items-center'>
            <h1 className='m-2 p-2 font-bold text-slate-800 text-3xl font-serif'>Name:
            <a className='text-2xl font-serif font-semibold'>{user.name}</a></h1>
            </div>
            </div>

            <div className='shadow-md bg-zinc-800 p-2 text-zinc-200'>
            <h1 className='text-3xl m-2 font-bold text-teal-50 text-center'>Appointments:</h1>
         
            <table className="mt-4 mb-4 m-auto rounded-md p-2 w-full bg-gray-700 shadow-md">
               <thead className='border-2 rounded-md border-slate-200'>
                <tr className=' text-yellow-300 text-base  sm:text-3xl p-2'>
                <th >Sno</th>
                <th >Hospital</th>
                <th>Doctor</th>
                <th >Time</th>            
                </tr>
                </thead>
                {products.map((post,index)=>(  <tbody>
                      <tr className='rounded-md text-slate-100 text-sm   sm:text-2xl text-center border-slate-200 border-collapse border-2 p-2'>
                        <td>{index+1}</td>
                        <td>{post.hospitalname}</td>
                        <td>{post.drname}</td>
                        <td>{post.time}</td>
                    </tr>
                </tbody>
                ))}  </table>

         
           
            </div>
            </>
  )
}

export default UserProfile