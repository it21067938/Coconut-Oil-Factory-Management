import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import '../Inventory/.css'
import Navbar from "./InventoryNavBar"

function InventoryUpdate() {

    const[productId,setPid] = useState("");
    const[productName,setPname] = useState("");
    const[quantity,setQuantity] = useState("");
    const[costPrice,setCostprice] = useState("");

    const {id} = useParams();
    console.log(id);
    
    const getInventory = () => {
        axios.get("http://localhost:8889/Inventory/get/"+id)
        .then((res) => {
          
            setPid(res.data.productId);
            setPname(res.data.productName);
            setQuantity(res.data.quantity);
            setCostprice(res.data.costPrice);
            
        })
        .catch((err) => {
            alert(err.message);
        });
    };

     useEffect(() => getInventory(), []);


    
    return (
        <div>
            <Navbar/>
            <div className="order_bground" style={{ zIndex: 98 }} >
            <div className="container">
        
                <div className='border' style={{backgroundColor: "#ffff" }} >
                    <div className='col-md-8 mt-4 mx-auto'>
                        <h2 className='h4 mb-3 font-weight-normal'><center>Update Inventory</center></h2>
                        <form onSubmit={(e) => {
                    e.preventDefault();

                    const newProduct = {
                        productId,
                        productName,
                        quantity,
                        costPrice,
                    }
                    
                    axios.put("http://localhost:8889/Inventory/update/"+id, newProduct)
                    .then(() => {
                        alert("Product updated");
                    })
                    .catch((err) => {
                        alert(err);
                    })
                }}>
                        <div className='form-group' style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}} className="lable">Product ID</label>
                            <input type="text"className="form-control" name='id' placeholder='Enter ProductID'
                            value={productId}

                            onChange={(e)=>{
                                setPid(e.target.value);

                            }}/>
                        </div>

                        <div className='form-group' style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}} className="lable">Product Name</label>
                            <input type="text"className="form-control"name='name'placeholder='Enter Product Name'
                            value={productName}

                                    onChange={(e)=>{
                                    setPname(e.target.value);
                        
                                }}/>
                        </div>

                        <div className='form-group' style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}} className="lable">Quantity (KG) </label>
                            <input type="number"className="form-control"name='amount'placeholder='Enter Quantity' value={quantity}

                            onChange={(e)=>{
                            setQuantity(e.target.value);
                    
                            }} />
                        </div>

                        <div className='form-group' style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}} className="lable">Cost Price </label>
                            <input type="number"className="form-control"name='amount'placeholder='Enter Cost Price' value={costPrice}

                            onChange={(e)=>{
                            setCostprice(e.target.value);
                    
                            }} />
                        </div>

                    

                        <button className='btn btn-success' type='submit' href="/inventory" style={{marginTop:'15px'}}>Confirm</button>

                        <a className='btn btn-danger' href="/inventory" style={{marginTop:'15px',marginLeft:"9px"}} > Back</a>
                            </form>
                    </div>
                </div>
            </div>
         </div>
         </div>
            
    );
};

export default InventoryUpdate;