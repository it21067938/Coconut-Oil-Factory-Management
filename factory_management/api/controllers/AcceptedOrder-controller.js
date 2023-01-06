const AcceptedOrder = require('../models/Accepted-Order');
const Email = require('../models/SendEmail');
//const Buyer = require('../models/Buyer');

//Sales manager can do these things

//Accepted Order Table


//update estimated date in accepted order
const updateEstimatedDate = async (req, res, next) => {

    let orderId = req.params.id;

    const { date } = req.body;

    const updateDate = {
        date
    };

    try {
        update = await AcceptedOrder.findByIdAndUpdate(orderId, updateDate);
        res.status(200).json({ message: "Update Successful !!", updateDate })
    } catch (err) {
        res.status(500).send({ status: "Error with updating details !!" });
    }

}


//Delete  complete orders into the Accepted order table
const DeleteOrder = async (req, res, next) => {

    let orderId = req.params.id;

    await AcceptedOrder.findByIdAndDelete(orderId).then(() => {
        res.status(200).send({ status: "order deleted !!" });
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({ status: "Error with delete order !!" });
    })

}


//Send Email
const SendEmail = async (req, res, next) => {

    const { to, from, cc, subject } = req.body;

    const email = new Email({
        to,
        from,
        cc,
        subject
    });

    try {
        //save document in database
        await email.save();
    } catch (err) {
        console.log(err);
    }

    return res.status(201).json({ message: "Successfully Send !!", email })

}


//view all accepted orders
const acceptedOrder = async (req, res, next) => {

    AcceptedOrder.find().then((AcceptedOrder) => {
        res.json(AcceptedOrder)
    }).catch((err) => {
        console.log(err)
    })

}

//  by id
const getDetailsbyID = async (req, res) => {
    let id = req.params.id;
    await AcceptedOrder.findById(id)
      .then((response) => {
        res.status(200).json(response);
        console.log(res);
      })
      .catch((err) => {
        res
          .status(500)
          .send({ status: "Error with data retrive", error: err.message });
      });
  };






exports.DeleteOrder = DeleteOrder;
exports.SendEmail = SendEmail;
exports.updateEstimatedDate = updateEstimatedDate;

exports.acceptedOrder = acceptedOrder;

exports.acceptedOrder = acceptedOrder;
exports.getDetailsbyID = getDetailsbyID;

