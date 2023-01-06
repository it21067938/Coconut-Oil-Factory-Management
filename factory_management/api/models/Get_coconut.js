const mongoose = require('mongoose');
const Schema = mongoose.Schema;


        const getCoconutSchema = new Schema({

                  name:{
                            type : String,
                            required : true
                  },

                  neededQuantity: {
                            type : Number,
                            required : true
                  },

                  buyingPrice:{
                            type : Number,
                            required : true
                  }
                });


  module.exports = mongoose.model("Get_Coconut",getCoconutSchema);
