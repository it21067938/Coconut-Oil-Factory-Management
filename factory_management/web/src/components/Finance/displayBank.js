import React,{useState,useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom"
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import Navbar from "./FinanceNavbar"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from "@mui/material";
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';


export default function DisplayBank(){

    const[bankD,setBankD] = useState([]);
    useEffect(() => {
        function getBankD(){
            axios.get("http://localhost:8889/DebitBankLedger/view").then((res)=> {
                console.log(res.data);
                setBankD(res.data)
            }).catch((err)=> {
                alert(err.message)
            })
        }
        getBankD();
        
    },[bankD])

    const[bankC,setBankC] = useState([]);
    useEffect(() => {
        function getBankC(){
            axios.get("http://localhost:8889/CreditBankLedger/view").then((res)=> {
                console.log(res.data);
                setBankC(res.data)
            }).catch((err)=> {
                alert(err.message)
            })
        }
        getBankC();
        
    },[bankC])

    // debit purchase delete

    const deleteDataD = (e) =>{
        var result = window.confirm("Are you sure?");
      if(result == true){
          axios.delete(`http://localhost:8889/DebitBankLedger/delete/${e._id}`).then((res)=>{
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
      axios.delete(`http://localhost:8889/CreditBankLedger/delete/${e._id}`).then((res)=>{
      }).catch(e =>{
          alert(e)
      })
  }else{
      e.preventDefault();
  }



}

//search function
const [serQuary,setSerQuary]=useState("");

function searchBank(event){
      
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
                doc.text("Bank Ledger", 90, 12);
              

        doc.autoTable({
            
              head: [['No','Date', 'Cheque No','Description', 'Amount(Debit)']],
              body:  bankD.filter(e=>

                e.Date.includes(serQuary) ||
                e.ChequeNo.toLowerCase().includes(serQuary) ||                       
                e.Description.toLowerCase().includes(serQuary)
                    
                    ).map(function(e,i){
                              return( 
                             [ i+1,
                                e.Date ,
                               e.ChequeNo,
                               e.Description, 
                               e.Amount] 
                                 
                                        
                              );
                    }) 

                    })

            doc.autoTable({
                        head: [['No','Date', 'Cheque No','Description', 'Amount(Credit)']],
                        body:  bankC.filter(e=>
          
                          e.Date.includes(serQuary) ||
                          e.ChequeNo.toLowerCase().includes(serQuary) ||                       
                          e.Description.toLowerCase().includes(serQuary)
                              
                              ).map(function(e,i){
                                        return( 
                                       [ i+1,
                                        e.Date ,
                                         e.ChequeNo,
                                         e.Description, 
                                         e.Amount] 
                                           
                                                  
                                        );
                              }) 
          
                              })
        

        doc.save("Available Bank.pdf");
      }
      const amountD = bankD.map((e) => e.Amount);
           console.log(amountD)
            let sumD = 0;
           for (let i = 0; i < amountD.length; i++){
                sumD = amountD[i] + sumD
           }
          console.log(sumD)


          const amountC = bankC.map((e) => e.Amount);
          console.log(amountC)
           let sumC = 0;
          for (let i = 0; i < amountC.length; i++){
               sumC = amountC[i] + sumC
          }
         console.log(sumC)

         let balance = sumD - sumC;


    return(



                <div>
                <Navbar/>
                <div className="order_bground" style={{ zIndex: 98,height:"100vh" }}>
                <div className="body">
                    <div className="container">
                    <h1 className="header1" style={{color:"white"}}><center>Bank Ledger</center></h1>
                        
                        <br></br>
                                <input
                                    onChange={searchBank}
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
                                <h5 style={{marginLeft:"850px",marginTop:"-40px"}}>Total Credit = Rs {sumC}.00</h5>
                                <h5 style={{marginLeft:"500px"}}>Balance= Rs {balance}.00</h5>
                                <br/><br/>
                                <h4 style={{marginLeft :'450px', marginBottom : '-25px'}} >Debit</h4><h4 style={{marginLeft :'1100px', marginBottom : '-50px'}}>Credit</h4>
                        <table className="table table-hover" style={{marginTop:'50px',marginLeft :'-130px' ,width: '650px'}}>
                        <thead class="thead-dark">
                                    <tr>
                                        <th scope="col">No</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Cheque No</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Amount</th>
                                        
                                        <th></th>
                                        
                                    </tr>
                                </thead>
                                    <tbody>
                                    {

                                    bankD.filter(e=>
                                    e.Date.includes(serQuary) ||
                                    e.ChequeNo.toLowerCase().includes(serQuary) ||
                                    e.Description.toLowerCase().includes(serQuary) 
                                                                            
                                        ).map((e,i) => (
                                            
                                        <tr>
                                            <td>{i+1}</td>
                                            <td>{e.Date}</td>
                                            <td>{e.ChequeNo}</td>
                                            <td>{e.Description}</td>
                                            <td>{e.Amount}.00</td>
                                           
                                            
                                            <td><Link to={'/updateBankD/' + e._id} >
                                            <Button style={{ backgroundColor: "#B4B731",width:"80px"}} variant="contained" startIcon={<EditIcon />}>Edit</Button></Link>

                                            <Button color="error" style={{width:"80px"}} onClick={() => { deleteDataC(e) }} variant="contained" startIcon={<DeleteIcon />}> Delete</Button>
                                        </td>
                                            
                                        </tr>
                                        ))
                                    }
                                    </tbody> 
                            </table>

                            <table className="table table-hover" style={{marginTop:'-285px',marginLeft :'580px' ,width: '650px'}}>
                            <thead class="thead-dark">
                                    <tr>
                                        <th scope="col">No</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Cheque No</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Amount</th>
                                        
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                    <tbody>
                                    {

                                bankC.filter(e=>
                                        e.Date.includes(serQuary) ||
                                        e.Description.toLowerCase().includes(serQuary) 
                                        ).map((e,i) => (
                                            
                                        <tr>
                                            <td>{i+1}</td>
                                            <td>{e.Date}</td>
                                            <td>{e.ChequeNo}</td>
                                            <td>{e.Description}</td>
                                            <td>{e.Amount}.00</td>
                                            
                                            <td></td>
                                            <td></td>
                                            

                                                <td><Link to={'/updateBankC/' + e._id} >
                                            <Button style={{ backgroundColor: "#B4B731",width:"80px"}} variant="contained" startIcon={<EditIcon />}>Edit</Button></Link>

                                            <Button color="error" style={{width:"80px"}} onClick={() => { deleteDataC(e) }} variant="contained" startIcon={<DeleteIcon />}> Delete</Button>
                                        </td>
                                        </tr>
                                        ))
                                    }
                                    </tbody> 
                            </table>
                            <Link to = "bankD"><button type="button" class="btn btn-warning btn-lg" >Add  </button></Link>
                    
                            <Link to = "ledger"><button type="button" class="m-5 btn btn-secondary btn-lg" >Back </button></Link>
                    </div>


                </div>


                    

</div>
                </div>

        
    )
}