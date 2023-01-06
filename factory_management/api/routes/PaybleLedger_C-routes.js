const express = require('express');
const router = express.Router();

const {AddCredit,ViewCredit,updateCredit,deleteCredit,getPaybleC } = require("../controllers/PaybleLedger_C-controller")

router.post("/add" ,AddCredit);
router.get("/view",ViewCredit );
router.put("/update/:id" ,updateCredit);
router.delete("/delete/:id" ,deleteCredit);
router.get("/get/:id" ,getPaybleC);

module.exports = router