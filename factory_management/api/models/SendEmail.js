const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const emailSchema = new Schema({

    to : {
        type : String,
        required: true
    },
    from : {
        type : String,
        required: true,
    },
    cc : {
        type : String,
        required: true,
    },
    subject : {
        type : String,
        required: true
    }
})

//export model
module.exports = mongoose.model("Email", emailSchema);
