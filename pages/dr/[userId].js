import React, { useState } from 'react'
import axios from "axios";
import baseUrl from "../../utils/baseUrl";
import { parseCookies } from "nookies";
import Doctor1 from '../../components/doctor1'

import Doctors from '../../components/doctors'
import Navbar from '../../components/navbar2'
import Booked from '../../components/booked';

function AdminData({ postsData, appoId ,user,user1}) {
  
  const [booked, setBooked] = useState(false)
  const [posts, setPosts] = useState(postsData || []);
  const [doctor, setDoctor] = useState({ index: null, doctor: null })
  //  console.log("mm",doctor)

  return (
    <>
      <Navbar user={user1}/>
      {booked ? <Booked /> : null}
      <main className='bg-gray-200  md:flex '>

        <Doctors doctor={doctor} posts={posts} setDoctor={setDoctor} />

        {doctor.index != null && <Doctor1 setBooked={setBooked} appoId={appoId} hospitaname={posts.shopname} doctor={doctor} />}


      </main>
    </>
  )
}

export const getServerSideProps = async ctx => {
  try {
    const { token } = parseCookies(ctx);

    const { userId } = ctx.query;


    const res = await axios.get(`${baseUrl}/api/appointment/${userId}`, {
      headers: { Authorization: token },

    });

    return { props: { postsData: res.data, appoId: userId } };
  } catch (error) {
    return { props: { errorLoading: true } };
  }
};





export default AdminData