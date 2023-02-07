import React from 'react'
import  { useState } from "react";
import {editProduct } from "../../utils/postActions";
import { Button } from "semantic-ui-react";

function Productedit({product,index}) {
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
await editProduct(products)
setLoading(false)
  };
  
  
  
  return (
   
    <tbody  className='m-auto text-center border-2 border-slate-200 text-white'>
   
    <tr className=' text-white'>
     <td >{index+1}</td>
      <td className=' font-semibold flex justify-center  text-sm  sm:text-xl'> <img className='w-20  rounded-md shadow-md m-2 ' src={product.images}/></td>
      <td >{product.name}</td>
      <td ><input name='price'    value={price}  onChange={handleChange}  className=' shadow-md rounded-sm w-8 sm:w-auto border-slate-200 text-black border-2  p-1' type='text' min={""}></input></td>
      <td ><input name='discount' value={discount}  onChange={handleChange}  className=' shadow-md rounded-sm w-8 sm:w-auto border-slate-200 text-black border-2 p-1' type='text' min={""}></input></td>
      <td ><input  name='stock'   value={stock}  onChange={handleChange}  className='shadow-md rounded-sm w-8 sm:w-auto border-slate-200 text-black border-2 p-1' type='text' min={""}></input></td>
      <td >
      <Button className=" "
    onClick={handelsubmit}
    size="mini"
    circular
    disabled={inital === false|| loading}
    content={<strong>Edit</strong>}
    style={{ backgroundColor:"orange", color: "white" }}
   
    loading={loading}
    />
</td>   
    </tr>
  
  </tbody>

  )
}

export default Productedit