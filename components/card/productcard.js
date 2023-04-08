import React from 'react'
import { useState } from "react";
import { cartMaiDaalo } from '../../utils/postActions';
import {Icon} from "semantic-ui-react";
import { likePost } from "../../utils/postActions";
function Productcard({product,posts,user,setLength}) {
  

  

  const [likes, setLikes] = useState(product.likes);
  const [index1, setIndex] = useState(user.items);

  const isLiked =
    likes.length > 0 && likes.filter(like => like.user === user._id).length > 0;

   const addtocart=async(e)=>{
  
    //  dispatch(actions.nextComp());
    cartMaiDaalo(product._id,product.name,product.price,product.images,setIndex)
    const itemIndex = index1.findIndex((item) => item.productId.toString()===product._id);
    
    if (itemIndex===-1) {
      setLength((prev)=>prev+1);
      setIndex(prev => [...prev, { productId: product._id }]);
    }

    

  
  }
    
  
  
  
    return (
      <>


 <div className="w-full sm:ml-4 m-auto  border  rounded-lg shadow-md bg-gray-800 border-gray-700">
        <a href="#">
          <img className=" rounded-t-lg w-[18rem] h-[20rem] m-auto p-4" src={product.images} alt="product image" />
        </a>
          <div className="px-5 pb-5">
         <div className='flex justify-between'>
              <h5 className="text-xl font-semibold tracking-tight  text-white">{product.name}</h5>
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
                <span className=" text-xs font-semibold mr-2 px-2.5 py-0.5 rounded bg-blue-200 text-blue-800 ml-3">{likes.length} </span>
              </div>
            </div>
         
            <div className="flex items-center justify-between mt-5">
              <span className="text-3xl font-bold text-white">&#8377;{product.price}</span>
              <h5 className="text-xl font-semibold tracking-tight  text-green-300">{product.stock}</h5>
         
        
             <button type='submit' onClick={addtocart} className="text-white bg-blue-700 hover:bg-blue-800  focus:outline-none hover:text-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Add to cart</button>
          
          </div>
        </div>
      </div>

</>
  )
}

export default Productcard