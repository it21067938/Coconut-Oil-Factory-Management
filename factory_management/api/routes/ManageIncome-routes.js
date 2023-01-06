const express = require('express');
const router = express.Router();

const {AddIncome,ViewIncome,updateIncome,deleteIncome,getIncomeId } = require("../controllers/ManageIncome-controller")

router.post("/add" ,AddIncome);
router.get("/view",ViewIncome );
router.put("/update/:id" ,updateIncome);
router.delete("/delete/:id" ,deleteIncome);
router.get("/getIncome/:id", getIncomeId);



module.exports = router