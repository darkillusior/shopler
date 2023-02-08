import React from 'react'

import { useState } from 'react'
import axios from "axios";
import baseUrl from "../../utils/baseUrl";
import { parseCookies } from "nookies";

import Navbar from '../../components/navbar2'
import Productcard from '../../components/card/productcard';
function Shop({postsData,user}) {
  const [showCart, setShowCart] = useState(false)
  const [posts, setPosts] = useState(postsData|| []);
console.log(postsData)
  return (
    <>
    <Navbar/>
   
    <main className='bg-gray-200 '>  
    
    <div className='p-4 flex  justify-center items-center ' ><img className='w-1/3   ' src={posts.shopimg}></img></div>
    <hr className='shadow-sm'></hr>
    <div className='font-semibold  text-indigo-900 ml-7 p-2 text-3xl'>{posts.shopname}</div>
   
    <hr className='shadow-sm'></hr>

    {posts.product.map((product,index)=> ( 
      <Productcard  product={product} posts={posts} user={user} index={index}
      key={index}
      />
      ))}
        <hr className='shadow-sm'></hr>

       
        <hr className='shadow-sm'></hr>
    
    </main>    
    </>
  )
}
export const getServerSideProps = async ctx => {
  try {
    const { token } = parseCookies(ctx);
   
    const { userId}  = ctx.query;

   
    const res = await axios.get(`${baseUrl}/api/shop/main/${userId}`, {
      headers: { Authorization: token },
     
    });
    
    return { props: { postsData: res.data,postId:userId} };
  } catch (error) {
    return { props: { errorLoading: true } };
  }
};

export default Shop