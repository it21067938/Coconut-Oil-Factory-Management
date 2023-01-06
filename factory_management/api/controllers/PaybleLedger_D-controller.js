const PaybleDebit = require('../models/PaybleLedger_D-models');


//insert debit

const AddDebit = async(req,res)=> {

    const Date = req.body.date;
    const Description = req.body.description;
    const Amount = parseFloat(req.body.amount);
    
    const NewDebit = new PaybleDebit({
        Date,
        Description,
        Amount

    });

    NewDebit.save().then(()=>{
        res.json("Payble debit added!")
    }).catch((err)=>{
        console.log(err.message);
        res.json("Error with adding payble debit!")
    })


}

// veiw debit

const ViewDebit = async(req, res) => {
    PaybleDebit.find().then((PaybleDebit)=>{
        res.json(PaybleDebit)
    }).catch((err)=>{
        console.log(err.message)
        res.json("Error with displaing payble debit!")
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

    const update = await PaybleDebit.findByIdAndUpdate(userId, updateDebit)
    .then(()=> {
        res.status(200).send({status: " payble  debit field updated!"})
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with updating payble debit field!", error:err.message});   
    })   


}

//delete debit
const deletedebit = async(req, res) => {
    let userId = req.params.id;

    await PaybleDebit.findByIdAndDelete(userId).then(() => {
        res.status(200).send({status: "payble debit deleted!"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete payble debit!"});
    })

}

const getPaybleD = async (req, res) => {
    let id = req.params.id;
    await PaybleDebit.findById(id)
      .then((response) => {
        res.status(200).json(response);
        console.log(res);
      })
      .catch((err) => {
        res
          .status(500)
          .send({ status: "Error with payble retrive", error: err.message });
      });
  };

exports.AddDebit = AddDebit;
exports.ViewDebit = ViewDebit;
exports.updateDebit = updateDebit;
exports.deletedebit = deletedebit;
exports.getPaybleD = getPaybleD;
