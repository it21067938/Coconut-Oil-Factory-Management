const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const InvoiceSchema = new Schema({

        InvoiceNo :{
            type:String,
            required:true,



        },
        Date :{
            type:String,
            required:true

        },
        CompanyName :{
            type :String,
            required : true
        },

        Address :{
            type :String,
            required : true
        },
        ContactNo:{

            type:String,
            required:true,
            maxLength:10,
            minLength:10
        },

        Identity:{
            type:String


        }









})

module.exports = mongoose.model("Invoice", InvoiceSchema);