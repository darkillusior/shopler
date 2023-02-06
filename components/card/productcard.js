import React from 'react'
import { useState } from "react";
import {
    Icon,
   
  } from "semantic-ui-react";
  import { likePost } from "../../utils/postActions";
function Productcard({product,posts,index,user}) {
    const [likes, setLikes] = useState(product.likes);

  const isLiked =
    likes.length > 0 && likes.filter(like => like.user === user._id).length > 0;

  
  
  
  
    return (
    <content className='p-2 m-2  flex '>
    <img className='w-40 h-40 rounded-md' src={product.images}/>
    <div className='flex flex-col'>
      <h1 className='text-lg font-semibold ml-6 '>{product.name}</h1>
    
      <h1 className='text-lg text-[rgb(109,109,109)] ml-6'>&#8377;{product.price}</h1>
      <div className=' text-[rgb(121,121,121)] ml-6 mt-4'> stock:{product.stock}</div>
    </div>
    <div className='flex justify-center  w-full'>
   <p className='px-2 font-semibold font-serif text-3xl '>{ likes.length } </p>
   <div  className='px-2'>
   <Icon
             size='large'
           
              name="heart"
              color={isLiked ?"red":"grey"}
              style={{ cursor: "pointer" }}
              onClick={() =>
                likePost(product._id, posts.user._id,user._id, setLikes, isLiked ? false : true)
              }
            /></div>
        <button className='hover:bg-green-800 shadow-md bg-green-900 text-gray-100 rounded-md p-2 h-10'>Add To Cart</button></div>
  </content>
  )
}

export default Productcard