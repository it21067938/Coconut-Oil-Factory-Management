const ReceivableDebit = require('../models/ReceivableLedger_D-models');


//insert debit

const AddDebit = async(req,res)=> {

    const Date = req.body.date;
    const Description = req.body.description;
    const Amount = parseFloat(req.body.amount);
    
    const NewDebit = new ReceivableDebit({
        Date,
        Description,
        Amount

    });

    NewDebit.save().then(()=>{
        res.json("Receivable debit added!")
    }).catch((err)=>{
        console.log(err.message);
        res.json("Error with adding Receivable debit!")
    })


}

// veiw debit

const ViewDebit = async(req, res) => {
    ReceivableDebit.find().then((ReceivableDebit)=>{
        res.json(ReceivableDebit)
    }).catch((err)=>{
        console.log(err.message)
        res.json("Error with displaing Receivable debit!")
    })
}

//update debit

const updateDebit = async(req, res) => {
    let userId = req.params.id;
    const {Date,Description, Amount} = req.body ;

    const updateDebit = {
        Date,
        Description,
        Amount
    }

    const update = await ReceivableDebit.findByIdAndUpdate(userId, updateDebit)
    .then(()=> {
        res.status(200).send({status: " Receivable  debit field updated!"})
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with updating Receivable debit field!", error:err.message});   
    })   

    
}

//delete debit
const deletedebit = async(req, res) => {
    let userId = req.params.id;

    await ReceivableDebit.findByIdAndDelete(userId).then(() => {
        res.status(200).send({status: "Receivable debit deleted!"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete Receivable debit!"});
    })

}

// purchase by id
const getReceivableDbyId = async (req, res) => {
    let id = req.params.id;
    await ReceivableDebit.findById(id)
      .then((response) => {
        res.status(200).json(response);
        console.log(res);
      })
      .catch((err) => {
        res
          .status(500)
          .send({ status: "Error with Receivable debit  retrive", error: err.message });
      });
  };

exports.AddDebit = AddDebit;
exports.ViewDebit = ViewDebit;
exports.updateDebit = updateDebit;
exports.deletedebit = deletedebit;
exports.getReceivableDbyId = getReceivableDbyId;