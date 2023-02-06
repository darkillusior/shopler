import React,{useState} from 'react'
import uploadSinglePic from "../../utils/uplodesinglefile";
function Product({ setProduct,setFiles,product,setMoreproducts,files}) {

    const { 
    name,
    price,
    discription,
    discount, 
    size,
    stocks,
  } = product;
  
  const[count,setCount]=useState(0)
  
  const handleChange = async (e) => 
   {
   const { name, value } = e.target;
   setProduct(prev => ({ ...prev,[name]: value }));  
   };
   
     const onchange= async (e)=>
      {     
       setFiles(e.target.files[0])
      } 

     const handleSubmit = async (e)=>
     {
      e.preventDefault(); 
      product.img = await uploadSinglePic(files); 
      setMoreproducts(prev => ([ ...prev, product]));
      setCount(count+1)
     }
    

    
  return (
    <div>
    <form className=' m-2 flex flex-col' onSubmit={handleSubmit}>

    <h2 className='m-2 p-2 text-2xl font-serif font-semibold text-slate-700 '>Items Added:<span className='m-2 p-2 text-2xl font-sans font-bold text-red-600'>{count}</span></h2> 
    <hr/>

    <div className=' m-2 p-2'> 
    <label className='text-xl text-gray-600 font-serif font-semibold'>Product Image:</label><br/>  
     <input   className='' type="file"  name="files"  onChange={onchange} />
     </div>   
     <hr/> 

     <div className=' m-2'>
      <label className='text-xl text-gray-600 font-serif font-semibold'>Product Name:</label><br/>
      <input    className='border-2 rounded-md border-amber-200 focus:outline-sky-500 focus:outline-offset-0 p-2 w-1/2 border-solid ' name='name' value={name}onChange={handleChange} placeholder='product name' type="text"/>
      </div>  
      <hr/>   

      <div className=' m-2'>
      <label className='text-xl text-gray-600 font-serif font-semibold'>Product Description:</label><br/>
      <textarea className='w-1/2 p-2 border border-solid h-16' placeholder='discription' name='discription' type="text" value={discription}onChange={handleChange}/>
      </div> 
      <hr/>   

      <div className=' m-2'>
      <label className='text-xl text-gray-600 font-serif font-semibold'>Product Price:</label><br/>
      <input className='border-2 rounded-md border-amber-200 focus:outline-sky-500 focus:outline-offset-0 p-2 w-1/2 border-solid '  placeholder='price' value={price} onChange={handleChange}  name='price' type="text"/>
      </div>  
      <hr/>   

      <div className=' m-2'>
      <label className='text-xl text-gray-600 font-serif font-semibold'>Discount Offered:</label><br/>
      <input className='border-2 rounded-md border-amber-200 focus:outline-sky-500 focus:outline-offset-0 p-2 w-1/2 border-solid ' name='discount' value={discount}
      onChange={handleChange}  placeholder='discount' type="text"/>
      </div> 
      <hr/>   

      <div className=' m-2'>
      <label className='text-xl text-gray-600 font-serif font-semibold'>Product Size(if):</label><br/>
      <input  type="text" className='border-2 rounded-md border-amber-200 focus:outline-sky-500 focus:outline-offset-0 p-2 w-1/2 border-solid ' name='size' value={size}onChange={handleChange} placeholder='size' />
      </div> 
       <hr/>   

      <div className='  m-2'>
      <label className='text-xl text-gray-600 font-serif font-semibold'>Product Stocks:</label><br/>
      <input type="text" className='border-2 rounded-md border-amber-200 focus:outline-sky-500 focus:outline-offset-0 p-2 w-1/2 border-solid 'name='stocks' value={stocks}onChange={handleChange}placeholder='stocks' />     
     </div> 
    <hr/>   

    <button className='text-slate-800 text-xl p-2 bg-cyan-300 w-1/2 rounded-sm'>Add</button>
     <hr/>   

    </form>
    </div>
  )
}

export default Product