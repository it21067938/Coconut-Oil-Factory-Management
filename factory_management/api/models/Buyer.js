const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const buyerSchema = new Schema({
    
    name : {
        type : String,
        required: true,
        unique: true
    },
    nic : {
        type : String,
        required: true,
        unique: true
    },
    email : {
        type : String,
        required: true,
        unique: true
    },
    contactNo : {
        type : String,
        required: true,
        minlength: 10
    },
    address : {
        type : String,
        required: true
    },
    username : {
        type : String,
        required: true,
        unique: true
    },
    password : {
        type : String,
        required: true,
        minlength: 6
    }
})

//export model
module.exports = mongoose.model("Buyer", buyerSchema);
