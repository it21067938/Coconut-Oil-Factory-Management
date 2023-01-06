import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import '../Finance/.css'
import Navbar from "./FinanceNavbar"


function UpdateSalary() {
    const[EmpID,setEmpID] = useState("");
    const[Month,setMonth] = useState("");
    const[Name,setName] = useState("");
    const[BasicSalary,setBasicSalary] = useState("");
    const[OtRate,setOtRate] = useState("");
    const[OtHours,setOtHours] = useState("");
    const[FixedAllowance,setFixedAllowance] = useState("");
    const[Deductions,setDeductions] = useState("");
    const[SalaryAdvanced,setSalaryAdvanced] = useState("");

  const { id } = useParams();
  
  console.log(id);



  const getSalary = () => {
    axios
      .get("http://localhost:8889/CalculateSalary/get/" +id)
      .then((res) => {

         console.log(res.data);
     
         setEmpID(res.data.EmpID);
         setMonth(res.data.Month);
         setName(res.data.Name);
         setBasicSalary(res.data.BasicSalary);
         setOtRate(res.data.OtRate);
         setOtHours(res.data.OtHours);
         setFixedAllowance(res.data.FixedAllowance);
         setDeductions(res.data.Deductions);
         setSalaryAdvanced(res.data.SalaryAdvanced);

        
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  useEffect(() => {
    getSalary();
  }, []);

     //page refresh function

     function refreshPage() {
        window.location.reload(false);
      }

 
      
  return (

<div>
        <Navbar/>
        <div className="order_bground" style={{ zIndex: 98,height:"100vh" }}>
         <div className="body"></div>
        <div className="container">
        <div className='border' style={{height:'900px'}}  >
        <div className='col-md-8 mt-4 mx-auto'>
            <h2 className='h4 mb-3 font-weight-normal' style={{color:"white"}}><center>Update Salary</center></h2>
            
            <form className='needs-validation'
                onSubmit={(e) => {
                  e.preventDefault();

          const newSalary = {
            EmpID,
            Month,
            Name,
            BasicSalary,
            OtRate,
            OtHours,
            FixedAllowance,
            Deductions,
            SalaryAdvanced
          };
          console.log(newSalary)
          
          axios
            .put("http://localhost:8889/CalculateSalary/update/" +id, newSalary)
            .then(() => {
              alert("Salary updated",refreshPage());
            })
            .catch((err) => {
              alert(err);
            });
        }}
      >

                <div className='form-group' style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}} className="lable">EmpID</label>
                    <input value={EmpID} type="text"className="form-control" name='id' placeholder='Enter Employee ID' 
                    onChange={(event)=>{
                        setEmpID(event.target.value);

                    }}/>
                </div>

                <div className='form-group' style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}} className="lable">Month</label>
                    <input value={Month} type="text"className="form-control"name='name'placeholder='Enter month'
                            onChange={(event)=>{
                                setMonth(event.target.value);
                
                        }}/>
                </div>

                <div className='form-group' style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}} className="lable">Name</label>
                    <input value={Name} type="text"className="form-control"name='name'placeholder='Enter Name'
                            onChange={(event)=>{
                                setName(event.target.value);
                
                        }}/>
                </div>

                <div className='form-group' style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}} className="lable">Basic Salary </label>
                    <input value={BasicSalary} type="number"className="form-control"name='amount'placeholder='Enter Basic salary'
                    onChange={(event)=>{
                        setBasicSalary(event.target.value);
            
                    }} />
                </div>

                <div className='form-group' style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}} className="lable">Fixed allowance</label>
                    <input value={FixedAllowance} type="number"className="form-control"name='amount'placeholder='Enter Fixed allowance'
                    onChange={(event)=>{
                        setFixedAllowance(event.target.value);
            
                    }} />
                </div>

                <div className='form-group' style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}} className="lable">OT Rate </label>
                    <input value={OtRate} type="number"className="form-control"name='amount'placeholder='Enter OT rate'
                    onChange={(event)=>{
                        setOtRate(event.target.value);
            
                    }} />
                </div>

                <div className='form-group' style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}} className="lable">OT Hours</label>
                    <input value={OtHours} type="number"className="form-control"name='amount'placeholder='Enter Ot Hours'
                    onChange={(event)=>{
                        setOtHours(event.target.value);
            
                    }} />
                </div>

                <div className='form-group' style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}} className="lable">Salary Advanced </label>
                    <input value={SalaryAdvanced} type="number"className="form-control"name='amount'placeholder='Enter Salary Advanced'
                    onChange={(event)=>{
                        setSalaryAdvanced(event.target.value);
            
                    }} />
                </div>

                <div className='form-group' style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}} className="lable">Salary Deduction</label>
                    <input value={Deductions} type="number"className="form-control"name='amount'placeholder='Enter salary Deduction'
                    onChange={(event)=>{
                        setDeductions(event.target.value);
            
                    }} />
                </div>

            

            

                <button className='btn btn-success' type='submit' style={{marginTop:'15px',marginLeft:"-10px"}}>Update Salary</button>

                <a className='btn btn-danger' href="/salD" style={{marginTop:'15px',marginLeft:'20px'}} > Back</a>
            </form>
        </div>
        </div>
    </div>
  </div>
</div>
  );
}

export default UpdateSalary;


