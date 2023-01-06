const express = require('express');
const router = express.Router();

const {AddDebit,ViewDebit,updateDebit,deletedebit,getReceivableDbyId } = require("../controllers/ReceivableLedger_D-controller")

router.post("/add" ,AddDebit);
router.get("/view",ViewDebit );
router.put("/update/:id" ,updateDebit);
router.delete("/delete/:id" ,deletedebit);
router.get("/getReceivableDById/:id" ,getReceivableDbyId);

module.exports = router