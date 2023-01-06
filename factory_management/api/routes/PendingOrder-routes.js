const express = require('express');
const router = express.Router();

const {viewProduct, rejectOrder, Accept} = require("../controllers/PendingOrder-controller")


//pending order table
router.post("/accept", Accept);
router.get("/view", viewProduct);
router.delete("/reject/:id", rejectOrder);


module.exports = router