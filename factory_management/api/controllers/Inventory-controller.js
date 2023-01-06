const Inventory = require('../models/Inventory');

//add a product
const addInventory = async(req, res, next) => {


    const productId = req.body.pid;
    const productName = req.body.pname;
    const quantity = parseFloat(req.body.quantity);
    const costPrice = parseFloat(req.body.price);

    const newproduct = new Inventory({
        productId,
        productName,
        quantity,
        costPrice
    });
    newproduct.save().then(()=>{// save to database
        res.json("Product Added!")  
     }).catch((err)=>{
         console.log(err);
     })
}

//view product
const viewInventory = async(req, res, next) => {
    Inventory.find().then((Inventory)=>{
        res.json(Inventory)
    }).catch((err)=>{
        console.log(err)
    })
}



//update product
const updateInventory = async(req, res, next) => {
    let userId = req.params.id;
    const {productId,productName, quantity, costPrice} = req.body ;

    const updateInventory = {
        productId,
        productName, 
        quantity, 
        costPrice
    }

    const update = await Inventory.findByIdAndUpdate(userId, updateInventory).then(()=> {
        res.status(200).send({status: "Product updated!"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating product!", error:err.message});   
    })   

    
}

//delete product
const deleteInventory = async(req, res, next) => {
    let userId = req.params.id;

    await Inventory.findByIdAndDelete(userId).then(() => {
        res.status(200).send({status: "Product deleted!"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete product!"});
    })

}
//get a specific product detail
const getSpecificProduct = async (req, res) => {
    let id = req.params.id;
    await Inventory.findById(id)
      .then((response) => {
        res.status(200).json(response);
        console.log(res);
      })
      .catch((err) => {
        res
          .status(500)
          .send({ status: "Error with product", error: err.message });
      });
  };





exports.addInventory = addInventory;
exports.viewInventory = viewInventory;
exports.updateInventory = updateInventory;
exports.deleteInventory = deleteInventory;
exports.getSpecificProduct = getSpecificProduct;
