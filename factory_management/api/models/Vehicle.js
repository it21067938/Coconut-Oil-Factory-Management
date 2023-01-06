const mongoose = require('mongoose');

const Schema = mongoose.Schema;  

const vehicleSchema = new Schema({
    model : {
        type : String,
        required : true
    },
    registrationNo : {
        type : String,
        required : true
    },
    fuelType :{
        type : String, 
        required : true 
    },
    millage :{
        type : Number,
        required : true
    },
    VehicleStatus :{
        type : String,
        required : true
    }

})
const Vehicle = mongoose.model("Vehicle",vehicleSchema);
module.exports = Vehicle;