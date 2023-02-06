import React, { useState } from "react";
import { submitBook } from "../utils/postActions";
import { Button } from "semantic-ui-react";
function Doctor1({doctor,appoId,hospitaname}) {
  const [slot, setSlot] = useState(0);
  const [time, setTime] = useState();
  const [loading, setLoading] = useState(false);
  const ontimechange = (e) => {
    setTime(e.target.value);
   
  };
  console.log(hospitaname)
const handelChange=(e)=>{
 
  setLoading(true)
let book={
  name:doctor.product.name,
  hospitaname:hospitaname,
  time:time,
 userId:appoId
}

submitBook(book)
setLoading(false)
}

   
  // console.log("fds",doctor);
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="flex justify-evenly m-2">
          <img
            src={doctor.product.img
            }
            className="shadow-md rounded-full w-60 h-60  m-2"
          ></img>
          <div className="w-2/4 border-2 border-slate-600 shadow-md text-lg font-semibold p-2">
          {doctor.product.specialization}
          </div>
        </div>
        <div className="m-2 grid grid-cols-3 w-full ">
          {slot === 1 ? (
            <div className="flex flex-col w-2/3 ">
              <div className="  m-2 bg-gray-100 rounded-md h-64 shadow-md ">
                <form className="p-2">
                  {doctor.product.persons[0].user==null&&<div className="bg-blue-100 p-2">
                   <input
                      type="radio"
                      id="timeslot"
                      name="timeslot"
                      value="10:15"
                      onChange={ontimechange}
                    />
                    <label>10:00-10:15am</label>
                  </div>}
                  <br/>

                 {doctor.product.persons[1].user==null&&<div className="bg-blue-100 p-2">
                    <input
                      type="radio"
                      id="timeslot"
                      name="timeslot"
                      value="10:30"
                      onChange={ontimechange}
                    />
                    <label>10:15-10:30am</label>
                  </div>} 
                  <br />
                  
                  {doctor.product.persons[2].user==null&&<div className="bg-blue-100 p-2">
                    <input
                      type="radio"
                      id="timeslot"
                      name="timeslot"
                      value="10:45"
                      onChange={ontimechange}
                    />
                    <label>10:30-10:45am</label>
                  </div>}
                  
                  <br />

                  {doctor.product.persons[3].user==null&&<div className="bg-blue-100 p-2">
                    <input
                      type="radio"
                      id="timeslot"
                      name="timeslot"
                      value="11:00"
                      onChange={ontimechange}
                    />
                    <label>10:45-11:00am</label>
                  </div>}
                 
                  <br />
              
               </form>
              </div>           
              <div className="text-sm font-semibold text-slate-700 text-center">
                <input
                  type="radio"
                  value="10-11"
                  checked={slot === 1}
                  onClick={() => {
                    setSlot(1);
                    console.log(slot);
                    console.log(slot === 1);
                  }}
                ></input>
                <label>10:00-11:00 am</label>
              </div>
            </div>
          ) : (
            <div className="flex flex-col w-2/3  ">
              <div className="  m-2 bg-gray-100 rounded-md h-64 shadow-md ">
                <form className="p-2">
                  <div className="bg-blue-100 p-2">
                    <input
                      disabled="true"
                      type="radio"
                      id="timeslot"
                      name="timeslot"
                      value="10:15"
                      onChange={ontimechange}
                    />
                    <label>10:00-10:15am</label>
                  </div>
                  <br />

                  <div className="bg-blue-100 p-2">
                    <input
                      disabled="true"
                      type="radio"
                      id="timeslot"
                      name="timeslot"
                      value="10:30"
                      onChange={ontimechange}
                    />
                    <label>10:15-10:30am</label>
                  </div>
                  <br />
                  <div className="bg-blue-100 p-2">
                    <input
                      disabled="true"
                      type="radio"
                      id="timeslot"
                      name="timeslot"
                      value="10:45"
                      onChange={ontimechange}
                    />
                    <label>10:30-10:45am</label>
                  </div>
                  <br />

                  <div className="bg-blue-100 p-2">
                    <input
                      disabled="true"
                      type="radio"
                      id="timeslot"
                      name="timeslot"
                      value="11:00"
                      onChange={ontimechange}
                    />
                    <label>10:45-11:00am</label>
                  </div>
                  <br />
                </form>
              </div>
              <div className="text-sm font-semibold text-slate-700 text-center">
                <input
                  type="radio"
                  checked={slot === 1}
                  value="10-11"
                  onClick={() => {
                    setSlot(1);
                    console.log(slot === 1);
                  }}
                ></input>
                <label>10:00-11:00 am</label>
              </div>
            </div>
          )}

          {slot === 2 ? (
            <div className="flex flex-col w-2/3">
              <div className="  m-2 bg-gray-100 rounded-md h-64 shadow-md ">
                <form className="p-2 ">
                  
                  {doctor.product.persons[4].user==null&&<div className="bg-blue-100 p-2">
                  <input
                    type="radio"
                    id="timeslot"
                    name="timeslot"
                    value="11:15"
                    onChange={ontimechange}
                    />
                    <label>11:00-11:15am</label>
                  </div>}
                 
                  <br />

                    {doctor.product.persons[5].user==null&&<div className="bg-blue-100 p-2">
                    <input
                      type="radio"
                      id="timeslot"
                      name="timeslot"
                      value="11:30"
                      onChange={ontimechange}
                    />
                    <label>11:15-11:30am</label>
                  </div>}
                  
                  <br />
                  
                    {doctor.product.persons[6].user==null&&<div className="bg-blue-100 p-2">
                    <input
                      type="radio"
                      id="timeslot"
                      name="timeslot"
                      value="11:45"
                      onChange={ontimechange}
                    />
                    <label>11:30-11:45am</label>
                  </div>}
                  
                  <br />

                   {doctor.product.persons[7].user==null&& <div className="bg-blue-100 p-2">
                    <input
                      type="radio"
                      id="timeslot"
                      name="timeslot"
                      value="12:00"
                      onChange={ontimechange}
                    />
                    <label>11:45-12:00pm</label>
                  </div>}
                  <br />
                </form>
              </div>
              <div className="text-sm font-semibold text-slate-700 text-center">
                <input
                  type="radio"
                  value="10:00-11:00"
                  checked={slot === 2}
                  onClick={() => {
                    setSlot(2);
                  }}
                ></input>
                <label>11:00-12:00 pm</label>
              </div>
            </div>
          ) : (
            <div className="flex flex-col w-2/3">
              <div className="  m-2 bg-gray-100 rounded-md h-64 shadow-md ">
                <form className="p-2 form1">
                  <div className="bg-blue-100 p-2">
                    <input
                      disabled="true"
                      type="radio"
                      id="timeslot"
                      name="timeslot"
                      value="11:15"
                      onChange={ontimechange}
                    />
                    <label>11:00-11:15am</label>
                  </div>
                  <br />

                  <div className="bg-blue-100 p-2">
                    <input
                      disabled="true"
                      type="radio"
                      id="timeslot"
                      name="timeslot"
                      value="11:30"
                      onChange={ontimechange}
                    />
                    <label>11:15-11:30am</label>
                  </div>
                  <br />
                  <div className="bg-blue-100 p-2">
                    <input
                      disabled="true"
                      type="radio"
                      id="timeslot"
                      name="timeslot"
                      value="11:45"
                      onChange={ontimechange}
                    />
                    <label>11:30-11:45am</label>
                  </div>
                  <br />

                  <div className="bg-blue-100 p-2">
                    <input
                      disabled="true"
                      type="radio"
                      id="timeslot"
                      name="timeslot"
                      value="12:00"
                      onChange={ontimechange}
                    />
                    <label>11:45-12:00pm</label>
                  </div>
                  <br />
                </form>
              </div>
              <div className="text-sm font-semibold text-slate-700 text-center">
                <input
                  type="radio"
                  value="10-11"
                  checked={slot === 2}
                  onClick={() => {
                    setSlot(2);
                  }}
                ></input>
                <label>11:00-12:00 pm</label>
              </div>
            </div>
          )}

          {slot === 3 ? (
            <div className="flex flex-col w-2/3">
              <div className="  m-2 bg-gray-100 rounded-md h-64 shadow-md ">
                <form className="p-2 ">
                   
                    {doctor.product.persons[8].user==null&&<div className="bg-blue-100 p-2">
                    <input
                      type="radio"
                      id="timeslot"
                      name="timeslot"
                      value="12:15"
                      onChange={ontimechange}
                    />
                    <label>12:00-12:15pm</label>
                  </div>}
                 
                  <br />

                   {doctor.product.persons[9].user==null&& <div className="bg-blue-100 p-2">
                    <input
                      type="radio"
                      id="timeslot"
                      name="timeslot"
                      value="12:30"
                      onChange={ontimechange}
                    />
                    <label>12:15-12:30pm</label>
                  </div>}
                 
                  <br />
                  
                    {doctor.product.persons[10].user==null&&<div className="bg-blue-100 p-2">
                    <input
                      type="radio"
                      id="timeslot"
                      name="timeslot"
                      value="12:45"
                      onChange={ontimechange}
                    />
                    <label>12:30-12:45pm</label>
                  </div>}
                  
                  <br />

                   {doctor.product.persons[11].user==null&& <div className="bg-blue-100 p-2">
                    <input
                      type="radio"
                      id="timeslot"
                      name="timeslot"
                      value="1:00"
                      onChange={ontimechange}
                    />
                    <label>12:45-1:00pm</label>
                  </div>}
                  
                  <br />
                </form>
              </div>
              <div className="text-sm font-semibold text-slate-700 text-center">
                <input
                  type="radio"
                  value="10-11"
                  checked={slot === 3}
                  onClick={() => {
                    setSlot(3);
                  }}
                ></input>
                <label>12:00-1:00 pm</label>
              </div>
            </div>
          ) : (
            <div className="flex flex-col w-2/3">
              <div className="  m-2 bg-gray-100 rounded-md h-64 shadow-md ">
                <form className="p-2 form1">
                  <div className="bg-blue-100 p-2">
                    <input
                      disabled="true"
                      type="radio"
                      id="timeslot"
                      name="timeslot"
                      value="12:15"
                      onChange={ontimechange}
                    />
                    <label>12:00-12:15pm</label>
                  </div>
                  <br />

                  <div className="bg-blue-100 p-2">
                    <input
                      disabled="true"
                      type="radio"
                      id="timeslot"
                      name="timeslot"
                      value="12:30"
                      onChange={ontimechange}
                    />
                    <label>12:15-12:30pm</label>
                  </div>
                  <br />
                  <div className="bg-blue-100 p-2">
                    <input
                      disabled="true"
                      type="radio"
                      id="timeslot"
                      name="timeslot"
                      value="12:45"
                      onChange={ontimechange}
                    />
                    <label>12:30-12:45pm</label>
                  </div>
                  <br />

                  <div className="bg-blue-100 p-2">
                    <input
                      disabled="true"
                      type="radio"
                      id="timeslot"
                      name="timeslot"
                      value="1:00"
                      onChange={ontimechange}
                    />
                    <label>12:45-1:00pm</label>
                  </div>
                  <br />
                </form>
              </div>
              <div className="text-sm font-semibold text-slate-700 text-center">
                <input
                  type="radio"
                  value="10-11"
                  checked={slot === 3}
                  onClick={() => {
                    setSlot(3);
                  }}
                ></input>
                <label>11:00-12:00 pm</label>
              </div>
            </div>
          )}
        </div>
        <div className="w-full pt-4 flex justify-center">
        <Button className="w-1/4" onClick={handelChange}
      size='mini'
      
      inverted color='orange'
    disabled={ loading}
    content={<strong> Book</strong>}

    icon="send"
    loading={loading}
    /></div>
        
      </div>
    </>
  );
}

export default Doctor1;
