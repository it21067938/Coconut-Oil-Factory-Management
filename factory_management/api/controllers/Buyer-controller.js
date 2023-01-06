const Buyer = require('../models/Buyer');
const Order = require('../models/PendingOrder');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");//To generate token
const FOR_TOKEN = process.env.FOR_TOKEN;

//Buyer Sign up
const signup = async (req, res, next) => {

    const { name, nic, email, contactNo, address, username, password } = req.body;

    let existingBuyer;
    try {
        existingBuyer = await Buyer.findOne({ username: username });//Filter Query
    } catch (err) {
        console.log(err);
    }

    if (existingBuyer) {
        return res.send({ message: "UserName already exists! Try Again!!" });
    }

    //encrypt password
    const encryptPassword = bcrypt.hashSync(password);

    const buyer = new Buyer({
        name, //name : req.body.name,
        nic,
        email,
        contactNo,
        address,
        username,
        password: encryptPassword,
    });

    try {
        //save document in database
        await buyer.save();
    } catch (err) {
        console.log(err);
    }

    return res.status(201).json({ message: "Success !!" })

}

//Buyer Login
const login = async (req, res, next) => {

    var uname = req.body.username;
    var pass = req.body.password;

    console.log(req.body);

    Buyer.findOne({ username: uname }, function (err, data) {

        if (data) {
            console.log(data);
            bcrypt.compare(pass, data.password, function (err, result) {

                if (result) {
                    //-------Login success------------
                    supp = { id: data._id };
                    const acsessToken = jwt.sign(supp, process.env.FOR_TOKEN);
                    res.send({ acsessToken });

                } else {
                    res.send("Login fail");
                }

            });

        } else {

            res.send("Invalid data !!");
        }
    })
}


//verification of the token
const verifyToken = (req, res, next) => {
    console.log(req.headers.authorization);
    const cookies = req.headers.authorization;
    const token = cookies.split(" ")[1];
    //console.log(token)

    if (!token) {
        res.status(404).json({ message: "Token not Found !!" })
    }

    jwt.verify(token, FOR_TOKEN, function (err, Buyer) {
        if (err) {
            res.sendStatus(403);  //fobin
        } else {
            req.id = Buyer.id;
            //console.log(req.id);
            next();
        }
    });



}


//Using id, get buyer details
const getBuyerDetails = async (req, res, next) => {

    const buyerID = req.id;
    let buyer;

    try {
        buyer = await Buyer.findById(buyerID);
    } catch (err) {
        return new Error(err)
    }

    if (!buyer) {
        return res.status(404).json({ message: "User not Found !!" })
    }

    return res.status(200).json({ buyer })

}


//update Buyer details 
const updateBuyerDetails = async (req, res, next) => {

    const BuyerID = req.id;
    let id;

    try {
        id = await Buyer.findById(BuyerID);
    } catch (err) {
        return new Error(err)
    }


    const { name, nic, email, contactNo, address, username } = req.body;

    const updateDetails = {
        name, //name : req.body.name,
        nic,
        email,
        contactNo,
        address,
        username
    };

    try {
        update = await Buyer.findByIdAndUpdate(id, updateDetails);
        res.status(200).json({ message: "Update Successful !!", updateDetails })
    } catch (err) {
        res.status(500).send({ status: "Error with updating details !!" });
    }

}


// /////////////////////////////////////////////////////////////////////////////////////////
// //After login place order, Under order model


//Place order
const placeOrder = async (req, res, next) => {
    console.log(req.body);
    const BuyerID = req.id;
    console.log(BuyerID);
    let details;

    const { category, quantity, date, transport_details, note } = req.body;

    console.log(BuyerID);
    var uName = [];
    Buyer.findOne({ _id: BuyerID }, function (err, data) {
        if (!err) {
            //  console.log(data);
            uName = data.username;
            console.log(uName);

            const order = new Order({
                UserName: uName,
                category,
                quantity,
                date,
                transport_details,
                note
            });

            try {
                //save document in database
                order.save();
                return res.status(201).json({ message: "Order added !!", order })
            } catch (err) {
                console.log(err);
            }

        }
    });


}


// buyer can view his placed orders
const viewOrder = async (req, res, next) => {

    const buyerID = req.id;

    Buyer.findOne({ _id: buyerID }, function (err, data) {
        // console.log(data.username);
        var uname = data.username;

        Order.find({ UserName: uname }, function (err, oData) {
            console.log(oData);
            res.json(oData);
        })

    })

}





exports.signup = signup;
exports.login = login;
exports.verifyToken = verifyToken;
exports.getBuyerDetails = getBuyerDetails;
exports.placeOrder = placeOrder;
exports.updateBuyerDetails = updateBuyerDetails;
exports.viewOrder = viewOrder;