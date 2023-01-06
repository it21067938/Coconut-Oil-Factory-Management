const supplier = require("../models/Supplier");
const supply = require("../models/Supply");
const getCoconut = require("../models/Get_Coconut");

const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
const { get } = require("mongoose");
const saltRounds = 10;


const Register = async (req, res, next) => {
  console.log(req.body);
  supplier.findOne({ nic: req.body.nic }, function (err, data) {
    if (data) {
      //rederect again to register page
      res.send("You are already registerd");
    } else {

      bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
        console.log("hiiiiii");
        const newSupplier = new supplier({
          username: req.body.username,
          nic: req.body.nic,
          telephoneNum: Number(req.body.telephoneNum),
          password: hash
        });
        newSupplier.save(function (err) {
          if (err) {
            console.log(err); 
          } else {
            //-- derecting to the login page
            res.send("You are succesfully Registerd. Please log Again");
          }
        });
      });
    }
  });
}


const Login = async (req, res, next) => {
  var unic = req.body.Nic;
  var pass = req.body.password;
  console.log(req.body);
  supplier.findOne({ nic: unic }, function (err, data) {

    if (data) {
      //  console.log(data.password);
      bcrypt.compare(pass, data.password, function (err, result) {

        if (result) {

          //-------Login success------------
          userID = data.id;
          userName = data.username;
          userTp = data.telephoneNum;
          supp = { id: userID};
          const acsessToken = jwt.sign(supp, process.env.FOR_TOKEN); // ,{expiresIn:'600s'}
          res.send({ acsessToken });


        } else {
          res.send("Login fail");
        }
      });


    } else {
      res.send("Nic wrong");
      console.log("Nic wrong");
    }


  })
}





const SpHome = async (req, res, next) => {

  getCoconut.find(function (err, data) {
    if (!err) {
      res.send(data);
    }
  })




}


const SupplyForm = async (req, res, next) => {

  const getcoco = await getCoconut.findOne({ name: "Coconut" });
  let needcoco = Number(getcoco.neededQuantity);
  let buyPri = Number(getcoco.buyingPrice);

  let supID = req.details.id;
  var name ="";
  var tel =0 ;

  supplier.findOne({_id:supID},function(err,sdata){
    if(!err){
      
      name = sdata.username;
      tel = sdata.telephoneNum;
     
    }
    console.log(name + "   ||||   "+ tel);
  

  let coAmount = Number(req.body.coAmount);
  let locat = req.body.coLocation; 
  
  let pric = coAmount * buyPri;

 


  const newform = new supply({
    supplierId: supID,
    spName: name,
    amount: coAmount,
    location: locat,
    tpNumber: tel,
    price: pric

  });
  console.log(newform + "iiiiii");
  newform.save(function (err) {
    if (!err) {
      let newNeedCoco = needcoco - coAmount;
      console.log("nummmmmm" + newNeedCoco)
      getCoconut.updateOne(
        { name: "Coconut" },
        { $set: { neededQuantity: newNeedCoco } }, function (err) {
          if (err) {
            res.json("Your coconut amount is higher");
            console.log(err);
          } else {
            res.json("We will reach you soon. Thank you!");
          }
        }
      )
    }else{
      console.log(err);
    }
  });

})

};




const SupplyView = async (req, res, next) => {
  let supID = req.details.id;
  supply.find({ supplierId: supID }, function (err, data) {
    if (!err) {
      if (data) {
        res.json(data);
      } else {
        res.json("You haven't any current supply");
      }
    } else {
      console.log(err);
    }
  })

}



const DeleteRow = async (req, res, next) => {
  const rowid = req.params.rowID;



  getCoconut.findOne({ name: "Coconut" }, function (err, coco) {


    if (coco) {

      console.log(coco.neededQuantity);
      const currentCoco = Number(coco.neededQuantity);



      supply.findOne({ _id: rowid }, function (err, data) {
        console.log(data.amount);


        if (data) {

          const deleAmount = Number(data.amount);
          const newcoco = currentCoco + deleAmount;
          console.log(newcoco);

          supply.deleteOne(
            { _id: rowid }, function (err) {
              if (!err) {



                getCoconut.updateOne(
                  { name: "Coconut" },
                  { $set: { neededQuantity: newcoco } }, function (err) {
                    if (err) {
                      res.json("Your coconut amount is higher");
                      console.log(err);
                    } else {
                      res.json("We will reach you soon. Thank you!");
                    }
                  }
                )

              } else {
                console.log(err);
                res.send("Try Again");
              }  
            }
          )

        }

      })

    }
  })


}



