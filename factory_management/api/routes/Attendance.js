const router = require("express").Router();
const attendance = require('../models/Attendance');



//Save a Attendance Info

router.route("/add").post((req,res)=>{

    const empId = req.body.empId;
    const name = req.body.name;
    const otHours = Number(req.body.otHours);
    const month = req.body.month;

    const newAttendance = new attendance({

        empId,
        name,
        otHours,
        month

    })
    newAttendance.save().then(()=>{
        res.json("attendance added!!!");
    }).catch((err)=>{
        console.log(err);
    })

})



router.route("/view").get((req,res)=>{
    attendance.find().then((attendance)=>{
        res.json(attendance)
    }).catch((err)=>{
        console.log(err)
    })
})




//update a Attendance Info

router.route("/update/:id").put(async(req,res) => {
    let userId = req.params.id;
    const{empId,name,otHours,month} =req.body;

    const updateAttendance = {
        
        empId,
        name,
        otHours,
        month
    }

    const update = await attendance.findByIdAndUpdate(userId,updateAttendance).then(()=>{
        res.status(200).send({status:"attendance updated"})
    }).catch((err)=>{
        console.log(err.massage);
        res.status(500).send({status: "error with updated data"});
    })
})



//Delete a Attendance Info

router.route("/delete/:id").delete(async(req,res)=>{
    let userId = req.params.id;
    await attendance.findByIdAndDelete(userId).then(() =>{
        res.status(200).send({status:"attendance deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "error with delete data"});
    })
})


module.exports = router;