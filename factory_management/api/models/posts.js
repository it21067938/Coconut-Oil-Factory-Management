const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    ID:{
        type:String,
        required:true
    },
    Name:{
        type:String,
        required:true 
    },
    Quantity:{
        type:Number,
        required:true
    }


});

module.exports = mongoose.model('Manufactures',postSchema);