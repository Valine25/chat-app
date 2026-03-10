const express=require("express")
const dotenv=require("dotenv");
const { authRoutes}  = require("./routes/auth.routes.js");
const { messageRoutes}  = require("./routes/message.routes.js");
const { connectMongoDB } = require("./db/connectMongoDB.js");
const cookieParser=require("cookie-parser")
dotenv.config()

const app=express();
const PORT=process.env.PORT || 8000

// app.get("/",(req,res)=>{
//   res.send("Hello World");
// })
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth/",authRoutes)
app.use("/api/message/",messageRoutes)

app.listen(PORT,()=>{
  connectMongoDB();
  console.log(`Server running on http://localhost:${PORT}` )
})