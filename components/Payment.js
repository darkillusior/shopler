import React from 'react'

function Payment() {
    return (
        <>
            <h1 className='font-bold w-9/12 m-auto mt-10 text-black text-2xl'>Select a payment method</h1>


            <div className='w-9/12 p-4 bg-white rounded-md m-auto flex flex-col mt-5'>

                <div className='flex p-4 items-center border'>
                    <input type='radio' className='w-7 h-7 m-2 ' name="payment"></input>
                    <label for="payment" className='text-black text-base font-semibold ml-4'>Other UPI apps</label>
                </div>

                <div className='flex p-4 items-center border'>
                    <input type='radio' className='w-7 h-7 m-2 ' name='payment'></input>
                    <label for='payment' className='text-black text-base font-semibold ml-4'>Pay with ATM/Debit/Credit Cards</label>
                </div>

                <div className='flex p-4 items-center border'>
                    <input type='radio' className='w-7 h-7 m-2 ' name='payment'></input>
                    <label for='payment' className='text-black text-base font-semibold ml-4'>Net Banking</label>
                </div>

                <div className='flex p-4 items-center border'>
                    <input type='radio' className='w-7 h-7 m-2 ' name='payment'></input>
                    <label for='payment' className='text-black text-base font-semibold ml-4'>Cash On Delivery</label>
                </div>


                <button className='bg-[#ffd814] mt-4  h-10 rounded-md text-black font-normal w-full'>Continue</button>

            </div>
        </>
    )
}

export default Payment