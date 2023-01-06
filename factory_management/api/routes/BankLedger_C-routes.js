const express = require('express');
const router = express.Router();

const {AddCredit,ViewCredit,updateCredit,deleteCredit,getBankCId } = require("../controllers/BankLedger_C-controller")

router.post("/add" ,AddCredit);
router.get("/view",ViewCredit );
router.put("/update/:id" ,updateCredit);
router.delete("/delete/:id" ,deleteCredit);
router.get("/get/:id" ,getBankCId);

module.exports = router