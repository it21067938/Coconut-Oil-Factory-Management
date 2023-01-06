const BankLedgerCredit = require('../models/BankLedger_C-models');


//insert credit

const AddCredit = async(req,res)=> {

    const Date = req.body.date;
    const ChequeNo = req.body.chequeNo;
    const  Description = req.body.description;
    const Amount = parseFloat(req.body.amount);
    
    const NewCredit = new BankLedgerCredit({
        Date,
        ChequeNo,
        Description,
        Amount

    });

    NewCredit.save().then(()=>{
        res.json("Bank credit added!")
    }).catch((err)=>{
        console.log(err.message);
        res.json("Error with adding bank credit!")
    })


}

// veiw credit

const ViewCredit = async(req, res) => {
    BankLedgerCredit.find().then((BankLedgerCredit)=>{
        res.json(BankLedgerCredit)
    }).catch((err)=>{
        console.log(err.message)
        res.json("Error with displaing bank credit!")
    })
}

//update credit

const updateCredit = async(req, res) => {
    let userId = req.params.id;
    const {Date,ChequeNo, Description, Amount} = req.body ;

    const updateCredit = {
        Date,
        ChequeNo,
        Description,
        Amount
    }

    const update = await BankLedgerCredit.findByIdAndUpdate(userId, updateCredit)
    .then(()=> {
        res.status(200).send({status: "Bank credit field updated!"})
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with updating Bank credit field!", error:err.message});   
    })   

}

//delete credit
const deleteCredit = async(req, res) => {
    let userId = req.params.id;

    await BankLedgerCredit.findByIdAndDelete(userId).then(() => {
        res.status(200).send({status: "Bank credit deleted!"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete bank credit!"});
    })

}

//by id
const getBankCId = async (req, res) => {
    let id = req.params.id;
    await BankLedgerCredit.findById(id)
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

exports.AddCredit = AddCredit;
exports.ViewCredit = ViewCredit;
exports.updateCredit = updateCredit;
exports.deleteCredit = deleteCredit;
exports.getBankCId = getBankCId;