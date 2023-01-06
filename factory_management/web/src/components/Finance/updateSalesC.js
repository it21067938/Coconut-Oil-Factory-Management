import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./FinanceNavbar";
import { useParams } from "react-router-dom";


function UpdateSalesC() {
    const[Date,setDate] = useState("");
    const[BuyerName,setBuyerName] = useState("");
    const[MaterialType,setMaterialType] = useState("");
    const[Amount,setAmount] = useState("");

  const { id } = useParams();
  
  console.log(id);



  const getSalesC = () => {
    axios
      .get("http://localhost:8889/CreditSalesLedger/getSalesC/" +id)
      .then((res) => {

        console.log(res.data);
        
        
         setDate(res.data.Date);
         setBuyerName(res.data.BuyerName);
         setMaterialType(res.data.MaterialType);
         setAmount(res.data.Amount);

        
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  useEffect(() => {
    getSalesC();
  }, []);

     //page refresh function

     function refreshPage() {
        window.location.reload(false);
      }

 
      
  return (


    <div>
    <Navbar/>
    <div className="order_bground" style={{ zIndex: 98,height:"100vh" }}>
    <div className="container">
    <div className='border' >
    <div className='col-md-8 mt-4 mx-auto'>
        <h2 className='h4 mb-3 font-weight-normal'><center>Update Sales Credit</center></h2>
        
        <form className='needs-validation' 
                       onSubmit={(e) => {
                        e.preventDefault();
              
                        const newSalesC = {
                              Date,
                              BuyerName,
                              MaterialType,
                              Amount
                        };
                        console.log("Purchase credit updated", newSalesC);
                        axios
                          .put("http://localhost:8889/CreditSalesLedger/update/" +id, newSalesC)
                          .then(() => {
                            alert("Sales credit updated",refreshPage());
                          })
                          .catch((err) => {
                            alert(err);
                          });
                      }}
            >
        
        
        

            <div className='form-group' style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}} className="lable">Date</label>
                <input value={Date} type="date"className="form-control" name='id' placeholder='Enter Date' 
                onChange={(event)=>{
                    setDate(event.target.value);

                }}/>
            </div>

            <div className='form-group' style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}} className="lable">Buyer Name</label>
                <input value={BuyerName} type="text"className="form-control"name='name'placeholder='Enter Buyer name'
                        onChange={(event)=>{
                          setBuyerName(event.target.value);
            
                    }}/>
            </div>

            <div className='form-group' style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}} className="lable">Material type</label>
                <input value={MaterialType} type="text"className="form-control"name='name'placeholder='Enter Material type'
                        onChange={(event)=>{
                          setMaterialType(event.target.value);
            
                    }}/>
            </div>

            <div className='form-group' style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}} className="lable">Amount </label>
                <input value={Amount} type="number"className="form-control"name='amount'placeholder='Enter amount'
                onChange={(event)=>{
                    setAmount(event.target.value);
        
                }} />
            </div>

        

        

            <button className='btn btn-success' type='submit' style={{marginTop:'15px'}}>Update</button>

            <a className='btn btn-danger' href="/displaySales" style={{marginTop:'15px', marginLeft:'20px'}} > Back</a>
        </form>
    </div>
    </div>
</div>
</div>
          </div>

  );
}

export default UpdateSalesC;