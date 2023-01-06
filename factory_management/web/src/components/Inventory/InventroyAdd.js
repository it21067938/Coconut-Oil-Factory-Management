import React, {useState } from 'react'
import axios from 'axios';
import '../Inventory/.css'
import Navbar from "./InventoryNavBar"
import { Link } from 'react-router-dom'


export default function InventoryAdd(){

        const[pid,setPid] = useState("");
        const[pname,setPname] = useState("");
        const[quantity,setQuantity] = useState("");
        const[price,setCostprice] = useState("");

        function sendData(e){
            e.preventDefault();
            

            const newInventory ={
                pid,
                pname,
                quantity,
                price
            }
            const ph = /^[a-zA-Z\-0-9]+$/;

            if ((!ph.test(String(pid))) || (pid.length != 4)) {
                alert("Invalid Product ID !", "product id should be valid pattern", "error");
              } else{

            axios.post("http://localhost:8889/Inventory/add",newInventory).then(()=>{
                alert("Product added")
            }).catch((err)=> {
                alert(err)
            })
            console.log(newInventory)
        }
        }

    
        return (
            <div>
            <Navbar/>
            <div className="order_bground" style={{ zIndex: 98 }} >
            <div className="container">
            <div className='border' style={{backgroundColor: "#ffff" }}>
            <div className='col-md-8 mt-4 mx-auto'>
                <h2 className='h4 mb-3 font-weight-normal'><center>Add Inventory</center></h2>
                <form className='needs-validation' noValidate onSubmit={sendData}>

                    <div className='form-group' style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}} className="lable">Product ID</label>
                        <input type="text"className="form-control" name='id' placeholder='Enter ProductID' 
                        onChange={(event)=>{
                            setPid(event.target.value);

                        }}/>
                    </div>

                    <div className='form-group' style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}} className="lable">Product Name</label>
                        <input type="text"className="form-control"name='name'placeholder='Enter Product Name'
                                onChange={(event)=>{
                                setPname(event.target.value);
                    
                             }}/>
                    </div>

                    <div className='form-group' style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}} className="lable">Quantity (KG) </label>
                        <input type="number"className="form-control"name='amount'placeholder='Enter Quantity'
                        onChange={(event)=>{
                           setQuantity(event.target.value);
                
                         }} />
                    </div>

                    <div className='form-group' style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}} className="lable">Cost Price </label>
                        <input type="number"className="form-control"name='amount'placeholder='Enter Cost Price'
                        onChange={(event)=>{
                           setCostprice(event.target.value);
                
                         }} />
                    </div>

                

                    <button className='btn btn-success' type='submit' href="/inventory" style={{marginTop:'15px'}}> Add</button>

                    <a className='btn btn-danger' href="/inventory" style={{marginTop:'15px' ,marginLeft:"9px"}}  >Back</a>
                </form>
            </div>
            </div>
        </div>
            </div>
            </div>
        )
        }

