const express = require('express');
const router = express.Router();



// const {DeleteOrder, SendEmail, updateEstimatedDate, acceptedOrder} = require("../controllers/AcceptedOrder-controller")

const { DeleteOrder, SendEmail, updateEstimatedDate, acceptedOrder,getDetailsbyID} = require("../controllers/AcceptedOrder-controller")



//accepted order table
router.delete("/delete/:id", DeleteOrder);
router.post("/email", SendEmail);
router.put("/updateDate/:id" ,updateEstimatedDate);
router.get("/view", acceptedOrder);

router.get("/getDetailsbyID/:id" ,getDetailsbyID);




module.exports = router