const express = require('express');
const { get } = require('mongoose');
const router = express.Router();

const {addInventory,viewInventory,updateInventory,deleteInventory,getSpecificProduct, } = require("../controllers/Inventory-controller")

router.post("/add" ,addInventory);
router.get("/view",viewInventory );
router.put("/update/:id" ,updateInventory);
router.delete("/delete/:id" ,deleteInventory);
router.get("/get/:id",getSpecificProduct );

module.exports = router