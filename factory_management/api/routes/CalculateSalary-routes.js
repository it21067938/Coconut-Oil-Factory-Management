const express = require('express');
const router = express.Router();

const {AddDetails,ViewDetails,UpdateDetails,deleteDetails,getSalaryID} = require("../controllers/CalculateSalary-controller")

router.post("/add" ,AddDetails);
router.get("/view",ViewDetails );
router.put("/update/:id",UpdateDetails );
router.delete("/delete/:id",deleteDetails );
router.get("/get/:id",getSalaryID );


module.exports = router