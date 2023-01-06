const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ExpensesSchema = new Schema({

       
        Date :{
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

module.exports = mongoose.model("Expenses", ExpensesSchema);