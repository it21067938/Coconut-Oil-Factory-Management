import React, { useState } from 'react'
import axios from 'axios';
import '../Inventory/.css'
import Navbar from "./CoconutStockNavBar"
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export default function CoconutStockAdd(){

    const[locationCode,setLid] = useState("");
    const[supplierName,setSname] = useState("");
    const[quantity,setQuantity] = useState("");
    const[date,setDate] = useState("");

    function sendData(e){
        e.preventDefault();
        

        const newStock ={
            locationCode,
            supplierName,
            quantity,
            date
        }
        const ph = /^[l\-0-9]+$/;

        if ((!ph.test(String(locationCode))) || (locationCode.length != 4)) {
            alert("Invalid Location Code !", "location code should be valid pattern", "error");
          } else{

        axios.post("http://localhost:8889/CoconutStock/add",newStock).then(()=>{
            alert("Stock added")
        }).catch((err)=> {
            alert(err)
        })
        console.log(newStock)
    }
    }


    return (
        <div>
        <Navbar/>
        <div className="order_bground" style={{ zIndex: 98 }} >
        <div className="container">
        <div className='border' style={{backgroundColor: "#ffff" }} >
        <div className='col-md-8 mt-4 mx-auto'>
            <h2 className='h4 mb-3 font-weight-normal'><center>Add Stock</center></h2>
            <form className='needs-validation' noValidate onSubmit={sendData}>

            <div className='form-group' style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}} className="lable">Location Code</label>
                        <input type="text"className="form-control" name='id' placeholder='Enter Location Code' 
                        onChange={(event)=>{
                            setLid(event.target.value);

                        }}/>
                    </div>

                    <div className='form-group' style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}} className="lable">Supplier Name</label>
                        <input type="text"className="form-control"name='name'placeholder='Enter Supplier Name'
                                onChange={(event)=>{
                                    setSname(event.target.value);
                    
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
                        <label style={{marginBottom:'5px'}} className="lable">Date</label>
                        <input type="date"className="form-control" name='date' placeholder='Enter date'
                        onChange={(event)=>{
                            setDate(event.target.value);

                        }}/>
                    </div>

            

                <button className='btn btn-success' type='submit' style={{marginTop:'15px'}}>Add</button>

                <a className='btn btn-danger' href="/coconutstock" style={{marginTop:'15px',marginLeft:"9px"}} ><ChevronLeftIcon/>Back  </a>
            </form>
        </div>
        </div>
    </div>
        </div>
        </div>
    )
    }