const UpdateRow = async (req, res, next) => {

  const rowid = req.params.rowID;
  const update = req.body;
  const bodyNewCount = Number(req.body.amount);

  console.log(rowid);
  console.log(update);
  console.log(bodyNewCount);

  supply.findOne({ _id: rowid }, function (err, data) {
    if(!err){

      const previousCount = Number(data.amount);
      console.log("previousCount " +previousCount);/////

      if(req.body.amount){
        getCoconut.findOne({ name: "Coconut" }, function (err, value){

          if (!err) {

            const oldcount = Number(value.neededQuantity);
            const getingPrice = Number(value.buyingPrice);

            const newCount = oldcount - previousCount;
             const temp = previousCount - bodyNewCount
            const updateCount = newCount + (previousCount + temp);
            console.log("updateCount " +updateCount);///////

            const nuAmount = Number(update.amount);
            const pri = nuAmount * getingPrice;

            updated ={
              amount : nuAmount,
              location : update.location,
              price : pri
            }

            console.log(update)

            supply.updateOne(
              {_id:rowid},
              {$set:updated},function(err){
                if(err){
                  console.log(err);
                }else{

                getCoconut.updateOne(
                  {name:"Coconut"},
                  {$set:{neededQuantity: updateCount}},function(err){
                    if(err){
                      console.log(err);
                    }else{
                      res.send("Success");
                    }
                  }
                )


                }
              }
            )

 

          }else{
            console.log(err);
          }

        })


      }else{
        //check amount is null

        supply.updateOne(
          { _id: rowid },
          { $set: update }, function (err) {
            if (err) {
              console.log(err);
            } else {

            }
          })


      }

      
    }else{
      //findOne row id
    }
  })

}


const ViewAllSup = async (req, res, next) => {
  supply.find(function(err,data){
    if(!err){
      res.send(data);
    }else{
      console.log(err);
    }
  })

}

const DeleteEntrys = async (req, res, next) => {
 
  const rowId = req.params.rowID;
  supply.deleteOne({_id:rowId},function(err){
    if(err){
      console.log(err);
      
    }else{
      res.send("Deleted");
    }
  })
  


}


const UpdateView = async (req, res, next) => {
  const rid = req.params.rowID;
  console.log("Row id eka awooo : "+rid);

  supply.findOne({_id : rid},function(err,data){
    if(!err){
    
      res.send(data);
    }
  })

}




const SupPview = async (req, res, next) => {

  //res.send("awoooooo");

  const supID = req.details.id;

  //res.send(supID +" hbdgcbh") ;

  supplier.findOne({_id:supID},function(err,data){
    if(!err){
      res.json(data);
    }
  })

}

const SupProUpdate = async (req, res, next) => {
  const newNic = req.body.nic;
  console.log(newNic); 

  if(newNic){
  console.log("nic thiyano"); 
   supplier.findOne({nic : newNic},function(err,data){
    console.log(err)
    console.log(data)
    
      
        if(data){
          
          res.send("You Entered Nic Number Allready registerd");

        }else{
          supplier.updateOne({_id:req.details.id},{$set:req.body},function(err){
           // if(!err){
              res.send("Your Profile info Updated....");
          //  }
          //  res.send(err);
          })
        }
      
    })

  }else{
    console.log("nic nathoo"); 

    supplier.updateOne({_id:req.body._id},{$set:req.body},function(err){


      if(!err){
        
        res.send("Your Profile info Updated....");


        supplier.findOne({nic : newNic},function(err,data){
          if(!err){
            const nId = data._id;
            supUp = { id: nId};
            const acsessToken = jwt.sign(supUp, process.env.FOR_TOKEN); // ,{expiresIn:'600s'}
             res.send({ acsessToken });
             
          }
        })

     }
      res.send(err); 
    })

  }

  

}

const ViewAllSuppliers = async (req, res, next) => {

  supplier.find(function(err,data){
    if(!err){
      res.json(data);
    }
  })

}

const Changepass = async (req, res, next) => {
  console.log(req.body)
  console.log(req.details.id)

  const supId = req.details.id;
  const oldPass = req.body.getoldpass;

  const newPass = req.body.getrenewpass;

  supplier.findById(supId,function(err,data){
    if(err){
      res.send(err)
    }else{
     console.log(data.password)

    if(bcrypt.compareSync(oldPass, data.password)){
        console.log("hu")

        bcrypt.hash(newPass, saltRounds, function (err, hash) {
          
       if(err){
            res.send(err)
          }else{



            const newpass = {password :hash}

            supplier.updateOne({_id:supId},{$set:newpass},function(err){
              if(err){
                res.send(err)
              }else{
                res.send("Updated");
              }
            })


          }
    })

      }else{
        res.send("Your old password is wrong")
      }      
    }
  })
}


// const Addcoco = async(req, res, next) => {
//   const newcoco = new getCoconut({
//     name:"Coconut",
//     neededQuantity:9500,
//     buyingPrice:50
//   });

  
// // newcoco.save(function(err){
// //   if(err){
// //     res.send("goda na");
// //   }else{
// //     res.send("goda");
// //   }
// // });
// }



// const DeAddcoco = async(req, res, next) => {
//   getCoconut.deleteMany(function(err){
//
//   })
//
// }








exports.Register = Register;
exports.Login = Login;
exports.SpHome = SpHome;
exports.SupplyForm = SupplyForm;
exports.SupplyView = SupplyView;
exports.DeleteRow = DeleteRow;
exports.UpdateRow = UpdateRow;
exports.ViewAllSup = ViewAllSup;
exports.DeleteEntrys = DeleteEntrys;
exports.UpdateView = UpdateView;
exports.SupPview =SupPview;
exports.SupProUpdate =SupProUpdate;
exports.ViewAllSuppliers = ViewAllSuppliers;
exports.Changepass = Changepass;
//exports.Addcoco = Addcoco;
//exports.DeAddcoco = DeAddcoco;
