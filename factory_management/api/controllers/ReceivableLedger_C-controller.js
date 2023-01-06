const ReceivableCredit = require('../models/ReceivableLedger_C-models');


//insert credit

const AddCredit = async(req,res)=> {

    const Date = req.body.date;
    const Description = req.body.description;
    const Amount = parseFloat(req.body.amount);
    
    const NewCredit = new ReceivableCredit({
        Date,
        Description,
        Amount

    });

    NewCredit.save().then(()=>{
        res.json("Receivable credit added!")
    }).catch((err)=>{
        console.log(err.message);
        res.json("Error with adding Receivable credit!")
    })


}

// veiw credit

const ViewCredit = async(req, res) => {
    ReceivableCredit.find().then((ReceivableCredit)=>{
        res.json(ReceivableCredit)
    }).catch((err)=>{
        console.log(err.message)
        res.json("Error with displaing Receivable credit!")
    })
}

//update credit

const updateCredit = async(req, res) => {
    let userId = req.params.id;
    const {Date,Description, Amount} = req.body ;

    const updateCredit = {
        Date,
        Description,
        Amount
    }

    const update = await ReceivableCredit.findByIdAndUpdate(userId, updateCredit)
    .then(()=> {
        res.status(200).send({status: " Receivable ledger field updated!"})
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with updating Receivable credit field!", error:err.message});   
    })   

   
}

//delete credit
const deleteCredit = async(req, res) => {
    let userId = req.params.id;

    await ReceivableCredit.findByIdAndDelete(userId).then(() => {
        res.status(200).send({status: "Receivable credit deleted!"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete Receivable credit!"});
    })

}

// purchase by id
const getReceivableCbyId = async (req, res) => {
    let id = req.params.id;
    await ReceivableCredit.findById(id)
      .then((response) => {
        res.status(200).json(response);
        console.log(res);
      })
      .catch((err) => {
        res
          .status(500)
          .send({ status: "Error with Receivable credit  retrive", error: err.message });
      });
  };

exports.AddCredit = AddCredit;
exports.ViewCredit = ViewCredit;
exports.updateCredit = updateCredit;
exports.deleteCredit = deleteCredit;
exports.getReceivableCbyId = getReceivableCbyId;