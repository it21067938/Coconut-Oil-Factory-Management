const ManageIncome = require('../models/ManageIncome-models');


//insert income

const AddIncome = async(req,res)=> {

    const  Date = req.body.date;
    const Description = req.body.description;
    const Amount =parseFloat(req.body.amount);
    
    const NewIncome = new ManageIncome({
        Date ,
        Description,
        Amount,

    });

    NewIncome.save().then(()=>{
        res.json("Income added!")
    }).catch((err)=>{
        console.log(err.message);
    })


}

// veiw income

const ViewIncome = async(req, res) => {
    ManageIncome.find().then((ManageIncome)=>{
        res.json(ManageIncome)
    }).catch((err)=>{
        console.log(err.message)
    })
}

//update income

const updateIncome = async(req, res) => {
    let userId = req.params.id;
    const {Date,Description,Amount} = req.body ;

    const updateIncome = {
        Date, 
        Description, 
        Amount
    }

    const update = await ManageIncome.findByIdAndUpdate(userId, updateIncome)
    .then(()=> {
        res.status(200).send({status: "Income updated!"})
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with updating Income!", error:err.message});   
    })   

   
}

//delete Income
const deleteIncome = async(req, res) => {
    let userId = req.params.id;

    await ManageIncome.findByIdAndDelete(userId).then(() => {
        res.status(200).send({status: "Income deleted!"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete Expenses!"});
    })

}



  // income by id
  const getIncomeId = async (req, res) => {
    let id = req.params.id;
    await ManageIncome.findById(id)
      .then((response) => {
        res.status(200).json(response);
        console.log(res);
      })
      .catch((err) => {
        res
          .status(500)
          .send({ status: "Error with income", error: err.message });
      });
  };

exports.AddIncome = AddIncome;
exports.ViewIncome = ViewIncome;
exports.updateIncome = updateIncome;
exports.deleteIncome = deleteIncome;
exports.getIncomeId = getIncomeId;