const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const managerSchema = new Schema({

    name : {
        type : String,
        required: true
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
    jobTitle : {
        type : String,
        required: true
    },
    username : {
        type : String,
        required: true
    },
    password : {
        type : String,
        required: true,
        minlength: 6
    }
})

//export model
module.exports = mongoose.model("Manager", managerSchema);