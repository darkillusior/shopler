import React, { useState } from 'react'

import Doctors from '../components/doctors'
import Navbar2 from '../components/navbar2'

function AdminData() {
    const [doctor1,setDoctor1]=useState(false)
  const [doctor2, setDoctor2] = useState(false)
  return (
    <>
    <Navbar2/>
    <main className='bg-amber-100 flex '>
    <Doctors /> 
  
    </main>   
    </>
  )
}

export default AdminData