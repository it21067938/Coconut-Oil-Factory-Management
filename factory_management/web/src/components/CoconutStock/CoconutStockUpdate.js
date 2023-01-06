import React, { useState,useEffect } from 'react'
import axios from 'axios';
import '../Inventory/.css'
import { useParams } from "react-router-dom";
import Navbar from "./CoconutStockNavBar"

function CoconutStockUpdate(){
    const[locationCode,setLid] = useState("");
    const[supplierName,setSname] = useState("");
    const[quantity,setQuantity] = useState("");
    const[date,setDate] = useState("");

    const {id} = useParams();
    console.log(id);

    const getCoconut = () => {
        axios.get("http://localhost:8889/CoconutStock/get/"+id)
        .then((res) => {
          
            setLid(res.data.locationCode);
            setSname(res.data.supplierName);
            setQuantity(res.data.quantity);
            setDate(res.data.date);
            
        })
        .catch((err) => {
            alert(err.message);
        });
    };

    useEffect(() => getCoconut(), []);


    return (
        <div>
            <Navbar/>
            <div className="order_bground" style={{ zIndex: 98 }} >
            <div className="container">
        
                <div className='border' style={{backgroundColor: "#ffff" }}>
                    <div className='col-md-8 mt-4 mx-auto'>
                        <h2 className='h4 mb-3 font-weight-normal'><center>Update CoconutStock</center></h2>
                        <form onSubmit={(e) => {
                    e.preventDefault();

                    const newStock = {
                        locationCode,
                        supplierName,
                        quantity,
                        date,
                    }
                    
                    axios.put("http://localhost:8889/CoconutStock/update/"+id, newStock)
                    .then(() => {
                        alert("Stock updated");
                    })
                    .catch((err) => {
                        alert(err);
                    })
                }}>
                        <div className='form-group' style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}} className="lable">Location Code</label>
                            <input type="text"className="form-control" name='id' placeholder='Enter ProductID'
                            value={locationCode}

                            onChange={(e)=>{
                                setLid(e.target.value);

                            }}/>
                        </div>

                        <div className='form-group' style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}} className="lable">Supplier Name</label>
                            <input type="text"className="form-control"name='name'placeholder='Enter Product Name'
                            value={supplierName}

                                    onChange={(e)=>{
                                        setSname(e.target.value);
                        
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
                            <label style={{marginBottom:'5px'}} className="lable">Date </label>
                            <input type="date"className="form-control"name='amount'placeholder='Enter Cost Price' value={date}

                            onChange={(e)=>{
                                setDate(e.target.value);
                    
                            }} />
                        </div>

                    

                        <button className='btn btn-success' type='submit' href="/coconutstock" style={{marginTop:'15px'}}>Confirm</button>

                        <a className='btn btn-danger' href="/coconutstock" style={{marginTop:'15px',marginLeft:"9px"}} > Back</a>
                            </form>
                    </div>
                </div>
            </div>
         </div>
         </div>
            
    );  
};
export default CoconutStockUpdate;
