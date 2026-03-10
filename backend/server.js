const express=require("express")
const dotenv=require("dotenv");
const { authRoutes}  = require("./routes/auth.routes.js");
const { connectMongoDB } = require("./db/connectMongoDB.js");
dotenv.config()

const app=express();
const PORT=process.env.PORT || 8000

// app.get("/",(req,res)=>{
//   res.send("Hello World");
// })
app.use(express.json())
app.use("/api/auth/",authRoutes)

app.listen(PORT,()=>{
  connectMongoDB();
  console.log(`Server running on http://localhost:${PORT}` )
})