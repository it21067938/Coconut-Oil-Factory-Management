const express = require('express');
const router = express.Router();

const {AddItems,viewItems,updateItems,deleteItems,deleteAll,getItemId} = require("../controllers/invoiceItem-controller")

router.post("/add" ,AddItems);
router.get("/view",viewItems );
router.put("/update/:id" ,updateItems);
router.delete("/delete/:id" ,deleteItems);
router.delete("/deleteAll" ,deleteAll);
router.get("/get/:id" ,getItemId);

module.exports = router