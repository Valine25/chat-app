const express = require("express");

const router = express.Router();

const { registerUser,loginUser } = require("../controllers/authController");
const protect = require("../middlewares/authMiddleware")

router.post("/register", registerUser);
router.post("/login",loginUser);
router.get("/profile", protect, (req, res) => {
  res.json({
    message: "Protected profile route",
    user: req.user,
  });
});

module.exports = router;