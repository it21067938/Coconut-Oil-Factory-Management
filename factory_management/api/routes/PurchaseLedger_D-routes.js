const express = require('express');
const router = express.Router();

const {AddDebit,ViewDebit,updateDebit,deletedebit,getPurchaseDbyId } = require("../controllers/PurchaseLedger_D-controller")

router.post("/add" ,AddDebit);
router.get("/view",ViewDebit );
router.put("/update/:id" ,updateDebit);
router.delete("/delete/:id" ,deletedebit);
router.get("/getPurchaseD/:id" ,getPurchaseDbyId);

module.exports = router