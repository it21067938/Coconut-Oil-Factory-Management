const express = require('express');
const router = express.Router();

const {AddCredit,ViewCredit,updateCredit,deleteCredit,getPurchaseCbyId } = require("../controllers/PurchaseLedger_C-controller")

router.post("/add" ,AddCredit);
router.get("/view",ViewCredit );
router.put("/update/:id" ,updateCredit);
router.delete("/delete/:id" ,deleteCredit);
router.get("/getPurchaseC/:id" ,getPurchaseCbyId);

module.exports = router