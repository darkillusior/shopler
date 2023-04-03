import React from 'react'
import Address from '../components/Address'
import Delivery from '../components/Delivery'
import Payment from '../components/Payment'
import { useState } from 'react'
import Navbar from '../components/navbar2'

function AfterCart({user}) {
    const [show, setShow] = useState(null)
   
    const onchange = (e) => {
        setShow(e.target.value)
    }
   
    return (
        <>
        <Navbar user={user}/>
            <main className='flex flex-col justify-around bg-[#f3f3f3] p-4'>

                <div className='flex justify-around bg-white'>

                    <div className='flex flex-col'>
                        <input type='radio' size='large' className='m-2 p-2 h-5 w-5 ' name='cart' value='address'  id='1' onChange={onchange} ></input>
                        <label for='cart'>Address</label>
                    </div>

                    <div className='flex flex-col'>
                        <input type='radio' size='large' className='m-2 p-2 h-5 w-5' name='cart' value='delivery' id='2' onChange={onchange}></input>
                        <label for='cart'>Delivery</label>
                    </div>

                    <div className='flex flex-col'>
                        <input type='radio' size='large' className='m-2 p-2 h-5 w-5 ' name='cart' value='payment' id='3' onChange={onchange}></input>
                        <label for='cart'>Payment</label>
                    </div>

                    <div className='flex flex-col'>
                        <input type='radio' size='large' className='m-2 p-2 h-5 w-5 ' name='cart' value='placeorder' id='4' onChange={onchange}></input>
                        <label for='cart'>Place Order</label>
                    </div>
                </div>

                {show == "address" ? <Address /> : show == "delivery" ? <Delivery /> : show == "payment" ? <Payment /> : null}


            </main>
        </>
    )
}

export default AfterCart

