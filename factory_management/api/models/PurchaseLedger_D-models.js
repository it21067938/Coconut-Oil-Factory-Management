const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const PurchaseLedgerDebitSchema = new Schema({

        Date: {
            type : String,
            required : true

        } ,
        SupplierName :{
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

module.exports = mongoose.model("Purchase_Debit", PurchaseLedgerDebitSchema);