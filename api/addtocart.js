const express = require("express");
const router = express.Router();
const UserModel = require("../models/UserModel");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", authMiddleware, async (req, res) => {
  try {
    const { userId } = req;
    let cartItems = await UserModel.findById(userId)
    if (!cartItems) {
      return res.status(404).send("no cart items found");
    }
    return res.json(cartItems);
  } catch (error) {
    console.error(error);
    return res.status(500).send(`Server error`);
  }
});

router.post("/:postId", authMiddleware, async (req, res) => {
  const { postId } = req.params;
  const { userId } = req;
  const {name,image,price}=req.body

  try {
  const user = await UserModel.findById(userId);
    
      
  const itemIndex = user.items.findIndex((item) => item.productId.toString()===postId);

    


  if (itemIndex!==-1) {
    user.items[itemIndex].quantity +=   1;
    // user.items[itemIndex].price +=user.items[itemIndex].price ;
    await user.save();
  } else {

    const user = await UserModel.findOne({_id:userId})
   
    user.items.push({
      productId: postId,
       name:name,
       image:image,
       price:price,
      quantity: 1,
    });   
   await user.save();
   
  }
  
  res.status(200).json(true);
} catch (error) {
  console.error(error);
  return res.status(500).send(`Server error`);
}
});
module.exports = router;