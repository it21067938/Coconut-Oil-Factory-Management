const PurchaseLedgerDebit = require('../models/PurchaseLedger_D-models');


//insert debit

const AddDebit = async(req,res)=> {

    const Date = req.body.date;
    const SupplierName = req.body.supplierName;
    const  MaterialType = req.body.materialType;
    const Amount = parseFloat(req.body.amount);
    
    const NewDebit = new PurchaseLedgerDebit({
        Date,
        SupplierName,
        MaterialType,
        Amount

    });

    NewDebit.save().then(()=>{
        res.json("Purchase debit added!")
    }).catch((err)=>{
        console.log(err.message);
        res.json("Error with adding Purchase debit!")
    })


}

// veiw debit

const ViewDebit = async(req, res) => {
    PurchaseLedgerDebit.find().then((PurchaseLedgerDebit)=>{
        res.json(PurchaseLedgerDebit)
    }).catch((err)=>{
        console.log(err.message)
        res.json("Error with displaing purchase debit!")
    })
}

//update debit

const updateDebit = async(req, res) => {
    let userId = req.params.id;
    const {Date,SupplierName, MaterialType, Amount} = req.body ;

    const updateDebit = {
        Date,
        SupplierName,
        MaterialType,
        Amount
    }

    const update = await PurchaseLedgerDebit.findByIdAndUpdate(userId, updateDebit)
    .then(()=> {
        res.status(200).send({status: " purchase  debit field updated!"})
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with updating purchase debit field!", error:err.message});   
    })   

   
}

//delete debit
const deletedebit = async(req, res) => {
    let userId = req.params.id;

    await PurchaseLedgerDebit.findByIdAndDelete(userId).then(() => {
        res.status(200).send({status: "purchase debit deleted!"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete purchase debit!"});
    })

}

// purchase by id
const getPurchaseDbyId = async (req, res) => {
    let id = req.params.id;
    await PurchaseLedgerDebit.findById(id)
      .then((response) => {
        res.status(200).json(response);
        console.log(res);
      })
      .catch((err) => {
        res
          .status(500)
          .send({ status: "Error with purchase debit  retrive", error: err.message });
      });
  };

exports.AddDebit = AddDebit;
exports.ViewDebit = ViewDebit;
exports.updateDebit = updateDebit;
exports.deletedebit = deletedebit;
exports.getPurchaseDbyId = getPurchaseDbyId;