const Manager = require('../models/Manager');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");//To generate token
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;


//Manager Login
const login = async(req, res, next) => {

    const {username, password} = req.body;

    let existingManager;
    try {
        existingManager = await Manager.findOne({ username : username});//Filter Query
    } catch (err) {
        return new Error(err);
    }

    if(!existingManager){
        return res.status(400).json({message : "User not found. Signup Please !!"});
    }

    //check existing manager password
    const isPswCorrect = bcrypt.compareSync(password, existingManager.password);
    if(!isPswCorrect){
        return res.status(400).json({message : "Invalid UserName or Password !!"})
    }

    //Generate token
    const token = jwt.sign({ id : existingManager._id }, JWT_SECRET_KEY, {
        expiresIn: "30m" //set expiration time 
    });

    //after login cookie set
    res.cookie(String(existingManager._id), token, {
        path : '/',
        expires : new Date(Date.now() + 1000 * 30 ),//1000ms = 1s 
        httpOnly : true,
        sameSite : "lax"
    })

    return res.status(200).json({message : "Login Successful", Manager : existingManager, token});

}



//verification of the token
const verifyToken = (req, res, next) => {

    const cookies = req.headers.cookie;
    const token = cookies.split("=")[1];
    //console.log(token)

    if(!token){
        res.status(404).json({ message : "Token not Found !!"})
    }

    jwt.verify(String(token), JWT_SECRET_KEY, (err, Manager) => {
        if(err) {
            return res.status(400).json({ message : "Token is Invalid !!"})
        }

        req.id = Manager.id;//pass the id

    });

    next();//move to next function

}


//Using id, get Manager details
const getManagerDetails = async(req, res, next) => {

    const managerID = req.id;
    let manager;

    try {
        manager = await Manager.findById(managerID, "-password");
    } catch (err) {
        return new Error(err)
    }

    if(!manager){
        return  res.status(404).json({message : "User not Found !!"})
    }

    return res.status(200).json({manager})

}



exports.login = login;
exports.verifyToken = verifyToken;
exports.getManagerDetails = getManagerDetails;