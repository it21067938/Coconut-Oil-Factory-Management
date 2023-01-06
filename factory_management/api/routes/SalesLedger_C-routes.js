const express = require('express');
const router = express.Router();

const {AddCredit,ViewCredit,updateCredit,deleteCredit,getSalesCById } = require("../controllers/SalesLedger_C-controller")

router.post("/add" ,AddCredit);
router.get("/view",ViewCredit );
router.put("/update/:id" ,updateCredit);
router.delete("/delete/:id" ,deleteCredit);
router.get("/getSalesC/:id" ,getSalesCById);

module.exports = router