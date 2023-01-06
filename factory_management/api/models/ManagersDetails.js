const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const managers = new Schema({
          username: {
                    type : String,
                    required : true,
                    unique : true
          },

          nic:{
                    type : String,
                    required : true
          },
          type:{
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


        module.exports = mongoose.model("ManagersSchema",managers);