const posts = require('../models/posts');




//insert 



const Addpost = async(req,res)=> {



    const ID = req.body.id;

    const Name = req.body.name;

    const Quantity =parseFloat(req.body.quantity);

    

    const newPost = new posts({

        ID ,

        Name,

        Quantity,



    });



    newPost.save().then(()=>{

        res.json("post added!")

    }).catch((err)=>{

        console.log(err.message);

    })




}



// veiw post



const Viewpost = async(req, res) => {

    posts.find().then((posts)=>{

        res.json(posts)

    }).catch((err)=>{

        console.log(err.message)

    })

}



//update expenses

const updatePost = async(req, res) => {
  let userId = req.params.id;

  
  const ID = req.body.ID;
  const Name = req.body.Name;
  const Quantity =parseFloat(req.body.Quantity);
  

  
    const updatepost = {
  
            ID ,
            Name,
            Quantity,
  }

  const update = await posts.findByIdAndUpdate(userId, updatepost)
  .then(()=> {
      res.status(200).send({status: "Expenses updated!"})
  }).catch((err) => {
      console.log(err.message);
      res.status(500).send({status: "Error with updating Expenses!", error:err.message});   
  })   

 
}



//delete Data

const deletedPost = async(req, res) => {

    let userId = req.params.id;



    await posts.findByIdAndDelete(userId).then(() => {

        res.status(200).send({status: "Data deleted!"});

    }).catch((err) => {

        console.log(err.message);

        res.status(500).send({status: "Error with delete Data!"});

    })



}

// expenses by id
const getPostByID = async (req, res) => {
    let id = req.params.id;
    await posts.findById(id)
      .then((response) => {
        res.status(200).json(response);
        console.log(res);
      })
      .catch((err) => {
        res
          .status(500)
          .send({ status: "Error with post retrive", error: err.message });
      });
  }



exports.Addpost = Addpost;

exports.Viewpost = Viewpost;

exports.updatePost = updatePost;

exports.deletedPost = deletedPost;

exports.getPostByID = getPostByID;