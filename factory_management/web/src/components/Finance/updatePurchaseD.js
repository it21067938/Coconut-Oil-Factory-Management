import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./FinanceNavbar";
import { useParams } from "react-router-dom";


function UpdatePurchaseD() {
    const[Date,setDate] = useState("");
    const[SupplierName,setSupplierName] = useState("");
    const[MaterialType,setMaterialType] = useState("");
    const[Amount,setAmount] = useState("");

  const { id } = useParams();
  
  console.log(id);



  const getPurchaseD = () => {
    axios
      .get("http://localhost:8889/DebitPurchaseLedger/getPurchaseD/" +id)
      .then((res) => {

        console.log(res.data);
        
         console.log(res.data.MaterialType);
         console.log(res.data.Amount);
         setDate(res.data.Date);
         setSupplierName(res.data.SupplierName);
         setMaterialType(res.data.MaterialType);
         setAmount(res.data.Amount);

        
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  useEffect(() => {
    getPurchaseD();
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
              <h2 className='h4 mb-3 font-weight-normal'><center>Update Purchase Debit</center></h2>
              
              <form className='needs-validation' 
              onSubmit={(e) => {
                e.preventDefault();
      
                const newPurchaseD = {
                 Date,
                  SupplierName,
                 
                 MaterialType,
                 Amount
                };
                console.log("Purchase debit updated", newPurchaseD);
                axios
                  .put("http://localhost:8889/DebitPurchaseLedger/update/" +id, newPurchaseD)
                  .then(() => {
                    alert("Purchase debit updated",refreshPage());
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
                  <label style={{marginBottom:'5px'}} className="lable">Supplier Name</label>
                  <input value={SupplierName} type="text"className="form-control"name='name'placeholder='Enter Supplier name'
                        onChange={(event)=>{
                          setSupplierName(event.target.value);
            
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

                  <a className='btn btn-danger' href="/displayPurchase" style={{marginTop:'15px', marginLeft:'20px'}} > Back</a>
              </form>
          </div>
          </div>
          </div>
          </div>
                    </div>
  );
}

export default UpdatePurchaseD;