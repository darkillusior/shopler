const express = require("express");
const AppointmentModel = require("../models/AppointmentModel");
const UserModel = require("../models/UserModel");
const ShopModel = require("../models/ShopModel");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

router.get("/:category", authMiddleware,async (req, res) => {
  try {
  
    let user=null
   let post=null
 if(req.params.category==="Doctor"){

      user = await AppointmentModel.find({category:req.params.category}).populate("user")
     
      if (!user) {
   
        return res.status(404).send("User not found");
      }
    }else
      {
       post = await ShopModel.find({category:req.params.category}).populate("user")
     
       if (!post) {
        return res.status(404).send("User not found");
      }
    }
    
   


    return res.json({post,user});
  } catch (error) {
    console.error(error);
    return res.status(500).send(`Server error`);
  }
});




router.get("/main/:userId", authMiddleware,async (req, res) => {
    try {
   
      const post = await ShopModel.findOne({user:req.params.userId})
        .populate("user")
     
       
      if (!post) {
        return res.status(404).send("no product found");
      }
     
      return res.json(post);
    } catch (error) {
      console.error(error);
      return res.status(500).send(`Server error`);
    }
  });




router.post("/",authMiddleware, async (req, res) => {
try{
 
  const { userId } = req; 
  const   products = req.body;
 let user

 user = await ShopModel.findOne({user:userId})
 if (!user) {

 user = new ShopModel({
  user:userId,
  shopimg:products[products.length-1].shopimg,
  address:products[products.length-1].address,
  category:products[products.length-1].category,
  shopname:products[products.length-1].shopname,
 }); }
  
 const uniqueIds = [];

 const unique = products.filter(element => {
   const isDuplicate = uniqueIds.includes(element.name);

   if (!isDuplicate) {
     uniqueIds.push(element.name);
 
     return true;
   }
 
   return false;
 });

for (let i = 0; i <unique.length; i++) {
 
    
     
        const newproduct ={
          name:unique[i].name,

          images:unique[i].img,
        
          discription: unique[i].discription,
        
         
          
          price: unique[i].price,
        
          discount:  unique[i].discount,
        
          tags:unique[i].tags,
        
          size: unique[i].size,
        
          stock: unique[i].stocks,
          
    
      
      }
          
        await user.product.push(newproduct);
        
      
      
}
 
  await user.save();



  const user1 = await UserModel.findById(userId)
    user1.category="Shop"
    await user1.save();
    return res.status(200).send("done");

  } catch (error) {
    console.error(error);
    return res.status(500).send(`Server error`);
  }
});



router.post("/like/:postId", authMiddleware, async (req, res) => {
  try {
     const { postId } = req.params;
   
     const { userId } = req;
    const { productId } = req.body;

    const post = await ShopModel.findOne({user:productId});
    if (!post) {
      return res.status(404).send("No Post found");
    }
    const product =  post.product.filter(like => like._id.toString() === postId);
    if (!post) {
      return res.status(404).send("No Post found");
    }


    const isLiked =
      product[0].likes.filter(like => like.user.toString() === userId).length > 0;
     
    if (isLiked) {
      return res.status(401).send("Post already liked");
    }

    await product[0].likes.unshift({ user:userId});
    await post.save();

    


    return res.status(200).send("Post liked");
  } catch (error) {
    console.error(error);
    return res.status(500).send(`Server error`);
  }
});

// UNLIKE A POST

router.put("/unlike/:postId", authMiddleware, async (req, res) => {
  try {
    const { postId } = req.params;
   
     const { userId } = req;
    const { productId } = req.body;
  
    const post = await ShopModel.findOne({user:productId});
    if (!post) {
      return res.status(404).send("No Post found");
    }
    const product =  post.product.filter(like => like._id.toString() === postId);
    if (!post) {
      return res.status(404).send("No Post found");
    }


    const isLiked =
      product[0].likes.filter(like => like.user.toString() === userId).length == 0;
   
    if (isLiked) {
      return res.status(401).send("Post not liked before")
    }

    const index = product[0].likes.map(like => like.user.toString()).indexOf(userId);

    await product[0].likes.splice(index, 1);

    await post.save();

 

    return res.status(200).send("Post Unliked");
  } catch (error) {
    console.error(error);
    return res.status(500).send(`Server error`);
  }
});

module.exports = router;