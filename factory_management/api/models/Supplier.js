const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const supplierSchema = new Schema({
          username: {
                    type : String,
                    required : true
          },

          nic:{
                    type : String,
                    required : true
          },
          telephoneNum:{
                    type : String,
                    required : true
          },
          password:{
                    type : String,
                    required : true
          }
        });


        module.exports = mongoose.model("Supplier",supplierSchema);
