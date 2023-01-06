const express = require('express');
const router = express.Router();

const {signup, login, verifyToken, getBuyerDetails, placeOrder, updateBuyerDetails, viewOrder} = require("../controllers/Buyer-controller")
router.post("/signup", signup);
router.post("/login", login);
router.get("/account", verifyToken, getBuyerDetails);
router.patch("/update", verifyToken, updateBuyerDetails);

//Under order model
router.post("/order",  verifyToken, placeOrder);
router.get("/viewOrder", verifyToken, viewOrder);

module.exports = router