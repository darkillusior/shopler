import Link from 'next/link';
import React from 'react'
import { useState } from "react";
import { cartMaiDaalo } from '../../utils/postActions';
import {
    Icon,
   
  } from "semantic-ui-react";
  import { likePost } from "../../utils/postActions";
function Productcard({product,posts,index,user}) {
    const [likes, setLikes] = useState(product.likes);
   

  const isLiked =
    likes.length > 0 && likes.filter(like => like.user === user._id).length > 0;

   const addtocart=async(e)=>{
    e.preventDefault()
    cartMaiDaalo(product._id)
    }
  
  
  
    return (
      <>


 <div class="w-full ml-4 max-w-sm  border  rounded-lg shadow bg-gray-800 border-gray-700">
        <a href="#">
          <img class="p-8 rounded-t-lg" className='w-[18rem] h-[20rem] p-4' src={product.images} alt="product image" />
        </a>
        <div class="px-5 pb-5">
         <div className='flex justify-between'>
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
         <div className='flex justify-center items-center'>
              <Icon
                size='large'
                 name="heart"
                color={isLiked ? "red" : "grey"}
                style={{ cursor: "pointer" }}
                onClick={() =>
                  likePost(product._id, posts.user._id, user._id, setLikes, isLiked ? false : true)
                }
              />
              <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{likes.length} </span>
              </div>
            </div>
         
          <div class="flex items-center justify-between mt-5">
              <span class="text-3xl font-bold text-gray-900 dark:text-white">&#8377;{product.price}</span>
              <h5 class="text-xl font-semibold tracking-tight  text-green-300">{product.stock}</h5>
         
        
            <button onClick={addtocart} class="text-white bg-blue-700 hover:bg-blue-800  focus:outline-none hover:text-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Add to cart</button>
          
          </div>
        </div>
      </div>

</>
  )
}

export default Productcard