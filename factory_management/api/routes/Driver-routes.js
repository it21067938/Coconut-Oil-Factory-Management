const express = require("express");
const router = express.Router();

const {
  addDriver,
  viewDrivers,
  updateDrivers,
  deleteDriver,
  getDriverbyId,
} = require("../controllers/Driver-Controller");

router.post("/add", addDriver);
router.get("/view", viewDrivers);
router.put("/update/:id", updateDrivers);
router.delete("/delete/:id", deleteDriver);
router.get("/getdriver/:id", getDriverbyId);
module.exports = router;
