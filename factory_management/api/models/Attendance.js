const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({

    empId:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    otHours:{
        type:Number,
    },
   
    month:{
        type:String,
        required:true
    },


});

module.exports = mongoose.model('attendances',attendanceSchema);