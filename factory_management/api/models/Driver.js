const mongoose = require('mongoose');

const Schema = mongoose.Schema;  

const driverSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    age :{
        type : Number,
        required : true
    },
    NIC :{
        type : String,
        required : true
    },
    gender :{
        type : String,
        required : true
    },
    ContactNo :{
        type : Number,
        required : true
    },
    Driverstatus :{
        type : String,
        required : true
    }

})
const Driver = mongoose.model("Driver",driverSchema);
module.exports = Driver;