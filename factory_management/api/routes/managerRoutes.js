const express = require ("express");
const router = express.Router();

const {Register} = require("../controllers/managerController")
router.post("/register", Register);

const {Login} = require("../controllers/managerController")
router.post("/login", Login);

module.exports = router;