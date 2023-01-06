const mongoose = require('mongoose');



const postSchema = new mongoose.Schema({

    employeeID:{
        type:String,
        required:true
    },
    ename:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    EmployeeStatus:{
        type:String,
        required:true
    },
    intime:{
        type:String,
        required:true
    },
    outtime:{
        type:String,
        required:true
    },
    day:{
        type:String,
        required:true
    },
    month:{
        type:String,
        required:true
    },
    year:{
        type:String,
        required:true
    },
    // description:{
    //     type:String,
    //     required:true
    // },
    // price:{
    //     type:String,
    //     required:true
    // },
    // returnoption:{
    //     type:String,
    //     required:true
    // },

});

module.exports = mongoose.model('ShowRooms',postSchema);
