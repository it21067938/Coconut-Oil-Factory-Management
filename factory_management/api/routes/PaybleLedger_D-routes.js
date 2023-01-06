const express = require('express');
const router = express.Router();

const {AddDebit,ViewDebit,updateDebit,deletedebit,getPaybleD } = require("../controllers/PaybleLedger_D-controller")

router.post("/add" ,AddDebit);
router.get("/view",ViewDebit );
router.put("/update/:id" ,updateDebit);
router.delete("/delete/:id" ,deletedebit);
router.get("/get/:id" ,getPaybleD);

module.exports = router