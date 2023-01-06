const express = require('express');
const router = express.Router();

const {AddExpenses,ViewExpenses,updateExpenses,deleteExpenses,getExpensesId } = require("../controllers/ManageExpenses-controller")

router.post("/add" ,AddExpenses);
router.get("/view",ViewExpenses );
router.put("/update/:id" ,updateExpenses);
router.delete("/delete/:id" ,deleteExpenses);

router.get("/getExpenses/:id", getExpensesId);

module.exports = router