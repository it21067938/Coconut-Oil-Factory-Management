const express = require('express');
const router = express.Router();

const {login, verifyToken, getManagerDetails} = require("../controllers/Manager-Login-controller")
router.post("/login", login);
router.get("/account", verifyToken, getManagerDetails);

module.exports = router