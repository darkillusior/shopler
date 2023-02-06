import React from 'react'
import { useState } from "react";
import Doctors from "../components/doctors";
import Navbar2 from '../components/navbar2'
import axios from "axios";
import baseUrl from "../utils/baseUrl";

import { parseCookies } from "nookies";

import Productedit from '../components/Tools/Productedit';
import DoctorAdmin from '../components/docotrAdmin';

function ShopProfile({ postsData, user }) {
    console.log(postsData)
    const[data,setdata]=useState(postsData||{})

    let product
    data.shop ? product = postsData.shop.product : []
    const [posts, setPosts] = useState(product || []);
    
    const [doctor,setDoctor]=useState({index:null,doctor:null})


    return (
        <>
            <Navbar2 user={user} />

            <div className='bg-orange-50  '>
                {console.log(data.shop)}
                {data.shop ?
                    <>
                        <div className='m-2 flex item-center'>
                            <img className='m-2 h-60 w-60 rounded-full border-4 border-double shadow-md  border-blue-800' src={postsData.shop.shopimg} />

                            <div className='flex flex-col justify-center'>
                                <h1 className=' p-2 font-bold text-slate-800 text-3xl font-sans'>Name:<a className='px-5 text-2xl font-serif font-semibold'>{postsData.shop.shopname}</a></h1>
                                <h1 className=' p-2 font-bold text-slate-800 text-3xl font-sans'>Address:<a className='px-5 text-2xl font-serif font-semibold'>{postsData.shop.address}</a></h1>
                            </div>
                        </div>

                        <form ><table className="table-auto m-auto border-slate-200 w-full bg-gray-700 shadow-md">
                            <thead className='border-2 border-slate-200'>
                                <tr className=' text-slate-200 text-xl  '>
                                    <th >Sno</th>
                                    <th >image</th>
                                    <th>name</th>
                                    <th >price</th>
                                    <th >discount</th>
                                    <th >stock</th>
                                    <th >edit</th>
                                </tr>
                            </thead>
                            {posts.map((product, index) => (
                                <Productedit product={product} index={index} key={index} />
                            ))}
                        </table></form>
                       
                        </>
                    :user.category=="Doctor" ?
                   
                      <main className='bg-amber-100 flex '>

<Doctors doctor={doctor} posts={data.dr} setDoctor={setDoctor} /> 
                 
{doctor.index!=null&&<DoctorAdmin  doctor={doctor} />   }    


</main>   
             
                    :
                    <>
                  
                    <div className='flex flex-col p-2 m-2 justify-center'>
                        <h1 className='text-5xl font-bold text-center text-slate-700'>You Dont Have Any Shop</h1>
                        <a href='/form' className='flex justify-center m-2 font-bold'><button className=' rounded-full h-40 w-40 border-2 bg-green-300 hover:bg-green-400 transition-colors border-black font-extrabold text-lg text-slate-700 hover:text-slate-900 hover:text-xl'><img className='w-40 h-40 rounded-full' src='https://res.cloudinary.com/darkillisour/image/upload/v1675599020/d1q2rk63koaccff0sf4t.jpg'></img> Add Shop+</button></a>
                    </div>
                    </>

                }  
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
        
     
      console.log("f",res.data)

        return { props: { postsData: res.data} };
    }
    
    
    catch (error) {
        return { props: { errorLoading: true } };
    }
    
};




export default ShopProfile