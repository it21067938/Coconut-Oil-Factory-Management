const SalesLedgerCredit = require('../models/SalesLedger_C-models');


//insert credit

const AddCredit = async(req,res)=> {

    const Date = req.body.date;
    const BuyerName = req.body.buyerName;
    const  MaterialType = req.body.materialType;
    const Amount = parseFloat(req.body.amount);
    
    const NewCredit = new SalesLedgerCredit({
        Date,
        BuyerName,
        MaterialType,
        Amount

    });

    NewCredit.save().then(()=>{
        res.json("Sales credit added!")
    }).catch((err)=>{
        console.log(err.message);
        res.json("Error with adding Sales credit!")
    })


}

// veiw credit

const ViewCredit = async(req, res) => {
    SalesLedgerCredit.find().then((SalesLedgerCredit)=>{
        res.json(SalesLedgerCredit)
    }).catch((err)=>{
        console.log(err.message)
        res.json("Error with displaing sales credit!")
    })
}

//update credit

const updateCredit = async(req, res) => {
    let userId = req.params.id;
    const {Date,BuyerName, MaterialType, Amount} = req.body ;

    const updateCredit = {
        Date,
        BuyerName,
        MaterialType,
        Amount
    }

    const update = await SalesLedgerCredit.findByIdAndUpdate(userId, updateCredit)
    .then(()=> {
        res.status(200).send({status: " Sales ledger field updated!"})
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with updating sales credit field!", error:err.message});   
    })   

   
}

//delete credit
const deleteCredit = async(req, res) => {
    let userId = req.params.id;

    await SalesLedgerCredit.findByIdAndDelete(userId).then(() => {
        res.status(200).send({status: "Sales credit deleted!"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete Sales credit!"});
    })

}

//by id
const getSalesCById = async (req, res) => {
    let id = req.params.id;
    await SalesLedgerCredit.findById(id)
      .then((response) => {
        res.status(200).json(response);
        console.log(res);
      })
      .catch((err) => {
        res
          .status(500)
          .send({ status: "Error with sales credit  retrive", error: err.message });
      });
  };


exports.AddCredit = AddCredit;
exports.ViewCredit = ViewCredit;
exports.updateCredit = updateCredit;
exports.deleteCredit = deleteCredit;
exports.getSalesCById = getSalesCById;