import React,{useState} from "react"
import axios from "axios"
import '../Finance/.css'
import Navbar from "./FinanceNavbar"



export default function BankD(){

        const[date,setDate] = useState("");
        const[chequeNo,setChequeNo] = useState("");
        const[description,setDescription] = useState("");
        const[amount,setAmount] = useState("");


        function sendData(e){
            e.preventDefault();
            

            const newBank ={
                date ,
                chequeNo,
                description,
                amount
            }

            function refreshPage() {
                window.location.reload(false);
              }


            axios.post("http://localhost:8889/DebitBankLedger/add",newBank).then(()=>{
                alert("bank debitted",refreshPage())
            }).catch((err)=> {
                alert(err)
            })
            console.log(newBank)
        }

       
    return(

        <div>
        <Navbar/>
        <div className="order_bground" style={{ zIndex: 98,height:"100vh" }}>
        <div className="container">
        <div className='border' >
        <div className='col-md-8 mt-4 mx-auto'>
            <h2 className='h4 mb-3 font-weight-normal'><center>Add Bank Debit</center></h2>
            <form className='needs-validation' noValidate onSubmit={sendData}>
                <a class="btn btn-dark" href="/bankD" style={{marginBottom:'40px'}}> Debit</a>
                <a class="btn btn-dark" href="/bankC" style={{marginLeft:'20px',marginBottom:'40px'}}> Credit</a>
            

                <div className='form-group' style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}} className="lable">Date</label>
                    <input type="date"className="form-control" name='id' placeholder='Enter Date' 
                    onChange={(event)=>{
                        setDate(event.target.value);

                    }}/>
                </div>

                <div className='form-group' style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}} className="lable">Cheque number</label>
                    <input type="number"className="form-control"name='name'placeholder='Enter cheque number'
                            onChange={(event)=>{
                                setChequeNo(event.target.value);
                
                        }}/>
                </div>

                <div className='form-group' style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}} className="lable">Description</label>
                    <input type="text"className="form-control"name='name'placeholder='Enter description'
                            onChange={(event)=>{
                                setDescription(event.target.value);
                        }}/>
                </div>

                <div className='form-group' style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}} className="lable">Amount </label>
                    <input type="number"className="form-control"name='amount'placeholder='Enter amount'
                    onChange={(event)=>{
                        setAmount(event.target.value);
            
                    }} />
                </div>

            

            

                <button className='btn btn-success' type='submit' style={{marginTop:'15px'}}>Add</button>

                <a className='btn btn-danger' href="/displayBank" style={{marginTop:'15px', marginLeft:'20px'}} > Back</a>
            </form>
        </div>
        </div>
        </div>
    </div>
          </div>
    )
}