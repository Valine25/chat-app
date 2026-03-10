const express=require("express");
const { sendMessage, getMessages } = require("../controllers/message.controller.js");
const { protectRoute } = require("../middleware/protectRoutes.js");

const messageRoutes=express.Router();

messageRoutes.get("/:id",protectRoute,getMessages)
messageRoutes.post("/send/:id",protectRoute,sendMessage)

exports.messageRoutes=messageRoutes