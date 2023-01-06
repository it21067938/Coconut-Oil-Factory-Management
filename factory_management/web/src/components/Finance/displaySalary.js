import React,{useState,useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import Navbar from "./FinanceNavbar"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from "@mui/material";
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';

export default function DisplaySalary(){

    const[salaryD,setSalaryD] = useState([]);
  
        function getSalaryD(){
            axios.get("http://localhost:8889/CalculateSalary/view").then((res)=> {
                console.log(res.data);
                setSalaryD(res.data)
            }).catch((err)=> {
                alert(err.message)
            })
        }
        useEffect(()=>{

        getSalaryD();

     },[]); 

     function refreshPage() {
        window.location.reload(false);
      }
   
    const deleteData = (e) =>{
        var result = window.confirm("Are you sure?",refreshPage());
        if(result == true){
        axios.delete(`http://localhost:8889/CalculateSalary/delete/${e._id}`).then((res)=>{
            }).catch(e =>{
                alert(e)
            })
         }else{
            e.preventDefault();
        }
}


        //search function
        const [serQuary,setSerQuary]=useState("");

        function searchSalary(event){
            
            setSerQuary(event.target.value);
        }

        console.log(serQuary);



        //pdf generation;
        function downloadPDF(){
  
            var today = new Date();
            var curr_date = today.getDate();
            var curr_month = today.getMonth();
            var curr_year = today.getFullYear();
      
            today = [curr_month + 1] + "/ " + curr_date + "/ " + curr_year;
            var newdat = today;
      
      
            const doc = new jsPDF('landscape');
            doc.setFontSize(9)
            doc.text("Jayasinghe Oil Mills", 15, 5);
            doc.setFontSize(9)
            doc.text(newdat, 240, 5);
            doc.setFontSize(22)
            doc.text("Salary", 140, 12);
        
            doc.autoTable({
                head: [['EmpID', 'Month', 'Name','Basic Salary', 'OT Rate', 'OT hours','Allowance', 'Deductions', 'Advanced','Gross Salary', 'EPF','Net Salary']],
                body:  salaryD.filter(e=>

                    e.EmpID.includes(serQuary) ||
                                        
                    e.Month.includes(serQuary)||
                    e.Name.toLowerCase().includes(serQuary)
                    
                    ).map(function(e,i){
                              return( 
                             [ e.EmpID ,
                               e.Month, 
                               e.Name,
                               e.BasicSalary,
                               e.OtRate,
                               e.OtHours,
                               e.FixedAllowance,
                               e.Deductions,
                               e.SalaryAdvanced,
                               e.GrossSalary,
                               e.EPF,
                               e.NetSalary
                            
                            ] 
                                 
                                        
                              );
                    }) 

                    })
        

        doc.save("Available Salary.pdf");
      }


    return(

        <div>
          <Navbar/>
          <div className="order_bground" style={{ zIndex: 98,height:"100vh" }}>
         <div className="body">
                <div className="container">
               
                    <h1 className="header1" style={{color:"white"}}><center>Salary</center></h1>
                    <br></br>
                          <input
                              onChange={searchSalary}
                              className='form-control'
                              type='search'
                              placeholder='search'
                              name='searchQuery'>
                          </input>
                          <br></br>
                          <div className='generatebutton'><button onClick={downloadPDF} type="button2"
                                class="btn btn-info" style={{backgroundColor:"#2E2EFF" }} ><SimCardDownloadIcon /> Generate Report</button></div>
                    

                    <table className="table" style={{width:"1400px",marginLeft:"-150px"}}>
                    <thead class="thead-dark">
                                <tr>
                                  
                                  <th>No</th>
                                  <th scope="col">EmpID</th>
                                  <th scope="col">Month</th>
                                  <th scope="col">Name</th>
                                  <th  scope="col">Basic Salary</th>
                                  <th scope="col">OT Rate</th>
                                  <th scope="col">OT hours</th>
                                  <th scope="col">Allowance</th>
                                  <th scope="col">Deductions</th>
                                  <th scope="col">Advanced</th>
                                  <th scope="col">Gross Salary</th>
                                  <th scope="col">EPF</th>
                                  <th scope="col">Net Salary</th>
                                  <th></th>
                                  <th></th>
                                  <th></th>

                                 
                                </tr>
                            </thead>
                              <tbody>
                                {

                            salaryD.filter(e=>
                                e.EmpID.includes(serQuary) ||
                                e.Month.includes(serQuary)||
                                e.Name.toLowerCase().includes(serQuary) 
                                  ).map((e,i) => (
                                        
                                    <tr>
                                    <td>{i+1}</td>
                                            <td>{e.EmpID}</td>
                                           <td>{e.Month}</td>
                                           <td>{e.Name}</td>
                                           <td>{e.BasicSalary}</td>
                                           <td>{e.OtRate}</td>
                                           <td>{e.OtHours}</td>
                                           <td>{e.FixedAllowance}</td>
                                           <td>{e.Deductions}</td>
                                           <td>{e.SalaryAdvanced}</td>
                                           <td>{e.GrossSalary}</td>
                                           <td>{e.EPF}</td>
                                           <td>{e.NetSalary}</td>
                                           <td></td>


                                            <td><Link to={'/UpdateSalary/' + e._id} >
                                            <Button style={{ backgroundColor: "#B4B731",width:"80px"}} variant="contained" startIcon={<EditIcon />}>Edit</Button></Link>

                                            <Button style={{ width:"80px",backgroundColor: "#FF0000"}} onClick={() => { deleteData(e) }} variant="contained" startIcon={<DeleteIcon />}> Delete</Button>
                                        </td>
                                            <td></td>
                                        
                                    </tr>
                                    ))
                                }
                                </tbody> 
                        </table>
                        <Link to = "attendance"><button type="button" class="btn btn-warning btn-lg" >Check Attendance </button></Link>
                
                <Link to = "dash"><button type="button" class="m-5 btn btn-secondary btn-lg" >Back </button></Link>
                </div>
        </div>
        
        </div>

              
                


      </div>
        
    )
}