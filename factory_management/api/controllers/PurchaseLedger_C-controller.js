const PurchaseLedgerCredit = require('../models/PurchaseLedger_C-models');


//insert credit

const AddCredit = async(req,res)=> {

    const Date = req.body.date;
    const SupplierName = req.body.supplierName;
    const  MaterialType = req.body.materialType;
    const Amount = parseFloat(req.body.amount);
    
    const NewCredit = new PurchaseLedgerCredit({
        Date,
        SupplierName,
        MaterialType,
        Amount

    });

    NewCredit.save().then(()=>{
        res.json("Purchase credit added!")
    }).catch((err)=>{
        console.log(err.message);
        res.json("Error with adding Purchase credit!")
    })


}

// veiw credit

const ViewCredit = async(req, res) => {
    PurchaseLedgerCredit.find().then((PurchaseLedgerCredit)=>{
        res.json(PurchaseLedgerCredit)
    }).catch((err)=>{
        console.log(err.message)
        res.json("Error with displaing purchase credit!")
    })
}

//update credit

const updateCredit = async(req, res) => {
    let userId = req.params.id;
    const {Date,SupplierName, MaterialType, Amount} = req.body ;

    const updateCredit = {
        Date,
        SupplierName,
        MaterialType,
        Amount
    }

    const update = await PurchaseLedgerCredit.findByIdAndUpdate(userId, updateCredit)
    .then(()=> {
        res.status(200).send({status: " purchase field updated!"})
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with updating purchase credit field!", error:err.message});   
    })   

    
}

//delete credit
const deleteCredit = async(req, res) => {
    let userId = req.params.id;

    await PurchaseLedgerCredit.findByIdAndDelete(userId).then(() => {
        res.status(200).send({status: "purchase credit deleted!"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete purchase credit!"});
    })

}

// purchase by id
const getPurchaseCbyId = async (req, res) => {
    let id = req.params.id;
    await PurchaseLedgerCredit.findById(id)
      .then((response) => {
        res.status(200).json(response);
        console.log(res);
      })
      .catch((err) => {
        res
          .status(500)
          .send({ status: "Error with purchase credit  retrive", error: err.message });
      });
  };

exports.AddCredit = AddCredit;
exports.ViewCredit = ViewCredit;
exports.updateCredit = updateCredit;
exports.deleteCredit = deleteCredit;
exports.getPurchaseCbyId = getPurchaseCbyId;