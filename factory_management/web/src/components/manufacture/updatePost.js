import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


function UpdatePost() {
    const[ID,setID] = useState("");
    const[Name,setName] = useState("");
    const[Quantity,setQuantity] = useState("");

  const { id } = useParams();
  
  console.log(id);



  const getPost = () => {
    axios
      .get("http://localhost:8889/post/getID/" +id)
      .then((res) => {

         console.log(res.data.ID);
         console.log(res.data.Name);
         console.log(res.data.Quantity);
         setID(res.data.ID);
         setName(res.data.Name);
         setQuantity(res.data.Quantity);

        
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  useEffect(() => {
    getPost();
  }, []);

     //page refresh function

     function refreshPage() {
        window.location.reload(false);
      }

 
      
  return (



       <div className="order_bground" style={{ zIndex: 98,height:"100%" }} >
    {/* <div className="bground" style={{ zIndex: 98 }} > */}
      
              
                    <div className="container">
                    <div className='border' >
                    <div className='col-md-8 mt-4 mx-auto'>
                    <h1 className='header1'>Update Item</h1>
                        <form className='needs-validation' 
                                onSubmit={(e) => {
                                  e.preventDefault();
                        
                                  const newPost = {
                                    ID,
                                    Name,
                                    Quantity
                                  };
                                  console.log("huttooo", newPost);
                                  axios
                                    .put("http://localhost:8889/post/update/" +id, newPost)
                                    .then(() => {
                                      alert("item updated",refreshPage());
                                    })
                                    .catch((err) => {
                                      alert(err);
                                    });
                                }}
                              >
                        

                            <div className='form-group' style={{marginBottom:'15px'}}>
                                <label style={{marginBottom:'5px'}} className="lable">Item Code</label>
                                <input value={ID} type="text"className="form-control" name='id' placeholder='Enter Item Code' 
                                onChange={(event)=>{
                                    setID(event.target.value);

                                }}/>
                            </div>

                            <div className='form-group' style={{marginBottom:'15px'}}>
                                <label style={{marginBottom:'5px'}} className="lable">Description</label>
                                <input value={Name} type="text"className="form-control"name='name'placeholder='Enter description'
                                        onChange={(event)=>{
                                            setName(event.target.value);
                            
                                    }}/>
                            </div>

                            <div className='form-group' style={{marginBottom:'15px'}}>
                                <label style={{marginBottom:'5px'}} className="lable">Amount </label>
                                <input value={Quantity} type="number"className="form-control"name='amount'placeholder='Enter amount'
                                onChange={(event)=>{
                                    setQuantity(event.target.value);
                        
                                }} />
                            </div>

                        

                        

                            <button className='btn btn-success' type='submit' style={{marginTop:'15px'}}>Update</button>
                            &nbsp;
                            <a className='btn btn-danger' href="/postDetails" style={{marginTop:'15px'}} > Back</a>
                        </form>
                    </div>
                    </div>
                    <br></br>
                    <br></br>
                </div>
                </div>
  );
}

export default UpdatePost;