import React from 'react'

function Delivery() {
    return (
        <>
            <h1 className='font-bold w-9/12 m-auto mt-10 text-black text-2xl'>Choose your delivery option</h1>
            <h1 className='font-bold w-9/12 m-auto mt-4 text-black text-lg'>Choose delivery speed option</h1>

            <div className='w-9/12 p-4 bg-white rounded-md m-auto flex flex-col mt-5'>
                <div className='border'>
                    <div className='flex p-4 items-center'>
                        <input type='radio' className='w-7 h-7 m-2 '></input>
                        <h2 className='text-green-600 text-lg font-bold ml-2'>Monday</h2>
                        <h2 className='text-black text-base font-bold ml-4'>40 rs Free Delivery eligible orders</h2>
                    </div>
                </div>

                <button className='bg-[#ffd814] mt-4  h-10 rounded-md text-black font-normal w-full'>Continue</button>

            </div>
        </>
    )
}

export default Delivery