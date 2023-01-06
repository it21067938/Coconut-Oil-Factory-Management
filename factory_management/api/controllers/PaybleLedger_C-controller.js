const PaybleCredit = require('../models/PaybleLedger_C-models');


//insert credit

const AddCredit = async(req,res)=> {

    const Date = req.body.date;
    const Description = req.body.description;
    const Amount = parseFloat(req.body.amount);
    
    const NewCredit = new PaybleCredit({
        Date,
        Description,
        Amount

    });

    NewCredit.save().then(()=>{
        res.json("Payble credit added!")
    }).catch((err)=>{
        console.log(err.message);
        res.json("Error with adding payble credit!")
    })


}

// veiw credit

const ViewCredit = async(req, res) => {
    PaybleCredit.find().then((PaybleCredit)=>{
        res.json(PaybleCredit)
    }).catch((err)=>{
        console.log(err.message)
        res.json("Error with displaing payble credit!")
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

    const update = await PaybleCredit.findByIdAndUpdate(userId, updateCredit)
    .then(()=> {
        res.status(200).send({status: " payble ledger field updated!"})
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with updating payble credit field!", error:err.message});   
    })   


}

//delete credit
const deleteCredit = async(req, res) => {
    let userId = req.params.id;

    await PaybleCredit.findByIdAndDelete(userId).then(() => {
        res.status(200).send({status: "payble credit deleted!"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete payble credit!"});
    })

}

const getPaybleC = async (req, res) => {
    let id = req.params.id;
    await PaybleCredit.findById(id)
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

exports.AddCredit = AddCredit;
exports.ViewCredit = ViewCredit;
exports.updateCredit = updateCredit;
exports.deleteCredit = deleteCredit;
exports.getPaybleC = getPaybleC;