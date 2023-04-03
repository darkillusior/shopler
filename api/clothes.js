const express = require("express");
const ClothesModel = require("../models/ClothesModel");
const router = express.Router();


router.get("/", async (req, res) => {


  try {
    
const Clothes = await ClothesModel.find();

let tclothes ={};
    
 for (let item of Clothes) {
if(item.title in tclothes){
  if(!tclothes[item.title].color.includes(item.color)&& item.stock>0){
    tclothes[item.title].color.push(item.color)
  }
  if(!tclothes[item.title].size.includes(item.size)&& item.stock>0){
    tclothes[item.title].size.push(item.size)
  }

}else{
   tclothes[item.title] = JSON.parse(JSON.stringify(item))
  if(item.stock>0){
    tclothes[item.title].color = [item.color]
    tclothes[item.title].size = [item.size]
    
  }
}  
  
 }

 
 return res.json(tclothes);

  } catch (error) {
    console.error(error);
    return res.status(500).send(`Server error`);
  }
});

router.get("/:postId", async (req, res) => {
  try {
    const product= await ClothesModel.findById(req.params.postId)
    const varients= await ClothesModel.find({title:product.title})
  let  colorsizeslug={}
  for(let item of varients){
    if(Object.keys(colorsizeslug).includes(item.color)){
      colorsizeslug[item.color][item.size]={_id:item._id,images:item.images[0],stocks:item.stock,price:item.price,discount:item.discount,size:item.size}

    }else
    {
      colorsizeslug[item.color]={}
      colorsizeslug[item.color][item.size]={_id:item._id,images:item.images[0],stocks:item.stock,price:item.price,discount:item.discount,size:item.size}

    }

  }


    return res.json({varients:colorsizeslug,product:product});
  } catch (error) {
    console.error(error);
    return res.status(500).send(`Server error`);
  }
});




router.post("/", async (req, res) => {
try{

 const   {picUrl} = req.body;

 const   {color,price,discount,discription,stocks,size,title} = req.body.product;


 

 
  const user = new ClothesModel({
     
    images:picUrl,
    discription:discription,
   
    color: color,
    price:price,
    discount: discount,
    title: title,
 
    size:size,
    stock:stocks,
  
      
    });
  
  
    await user.save();


  } catch (error) {
    console.error(error);
    return res.status(500).send(`Server error`);
  }
});

module.exports = router;