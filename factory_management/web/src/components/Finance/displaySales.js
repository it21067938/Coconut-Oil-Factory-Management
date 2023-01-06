import React,{useState,useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom"
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import Navbar from "./FinanceNavbar";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from "@mui/material";
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';


export default function DisplaySales(){

    const[salesD,setSalesD] = useState([]);
    useEffect(() => {
        function getSalesD(){
            axios.get("http://localhost:8889/DebitSalesLedger/view").then((res)=> {
                console.log(res.data);
                setSalesD(res.data)
            }).catch((err)=> {
                alert(err.message)
            })
        }
        getSalesD();
        
    },[salesD])

    const[salesC,setSalesC] = useState([]);
    useEffect(() => {
        function getSalesC(){
            axios.get("http://localhost:8889/CreditSalesLedger/view").then((res)=> {
                console.log(res.data);
                setSalesC(res.data)
            }).catch((err)=> {
                alert(err.message)
            })
        }
        getSalesC();
        
    },[salesC])

    // debit purchase delete

    const deleteDataD = (e) =>{
        var result = window.confirm("Are you sure?");
      if(result == true){
          axios.delete(`http://localhost:8889/DebitSalesLedger/delete/${e._id}`).then((res)=>{
          }).catch(e =>{
              alert(e)
          })
      }else{
          e.preventDefault();
      }
  
  

}

const deleteDataC = (e) =>{
    var result = window.confirm("Are you sure?");
  if(result == true){
      axios.delete(`http://localhost:8889/CreditSalesLedger/delete/${e._id}`).then((res)=>{
      }).catch(e =>{
          alert(e)
      })
  }else{
      e.preventDefault();
  }



}

// serch function
const [serQuary,setSerQuary]=useState("");

function searchSales(event){
      
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
    doc.text("Sales Ledger", 90, 12);
  

   
                doc.autoTable({
                        head: [['No','Date','Buyer Name', 'Material type', 'Amount(Debit)']],
                        body:  salesD.filter(e=>

                            e.Date.includes(serQuary)||
                            e.BuyerName.toLowerCase().includes(serQuary)||
                            e.MaterialType.toLowerCase().includes(serQuary)
                                
                                ).map(function(e,i){
                                        return( 

                                            [ 
                                                i+1,
                                                e.Date ,
                                                e.BuyerName,
                                                e.MaterialType, 
                                                e.Amount] 
                                            
                                                    
                                        );
                                }) 

                                })




   

        doc.autoTable({
                    head: [['No','Date','Buyer Name', 'Material type', 'Amount(Credit)']],
                    
                    body:  salesC.filter(e=>
      
                        e.Date.includes(serQuary)||
                        e.BuyerName.toLowerCase().includes(serQuary)||
                        e.MaterialType.toLowerCase().includes(serQuary)
                          
                          ).map(function(e,i){
                                    return( 
                                   [  i+1,
                                    e.Date ,
                                    e.BuyerName,
                                    e.MaterialType, 
                                     e.Amount] 
                                       
                                              
                                    );
                          }) 
      
                          })
    

    doc.save("Available Sales.pdf");
  }

        const amountD = salesD.map((e) => e.Amount);
        console.log(amountD)
        let sumD = 0;
        for (let i = 0; i < amountD.length; i++){
            sumD = amountD[i] + sumD
        }
        console.log(sumD)


        const amountC = salesC.map((e) => e.Amount);
        console.log(amountC)
        let sumC = 0;
        for (let i = 0; i < amountC.length; i++){
            sumC = amountC[i] + sumC
        }
        console.log(sumC)

        let balance =  sumC - sumD;

    return(

        

            <div>
        <Navbar/>
        <div className="order_bground" style={{ zIndex: 98,height:"100vh" }}>
        <div className="body">
        <h1 className="header1" style={{color:"white"}}><center>Sales Ledger</center></h1>
            <div className="container">
            
                
                <br></br>
                        <input
                            onChange={searchSales}
                            className='form-control'
                            type='search'
                            placeholder='search'
                            name='searchQuery'>
                        </input>
                        <br/>
                        <div className='generatebutton'><button onClick={downloadPDF} type="button2"
                                class="btn btn-info" style={{backgroundColor:"#2E2EFF" }} ><SimCardDownloadIcon /> Generate Report</button></div>
                        <br/><br/><br/>


                                <h5>Total Debit = Rs {sumD}.00</h5>
                                <h5 style={{marginLeft:"800px",marginTop:"-40px"}}>Total Credit = Rs {sumC}.00</h5>
                                <h5 style={{marginLeft:"500px"}}>Balance= Rs {balance}.00</h5>               
                                <br/><br/>
                        <h4 style={{marginLeft :'450px', marginBottom : '-25px'}} >Debit</h4><h4 style={{marginLeft :'1100px', marginBottom : '-50px'}}>Credit</h4>
                    <table className="table table-hover" style={{marginTop:'50px',marginLeft :'-130px' ,width: '650px'}}>
                    <thead class="thead-dark">
                            <tr>
                            <th>No</th>
                             <th>Date</th>
                             <th>Buyer Name</th>
                             <th>Material type</th>
                             <th>Amount</th>
                             <th></th>
                                
                            </tr>
                        </thead>
                            <tbody>
                            

                            {
                                            salesD.filter(e=>
                                                e.Date.includes(serQuary)||
                                                e.BuyerName.toLowerCase().includes(serQuary)||
                                                e.MaterialType.toLowerCase().includes(serQuary)

                                                )
                                
                                .map((e,i) => (
                                    
                                <tr>
                                            <td>{i+1}</td>
                                            <td>{e.Date}</td>
                                            <td>{e.BuyerName}</td>
                                            <td>{e.MaterialType}</td>
                                            <td>{e.Amount}</td>
                                   


                                        <td><Link to={'/updateSalesD/' + e._id} >
                                            <Button style={{ backgroundColor: "#B4B731",width:"90px"}} variant="contained" startIcon={<EditIcon />}>Edit</Button></Link>

                                            <Button color="error" style={{width:"90px"}} onClick={() => { deleteDataD(e) }} variant="contained" startIcon={<DeleteIcon />}> Delete</Button>
                                        </td>
                                    
                                </tr>
                                ))
                            }
                            </tbody> 
                    </table>

                    <table className="table table-hover" style={{marginTop:'-290px',marginLeft :'580px' ,width: '650px'}}>
                    <thead class="thead-dark">
                            <tr>
                            <th>No</th>   
                            <th>Date</th>
                            <th>Buyer Name</th>
                            <th>Material type</th>
                            <th>Amount</th>
                                
                                <th></th>
                               
                            </tr>
                        </thead>
                            <tbody>
                            {
                                    salesC.filter(e=>
                                    e.Date.includes(serQuary)||
                                    e.BuyerName.toLowerCase().includes(serQuary)||
                                    e.MaterialType.toLowerCase().includes(serQuary)
                                    
                                                )
                                
                                .map((e,i) => (
                                    
                                <tr>
                                            <td>{i+1}</td>
                                            <td>{e.Date}</td>
                                            <td>{e.BuyerName}</td>
                                            <td>{e.MaterialType}</td>
                                            <td>{e.Amount}</td>
                                    

                                        <td><Link to={'/updateSalesC/' + e._id} >
                                            <Button style={{ backgroundColor: "#B4B731",width:"90px"}} variant="contained" startIcon={<EditIcon />}>Edit</Button></Link>

                                            <Button color="error" style={{width:"90px"}} onClick={() => { deleteDataC(e) }} variant="contained" startIcon={<DeleteIcon />}> Delete</Button>
                                        </td>
                                    
                                </tr>
                                ))
                            }
                            </tbody> 
                    </table>
                
            </div>

</div>
        </div>
       
            <Link to = "salesD"><button type="button" class="btn btn-warning btn-lg" >Add  </button></Link>
            
            <Link to = "ledger"><button type="button" class="m-5 btn btn-secondary btn-lg" >Back </button></Link>
            
       

        </div>
        
    )
}