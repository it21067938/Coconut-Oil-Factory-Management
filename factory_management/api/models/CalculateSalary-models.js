const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const CalSalarySchema = new Schema({

        EmpID: {
            type : String,
            

        } ,
        Month: {
            type : String,
            

        } ,
        Name :{
            type :String,
            
        },

        BasicSalary :{
            type : Number,
            

        },
        FixedAllowance :{
            type : Number,
            

        },
       
        OtRate :{
            type : Number,
           

        }, 
        OtHours :{
            type : Number,
            

        },
        SalaryAdvanced  :{
            type : Number,
            

        },
        Deductions :{
            type : Number,
            

        },
        GrossSalary:{
            type :Number,
            

        },
      
        EPF: {
            type:Number,
            
        },
        NetSalary: {
            type : Number,
            
        }



})

module.exports = mongoose.model("CalculateSalary", CalSalarySchema);