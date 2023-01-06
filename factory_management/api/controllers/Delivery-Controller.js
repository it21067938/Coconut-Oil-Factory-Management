const router = require("express").Router();
let Delivery = require("../models/Delivery");
const Driver = require("../models/Driver");
const Vehicle = require("../models/Vehicle");

const addDelivery = async(req,res)=>{

    const CustomerName = req.body.CustomerName;
    const address = req.body.address;
    const CustomerContactNo = req.body.CustomerContactNo;
    const VehicleId = req.body.VehicleId;
    const DriverNIC = req.body.DriverNIC;
    const Date = req.body.Date;
    // const VehicleStatus = req.body.VehicleStatus;
    // const DriverStatus = req.body.DriverStatus;

    const newOrder = new Delivery({
        CustomerName,
        address,
        CustomerContactNo,
        VehicleId,
        DriverNIC,
        Date,
        // VehicleStatus,
        // DriverStatus

    })
    newOrder.save().then(()=>{
        res.json("Delivery Added");
    }).catch((err)=>{
        console.log(err); 
    })
}


const viewDelivery = async(req, res, next) => {
    Delivery.find().then((Delivery)=>{
        res.json(Delivery)
    }).catch((err)=>{
        console.log(err)
    })
}
const updateDelivery = async (req, res) => {
    let userId = req.params.id;
    const CustomerName = req.body.CustomerName;
    const address = req.body.address;
    const CustomerContactNo = req.body.CustomerContactNo;
    const VehicleId = req.body.VehicleId;
    const DriverNIC = req.body.DriverNIC;
    const Date = req.body.Date;
  
    const updateDelivery = {
        CustomerName,
        address,
        CustomerContactNo,
        VehicleId,
        DriverNIC,
        Date,
    };
    const update = await Delivery.findByIdAndUpdate(userId, updateDelivery)
    .then(() => {
      res.status(200).send({ status: "User updated " });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with updating data", error: err.message });
    });

  // return res.status(201).json({updateDrivers })
};
const deleteDelivery = async(req,res)=>{
    let userId=req.params.id;
    await Delivery.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status:"Delivery deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete Vehicle",error: err.message});
    })
}
const getDeliverybyId = async (req, res) => {
    let id = req.params.id;
    await Delivery.findById(id)
      .then((response) => {
        res.status(200).json(response);
        console.log(res);
      })
      .catch((err) => {
        res
          .status(500)
          .send({ status: "Error with delete user", error: err.message });
      });
  };

 





exports.addDelivery = addDelivery;
exports.viewDelivery = viewDelivery;
exports.deleteDelivery = deleteDelivery;
exports.updateDelivery = updateDelivery;
exports.getDeliverybyId = getDeliverybyId;
