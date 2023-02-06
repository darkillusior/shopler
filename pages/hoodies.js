import React, { useState } from "react";
import axios from "axios";
import baseUrl from "../utils/baseUrl";
import Link from "next/link";
function Hoodies({  postsData}) {
  const [posts, setPosts] = useState(postsData || []);
  console.log(posts)


  return (
 
     <>
     
            {Object.keys(postsData).map(post => (
            
            <div className="flex flex-col p-3 ">
             {console.log(postsData[post]._id)}
<Link href={`/post/${postsData[post]._id}`}>
         <a className=" p-4 bg-slate-400"
         >hello</a> 
        </Link>
            </div>
            ))}
        
   </>
   
  );
}

export const getServerSideProps = async ctx => {
  try {


    const res = await axios.get(`${baseUrl}/api/clothes` );
   
 

    return { props: { postsData: res.data } };
  } catch (error) {
    return { props: { errorLoading: true } };
  }
};

export default Hoodies;
