import React,{useState} from "react"
import axios from "axios"
import '../Finance/.css'
import Navbar from "./FinanceNavbar";



export default function SalesD(){

        const[date,setDate] = useState("");
        const[buyerName,setBuyerName] = useState("");
        const[materialType,setMaterialType] = useState("");
        const[amount,setAmount] = useState("");


        function sendData(e){
            e.preventDefault();
            

            const newSales ={
                date ,
                buyerName,
                materialType,
                amount
            }

            function refreshPage() {
                window.location.reload(false);
              }


            axios.post("http://localhost:8889/DebitSalesLedger/add",newSales).then(()=>{
                alert("Sales debited",refreshPage())
            }).catch((err)=> {
                alert(err)
            })
            console.log(newSales)
        }

       
    return(

        // <div className="container">
        //     <div className='border'style={{height:"600px"}} >
            
        //         <h1 className='header1'> Sales Ledger Debit </h1>

        //         <a className="debit" href="/salesD" > Debit</a>
        //         <a className="credit"  href="/salesC"> Credit</a>
        //         <form className='needs-validation' noValidate onSubmit={sendData}>

        //             <div className='form-group' style={{marginBottom:'15px',marginTop:"20px"}}>
        //                 <label style={{marginBottom:'5px'}} className="lable">Date</label>
        //                 <input type="date"className="form-control" name='date' placeholder='Enter date'
        //                 onChange={(event)=>{
        //                     setDate(event.target.value);

        //                 }}/>
        //             </div>

        //             <div className='form-group' style={{marginBottom:'15px'}}>
        //                 <label style={{marginBottom:'5px'}} className="lable">Buyer Name</label>
        //                 <input type="text"className="form-control"name='buyer'placeholder='Enter buyer name'
        //                         onChange={(event)=>{
        //                             setBuyerName(event.target.value);
                    
        //                      }}/>
        //             </div>

        //             <div className='form-group' style={{marginBottom:'15px'}}>
        //                 <label style={{marginBottom:'5px'}} className="lable">Material type</label>
        //                 <input type="text"className="form-control"name='description'placeholder='Enter material type'
        //                         onChange={(event)=>{
        //                             setMaterialType(event.target.value);
                    
        //                      }}/>
        //             </div>

        //             <div className='form-group' style={{marginBottom:'15px'}}>
        //                 <label style={{marginBottom:'5px'}} className="lable">Amount </label>
        //                 <input type="number"className="form-control"name='amount'placeholder='Enter amount'
        //                 onChange={(event)=>{
        //                     setAmount(event.target.value);
                
        //                  }} />
        //             </div>

                

        //             <button className='btn btn-success mr-' type='submit' style={{marginTop:'15px'}}>Add</button>

        //             <a className='btn btn-danger' href="/displaySales" style={{marginTop:'15px'}} > Back</a>
        //         </form>
        //     </div>
           
        // </div>


        <div>
        <Navbar/>
        <div className="order_bground" style={{ zIndex: 98,height:"100vh" }}>
        <div className="container">
        <div className='border' >
        <div className='col-md-8 mt-4 mx-auto'>
            <h2 className='h4 mb-3 font-weight-normal'><center>Add Sales Debit</center></h2>
            
            <form className='needs-validation' noValidate onSubmit={sendData}>
            <a class="btn btn-dark" href="/salesD" style={{marginBottom:'40px'}}> Debit</a>
            <a class="btn btn-dark" href="/salesC" style={{marginLeft:'20px',marginBottom:'40px'}}> Credit</a>
            
            

                <div className='form-group' style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}} className="lable">Date</label>
                    <input type="date"className="form-control" name='id' placeholder='Enter Date' 
                    onChange={(event)=>{
                        setDate(event.target.value);

                    }}/>
                </div>

                <div className='form-group' style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}} className="lable">Buyer Name</label>
                    <input  type="text"className="form-control"name='name'placeholder='Enter Buyer name'
                            onChange={(event)=>{
                                setBuyerName(event.target.value);
                
                        }}/>
                </div>

                <div className='form-group' style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}} className="lable">Material type</label>
                    <input  type="text"className="form-control"name='name'placeholder='Enter Material type'
                            onChange={(event)=>{
                            setMaterialType(event.target.value);
                
                        }}/>
                </div>

                <div className='form-group' style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}} className="lable">Amount </label>
                    <input  type="number"className="form-control"name='amount'placeholder='Enter amount'
                    onChange={(event)=>{
                        setAmount(event.target.value);
            
                    }} />
                </div>

            

            

                <button className='btn btn-success' type='submit' style={{marginTop:'15px'}}>Add</button>

                <a className='btn btn-danger' href="/displaySales" style={{marginTop:'15px', marginLeft:'20px'}} > Back</a>
            </form>
        </div>
        </div>
    </div>
    </div>
              </div>

    )
}