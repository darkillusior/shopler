import React, { useState } from "react";
import { submitBook } from "../utils/postActions";
import { Button } from "semantic-ui-react";


function Doctor1({ doctor, appoId, hospitaname, setBooked }) {
 
 
  let apptime = doctor.product.persons.filter(time =>time.aval=== false&&time.user==null)
  const [slot , setSlot] = useState(apptime,[]); 

  const [time, setTime] = useState();
  const [loading, setLoading] = useState(false);
  const ontimechange = (e) => {
    setTime(e.target.value);

  };
  console.log(apptime)

  const handelChange = (e) => {
    e.preventDefault();
    setLoading(true)
    let book = {
      name: doctor.product.name,
      hospitaname: hospitaname,
      time: time,
      userId: appoId
    }

    submitBook(book,setSlot)
    setLoading(false)
    setBooked(true)
    
  }


  console.log("fds",doctor);
  return (
   

      <div className="flex flex-col w-full">
         <form className="p-2" onSubmit={handelChange}> <div className="flex justify-evenly m-2">
          <img
            src={doctor.product.img
            }
            className="shadow-md rounded-full w-60 h-60  m-2"
          ></img>
          <div className="w-2/4 border-2 border-slate-600 shadow-md text-base  sm:text-xl font-semibold p-2">
            {doctor.product.specialization}
          </div>
        </div>
        <div className="m-2 flex flex-wrap w-full ">
      {slot.map(time=>(


            
            <div className="  m-2 bg-gray-100 rounded-md  shadow-md ">
              
               <div className="bg-blue-100 p-2">
                  <input
                    type="radio"
                    id="timeslot"
                    name="timeslot"
                    value={time.time2}
                    onChange={ontimechange}
                  />
                  <label>{time.time1}-{time.time2}</label>
                </div>
                <br />
               
            </div>
         
      
        ))} 
        </div>
        <div className="w-full pt-4 flex justify-center">
          <Button className="w-1/4 p-2" 
            size='mini'

            inverted color='orange'
            disabled={loading}
            content={<strong> Book</strong>}

            icon="send"
            loading={loading}
          />
          </div>
</form>
      </div>



  );
}

export default Doctor1;
