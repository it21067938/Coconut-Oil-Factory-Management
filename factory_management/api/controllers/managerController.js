const Managers = require("../models/ManagersDetails");
var _ = require('lodash');
const bcrypt = require('bcryptjs');
const saltRounds = 10;

const Register = async (req, res, next) => {


    
   

    const pass1 = req.body.password
    const pass2 = req.body.repassword


    if(pass1 == pass2){
        console.log("hari")

    

        const mData = req.body;

        const lowname = _.lowerCase(mData.username)
         const uname = lowname.replace(/\s/g, '')

         bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
            const newManager = new Managers({
                username : uname,
                nic : mData.nic,
                type : mData.type,
                telephoneNum : mData.telephoneNum,
                password : hash
            });

            newManager.save(function(err){
                if(err){
                    res.send("Registration failed")
                    console.log(err)
                }else{
                    res.send("Successfully registered")
                }
            })



        });



    }else{
        res.send("Please check you entered passwords are same")
    }


}


const Login = async (req, res, next) => {


    const lowuname = _.lowerCase(req.body.username)
    
    const muname = lowuname.replace(/\s/g, '')
    const pass = req.body.password;
    console.log(muname + "    "+pass)


    Managers.findOne({username:muname},function(err,data){
        if(err){
            
        }else{

            if(data){

                const hash = data.password


                bcrypt.compare(pass, hash, function(err, result) {
                   if(err){

                        console.log(err)

                    }else{
                        if(result){
                            console.log("pageeee" + data)

                            const rolle  = data.type

                            //res.send(rolle);
                            res.json({rolletype:rolle})

                        }else{
                            res.send("Your password is incorrect")
                        }
                        
                    }


                });
          }
            else{
                res.send("Your user name is invalid")
            }          
        }
    })



}


exports.Register = Register;
exports.Login = Login;