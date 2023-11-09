// routes/auth.js
const express = require("express");
const router = express.Router();
const authController = require("../controllers/userController");

// User registration
router.post("/register", authController.register);

// User login
router.post("/login", authController.login);

module.exports = router;
