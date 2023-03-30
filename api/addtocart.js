const express = require("express");
const router = express.Router();
const UserModel = require("../models/UserModel");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", authMiddleware, async (req, res) => {
  try {
    const { userId } = req;
    let cartItems = await UserModel.findById(userId).populate({
      path: 'items.productId',
      model: 'Shop',
      select: 'product.name product.price product.images'
    });
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

  try {
  const item = await UserModel.findOne(
    {
      _id: userId,
      "items.productId": postId,
    },
    {
      items: {
        $elemMatch: {
          productId: postId,
        },
      },
    }
  );

  if (item) {
    item.items[0].quantity = item.items[0].quantity + 1;
    await item.save();
  } else {

    const user = await UserModel.findOne({_id:userId})
    console.log("lin",user)
    user.items.push({
      productId: postId,
      quantity: 1,
    });   
   await user.save();
   
  }
  console.log("gin",item)
  // res.status(200).json({item});
} catch (error) {
  console.error(error);
  return res.status(500).send(`Server error`);
}
});
module.exports = router;