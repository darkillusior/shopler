import React, { useState } from 'react'
import uploadSinglePic from "../../utils/uplodesinglefile";
function Doctors({ setDoctorinfo, setFiles, doctorinfo, setMoreproducts, files }) {

    const {
        name,
        fees,
        specialization,
        discount,
     
    } = doctorinfo;
    
    const [count, setCount] = useState(0)
    const handleChange = async (e) => {
        const { name, value } = e.target;

        setDoctorinfo(prev => ({ ...prev, [name]: value }));




    };

    const onchange = async (e) => {

        setFiles(e.target.files[0])


    }

    const handleSubmit = async (e) => {

        e.preventDefault();
        
        doctorinfo.img = await uploadSinglePic(files);
        
        setMoreproducts(prev => ([...prev, doctorinfo]));

        setCount(count + 1)
    }



    return (
        <div>
            <form className=' m-2 flex flex-col' onSubmit={handleSubmit}>

                <h2 className='m-2 p-2 text-2xl font-serif font-semibold text-slate-700 '>Doctors Added:<span className='m-2 p-2 text-2xl font-sans font-bold text-red-600'>{count}</span></h2>
                <hr />

                <div className=' m-2 p-2'>
                    <label className='text-xl text-gray-600 font-serif font-semibold'>Doctor's Image:</label><br />
                    <input className='' type="file" name="files" onChange={onchange} />
                </div>
                <hr />

                <div className=' m-2'>
                <label className='text-xl text-gray-600 font-serif font-semibold'>Doctor's Name:</label><br />
                <input className='border-2 rounded-md border-amber-200 focus:outline-sky-500 focus:outline-offset-0 p-2 w-1/2 border-solid ' name='name' value={name} onChange={handleChange} placeholder='Doctor name' type="text" />
                </div>
                <hr />

                <div className=' m-2'>
                    <label className='text-xl text-gray-600 font-serif font-semibold'> Specialization:</label><br />
                    <textarea className='w-1/2 p-2 border border-solid h-16' placeholder='specialization' name='specialization' value={specialization} onChange={handleChange} />
                </div>
                <hr />

                <div className=' m-2'>
                    <label className='text-xl text-gray-600 font-serif font-semibold'>Fees:</label><br />
                    <input className='border-2 rounded-md border-amber-200 focus:outline-sky-500 focus:outline-offset-0 p-2 w-1/2 border-solid ' pattern='[0-9]{0,9}' placeholder='price' value={fees} onChange={handleChange} name='fees' type="number" />
                </div>
                <hr />

                <div className=' m-2'>
                    <label className='text-xl text-gray-600 font-serif font-semibold'>Discount Offered:</label><br />
                    <input className='border-2 rounded-md border-amber-200 focus:outline-sky-500 focus:outline-offset-0 p-2 w-1/2 border-solid ' name='discount' value={discount}
                        onChange={handleChange} placeholder='discount' type="number" />
                </div>
                <hr />               
                
                <button className='text-slate-800 text-xl p-2 bg-cyan-300 w-1/2 rounded-sm'>Add</button>
                <hr />

            </form>
        </div>
    )
}

export default Doctors