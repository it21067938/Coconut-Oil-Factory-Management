import React,{useState,useEffect} from "react"
import axios from "axios"
import '../Finance/.css'
import Navbar from "./FinanceNavbar"



export default function AddDetails(){

        const[invoiceNo,setInvoiceNo] = useState("");
        const[date,setDate] = useState("");
        const[companyName,setCompanyName] = useState("");
        const[address,setAddress] = useState("");
        const[contactNo,setContactNo] = useState("");
        
        

// add item details
            
        const[description,setDesciption] = useState("");
        const[quantity,setQuantity] = useState("");
        const[rate,setRate] = useState("");
        
        
        function sendData(e){
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

            
                //page refresh function
            
                function refreshPage() {
                  window.location.reload(false);
                }

           ////update function                    



                    const getDetails = () => {
                        axios
                        .get("http://localhost:8889/invoiceDetails/view")
                        .then((res) => {

                        

                            // console.log(res.data[0].Date);
                            // console.log(res.data[0].InvoiceNo);
                            // console.log(res.data[0].CompanyName);
                            // console.log(res.data[0].Address);
                            // console.log(res.data[0].ContactNo);
                            setInvoiceNo(res.data[0].InvoiceNo);
                            setDate(res.data[0].Date);
                            setCompanyName(res.data[0].CompanyName);
                            setAddress(res.data[0].Address);
                            setContactNo(res.data[0].ContactNo);
                            
                        })
                        .catch((err) => {
                            alert(err.message);
                        });
                    };

                    useEffect(() => {
                        getDetails();
                    }, []);

                    
                
   
    return(





    
        <div>
                    <Navbar/>
                    <div className="order_bground" style={{ zIndex: 98,height:"100vh" }}>
                    <div className="container">
                    <div className='border'style={{height:'850px',marginBottom:'100px',width:"650px"}} >
                    <div className='col-md-8 mt-4 mx-auto'>
                        <h2 className='h4 mb-3 font-weight-normal'><center>Generate Invoice</center></h2>
                        <form className='needs-validation'  onSubmit={(e) => {
                                  e.preventDefault();

                                  const newDetails = {
                                    invoiceNo,
                                    date ,
                                    companyName,
                                    address,
                                    contactNo
                                  };
                                  console.log("data added to the invoice", newDetails);
                                  axios
                                    .put("http://localhost:8889/invoiceDetails/update", newDetails)
                                    .then(() => {
                                      alert("data added to the invoice",refreshPage());
                                    })
                                    .catch((err) => {
                                      alert(err);
                                    });
                                }}>

                            <div className='form-group' style={{marginBottom:'15px'}}>
                                <label style={{marginBottom:'5px'}} className="lable">InvoiceNo</label>
                                <input value={invoiceNo} type="text"className="form-control" name='id' placeholder='Enter Invoice Number' 
                                onChange={(event)=>{
                                    setInvoiceNo(event.target.value);

                                }}/>
                            </div>

                            <div className='form-group' style={{marginBottom:'15px'}}>
                                <label style={{marginBottom:'5px'}} className="lable">Date</label>
                                <input value={date} type="date"className="form-control"name='name'placeholder='Enter date'
                                        onChange={(event)=>{
                                            setDate(event.target.value);
                            
                                    }}/>
                            </div>

                            <div className='form-group' style={{marginBottom:'15px'}}>
                                <label style={{marginBottom:'5px'}} className="lable">Company Name </label>
                                <input value={companyName} type="text"className="form-control"name='amount'placeholder='Enter Name'
                                onChange={(event)=>{
                                    setCompanyName(event.target.value);
                        
                                }} />
                            </div>

                            <div className='form-group' style={{marginBottom:'15px'}}>
                                <label style={{marginBottom:'5px'}} className="lable">Address </label>
                                <input value={address} type="text"className="form-control"name='amount'placeholder='Enter address'
                                onChange={(event)=>{
                                    setAddress(event.target.value);
                        
                                }} />
                            </div>
                            <div className='form-group' style={{marginBottom:'15px'}}>
                                <label style={{marginBottom:'5px'}} className="lable">ContactNo </label>
                                <input value={contactNo} type="text"className="form-control"name='amount'placeholder='Enter contact Number'
                                onChange={(event)=>{
                                    setContactNo(event.target.value);
                        
                                }} />
                            </div>

                        

                        

                            <button className='btn btn-success' type='submit' style={{marginTop:'15px',marginLeft:'110px'}}>Add Customer details</button>

                           
                        </form>
                            </div>

                                            <form noValidate onSubmit={sendData} style={{marginTop:'50px',marginLeft:'10px',width:"600px"}}>
                                                    <input className='textfield' type="text" onChange={(event) => {
                                                        setDesciption(event.target.value);
                                                    }} placeholder='Enter Description' />

                                                    <input className='textfield' type="number" onChange={(event) => {
                                                        setQuantity(event.target.value);
                                                    }} placeholder='Enter Quantity' />

                                                    <input className='textfield' type="number" onChange={(event) => {
                                                        setRate(event.target.value);
                                                    }} placeholder='Enter Rate' />

                                                

                                                    <button className='btn btn-success' type='submit' style={{marginLeft:'50px'}}>Add</button>
                                    </form>

                                <a className='btn btn-danger' href="/dash" style={{marginTop:'35px',marginLeft: '120px'}} > Back</a>
                                <a className='btn btn-info' href="/preview" style={{marginTop:'35px',marginRight:"200px"}} > preview</a>
                            </div>
                    
            </div>
            

           <br/><br/><br/>
</div>
</div>


    )
}