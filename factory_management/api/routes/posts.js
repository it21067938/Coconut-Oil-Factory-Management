const express = require('express');

const router = express.Router();



const {Addpost,Viewpost,updatePost,deletedPost,getPostByID } = require("../controllers/post.-contoller")



router.post("/add" ,Addpost);

router.get("/view",Viewpost );

router.put("/update/:id" ,updatePost);

router.delete("/delete/:id" ,deletedPost);
router.get("/getID/:id",getPostByID );



module.exports = router