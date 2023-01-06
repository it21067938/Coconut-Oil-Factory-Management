const jwt = require("jsonwebtoken");
require("dotenv").config();


module.exports = function(req,res,next){
          if(req.headers.authorization && req.headers.authorization.startsWith('bearer')){

            const token = req.headers.authorization.split(' ')[1];
            if(token==null){
              res.sendStatus(401); //not authorized
            }else{
              jwt.verify(token,"ITP walata budu saranai",function(err,supDetal){
                if(err){
                    res.sendStatus(403);  //fobin
                }else{
                  req.details = supDetal;
                  //console.log(supDetal);
                  next();
                }
              })
            }
          }
        }
