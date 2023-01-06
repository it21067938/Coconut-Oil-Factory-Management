const BankLedgerDebit = require('../models/BankLedger_D-models');


//insert debit

const AddDebit = async(req,res)=> {

    const Date = req.body.date;
    const ChequeNo = req.body.chequeNo;
    const  Description = req.body.description;
    const Amount = parseFloat(req.body.amount);
    
    const NewDebit = new BankLedgerDebit({
        Date,
        ChequeNo,
        Description,
        Amount

    });

    NewDebit.save().then(()=>{
        res.json("Bank debit added!")
    }).catch((err)=>{
        console.log(err.message);
        res.json("Error with adding bank debit!")
    })


}

// veiw debit

const ViewDebit = async(req, res) => {
    BankLedgerDebit.find().then((BankLedgerDebit)=>{
        res.json(BankLedgerDebit)
    }).catch((err)=>{
        console.log(err.message)
        res.json("Error with displaing bank debit!")
    })
}

//update debit

const updateDebit = async(req, res) => {
    let userId = req.params.id;
    const {Date,ChequeNo, Description, Amount} = req.body ;

    const updateDebit = {
        Date,
        ChequeNo,
        Description,
        Amount
    }

    const update = await BankLedgerDebit.findByIdAndUpdate(userId, updateDebit)
    .then(()=> {
        res.status(200).send({status: "Bank debit field updated!"})
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with updating Bank debit field!", error:err.message});   
    })   

  
}

//delete debit

const deleteDebit = async(req, res) => {
    let userId = req.params.id;

    await BankLedgerDebit.findByIdAndDelete(userId).then(() => {
        res.status(200).send({status: "Bank debit deleted!"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete bank debit!"});
    })

}

//by id
  const getBankDId = async (req, res) => {
    let id = req.params.id;
    await BankLedgerDebit.findById(id)
      .then((response) => {
        res.status(200).json(response);
        console.log(res);
      })
      .catch((err) => {
        res
          .status(500)
          .send({ status: "Error with bank details", error: err.message });
      });
  };

exports.AddDebit = AddDebit;
exports.ViewDebit = ViewDebit;
exports.updateDebit = updateDebit;
exports.deleteDebit = deleteDebit;
exports.getBankDId = getBankDId;