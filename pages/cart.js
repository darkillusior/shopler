import React, { useState } from "react";
import axios from "axios";
import baseUrl from "../utils/baseUrl";
import Navbar2 from "../components/navbar2";
import { parseCookies } from "nookies";
import Link from "next/link";

function Cart({user,user1}) {
  
  const [post, setPost] = useState(user||[])
      let totalPrice=0;

for(let i=0;i<post.items.length;i++)
{
totalPrice+=post.items[i].price*post.items[i].quantity;
}



  // console.log("adyi",post)
  return (
    <>
    <Navbar2 user={user1}/>
      <div className="flex md:flex-row flex-col sm:h-screen " >
        <div
          className="lg:w-2/3 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white h-auto  overflow-x-hidden sm:overflow-y-auto"
         
        >
          <p className="text-5xl font-black leading-10 text-gray-800 pt-3">
            Your Cart:
          </p>
          {post.items?.map(data => (
          <div className="md:flex items-center mt-14 py-8 border-t border-gray-200">
            <div className="w-1/4">
              <img
                src={data.image}
                alt
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="md:pl-3 md:w-3/4">
  
              <div className="flex items-center justify-between w-full pt-1">
                <p className="text-base font-black leading-none text-gray-800">
                  {data.name}
                </p>
                <div className="py-2 px-1 mr-6 focus:outline-none">Qnt:{data.quantity}</div>
              </div>

              <div className="flex items-center justify-between pt-5 pr-6">
                <p className="text-base font-black leading-none text-gray-800">
                 ${data.price}
                
                </p>
              </div>
            </div>
          </div>))}
        </div>
        
        <div className=" md:w-1/3 xl:w-1/3 w-full bg-gray-100 h-full">
          <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
            <div>
              <p className="text-4xl font-black leading-9 text-gray-800">
                Summary
              </p>
              <div className="mt-12">
              {post.items?.map(data => (
                <>
              <div className="flex items-center justify-between pt-4">
                <p className="text-base leading-none text-gray-800">{data.name}</p>
                    <p className="text-base leading-none text-gray-800">{data.quantity} X {data.price}</p>
                    <p className="text-base leading-none text-gray-800">${data.quantity * data.price}</p>
              </div>
             
                </> 
                ))} 
              </div>
                 
           
            </div>
           
            <div className="flex items-center justify-between pt-5">
              <p className="text-base leading-none text-gray-800">Shipping</p>
              <p className="text-base leading-none text-gray-800">$30</p>
            </div>    
            <div>
              <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                <p className="text-2xl leading-normal text-gray-800">Total</p>
                <p className="text-2xl font-bold leading-normal text-right text-gray-800">
                 ${totalPrice+30}
                </p>
              </div>
             
              <Link href="/verifyDetails"><button className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white"> Checkout            
              </button></Link>
         
            </div>
          </div>
        </div>
      </div>


    </>
  );
}

export default Cart;
