import React from 'react'
import Navbar from '../components/navbar2'
import { useState } from 'react';
import baseUrl from "../utils/baseUrl";
import axios from "axios";
import { parseCookies } from "nookies";


function profile({user,postsData}) {
    let product
    const [data, setdata] = useState(postsData || {})
    data.shop ? product = postsData.shop.product : []
    const [products, setMoreproducts] = useState(user.Appointment || []);
  
    return (
    <>
     <div class="bg-gray-300 pb-2 ">
    <Navbar user={user} />
  
    <div class=" mx-auto my-32  ">
        <div>
            <div class="bg-white relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto ">
                <div class="flex justify-center">
                        <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" class="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"/>
                </div>
                
                <div class="mt-16">
                    <h1 class="font-bold text-center text-3xl text-gray-900">{user.name}</h1>               
                 <div class="my-5 px-6">
                 {console.log(postsData)} 
                {!data.shop? <a href="/form" class="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white">Add Shop </a>: <a href="/shopProfile" class="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white">Shop Profile </a>}   
                   
                    </div>
                    <div class="flex justify-between items-center my-5 px-6">
                        <a href="" class="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Facebook</a>
                        <a href="" class="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Twitter</a>
                        <a href="" class="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Instagram</a>
                        <a href="" class="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Email</a>
                    </div>

                    <div class="w-full">
                        <h3 class="font-medium text-gray-900 text-left px-6">Recent appoitments:</h3>
                        
                        {products.map((post, index) => (
                      
                        <div class="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
                            <a href="#" class=" border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" class="rounded-full h-6 shadow-md inline-block mr-2"/>
                                    {post.hospitalname}
                                    <span class="text-gray-600 ml-3 text-sm">{post.drname}</span>
                                    <span class="text-black ml-3 text-xs">{post.time}</span>
                            </a>                         
                        </div>
                            ))} 

                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
          
    </>
  )
}
export const getServerSideProps = async ctx => {
    try {

        const { token } = parseCookies(ctx);


        const res = await axios.get(`${baseUrl}/api/profile`, {
            headers: { Authorization: token },

        });


        console.log("f", res.data)

        return { props: { postsData: res.data } };
    }


    catch (error) {
        return { props: { errorLoading: true } };
    }

};

export default profile