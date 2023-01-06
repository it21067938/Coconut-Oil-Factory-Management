const express = require('express');
const router = express.Router();

const {AddDebit,ViewDebit,updateDebit,deleteDebit,getBankDId } = require("../controllers/BankLedger_D-controller")

router.post("/add" ,AddDebit);
router.get("/view",ViewDebit );
router.put("/update/:id" ,updateDebit);
router.delete("/delete/:id" ,deleteDebit);
router.get("/get/:id" ,getBankDId);

module.exports = router