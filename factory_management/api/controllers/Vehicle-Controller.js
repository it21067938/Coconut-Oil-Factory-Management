const router = require("express").Router();
let Vehicle = require("../models/Vehicle");

const addVehicle = async(req,res)=>{

    const model = req.body.model;
    const registrationNo = req.body.registrationNo;
    const fuelType = req.body.fuelType;
    const millage = Number(req.body.millage);
    const VehicleStatus = req.body.VehicleStatus;

    const newVehicle = new Vehicle({
        model,
        registrationNo,
        fuelType,
        millage,
        VehicleStatus
    })
    newVehicle.save().then(()=>{
        res.json("Vehicle Added");
    }).catch((err)=>{
        console.log(err); 
    })
}


const viewVehicles = async(req, res, next) => {
    Vehicle.find().then((Vehicle)=>{
        res.json(Vehicle)
    }).catch((err)=>{
        console.log(err)
    })
}

 
const updateVehicles = async(req,res)=>{
    let userId = req.params.id;
   // const name = req.body.name;
    const {model,registrationNo,fuelType,millage,VehicleStatus} = req.body;

    const updateVehicles ={
        model,
        registrationNo,
        fuelType,
        millage,
        VehicleStatus
    }
    const update = await Vehicle.findByIdAndUpdate(userId,updateVehicles).then(()=>{
        res.status(200).send({status: "Vehicle updated "});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data",error: err.message});
    })
    
    //return res.status(201).json({updateVehicles })
    
}
const deleteVehicle = async(req,res)=>{
    let userId=req.params.id;
    await Vehicle.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status:"Vehicle deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete Vehicle",error: err.message});
    })
}
const getVehiclebyId = async (req, res) => {
    let id = req.params.id;
    await Vehicle.findById(id)
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



exports.addVehicle = addVehicle;
exports.viewVehicles = viewVehicles;
exports.updateVehicles = updateVehicles;
exports.deleteVehicle = deleteVehicle;
exports.getVehiclebyId = getVehiclebyId;