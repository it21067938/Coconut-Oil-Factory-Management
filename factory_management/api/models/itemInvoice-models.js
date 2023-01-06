const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const InvoiceItemSchema = new Schema({

        

        Description:{
            type:String,
            required : true

        },
        Quantity:{
            type :Number,
            required:true
        },

        Rate:{
            type:Number,
            required:true
        },
     
        Amount :{
            type : Number,
            required: true

        },

        



})

module.exports = mongoose.model("InvoiceItem", InvoiceItemSchema);