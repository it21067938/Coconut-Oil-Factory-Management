const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let currentDate=new Date;
        const supplySchema = new Schema({
                  supplierId: {
                            type : String,
                            required : true
                  },
                  spName:{
                    type : String,
                    required : true
                  },

                  amount:{
                            type : String,
                            required : true
                  },
                  location:{
                            type : String,
                            required : true
                  },
                  tpNumber:{
                            type : Number,
                            required : true
                  },
                  price:{
                            type : Number,
                            required : true
                  },
                  Day: {
                    type: Date,
                    default:currentDate.toISOString().split("T")[0]
                  }
                });


  module.exports = mongoose.model("Supply",supplySchema);
