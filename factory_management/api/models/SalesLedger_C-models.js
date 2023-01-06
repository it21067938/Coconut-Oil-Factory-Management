const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const SalesLedgerCreditSchema = new Schema({

        Date: {
            type : String,
            required : true

        } ,
        BuyerName :{
            type:String,
            required:true

        },
        MaterialType :{
            type :String,
            required : true
        },

        Amount :{
            type : Number,
            required: true

        }



})

module.exports = mongoose.model("Sales_credit", SalesLedgerCreditSchema);