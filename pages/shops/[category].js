import React from 'react'
import  { useState } from "react";

import Navbar from '../../components/navbar2'
import axios from "axios";
import baseUrl from "../../utils/baseUrl";

import { parseCookies } from "nookies";
import Link from 'next/link';
import SearchComponent from '../../components/layout/Search';
function GeneralStore({postsData,dr,category }) {
  const [posts, setPosts] = useState(postsData||[]);
  const [dr1, setDr] = useState(dr||[]);
  // console.log(dr)
  return (
    <>
        <Navbar/>
<<<<<<< HEAD
      <content className='flex flex-col  p-2 bg-[#e3e6e6] '>
=======
      <content className='flex flex-col -z-10  p-2 bg-gray-300 '>
>>>>>>> 5ce0bd6f120362cd1b47a804601a1a4a45bb410f
   {category==="Doctor"?<>{dr1.map(post => (
        
        <div className='m-2   h-56 flex flex-wrap   shadow-md rounded-md'>
          <div className='flex '>
            <div className='ml-6 mt-1 flex flex-col'>
              <img className='shadow-md w-44 h-44 m-2' src={post.shopimg}></img>
              <div className='text-center font-bold text-stone-800'>{post.shopname}</div>
            </div>
         <div className='ml-6 flex flex-col justify-evenly'>
  <Link href={`/dr/${post.user._id}`}><button className='m-2 p-2 shadow-md rounded-md bg-red-700 hover:bg-red-500 font-semibold text-zinc-200 text-base'>Enter Clinic/Hospital</button>
             </Link>
            </div>
            


          </div>
        
        </div>
             
       
                   ))}</>:<> {posts.map(post => (
        
        <div className='m-2 bg-white w-fit   flex flex-wrap  shadow-md rounded-md'>
          <div className='flex'>
            <div className='ml-6 mt-1 flex flex-col'>
              <img className='shadow-md w-44 h-44 m-2' src={post.shopimg}></img>
              <div className='text-center font-bold text-stone-800'>{post.shopname}</div>
            </div>
         <div className='ml-4 flex flex-col justify-center'>
  <Link href={`/product/${post.user._id}`}><button className='m-2 p-2 shadow-md rounded-md bg-teal-900 hover:bg-teal-800 font-semibold text-zinc-200 text-lg'>Enter Shop</button>
             </Link><button className='m-2 p-2 shadow-md rounded-md bg-teal-900 hover:bg-teal-800 font-semibold text-zinc-200 text-lg'>Demand Product</button>
            </div>
          </div>
         
          <div className='overflow-y-auto ml-4 p-2'>
           <SearchComponent userId={post.user._id}/>
           <h1 className='text-xl p-1 text-center font-serif font-semibold'>Product list :</h1>
            {post.product.map((product,index)=> ( <div className='grid grid-cols-2 '>
              <div className='bg-white p-1 w-full border border-solid '><span className='text-lg font-bold w-full '>{index+1}.  </span><a className='text-base w-full font-serif font-semibold '>{product.name}</a></div>
            
            </div>  ))}
          </div>
        </div>
             
       
                   ))}</>}  
          
       


      </content>
    </>
   
  )
}

export default GeneralStore
export const getServerSideProps = async ctx => {
  try {
   
    const { token } = parseCookies(ctx);
    const {category } = ctx.query;
 
    const res = await axios.get(`${baseUrl}/api/shop/${category}`, {
      headers: { Authorization: token },
     
    });
  const {post,user}=res.data
  console.log("1gg",user)
    return { props: { postsData: post,dr:user,category :category  } };
  } catch (error) {
    return { props: { errorLoading: true } };
  }
};