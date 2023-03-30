import React from 'react'
import  { useState } from "react";
import {editProduct } from "../../utils/postActions";
import { Button } from "semantic-ui-react";

function Productedit({product,index}) {
  const[editingmode,seteditingmode]=useState(false)
  const [inital, setInitial] = useState(
   false
  );
  const [products, setProduct] = useState({
   
    price: product.price, 
    discount: product.discount,
    stock: product.stock,
    name:product.name
  
  });
 const { 
    price,
    discount,
    stock,
  } = products;

  const [loading, setLoading] = useState(false);
  
    const handleChange = async (e) => {
      const { name, value } = e.target;
  
      setProduct(prev => ({ ...prev,[name]: value }));
  
      setInitial(true)
  
     
    };
 
  const handelsubmit = async (e) => {
    setLoading(true)
    e.preventDefault(); 
    seteditingmode(false)
await editProduct(products)
setLoading(false)
  };
  
  
  
  return (
   
    <tbody  className='m-auto text-center border-2 border-slate-200 text-white'>
   
    <tr className=' text-white'>
     <td >{index+1}</td>
      <td className=' font-semibold flex justify-center  text-sm  sm:text-xl'> <img className='w-20  rounded-md shadow-md m-2 ' src={product.images}/></td>
      <td >{product.name}</td>
      <td ><input name='price'    value={price} readOnly={!editingmode}  onChange={handleChange}  className=' shadow-md rounded-sm w-8 sm:w-auto border-slate-200 text-black border-2  p-1' type='text' min={""}></input></td>
      <td ><input name='discount' value={discount}  readOnly={!editingmode}  onChange={handleChange}  className=' shadow-md rounded-sm w-8 sm:w-auto border-slate-200 text-black border-2 p-1' type='text' min={""}></input></td>
      <td ><input  name='stock'   value={stock}  readOnly={!editingmode}   onChange={handleChange}  className='shadow-md rounded-sm w-8 sm:w-auto border-slate-200 text-black border-2 p-1' type='text' min={""}></input></td>
      <td >
   
   {!editingmode?
   <>
     <div class='flex items-center justify-center'>
    <div class="m-5">
    <button onClick={()=>{seteditingmode(true)}} classname="flex bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
      </button>
    </div>
</div>
</>:

<button onClick={handelsubmit} className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded">
  Done
</button>
}

</td>   
    </tr>
  
  </tbody>

  )
}

export default Productedit