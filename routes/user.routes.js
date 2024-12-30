const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");

const router = express.Router();

// Protected Route Example
router.get("/profile", authMiddleware, (req, res) => {
    res.status(200).send(`Welcome, ${req.user.name}. Your role is ${req.user.role}.`);
});

module.exports = router;
