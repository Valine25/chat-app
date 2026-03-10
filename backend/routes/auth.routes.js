const express=require("express");
const { signup, login, logout } = require("../controllers/auth.controller.js");
const authRoutes=express.Router();

authRoutes.get("/signup",signup)
authRoutes.get("/login",login)
authRoutes.get("/logout",logout)

exports.authRoutes=authRoutes;