const express = require('express');
const router = express.Router();

const {addVehicle,viewVehicles,updateVehicles,deleteVehicle,getVehiclebyId } = require("../controllers/Vehicle-Controller")

router.post("/add" ,addVehicle);
router.get("/view",viewVehicles );
router.put("/update/:id" ,updateVehicles);
router.delete("/delete/:id" ,deleteVehicle);
router.get("/getVehicle/:id", getVehiclebyId);

module.exports = router
