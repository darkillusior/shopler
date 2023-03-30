const express = require("express");
const router = express.Router();
const UserModel = require("../models/UserModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

router.post("/", async (req, res) => {
  const {
    name,
    email,
    password
 } = req.body.user;

 
  if (password.length < 6) {
    return res.status(401).send("Password must be atleast 6 characters");
  }

  try {
    let user;
    user = await UserModel.findOne({ email: email.toLowerCase() });
    if (user) {
      return res.status(401).send("User already registered");
    }

   

    user = new UserModel({
      name,
      email: email.toLowerCase(),
     items:[],
      password,

    });

    user.password = await bcrypt.hash(password, 10);
    await user.save();
    
  
    const payload = { userId: user._id };
    jwt.sign(payload, process.env.JwtSecret, { expiresIn: "2d" }, (err, token) => {
      if (err) throw err;
     
      res.status(200).json(token);
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send(`Server error`);
  }
});

module.exports = router;
