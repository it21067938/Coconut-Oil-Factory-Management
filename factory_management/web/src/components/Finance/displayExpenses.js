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





export default function DisplayExpenses(){

    const[expensesD,setExpensesD] = useState([]);

    useEffect(() => {
        function getExpensesD(){
            axios.get("http://localhost:8889/ManageExpenses/view").then((res)=> {
                console.log(res.data);
                setExpensesD(res.data)
            }).catch((err)=> {
                alert(err.message)
            })
        }
        getExpensesD();
        
    },[])
    const deleteData = (e) =>{
        var result = window.confirm("Are you sure?",refreshPage());
        if(result == true){
        axios.delete(`http://localhost:8889/ManageExpenses/delete/${e._id}`).then((res)=>{
               }).catch(e =>{
                    alert(e)
                })
            }else{
                e.preventDefault();
            }
        }

            //page refresh function

    function refreshPage() {
        window.location.reload(false);
      }
        
//search function
          const [serQuary,setSerQuary]=useState("");

          function searchExpenses(event){
                
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
          
          
                const doc = new jsPDF();
                doc.setFontSize(9)
                doc.text("Jayasinghe Oil Mills", 15, 5);
                doc.setFontSize(9)
                doc.text(newdat, 175, 5);
                doc.setFontSize(22)
                doc.text("Expenses", 90, 12);
              
        
            doc.autoTable({
                head: [['No','Date', 'Description', 'Amount']],
                body:  expensesD.filter(e=>

                    e.Date.includes(serQuary) ||
                                        
                    e.Description.toLowerCase().includes(serQuary)
                    
                    ).map(function(e,i){
                              return( 
                             [i+1, 
                                e.Date ,
                               e.Description, 
                               e.Amount] 
                                 
                                        
                              );
                    }) 

                    })
        

        doc.save("Available Expenses.pdf");
      }


      const amounts = expensesD.map((e) => e.Amount);
           console.log(amounts)
            let sum = 0;
           for (let i = 0; i < amounts.length; i++){
                sum = amounts[i] + sum
           }
          console.log(sum)



    return(


<div>
          <Navbar/>
          <div className="order_bground" style={{ zIndex: 98,height:"100vh" }}>
         <div className="body">
                <div className="container">
               
                <h1 className="header1" style={{color:"white"}}><center>Expenses</center></h1>
                    <br></br>
                          <input
                              onChange={searchExpenses}
                              className='form-control'
                              type='search'
                              placeholder='search'
                              name='searchQuery'>
                          </input>
                          <br></br>
                          <div className='generatebutton'><button onClick={downloadPDF} type="button2"
                                class="btn btn-info" style={{backgroundColor:"#2E2EFF" }} ><SimCardDownloadIcon /> Generate Report</button></div>
                           
                    <br/><br/>
                    <br/><br/>
                  
                                       
                    <table className="table">
                    <thead class="thead-dark">
                                <tr>
                                <th scope="col" >No</th>
                                  <th scope="col" >Date</th>
                                  <th scope="col">Description</th>
                                  <th scope="col">Amount</th>
                                  
                                  <th></th>

                                </tr>
                            </thead>
                              <tbody>
                                {

                                    expensesD.filter(e=>
                                    e.Date.includes(serQuary) ||
                                    e.Description.toLowerCase().includes(serQuary) 
                                  ).map((e,i) => (
                                        
                                    <tr>
                                        <td>{i+1} </td>
                                        <td>{e.Date}</td>
                                        <td>{e.Description}</td>
                                        <td>{e.Amount}.00</td>
                                        
                                        
                                        
                                            <td><Link to={'/updateExpenses/' + e._id} >
                                            <Button style={{ backgroundColor: "#B4B731"}} variant="contained" startIcon={<EditIcon />}>Edit</Button></Link>

                                            <Button color="error" sx={{ ml: 2 }} onClick={() => { deleteData(e) }} variant="contained" startIcon={<DeleteIcon />}> Delete</Button>
                                        </td>
                                    </tr>

                                    ))
                                }
                                </tbody> 
                        </table>
                        <h3 style={{marginLeft:"400px"}}>Total Expenses = Rs {sum}.00</h3>

                        
                <Link to = "addE"><button type="button" class="btn btn-warning btn-lg" >Add Expenses </button></Link>
                
                <Link to = "dash"><button type="button" class="m-5 btn btn-secondary btn-lg" >Back </button></Link>
                </div>
        
        
        </div>


        </div>
      </div>
        
    )
}