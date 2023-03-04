import React, { useState } from "react";
import Navbar2 from "../components/navbar2";
import Doctors from "../components/Tools/Doctors";
import Product from "../components/Tools/Products";
import { submitProduct,submitdr } from "../utils/postActions";
import uploadSinglePic from "../utils/uplodesinglefile";
import { Button } from "semantic-ui-react";
function Shop() {
  const [files, setFiles] = useState();
  const [category, setCategory] = useState();
  const [address, setAddress] = useState();
  const [name, setName] = useState();
  const [image, setImg] = useState();
  const [products, setMoreproducts] = useState([]);
  const [loading, setLoading] = useState(false);
  

  const [error, setError] = useState(null);
 const[doctorinfo,setDoctorinfo]=useState({
   name: "",
   fees: "",
   specialization:"",
   img:"",
   shopimg:"",
   address:"",
   discount:"",
   category:"",
   shopname:""
  }) 

  const [product, setProduct] = useState({
    name: "",
    price: "",
    discription: "",
    discount: "",
    size: "",
    stocks: "",
    img: "",
    shopimg:"",
    address:"",
    category:"",
    shopname:""

  });
  
   const handleChange = async (e) => 
    {
     setCategory(e.target.value);
    };
  
    console.log(category);

   const onchange = async (e) => 
    {
     setImg(e.target.files[0]);
    };



  const handleSubmit = async (e) => 
   {
    e.preventDefault();
    setLoading(true);
    let img;
    console.log("lolgg0")
    img = await uploadSinglePic(image);
    console.log("lolgg1")
   if (category=="Doctor"){
    console.log("lolgg2")
    doctorinfo.address=address
    doctorinfo.shopname=name
    doctorinfo.category=category
    doctorinfo.shopimg=img
    await submitdr(products,setLoading)
    setLoading(false);
    }else{
    product.address=address
    product.shopname=name
    product.category=category
    product.shopimg=img
    await submitProduct(products,setLoading);
    setLoading(false);
  }
   };

  return (
    <>
    <Navbar2/>
    <main className="bg-lime-50">
   
      <div className="flex justify-around">
 
    <div className="w-1/2 m-4  border-2 border-slate-800 rounded-sm shadow-sm shadow-black">
      <h1 className="text-5xl pt-6 pb-6 ml-4  text-gray-600 font-serif font-semibold">Shop details:</h1>  
      <hr/>    
      
      <h1 className="text-xl m-2 ml-7 text-gray-600 font-serif font-semibold">Shop Image</h1>
      <input className=" ml-7 mb-2" type="file" name="image"onChange={onchange}/>
      <hr/>   
      <h1 className="text-xl m-2 ml-7 text-gray-600 font-serif font-semibold">Shop Image</h1>
      <input className=" ml-7 mb-2" type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} />
      <hr/>   
      <h1 className="text-xl m-2  ml-7 text-gray-600 font-serif font-semibold">Category</h1>
      <select name="category" className="m-2  ml-7 text-lg text-slate-600  border border-solid" onChange={handleChange}>
        <option value="" selected disabled hidden>Choose here</option>
        <option value="general-store"  >general-store</option>
        <option value="Grocery-Store">Grocery-Store</option>
        <option value="Electronic-Store">Electronic-Store</option>
        <option value="Books-Store">Books-Store</option>
        <option value="Stationary-Store">Stationary-Store</option>
        <option value="Pharmacy-Store">Pharmacy-Store</option>
        <option value="Doctor">Doctor/Appointment</option>
      </select>
      <hr/>    

        
      <h1 className="text-xl m-2  ml-7 text-gray-600 w-full font-serif font-semibold">Address</h1>
      <textarea className='m-2  ml-7 border border-solid ' placeholder='discription' name='discription' value={address} onChange={(e)=>setAddress(e.target.value)}  />  
      <hr/>
      
      </div>

      <div className="w-1/2 m-4  border-2 border-slate-800 rounded-sm shadow-sm shadow-black">
      <h1 className="text-5xl pt-6 pb-6 ml-4  text-gray-600 font-serif font-semibold">Product Details:</h1>
      <hr/>   
     
      {category=="Doctor"?
      <Doctors doctorinfo={doctorinfo}   setFiles={setFiles}
      files={files}  product={product}   products={products} setMoreproducts={setMoreproducts} setDoctorinfo={setDoctorinfo}/>
      :
      <Product
      setFiles={setFiles}
      files={files}
      setProduct={setProduct}
      product={product}
      products={products}
      setMoreproducts={setMoreproducts}
      />}
   
   </div> 
  
  </div>
 
  <div className="flex justify-center items-center p-4 ">
    <Button className=" mb-4  w-1/3 "
    onClick={handleSubmit}
    circular
    disabled={ loading}
    content={<strong>Submit</strong>}
    style={{ backgroundColor: "#1DA1F2", color: "white" }}
    icon="send"
    loading={loading}
    /></div>

  </main>
  </>
  );

}

export default Shop;
