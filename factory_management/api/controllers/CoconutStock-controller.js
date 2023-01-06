const CoconutStock = require('../models/CoconutStock');

//add a stock
const addCoconutStock = async(req, res, next) => {


    const locationCode = req.body.locationCode;
    const supplierName = req.body.supplierName;
    const quantity = parseFloat(req.body.quantity);
    const date =req.body.date;

    const newcoconutstock = new CoconutStock({
        locationCode,
        supplierName,
        quantity,
        date
    });
    newcoconutstock.save().then(()=>{// save to database
        res.json("Coconut Stock Added!")  
     }).catch((err)=>{
         console.log(err);
     })
}

//view stock
const viewCoconutStock = async(req, res, next) => {
    CoconutStock.find().then((CoconutStock)=>{
        res.json(CoconutStock)
    }).catch((err)=>{
        console.log(err)
    })
}


//update stock
const updateCoconutStock= async(req, res, next) => {
    let userId = req.params.id;
    const {locationCode,supplierName, quantity, date} = req.body ;

    const updatecoconutstock = {
        locationCode,
        supplierName, 
        quantity, 
        date
    }

    const update = await CoconutStock.findByIdAndUpdate(userId, updatecoconutstock)
    .then(()=> {
        res.status(200).send({status: "Coconut Stock updated!"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating Coconut Stock!", error:err.message});   
    })   

    
}

//delete stock
const deleteCoconutStock = async(req, res, next) => {
    let userId = req.params.id;

    await CoconutStock.findByIdAndDelete(userId).then(() => {
        res.status(200).send({status: "Coconut Stock deleted!"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete Coconut Stock!"});
    })

}
//get a specific stock detail
const getSpecificStock = async (req, res) => {
    let id = req.params.id;
    await CoconutStock.findById(id)
      .then((response) => {
        res.status(200).json(response);
        console.log(res);
      })
      .catch((err) => {
        res
          .status(500)
          .send({ status: "Error with stock", error: err.message });
      });
  };

exports.addCoconutStock = addCoconutStock;
exports.viewCoconutStock = viewCoconutStock;
exports.updateCoconutStock = updateCoconutStock;
exports.deleteCoconutStock = deleteCoconutStock;
exports.getSpecificStock = getSpecificStock;
