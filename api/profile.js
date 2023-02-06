const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const UserModel = require("../models/UserModel");
const ShopModel = require("../models/ShopModel");
const AppointmentModel = require("../models/AppointmentModel");

const bcrypt = require("bcryptjs");

// GET PROFILE INFO


// GET post OF USER
router.get(`/`, authMiddleware, async (req, res) => {
  try {
    const { userId} = req;
    let shop=null;
    let Doctor =null
    
    const user= await UserModel.findById(userId)
   
    if(user.category=="Shop") {
   
    shop = await ShopModel.findOne({ user: userId })
  }else{
    Doctor = await AppointmentModel.findOne({user: userId})
    
 
  }

  
      let posts={user:null,shop:null,dr:null}
      posts.user=user;
      posts.shop=shop;
      posts.dr=Doctor;
      

    return res.json(posts);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server Error");
  }
});
router.post(`/postsedit`, authMiddleware, async (req, res) => {
  try {
    const { userId} = req;
      const {name,price,discount,stock}=req.body
    const posts = await ShopModel.findOne({ user: userId }).populate(
      "product"
    );
     
   
   result= posts.product.find((post) => 
   post.name === name)
   
    result.stock=stock;
    result.price=price;
    result.discount=discount;
    await posts.save();

    return res.json(posts);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server Error");
  }
});

// UPDATE PROFILE
router.post("/update", authMiddleware, async (req, res) => {
  try {
    const { userId } = req;

    const { bio, facebook, youtube, twitter, instagram, profilePicUrl } = req.body;

    let profileFields = {};
    profileFields.user = userId;

    profileFields.bio = bio;

    profileFields.social = {};

    if (facebook) profileFields.social.facebook = facebook;

    if (youtube) profileFields.social.youtube = youtube;

    if (instagram) profileFields.social.instagram = instagram;

    if (twitter) profileFields.social.twitter = twitter;

    await ProfileModel.findOneAndUpdate(
      { user: userId },
      { $set: profileFields },
      { new: true }
    );

    if (profilePicUrl) {
      const user = await UserModel.findById(userId);
      user.profilePicUrl = profilePicUrl;
      await user.save();
    }

    return res.status(200).send("Success");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server Error");
  }
});

// UPDATE PASSWORD
router.post("/settings/password", authMiddleware, async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    if (newPassword.length < 6) {
      return res.status(400).send("Password must be atleast 6 characters");
    }

    const user = await UserModel.findById(req.userId).select("+password");

    const isPassword = await bcrypt.compare(currentPassword, user.password);

    if (!isPassword) {
      return res.status(401).send("Invalid Password");
    }

    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();

    res.status(200).send("Updated successfully");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server Error");
  }
});



module.exports = router;
