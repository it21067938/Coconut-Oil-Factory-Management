const Order = require('../models/PendingOrder');
const AcceptOrder = require('../models/Accepted-Order');

//Sales manager can do these things

//pending Order Table

//accept orders and insert into acceptedOrder table
const Accept = async(req, res, next) => {
    
    const {orderID, UserName, category, quantity, date, transport_details, note} = req.body;

    const acceptOrder = new AcceptOrder({
        orderID,
        UserName,
        category,
        quantity, 
        date, 
        transport_details, 
        note
    });

    try {
        //save document in database
        await acceptOrder.save();
    } catch (err) {
        console.log(err);
    }

    return res.status(201).json({message: "Order added !!", acceptOrder})

}


//view all pending orders
const viewProduct = async(req, res, next) => {

    Order.find().then((Order)=>{
        res.json(Order)
    }).catch((err)=>{
        console.log(err)
    })

}


//reject pending order and delete into pending order table
const rejectOrder = async(req, res, next) => {
    
    let orderId = req.params.id;

    await Order.findByIdAndDelete(orderId).then(() => {
        res.status(200).send({status: "order deleted !!"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete order !!"});
    })

}



exports.Accept = Accept;
exports.viewProduct = viewProduct;
exports.rejectOrder = rejectOrder;

