import React from 'react'

import { useState } from 'react'
import axios from "axios";
import baseUrl from "../../utils/baseUrl";
import { parseCookies } from "nookies";
import Navbar from '../../components/navbar2'
import Productcard from '../../components/card/productcard';
function Shop({postsData,user,user1}) {
 
  

  
  const [posts, setPosts] = useState(postsData|| []);
  const [length ,setLength] = useState(user1.items);

  return (
    <>
    <Navbar user={user1} length={length}/>
   
      <main className='pb-4 '>  
    
        <div className='p-4 shadow-md sm:flex-row flex flex-col items-center bg-cover
         'style={{backgroundImage:"url('/bg.jpg')"}}>
        <img className='sm:w-1/3 w-2/4 rounded-full shadow-md ' src={posts.shopimg}></img>
        <div className='sm:font-semibold text-center  text-indigo-900 ml-7 p-2 sm:text-7xl text-5xl font-bold sm:font-sans font-sans '>{posts.shopname}</div>
   </div>
        <div className='sm:flex-wrap sm:flex-row flex flex-col items-center bg-cover' style={{ backgroundImage: "url('/bg2.jpg')" }}>
    {posts.product.map((product,index)=> ( 
      <div className='p-2 mt-4 w-full sm:w-auto sm:p-2'>
      <Productcard  setLength={setLength} product={product} posts={posts} user={user} index={index}
      key={index}
      />
      </div>
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