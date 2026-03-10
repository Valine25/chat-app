const { User } = require("../models/user.model.js");
const bcrypt=require("bcryptjs");
const { generateTokenAndSetCookie } = require("../utils/generateToken.js");
const { default: mongoose } = require("mongoose");

exports.signup=async(req,res)=>{
  try {
    console.log("SignupUser")
    const {fullName,userName,password,confirmPassword,gender}=req.body
    if (password!==confirmPassword){
      return res.status(400).json({error:"Passwords do not match"});
    }
    const user=await User.findOne({userName})

    if (user){
      return res.status(400).json({error:"User already exists"})
    }

    const salt=await bcrypt.genSalt(10)
    const hashedPass=await bcrypt.hash(password,salt)

    const newUser= new User({
      fullName,userName,password:hashedPass,gender
    })
    if  (newUser){
      generateTokenAndSetCookie(newUser._id,res)
      await newUser.save();

   }
        res.status(201).json({
      _id:newUser._id,
      fullName:newUser.fullName,
      userName:newUser.userName
    })
  } catch (error) {
    console.log("Error from signup",error.message)
    res.status(500).json({error:"Internal server error"})
  }
  
}
exports.login=async (req,res)=>{
  try {
    const {userName,password}=req.body
    const user=await User.findOne({userName})
    const ispass=await bcrypt.compare(password,user.password)
if (!user || !ispass){
  return res.status(500).json({error:"Invalid username and password"})
}
generateTokenAndSetCookie(user._id,res)
res.status(200).json({
_id:user._id,
fullName:user.fullName,
userName:user.userName
})
  } catch (error) {
    console.log("Error from login",error.message)
    res.status(500).json({error:"Internal server error"})
  }
  console.log("LoginUser")
}
exports.logout=async(req,res)=>{
  console.log("LogoutUser")
}