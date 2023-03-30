import React, { useState } from "react";
import axios from "axios";
import baseUrl from "../utils/baseUrl";

import { parseCookies } from "nookies";
function Cart({postsData}) {
  const [post, setPost] = useState(postsData||[])
  console.log("adyi",post)
  return (
    <>
      <div className="flex md:flex-row flex-col " id="cart">
        <div
          className="lg:w-2/3 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white  overflow-x-hidden"
          id="scroll"
        >
          <p className="text-5xl font-black leading-10 text-gray-800 pt-3">
            Your Cart:
          </p>
          <div className="md:flex items-center mt-14 py-8 border-t border-gray-200">
            <div className="w-1/4">
              <img
                src="/demo.jpg"
                alt
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="md:pl-3 md:w-3/4">
              <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">
                RF293
              </p>
              <div className="flex items-center justify-between w-full pt-1">
                <p className="text-base font-black leading-none text-gray-800">
                  Item1
                </p>
                <div className="py-2 px-1 mr-6 focus:outline-none">Qnt:01</div>
              </div>
              <p className="text-xs leading-3 text-gray-600 pt-2">
                Height: 10 inches
              </p>
              <p className="text-xs leading-3 text-gray-600 py-4">
                Color: Black
              </p>
              <p className="w-96 text-xs leading-3 text-gray-600">
                Composition: 100% calf leather
              </p>
              <div className="flex items-center justify-between pt-5 pr-6">
                <p className="text-base font-black leading-none text-gray-800">
                  $9,000
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className=" md:w-1/3 xl:w-1/3 w-full bg-gray-100 h-full">
          <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
            <div>
              <p className="text-4xl font-black leading-9 text-gray-800">
                Summary
              </p>
              <div className="flex items-center justify-between pt-16">
                <p className="text-base leading-none text-gray-800">Subtotal</p>
                <p className="text-base leading-none text-gray-800">$9,000</p>
              </div>
              <div className="flex items-center justify-between pt-5">
                <p className="text-base leading-none text-gray-800">Shipping</p>
                <p className="text-base leading-none text-gray-800">$30</p>
              </div>
              <div className="flex items-center justify-between pt-5">
                <p className="text-base leading-none text-gray-800">Tax</p>
                <p className="text-base leading-none text-gray-800">$35</p>
              </div>
            </div>
            <div>
              <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                <p className="text-2xl leading-normal text-gray-800">Total</p>
                <p className="text-2xl font-bold leading-normal text-right text-gray-800">
                  $10,240
                </p>
              </div>
              <button className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">
                <a href="/aftercart">Checkout</a>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>
        {` /* width */
                #scroll::-webkit-scrollbar {
                    width: 1px;
                }

                /* Track */
                #scroll::-webkit-scrollbar-track {
                    background: #f1f1f1;
                }

                /* Handle */
                #scroll::-webkit-scrollbar-thumb {
                    background: rgb(133, 132, 132);
                }
`}
      </style>
    </>
  );
}

export default Cart;
export const getServerSideProps = async ctx => {
  try {
   
    const { token } = parseCookies(ctx);
   
 
    const res = await axios.get(`${baseUrl}/api/addtocart`, {
      headers: { Authorization: token },
     
    });
    console.log(res.data)
  const post=res.data

    return { props: { postsData: post } };
  } catch (error) {
    return { props: { errorLoading: true } };
  }
};