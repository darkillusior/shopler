
import React, { useState } from 'react'
import { editBook } from "../utils/postActions";
import { Button, Icon } from "semantic-ui-react";
function DoctorAdmin({doctor}) {

  let doctors
  doctors = doctor.product;
  
     const[adminData,setAdminData]=useState({timeslot:[]})
    const [loading, setLoading] = useState(false);
    const [date, setDate] = useState(null);
    
  const [error, setError] = useState(null);

 
    const settimeslot=(e)=>{
        let checked=e.target.checked
       let clickedTime=e.target.value     
        if(checked)
         {
          setAdminData({timeslot:[...adminData.timeslot,clickedTime]})
         } 
         else
         {
          let newtimeslot=adminData.timeslot 
          let index=adminData.timeslot.indexOf(clickedTime)
           if (index > -1) 
            {
             newtimeslot.splice(index, 1);
             setAdminData({timeslot:newtimeslot })
            } 
         }
      
    }

 const handelChange=(e)=>{
   
    setLoading(true)
  let book={
    name:doctors.name,
    time:adminData.timeslot,
    aval:true,
    Date:date
  }

  editBook(book)
  setLoading(false)
  }
  const handelChange2=(e)=>{
    e.preventDefault();
    setLoading(true)
  let book={
    name:doctors.name, 
    reset:true
  }

  editBook(book)
  setLoading(false)
  setAdminData({timeslot:[]})
  }

  return (
    <>
  <div className="flex flex-wrap flex-col w-full">
        <div className="flex justify-evenly m-2">
          <img
            src={doctors.img
            }
            className="shadow-md rounded-full w-60 h-60  m-2"
          ></img>
          <div className="w-2/4 border-2 border-slate-600 shadow-md text-lg font-semibold p-2">
          {doctors.specialization}
          </div>
        </div>
        
  <div className='w-full  bg-slate-800 m-2 rounded-md'> 
  <form >
    <input
    className='sm:w-1/3 w-2/3 p-3 rounded-sm  '
     placeholder='date/day'
    type="text"
     name="date"
     value={date}  
     onChange={(e)=>setDate(e.target.value)}
    />
  <div className='flex flex-wrap justify-evenly'>
   <div className="  m-4 p-4 bg-gray-100 rounded-md  shadow-md ">
     <div className="bg-blue-100 p-2 m-2">
      <input onChange={settimeslot}
            type="checkbox"
            id="timeslot"
             name="timeslot"
            value="10:15"  
            />
    <label >10:00-10:15am</label>
      
      {doctors.persons[0].aval==true?<Icon name='check' className='px-4'></Icon>:      <Icon name='close' className='px-4'></Icon>}

    </div>

    <div className="bg-blue-100 p-2 m-2">
    <input onChange={settimeslot}
        type="checkbox"
        id="timeslot"
        name="timeslot"
        value="10:30"
    />
    <label>10:15-10:30am</label>
    {doctors.persons[1].aval==true?<Icon name='check' className='px-4'></Icon>:      <Icon name='close' className='px-4'></Icon>}
  
    </div>
     <div className="bg-blue-100 p-2 m-2">
    <input onChange={settimeslot}
        type="checkbox"
        id="timeslot"
        name="timeslot"
        value="10:45"
    />
    <label>10:30-10:45am</label>
     
    {doctors.persons[2].aval==true?<Icon name='check' className='px-4'></Icon>:      <Icon name='close' className='px-4'></Icon>}
    </div>
    <div className="bg-blue-100 p-2 m-2">
    <input onChange={settimeslot}
        type="checkbox"
        id="timeslot"
        name="timeslot"
        value="11:0"
    />
    <label>10:45-11:00am</label>  
    {doctors.persons[3].aval==true?<Icon name='check' className='px-4'></Icon>:      <Icon name='close' className='px-4'></Icon>}
    </div>
    <label className='flex justify-center font-bold' >10:00-11:00 am</label>
    </div>

    <div className="  m-4 p-4 bg-gray-100 rounded-md shadow-md ">
     <div className="bg-blue-100 p-2 m-2">
      <input onChange={settimeslot}
            type="checkbox"
            id="timeslot"
             name="timeslot"
            value="11:15"
            
            />
    <label >11:00-11:15am</label>
    {doctors.persons[4].aval==true?<Icon name='check' className='px-4'></Icon>:      <Icon name='close' className='px-4'></Icon>}
    </div>

    <div className="bg-blue-100 p-2 m-2">
    <input onChange={settimeslot}
        type="checkbox"
        id="timeslot"
        name="timeslot"
        value="11:30"
    />
    <label>11:15-11:30am</label>
    {doctors.persons[5].aval==true?<Icon name='check' className='px-4'></Icon>:      <Icon name='close' className='px-4'></Icon>}
     
    </div>
     <div className="bg-blue-100 p-2 m-2">
    <input onChange={settimeslot}
        type="checkbox"
        id="timeslot"
        name="timeslot"
        value="11:45"
    />
    <label>11:30-11:45am</label>
    {doctors.persons[6].aval==true?<Icon name='check' className='px-4'></Icon>:      <Icon name='close' className='px-4'></Icon>}
    </div>
    <div className="bg-blue-100 p-2 m-2">
    <input onChange={settimeslot}
        type="checkbox"
        id="timeslot"
        name="timeslot"
        value="12:0"
    />
    <label>11:45-12:00pm</label>   
    {doctors.persons[7].aval==true?<Icon name='check' className='px-4'></Icon>:      <Icon name='close' className='px-4'></Icon>}
    </div>
   
    <label className=' flex justify-center font-bold' >11:00-12:00 am</label>
               
    </div>

       <div className="  m-4 p-4 bg-gray-100 rounded-md shadow-md ">
     <div className="bg-blue-100 p-2 m-2">
      <input onChange={settimeslot}
            type="checkbox"
            id="timeslot"
             name="timeslot"
            value="10:15"
            
            />
    <label>12:00-12:15pm</label>
    {doctors.persons[8].aval==true?<Icon name='check' className='px-4'></Icon>:      <Icon name='close' className='px-4'></Icon>}
   
    </div>

    <div className="bg-blue-100 p-2 m-2">
    <input onChange={settimeslot}
        type="checkbox"
        id="timeslot"
        name="timeslot"
        value="12:30"
    />
    <label>12:15-12:30pm</label>
       
    {doctors.persons[9].aval==true?<Icon name='check' className='px-4'></Icon>:      <Icon name='close' className='px-4'></Icon>}
    </div>
     <div className="bg-blue-100 p-2 m-2">
    <input onChange={settimeslot}
        type="checkbox"
        id="timeslot"
        name="timeslot"
        value="12:45"
    />
    <label>12:30-12:45pm</label>
    {doctors.persons[10].aval==true?<Icon name='check' className='px-4'></Icon>:      <Icon name='close' className='px-4'></Icon>}
      
    </div>
   
    <div className="bg-blue-100 p-2 m-2">
    <input onChange={settimeslot}
        type="checkbox"
        id="timeslot"
        name="timeslot"
        value="1:0"
    />
    <label>12:45-01:00pm</label>   
    {doctors.persons[11].aval==true?<Icon name='check' className='px-4'></Icon>:      <Icon name='close' className='px-4'></Icon>}  
    </div> 
      
    <label className='justify-center flex font-bold' >11:00-12:00 am</label>
  
    </div>
    </div>
   <hr/>
    <div className='flex justify-center p-3'>
    <Button  onClick={handelChange}
      size='mini'
      inverted color='red'
    disabled={ loading}
    content={<strong>Available</strong>}

    icon="send"
    loading={loading}
    />
     <Button  onClick={handelChange2}
      size='mini'
      inverted color='green'
    disabled={ loading}
    content={<strong>Reset</strong>}

    icon="send"
    loading={loading}
    />
   
    </div>
    </form >
    </div>
   </div>
    </>
  )
}

export default DoctorAdmin