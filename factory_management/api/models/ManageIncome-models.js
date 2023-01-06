const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const IncomeSchema = new Schema({

        Date :{
            type:String,
         

        },
        Description :{
            type :String,
          
        },

      
        Amount :{
            type : Number,
            

        }



})

module.exports = mongoose.model("Income", IncomeSchema);