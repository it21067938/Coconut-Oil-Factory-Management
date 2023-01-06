const express = require('express');
const router = express.Router();

const {addDelivery,viewDelivery,deleteDelivery,getDeliverybyId,updateDelivery} = require("../controllers/Delivery-Controller")
//add
router.post("/add" ,addDelivery);
router.get("/view",viewDelivery );
router.delete("/delete/:id" ,deleteDelivery);
router.put("/update/:id",updateDelivery);
router.get("/getdelivery/:id", getDeliverybyId);


module.exports = router
