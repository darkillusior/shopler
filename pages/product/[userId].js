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
    <Navbar user={user}/>
   
    <main className='bg-gray-200 pb-4 '>  
    
    <div className='p-4 flex items-center' ><img className='w-1/6 rounded-full  ' src={posts.shopimg}></img>
    <div className='font-semibold text-center  text-indigo-900 ml-7 p-2 text-3xl'>{posts.shopname}</div>
   </div>
   <div className='flex flex-wrap mt-5'>
    {posts.product.map((product,index)=> ( 
      <Productcard  product={product} posts={posts} user={user} index={index}
      key={index}
      />
      ))}
     </div>
        
    
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