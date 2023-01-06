const mongoose = require('mongoose');

const Schema = mongoose.Schema;  

const deliverySchema = new Schema({
    CustomerName : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    }, 
    CustomerContactNo :{
        type : Number,
        required : true
    },
    VehicleId :{
        type : String,
        required : true
    },
    DriverNIC :{
        type : String,
        required : true
    },
    Date:{
        type : String,
        required : true

    },
    // VehicleStatus :{
    //     type : String,
    //     required : true
    // },
    // DriverStatus :{
    //     type : String,
    //     required : true
    // }



})
const Delivery = mongoose.model("Delivery",deliverySchema);
module.exports = Delivery;