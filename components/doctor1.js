import React, { useEffect,useState } from "react";
import { submitBook } from "../utils/postActions";


function Doctor1({ doctor, appoId, hospitaname, setBooked }) {
  const first_text = doctor.product.about


  const [text1, setText1] = useState("");


  useEffect(() => {
    const timeout = setTimeout(() => {
      setText1(first_text.slice(0, text1.length + 1));
    }, 50);
    return () => clearTimeout(timeout);
  }, [text1]);
 
  let apptime = doctor.product.persons.filter(time =>time.aval=== true&&time.user==null)
  const [slot , setSlot] = useState(apptime||[]); 
 
  useEffect(() => {
  setSlot(apptime)
   }, [doctor]);
  
   const [time, setTime] = useState();
  const [loading, setLoading] = useState(false);
  const ontimechange = (e) => {
    setTime(e.target.value);

  };
 

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
    setTimeout(() => {
      setBooked(false)
    }, 3000);
  }


  
  return (
   
<>
      {/* <div className="flex flex-col  w-full">
         <form className="p-2" onSubmit={handelChange}> <div className="flex justify-evenly m-2">
          <img
            src={doctor.product.img
            }
            className="shadow-md rounded-full w-60 h-60  m-2"
          ></img>
          <div className="w-2/4 border-2 border-slate-600 shadow-md text-base  md:text-xl font-semibold p-2">
            {doctor.product.specialization}
          </div>
        </div>
        <div className="m-2 flex flex-wrap w-full ">
      {slot.map((time,index)=>(


            
            <div key={index} className="  m-2 bg-gray-100 rounded-md  shadow-md ">
              
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
      </div> */}
     
      <div className="w-full  md:ml-48 ">
        <div className="relative mx-auto mt-20 mb-20 w-1/2 overflow-hidden rounded-t-xl bg-teal-400/60 ">
          <h1 className="  pt-2 text-center text-2xl font-bold text-white md:text-4xl">Get Your Appointment:</h1>
          
          <div className="md:flex md:flex-row flex-col">
          <div className="flex w-[35%] flex-col items-center m-auto">
          <img
            src={doctor.product.img
            }
            className="md:ml-4  shadow-md rounded-full w-60 mt-8 h-60 "
          ></img>
         
          <p className="mt-8 ml-4 pb-2 text-xl text-center text-black font-bold">{doctor.product.name}</p>
          </div> 
          
        <div className="md:text-slate-700 md:text-xl md:w-1/2 md:mt-10 md:p-4 md:text-center md:m-auto md:font-bold text-lg text-slate-700 w-full p-4 text-center m-auto">{text1}
        </div>    
       
        </div>

       

        </div>
          
        <form onSubmit={handelChange}>
        <div className="mx-auto grid w-3/4 px-6 pb-20">
          {/* <div class="">
            <p class="font-serif text-xl font-bold text-blue-900">Select Doctor</p>
            <div class="mt-2 grid max-w-3xl gap-x-4 gap-y-3 md:grid-cols-2 md:grid-cols-3">
              <div class="relative">
                <input class="peer hidden" id="radio_1" type="radio" name="radio"  />
                <span class="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white peer-checked:border-emerald-400"></span>
                <label class="flex h-full cursor-pointer flex-col rounded-lg p-4   peer-checked:bg-emerald-600 border-2 bg-emerald-100 shadow-lg peer-checked:border-none peer-checked:text-white" for="radio_1">
                  <span class="mt-2- font-medium ">DOCTOR1</span>
                 
                </label>
              </div>
              <div class="relative">
                <input class="peer hidden" id="radio_2" type="radio" name="radio" />
                <span class="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white peer-checked:border-emerald-400"></span>

                <label class="flex h-full cursor-pointer flex-col rounded-lg p-4 shadow-lg   peer-checked:bg-emerald-600 border-2 bg-emerald-100  peer-checked:border-none peer-checked:text-white" for="radio_2">
                  <span class="mt-2 font-medium">DOCTOR2</span>
                  
                </label>
              </div>
            <div class="relative">
           <input class="peer hidden" id="radio_3" type="radio" name="radio" />
           <span class="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white peer-checked:border-emerald-400"></span>

                <label class="flex h-full cursor-pointer flex-col rounded-lg p-4 shadow-lg  peer-checked:bg-emerald-600 border-2 bg-emerald-100 peer-checked:border-none peer-checked:text-white" htmlFor="radio_3">
                  <span class="mt-2 font-medium">DOCTOR3</span>
                 
                </label>
              </div>
            </div>
          </div> */}

          <div className="m-auto">
            <p className="font-serif text-xl font-bold text-blue-900 text-center ">Select a date</p>
            <div className="relative  w-56">
             
              <input datepicker="" datepicker-orientation="bottom" autofocus="autofocus" type="date" className="datepicker-input block w-full rounded-lg border border-emerald-300 bg-emerald-50 p-2.5 text-center  text-emerald-800 outline-none ring-opacity-30 placeholder:text-emerald-800 focus:ring focus:ring-emerald-300 md:text-md" placeholder="Select date" />
            </div>
          </div>

          <div className="m-auto">
            <p className=" font-serif text-xl font-bold text-blue-900 pt-4">Select a time</p>
            <div className=" md:grid md:grid-cols-4 md:gap-2 grid grid-cols-3 gap-2 lg:max-w-xl">
              {slot.map((time, index) => (
                <>
            
                  <div key={index} className="bg-blue-100 p-2 grid grid-cols-4">
                    <input
                    className=""
                      type="radio"
                      id="timeslot"
                      name="timeslot"
                      value={time.time2}
                      onChange={ontimechange}
                    />
                    <label className="w-32">{time.time1}-{time.time2}</label>
                  </div>
              </>
              ))}
            </div>
          </div>

          <button type="submit" className="m-auto mt-8 w-56 rounded-full border-8 border-emerald-500 bg-emerald-600 px-10 py-4 text-lg font-bold text-white transition hover:translate-y-1">Book Now</button>
        </div>
        </form>
     
      </div>
    
</>

  );
}

export default Doctor1;
