const express = require ("express");
const router = express.Router();
const auth = require('../middleware/auth.js');

const {Register} = require("../controllers/Supplier-controller")
router.post("/register", Register);



const {Login} = require("../controllers/Supplier-controller")
router.post("/login", Login);
//router.post("/getDetails", supAuth,getDetails);

const {SpHome} = require("../controllers/Supplier-controller")
router.get("/",auth, SpHome);


const {SupplyForm} = require("../controllers/Supplier-controller")
router.post("/supplyform",auth, SupplyForm);

const {SupplyView} = require("../controllers/Supplier-controller")
router.get("/supplyview",auth, SupplyView);


const {DeleteRow} = require("../controllers/Supplier-controller")
router.delete("/supplyform/delete/:rowID",auth, DeleteRow);

const {UpdateRow} = require("../controllers/Supplier-controller")
router.patch("/supplyform/update/:rowID",auth, UpdateRow);


const {ViewAllSup} = require("../controllers/Supplier-controller")
router.get("/supplymanager", ViewAllSup);

const {DeleteEntrys} = require("../controllers/Supplier-controller")
router.delete("/deleteentrys/:rowID", DeleteEntrys);

const {UpdateView} = require("../controllers/Supplier-controller")
router.get("/updateview/:rowID",auth, UpdateView);



const {SupPview} = require("../controllers/Supplier-controller")
router.get("/suplierprofile",auth, SupPview);

const {SupProUpdate} = require("../controllers/Supplier-controller")
router.patch("/suplierprofile/profileupdate",auth, SupProUpdate);

const {ViewAllSuppliers} = require("../controllers/Supplier-controller")
router.get("/supplymanager/allsuppliers",ViewAllSuppliers);

const {Changepass} = require("../controllers/Supplier-controller")
router.patch("/supplymanager/profile/changepass",auth,Changepass);


const {DeleteAcc} = require("../controllers/Supplier-controller")
router.delete("/profile/delete",auth,DeleteAcc);

const {ManagerSpDeleteAcc} = require("../controllers/Supplier-controller")
router.delete("/supplymanager/supplyerdelete/:id",ManagerSpDeleteAcc);




 const {Addcoco} = require("../controllers/Supplier-controller")
 router.patch("/addcoco",Addcoco);

 const {ManegerHome} = require("../controllers/Supplier-controller")
router.get("/managerhome", ManegerHome);

// const {DeAddcoco} = require("../controllers/Supplier-controller")
// router.delete("/daddcoco",DeAddcoco);



module.exports = router;
