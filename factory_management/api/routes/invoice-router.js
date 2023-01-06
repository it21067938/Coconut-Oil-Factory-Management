const express = require('express');
const router = express.Router();

const {AddInvoice,viewInvoice,updateInvoice,deleteInvoice,getInvoiceId } = require("../controllers/invoice-controller")

router.post("/add" ,AddInvoice);
router.get("/view",viewInvoice );
router.put("/update" ,updateInvoice);
router.delete("/delete" ,deleteInvoice);
router.get("/get/:id" ,getInvoiceId);

module.exports = router