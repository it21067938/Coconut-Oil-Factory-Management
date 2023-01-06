const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const BankLedgerCreditSchema = new Schema({

        Date: {
            type : String,
            required : true

        } ,
        ChequeNo :{
            type:String,
            required:true

        },
        Description :{
            type :String,
            required : true
        },

        Amount :{
            type : Number,
            required: true

        }



})

module.exports = mongoose.model("Bank_credit", BankLedgerCreditSchema);