import React,{useState} from 'react'
import axios from "axios";
import { submitNewPost } from "../utils/postActions";
import uploadPic from '../utils/uploadPicToCloudinary';
function Mugs() {

let picUrl =[];
    const [files, setFiles] = useState([]);
    const [sep, setSep] = useState({});
    const [product, setProduct] = useState({
      color: "",
      price:"",
      discription: "",
      discount: "",
      title: "",
      size: "",
      stocks: "",
      
    });
  
    const {  color,
    price,
    discription,
    discount,
    title,
    size,
    stocks} = product;

    const handleChange = async (e) => {
      const { name, value } = e.target;
  
      setProduct(prev => ({ ...prev, [name]: value }));
      setSep(prev => ({...prev,value }));
     
  
     
    };
    console.log(sep)
     const onchange= async (e)=>{
            
       setFiles(e.target.files)


     } 

  
     const handleSubmit = async (e)=>{
       
        e.preventDefault();


      picUrl = await uploadPic(files);
await submitNewPost(picUrl,product)
     }



    
  return (
    <div>

        <form className='p-2 flex flex-col justify-center  items-center  bg-slate-700'   onSubmit={handleSubmit}>
          <div className=' w-full flex items-center justify-center p-2'>
            <input   className=' border border-solid p-2' type="file"  name="files" multiple onChange={onchange} />
           </div>   
           <div className=' w-full flex items-center justify-center p-2'>
           <textarea className='w-1/2 p-2 border border-solid h-16' placeholder='discription' name='discription' value={discription}
            onChange={handleChange}  />
          
          </div> 
          <div  className=' w-full flex items-center justify-center p-2'>
         <input   className='border-2 rounded-md border-amber-200 focus:outline-sky-500 focus:outline-offset-0 p-2 w-1/2 border-solid '  name='color' value={color}
            onChange={handleChange}    placeholder="color" type="text" />
               </div> 
               <div className=' w-full flex items-center justify-center p-2'>
                <input   className='border-2 rounded-md border-amber-200 focus:outline-sky-500 focus:outline-offset-0 p-2 w-1/2 border-solid ' pattern='[0-9]{0,9}' placeholder='price' value={price}
            onChange={handleChange}  name='price' type="number" />
          </div>  
          <div className=' w-full flex items-center justify-center p-2'>
            <input    className='border-2 rounded-md border-amber-200 focus:outline-sky-500 focus:outline-offset-0 p-2 w-1/2 border-solid ' name='discount' value={discount}
            onChange={handleChange}  placeholder='discount' type="number" />
           </div> 
          <div className=' w-full flex items-center justify-center p-2'>
           <input    className='border-2 rounded-md border-amber-200 focus:outline-sky-500 focus:outline-offset-0 p-2 w-1/2 border-solid ' name='title' value={title}
            onChange={handleChange}  placeholder='title' type="text" />
           </div>  <div className=' w-full flex items-center justify-center p-2'>
             <input   className='border-2 rounded-md border-amber-200 focus:outline-sky-500 focus:outline-offset-0 p-2 w-1/2 border-solid ' name='size' value={size}
            onChange={handleChange}  placeholder='size' type="text" />
          </div> 
          <div className=' w-full flex items-center justify-center p-2'>
           <input    className='border-2 rounded-md border-amber-200 focus:outline-sky-500 focus:outline-offset-0 p-2 w-1/2 border-solid ' name='stocks' value={stocks}
            onChange={handleChange}  placeholder='stocks' type="number" />
            
           </div> 
           
       
         
             <button className='bg-slate-300 border p-2 hover:border-2 hover:border-blue-300'>
                SUBMIT
            </button>
        </form>
      

    </div>
  )
}

export default Mugs