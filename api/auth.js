const express = require("express");
const router = express.Router();
const UserModel = require("../models/UserModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", authMiddleware, async (req, res) => {
  const { userId } = req;
  let { getFollowingData } = req.query;
  getFollowingData = JSON.parse(getFollowingData);
  try {
    const user = await UserModel.findOne({_id:userId})
    if (!user) {
      return res.status(404).send("User not found");
    }

   

const user1 ={
  _id:user._id,
  category:user.category,
  email:user.email,
  items:user.items.length

}
if (getFollowingData) {
  return res.status(200).json({user,user1});
}
return res.status(200).json({user1});

  
  } catch (error) {
    console.error(error);
    return res.status(500).send(`Server error`);
  }
});


router.post("/", async (req, res) => {
  const {email, password } = req.body.user;



  if (password.length < 6) {
    return res.status(401).send("Password must be atleast 6 characters");
  }

  try {
    const user = await UserModel.findOne({ email: email.toLowerCase() }).select(
      "+password"
    );

    if (!user) {
      return res.status(401).send("Invalid Credentials");
    }

    const isPassword = await bcrypt.compare(password, user.password);
    if (!isPassword) {
      return res.status(401).send("Invalid Credentials");
    }

    const payload = { userId: user._id };
    jwt.sign(payload, process.env.JwtSecret, { expiresIn: "2d" }, (err, token) => {
      if (err) throw err;
   
      res.json(token);
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send(`Server error`);
  }
});

module.exports = router;
