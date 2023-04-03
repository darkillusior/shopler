import React from 'react'

function Address() {
    return (
        <>
            <h1 className='font-bold w-9/12 m-auto mt-10 text-black text-xl'>Select A Delivery Address</h1>
            <div className='w-9/12 p-4 bg-white rounded-md m-auto flex flex-col mt-5'>
                <div className='border'>
                    <div className='flex p-2'>
                        <input type='radio' className='w-7 h-7 m-2 mt-16'></input>
                        <div className='ml-2 flex flex-col'>
                            <h2 className='text-gray-600 text-lg font-bold mt-4'>Recently Used</h2>
                            <h2 className='text-black text-base font-bold mt-2 '>Gaurav bahuguna</h2>
                            <div className=' text-black text-base'>asdansod  ainads dsf,sada
                                <span>Haldwani,Nanital,263139</span>
                                <br />
                                <span>India</span>
                                <br />
                                <span>Phone: 7302272930</span>
                                <br />
                            </div>
                        </div>
                    </div>
                    <div className='p-2'><button className='bg-[#ffd814] mt-4  h-10 rounded-md text-black font-normal w-full'>Deliver to this address</button></div>
                    <div className='p-2'> <button className=' shadow-sm  border  p-2 rounded-md text-black font-normal w-full'>Edit Address</button></div>
                    <div className='p-2'><button className=' shadow-sm  text-sm  border p-2  rounded-md text-gray-900 font-normal w-full'>Add Delivery Instruction</button></div>
                </div>

                <div className='flex border rounded-sm'>
                    <input type='radio' className='w-7 h-7 m-2 mt-16'></input>
                    <div className='ml-2 flex flex-col mt-2 p-2'>
                        <h2 className='text-black text-base font-bold mt-4'>Gaurav bahuguna</h2>
                        <div className=' text-black text-base'>asdansod  ainads dsf,sada
                            <span>Haldwani,Nanital,263139</span>
                            <br />
                            <span>India</span>
                            <br />
                            <span>Phone: 7302272930</span>
                            <br />
                        </div>
                    </div>
                </div>

                <div className='flex justify-between border border-collapse p-4 cursor-pointer'>
                    <div className='text-black text-base font-bold '>Add a new address</div>
                    <div className='flex items-center'><img src='/next.png' className='w-7 h-7 '></img></div>
                </div>
            </div>
        </>
    )
}

export default Address