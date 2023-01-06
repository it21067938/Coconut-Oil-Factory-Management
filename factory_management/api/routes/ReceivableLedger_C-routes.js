const express = require('express');
const router = express.Router();

const {AddCredit,ViewCredit,updateCredit,deleteCredit,getReceivableCbyId } = require("../controllers/ReceivableLedger_C-controller")

router.post("/add" ,AddCredit);
router.get("/view",ViewCredit );
router.put("/update/:id" ,updateCredit);
router.delete("/delete/:id" ,deleteCredit);
router.get("/getReceivableCById/:id" ,getReceivableCbyId);

module.exports = router