const express = require('express');
const router = express.Router();

const {AddDebit,ViewDebit,updateDebit,deletedebit,getSalesDById } = require("../controllers/SalesLedger_D-controller")

router.post("/add" ,AddDebit);
router.get("/view",ViewDebit );
router.put("/update/:id" ,updateDebit);
router.delete("/delete/:id" ,deletedebit);
router.get("/getSalesD/:id" ,getSalesDById);

module.exports = router