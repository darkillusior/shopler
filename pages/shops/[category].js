import React from 'react'
import  { useState } from "react";

import Navbar from '../../components/navbar2'
import axios from "axios";
import baseUrl from "../../utils/baseUrl";

import { parseCookies } from "nookies";
import Link from 'next/link';
import SearchComponent from '../../components/layout/Search';
function GeneralStore({postsData,dr,category,user }) {
  const [posts, setPosts] = useState(postsData||[]);
  const [dr1, setDr] = useState(dr||[]);

  return (
    <>
        <Navbar user={user}/>

      <content className='md:flex-row md:flex md:flex-wrap flex-col   justify-evenly  p-2 bg-[#e3e6e6] '>

  

   {category==="Doctor"?<>{dr1.map(post => (
        
        <div className='m-2 md:w-[45%]  h-56 flex flex-wrap  w-full shadow-md rounded-md bg-white'>
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
        
        <div className='m-2 bg-white md:w-[45%] w-full  justify-around flex flex-wrap items-center shadow-md rounded-md'>
          <div className='flex justify-around items-center '>
            <div className='flex flex-col'>
            <div className='ml-6 mt-1 flex flex-col items-center justify-center'>
              <img className='shadow-md w-44 h-44 m-2' src={post.shopimg}></img>
              <div className='text-center text-xl font-bold text-stone-800'>{post.shopname}</div>
            </div>
         <div className='ml-4 flex   justify-center'>
  <Link href={`/product/${post.user._id}`}><button className='m-2 p-1 shadow-md rounded-md bg-teal-900 hover:bg-teal-800  text-zinc-200 text-sm'>Enter Shop</button>
             </Link><button className='m-2 p-1 shadow-md rounded-md bg-teal-900 hover:bg-teal-800  text-zinc-200 text-sm'>Demand Product</button>
            </div>
            </div>
                         <div className='overflow-y-auto ml-4 p-2 w-[50%] overflow-x-hidden'>
                           <SearchComponent userId={post.user._id} />
                           <h1 className='text-xl p-1 text-center font-serif font-semibold'>Product list :</h1>
                           <div className='md:grid md:grid-cols-2 w-[100%] h-full overflow-y-auto '>
                             {post.product.map((product, index) => (

                             <div className='bg-white p-1 w-full border border-solid '>
                              <a className='text-base w-full font-serif font-semibold '>{product.name}</a></div>

                             ))}
                           </div>
                         </div>
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

    return { props: { postsData: post,dr:user,category :category  } };
  } catch (error) {
    return { props: { errorLoading: true } };
  }
};