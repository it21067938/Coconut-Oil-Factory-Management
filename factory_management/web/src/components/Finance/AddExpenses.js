import React,{useState} from "react"
import axios from "axios"
import '../Finance/.css'
import Navbar from "./FinanceNavbar"

export default function AddExpenses(){

        const[date,setDate] = useState("");
        const[description,setDescription] = useState("");
        const[amount,setAmount] = useState("");


        function sendData(e){
            e.preventDefault();
            

            const newExpenses ={
                date,
                description,
                amount
            }
            function refreshPage() {
                window.location.reload(false);
              }

            axios.post("http://localhost:8889/ManageExpenses/add",newExpenses).then(()=>{
                alert("Expenses added",refreshPage())
            }).catch((err)=> {
                alert(err)
            })
            console.log(newExpenses)
        }
    return(

    
<div>
            <Navbar/>
            <div className="order_bground" style={{ zIndex: 98,height:"100vh" }} >
            <div className="container">
            <div className='border' style={{height:"500px"}}>
            <div className='col-md-8 mt-4 mx-auto'>
                <h2 className='h4 mb-3 font-weight-normal'style={{color:"white"}}><center>Add Expenses</center></h2>
                <form className='needs-validation' noValidate onSubmit={sendData}>

                    <div className='form-group' style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}} className="lable">Date</label>
                        <input type="date"className="form-control" name='id' placeholder='Enter Date' 
                        onChange={(event)=>{
                            setDate(event.target.value);

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

                  

                

                    <button className='btn btn-success' type='submit' style={{marginTop:'15px',marginRight:"20px"}}>Add</button>

                    <a className='btn btn-danger' href="/disE" style={{marginTop:'15px',marginLeft:"20px"}} > Back</a>
                </form>
            </div>
            </div>
            </div>
        </div>
            </div>







    )
}