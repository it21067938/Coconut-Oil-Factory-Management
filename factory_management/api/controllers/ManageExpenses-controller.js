const ManageExpenses = require('../models/ManageExpenses-models');


//insert expenses

const AddExpenses = async(req,res)=> {

    const Date = req.body.date;
    const Description = req.body.description;
    const Amount = parseFloat(req.body.amount);
    
    const NewExpenses = new ManageExpenses({
        Date,
        Description,
        Amount,

    });

    NewExpenses.save().then(()=>{
        res.json("Expenses added!")
    }).catch((err)=>{
        console.log(err.message);
    })


}

// veiw expenses

const ViewExpenses = async(req, res) => {
    ManageExpenses.find().then((ManageExpenses)=>{
        res.json(ManageExpenses)
    }).catch((err)=>{
        console.log(err.message)
    })
}

//update expenses

const updateExpenses = async(req, res) => {
    let userId = req.params.id;
    const { Date,Description, Amount} = req.body ;

    const updateExpenses = {
        Date, 
        Description, 
        Amount
    }

    const update = await ManageExpenses.findByIdAndUpdate(userId, updateExpenses)
    .then(()=> {
        res.status(200).send({status: "Expenses updated!"})
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with updating Expenses!", error:err.message});   
    })   

   
}

//delete expenses
const deleteExpenses = async(req, res) => {
    let userId = req.params.id;

    await ManageExpenses.findByIdAndDelete(userId).then(() => {
        res.status(200).send({status: "Expenses deleted!"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete Expenses!"});
    })

}


  // expenses by id
  const getExpensesId = async (req, res) => {
    let id = req.params.id;
    await ManageExpenses.findById(id)
      .then((response) => {
        res.status(200).json(response);
        console.log(res);
      })
      .catch((err) => {
        res
          .status(500)
          .send({ status: "Error with expenses retrive", error: err.message });
      });
  };

exports.AddExpenses = AddExpenses;
exports.ViewExpenses = ViewExpenses;
exports.updateExpenses = updateExpenses;
exports.deleteExpenses = deleteExpenses;

exports.getExpensesId = getExpensesId;