const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDb=require("./config/db");

dotenv.config();
connectDb();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Running...");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});