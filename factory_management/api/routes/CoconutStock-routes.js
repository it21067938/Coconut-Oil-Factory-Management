const express = require('express');
const router = express.Router();

const {addCoconutStock,viewCoconutStock,updateCoconutStock,deleteCoconutStock,getSpecificStock } = require("../controllers/CoconutStock-controller")

router.post("/add" ,addCoconutStock);
router.get("/view",viewCoconutStock );
router.put("/update/:id" ,updateCoconutStock);
router.delete("/delete/:id" ,deleteCoconutStock);
router.get("/get/:id",getSpecificStock );
module.exports = router