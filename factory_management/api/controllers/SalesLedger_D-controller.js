const SalesLedgerDebit = require('../models/SalesLedger_D-models');


//insert debit

const AddDebit = async(req,res)=> {

    const Date = req.body.date;
    const BuyerName = req.body.buyerName;
    const  MaterialType = req.body.materialType;
    const Amount = parseFloat(req.body.amount);
    
    const NewDebit = new SalesLedgerDebit({
        Date,
        BuyerName,
        MaterialType,
        Amount

    }); 
    //new

    NewDebit.save().then(()=>{
        res.json("Sales debit added!")
    }).catch((err)=>{
        console.log(err.message);
        res.json("Error with adding Sales debit!")
    })


}

// veiw debit

const ViewDebit = async(req, res) => {
    SalesLedgerDebit.find().then((SalesLedgerDebit)=>{
        res.json(SalesLedgerDebit)
    }).catch((err)=>{
        console.log(err.message)
        res.json("Error with displaing sales debit!")
    })
}

//update debit

const updateDebit = async(req, res) => {
    let userId = req.params.id;
    const {Date,BuyerName, MaterialType, Amount} = req.body ;

    const updateDebit = {
        Date,
        BuyerName,
        MaterialType,
        Amount
    }

    const update = await SalesLedgerDebit.findByIdAndUpdate(userId, updateDebit)
    .then(()=> {
        res.status(200).send({status: " Sales  debit field updated!"})
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with updating Sales debit field!", error:err.message});   
    })   

   
}

//delete debit
const deletedebit = async(req, res) => {
    let userId = req.params.id;

    await SalesLedgerDebit.findByIdAndDelete(userId).then(() => {
        res.status(200).send({status: "sales debit deleted!"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete sales debit!"});
    })

}

//by id
const getSalesDById = async (req, res) => {
    let id = req.params.id;
    await SalesLedgerDebit.findById(id)
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

exports.AddDebit = AddDebit;
exports.ViewDebit = ViewDebit;
exports.updateDebit = updateDebit;
exports.deletedebit = deletedebit;
exports.getSalesDById = getSalesDById;