const express=require("express")
const dotenv=require("dotenv");
const { authRoutes}  = require("./routes/auth.routes");
dotenv.config()

const app=express();
const PORT=process.env.PORT || 8000

app.get("/",(req,res)=>{
  res.send("Hello World");
})

app.use("/api/auth/",authRoutes)

app.listen(PORT,()=>{
  console.log(`Server running on http://localhost:${PORT}` )
})