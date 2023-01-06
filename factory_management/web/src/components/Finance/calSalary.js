import React,{useState} from "react"
import axios from "axios"
import '../Finance/.css'
import Navbar from "./FinanceNavbar"

export default function CalSalary(){

        const[EmpID,setEmpID] = useState("");
        const[month,setMonth] = useState("");
        const[name,setName] = useState("");
        const[basicsalary,setBasicSalary] = useState("");
        const[fixedallowance,setFixedAllowance] = useState("");
        const[otrate,setOtRate] = useState("");
        const[othours,setOtHours] = useState("");
        const[salaryadvanced,setSalaryAdvanced] = useState("");
        const[deduction,setDeductions] = useState("");
        



        function sendData(e){
            e.preventDefault();
            

            const newSalary ={
                EmpID,
                month,
                name,
                basicsalary,
                fixedallowance,
                otrate,
                othours,
                salaryadvanced,
                deduction,

            }
            function refreshPage() {
                window.location.reload(false);
              }

            axios.post("http://localhost:8889/CalculateSalary/add",newSalary).then(()=>{
                alert("Salary calculated ",refreshPage())
            }).catch((err)=> {
                alert(err)
            })
            console.log(newSalary)
        }
    return(

        <div>
        <Navbar/>
        <div className="order_bground" style={{ zIndex: 98,height:"100vh" }} >
        <div className="container">
        <div className='border' style={{height:'950px'}}  >
        <div className='col-md-8 mt-4 mx-auto'>
        <h2 className='h4 mb-3 font-weight-normal'style={{color:"white"}}><center>Calculate Salary</center></h2>
      
            <form className='needs-validation' noValidate onSubmit={sendData}>

                <div className='form-group' style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}} className="lable">EmpID</label>
                    <input type="text"className="form-control" name='id' placeholder='Enter Employee ID' 
                    onChange={(event)=>{
                        setEmpID(event.target.value);

                    }}/>
                </div>

                <div className='form-group' style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}} className="lable">Month</label>
                    <input type="text"className="form-control"name='name'placeholder='Enter month'
                            onChange={(event)=>{
                                setMonth(event.target.value);
                
                        }}/>
                </div>

                <div className='form-group' style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}} className="lable">Name</label>
                    <input type="text"className="form-control"name='name'placeholder='Enter Name'
                            onChange={(event)=>{
                                setName(event.target.value);
                
                        }}/>
                </div>

                <div className='form-group' style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}} className="lable">Basic Salary </label>
                    <input type="number"className="form-control"name='amount'placeholder='Enter Basic salary'
                    onChange={(event)=>{
                        setBasicSalary(event.target.value);
            
                    }} />
                </div>

                <div className='form-group' style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}} className="lable">Fixed allowance</label>
                    <input type="number"className="form-control"name='amount'placeholder='Enter Fixed allowance'
                    onChange={(event)=>{
                        setFixedAllowance(event.target.value);
            
                    }} />
                </div>

                <div className='form-group' style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}} className="lable">OT Rate </label>
                    <input type="number"className="form-control"name='amount'placeholder='Enter OT rate'
                    onChange={(event)=>{
                        setOtRate(event.target.value);
            
                    }} />
                </div>

                <div className='form-group' style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}} className="lable">OT Hours</label>
                    <input type="number"className="form-control"name='amount'placeholder='Enter Ot Hours'
                    onChange={(event)=>{
                        setOtHours(event.target.value);
            
                    }} />
                </div>

                <div className='form-group' style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}} className="lable">Salary Advanced </label>
                    <input type="number"className="form-control"name='amount'placeholder='Enter Salary Advanced'
                    onChange={(event)=>{
                        setSalaryAdvanced(event.target.value);
            
                    }} />
                </div>

                <div className='form-group' style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}} className="lable">Salary Deduction</label>
                    <input type="number"className="form-control"name='amount'placeholder='Enter salary Deduction'
                    onChange={(event)=>{
                        setDeductions(event.target.value);
            
                    }} />
                </div>

            

            

                <button className='btn btn-success' type='submit' style={{marginTop:'15px',marginLeft:"80px"}}>Calculate Salary</button>

                <a className='btn btn-danger' href="/salD" style={{marginTop:'20px',marginLeft:'110px'}} > Back</a>
            </form>
            <br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
        </div>
        </div>
    </div>
          </div>
    )
}