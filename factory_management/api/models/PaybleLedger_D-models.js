const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const PaybleDebitSchema = new Schema({

        Date: {
            type : String,
            required : true

        } ,
        Description :{
            type:String,
            required:true

        },
      
        Amount :{
            type : Number,
            required: true

        }



})

module.exports = mongoose.model("Payble_Debit", PaybleDebitSchema);