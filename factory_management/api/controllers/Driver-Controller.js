const router = require("express").Router();
let Driver = require("../models/Driver");
const ObjectID = require("mongodb").ObjectId;
const addDriver = async (req, res) => {
  const name = req.body.name;
  const address = req.body.address;
  const age = Number(req.body.age);
  const NIC = req.body.NIC;
  const gender = req.body.gender;
  const ContactNo = Number(req.body.ContactNo);
  const Driverstatus = req.body.Driverstatus;

  const newDriver = new Driver({
    name,
    address,
    age,
    NIC,
    gender,
    ContactNo,
    Driverstatus,
  });
  newDriver
    .save()
    .then(() => {
      res.json("Driver Added");
    })
    .catch((err) => {
      console.log(err);
    });
};

const viewDrivers = async (req, res, next) => {
  Driver.find()
    .then((Driver) => {
      res.json(Driver);
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateDrivers = async (req, res) => {
  let userId = req.params.id;
  // const name = req.body.name;
  const { name, address, age, NIC, gender, ContactNo, Driverstatus } = req.body;

  const updateDrivers = {
    name,
    address,
    age,
    NIC,
    gender,
    ContactNo,
    Driverstatus,
  };
  const update = await Driver.findByIdAndUpdate(userId, updateDrivers)
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
const deleteDriver = async (req, res) => {
  let userId = req.params.id;
  await Driver.findByIdAndDelete(userId)
    .then(() => {
      res.status(200).send({ status: "user deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with delete user", error: err.message });
    });
};

const searchDriver = async (req, res) => {
  let keyword = req.params.keyword;
  await Driver.find({ name: keyword })
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
const getDriverbyId = async (req, res) => {
  let id = req.params.id;
  await Driver.findById(id)
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
exports.addDriver = addDriver;
exports.viewDrivers = viewDrivers;
exports.updateDrivers = updateDrivers;
exports.deleteDriver = deleteDriver;
exports.searchDriver = searchDriver;
exports.getDriverbyId = getDriverbyId;
