import React,{useState,useEffect} from "react"
import axios from "axios"
import '../Finance/.css'
import Navbar from "./FinanceNavbar"


export default function AddDetails(){

        const[description,setDesciption] = useState("");
        const[quantity,setQuantity] = useState("");
        const[rate,setRate] = useState("");
        
        
        function SendData(e){
            e.preventDefault();
            
        
                const newItems ={
                    description,
                    quantity ,
                    rate
                    
                }
                function refreshPage() {
                    window.location.reload(false);
                  }
                axios.post("http://localhost:8889/itemsDetails/add",newItems).then(()=>{
                    alert("items added",refreshPage())
                    
                }).catch((err)=> {
                    alert(err)
                })
                console.log(newItems)
                
            }
           
    
    return(





    
        <div>
                    <Navbar/>
                    <div className="container">
                    <div className='border' >
                    <div className='col-md-8 mt-4 mx-auto'>
                        <h2 className='h4 mb-3 font-weight-normal'><center>Generate Invoice</center></h2>
                        <form className='needs-validation' noValidate onSubmit={SendData}>

                            <div className='form-group' style={{marginBottom:'15px'}}>
                                <label style={{marginBottom:'5px'}} className="lable">InvoiceNo</label>
                                <input type="text"className="form-control" name='id' placeholder='Enter Date' 
                                onChange={(event)=>{
                                    setInvoiceNo(event.target.value);

                                }}/>
                            </div>

                            <div className='form-group' style={{marginBottom:'15px'}}>
                                <label style={{marginBottom:'5px'}} className="lable">Date</label>
                                <input type="date"className="form-control"name='name'placeholder='Enter date'
                                        onChange={(event)=>{
                                            setDate(event.target.value);
                            
                                    }}/>
                            </div>

                            <div className='form-group' style={{marginBottom:'15px'}}>
                                <label style={{marginBottom:'5px'}} className="lable">Company Name </label>
                                <input type="text"className="form-control"name='amount'placeholder='Enter Name'
                                onChange={(event)=>{
                                    setCompayName(event.target.value);
                        
                                }} />
                            </div>

                            <div className='form-group' style={{marginBottom:'15px'}}>
                                <label style={{marginBottom:'5px'}} className="lable">Address </label>
                                <input type="text"className="form-control"name='amount'placeholder='Enter address'
                                onChange={(event)=>{
                                    setAddress(event.target.value);
                        
                                }} />
                            </div>

                        

                        

                            <button className='btn btn-success' type='submit' style={{marginTop:'15px'}}>Add</button>

                            <a className='btn btn-danger' href="/disI" style={{marginTop:'15px',marginLeft: '20px'}} > Back</a>
                        </form>
                    </div>
                    </div>
                </div>
                  </div>


    )
}