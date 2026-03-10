const express=require("express");
const { signup, login, logout } = require("../controllers/auth.controller.js");
const authRoutes=express.Router();

authRoutes.post("/signup",signup)
authRoutes.post("/login",login)
authRoutes.post("/logout",logout)

exports.authRoutes=authRoutes;