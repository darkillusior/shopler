const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

const ShopModel = require("../models/ShopModel");

router.get("/:searchText/:userId", authMiddleware, async (req, res) => {
  try {
    const { searchText,userId } = req.params;

   
   
    if (searchText.length === 0) return;

    const results = await ShopModel.findOne({
      user:userId,
      "product.name": { $regex: searchText, $options: "i" },
      
    },{product: {
      $elemMatch: {
        name: { $regex: searchText, $options: "i" },
      },
    },}
    );
  
//     const name =  results.product.filter(like => like.name.toString() === searchText);
// console.log("result",name)
    return res.status(200).json(results.product);
  } catch (error) {
    console.error(error);
    return res.status(500).send(`Server error`);
  }
});

module.exports = router;
