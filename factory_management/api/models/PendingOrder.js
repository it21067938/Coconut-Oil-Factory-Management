const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({

    UserName : {
        type : String,
        required: true
    },
    category : {
        type : String,
        required: true
    },
    quantity : {
        type : String,
        required: true,
    },
    date : {
        type : String,
        required: true,
    },
    transport_details : {
        type : String,
    },
    note : {
        type : String,
    }
})


module.exports = mongoose.model("pending_order", orderSchema);