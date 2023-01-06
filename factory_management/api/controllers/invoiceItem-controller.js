const items = require('../models/itemInvoice-models');


//insert income

const AddItems = async(req,res)=> {

    const Description = req.body.description;
    const Quantity = req.body.quantity;
    const Rate = req.body.rate;
    const Amount = Quantity * Rate; 

    
    const NewItems = new items({
        Description ,
        Quantity,
        Rate,
        Amount,



    });

    NewItems.save().then(()=>{
        res.json("items  created!")
    }).catch((err)=>{
        console.log(err.message);
    })


}

// veiw income

const viewItems = async(req, res) => {
    items.find().then((items)=>{
        res.json(items)
    }).catch((err)=>{
        console.log(err.message)
    })
}

//update income

const updateItems = async(req, res) => {
    let userId = req.params.id;
    
    const Description = req.body.description;
    const Quantity = req.body.quantity;
    const Rate = req.body.rate;
    const Amount = Quantity * Rate; 

    const updateItems = {
        Description ,
        Quantity,
        Rate,
        Amount,

    }

    const update = await items.findByIdAndUpdate(userId, updateItems)
    .then(()=> {
        res.status(200).send({status: "items updated!"})
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with updating Invoice!", error:err.message});   
    })   

   
}

//delete Income
const deleteItems = async(req, res) => {
    let userId = req.params.id;

    await items.findByIdAndDelete(userId).then(() => {
        res.status(200).send({status: "invoice items deleted!"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete items!"});
    })

}

//delete all
const deleteAll = async(req, res) => {


    await items.deleteMany().then(() => {
        res.status(200).send({status: "invoice items deleted!"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete items!"});
    })

}




  // income by id
  const getItemId = async (req, res) => {
    let id = req.params.id;
    await item.findById(id)
      .then((response) => {
        res.status(200).json(response);
        console.log(res);
      })
      .catch((err) => {
        res
          .status(500)
          .send({ status: "Error with invoice details", error: err.message });
      });
  };

exports.AddItems = AddItems;
exports.viewItems = viewItems;
exports.updateItems = updateItems;
exports.deleteItems = deleteItems;
exports.deleteAll = deleteAll;
exports.getItemId = getItemId;