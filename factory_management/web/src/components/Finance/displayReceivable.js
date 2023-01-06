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

export default function DisplayReceive(){

    const[receiveD,setReceiveD] = useState([]);
    useEffect(() => {
        function getReceiveD(){
            axios.get("http://localhost:8889/ReceivableDebit/view").then((res)=> {
                console.log(res.data);
                setReceiveD(res.data)
            }).catch((err)=> {
                alert(err.message)
            })
        }
        getReceiveD();
        
    },[receiveD])

    const[receiveC,setReceiveC] = useState([]);
    useEffect(() => {
        function getReceiveC(){
            axios.get("http://localhost:8889/ReceivableCredit/view").then((res)=> {
                console.log(res.data);
                setReceiveC(res.data)
            }).catch((err)=> {
                alert(err.message)
            })
        }
        getReceiveC();
        
    },[receiveC])

   

    const deleteDataD = (e) =>{
        var result = window.confirm("Are you sure?");
      if(result == true){
          axios.delete(`http://localhost:8889/ReceivableDebit/delete/${e._id}`).then((res)=>{
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
      axios.delete(`http://localhost:8889/ReceivableCredit/delete/${e._id}`).then((res)=>{
      }).catch(e =>{
          alert(e)
      })
  }else{
      e.preventDefault();
  }



}
// serch function
const [serQuary,setSerQuary]=useState("");

function searchReceivable(event){
      
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
                doc.text("Receivable Ledger", 90, 12);
              
    doc.autoTable({
          head: [['No','Date','Description', 'Amount(Debit)']],
          body:  receiveD.filter(e=>

            e.Date.includes(serQuary)||
            e.Description.toLowerCase().includes(serQuary)
                
                ).map(function(e,i){
                          return( 
                            [ i+1,
                                e.Date ,
                                     
                                e.Description, 
                                e.Amount] 
                             
                                    
                          );
                }) 

                })

        doc.autoTable({
                    head: [['No','Date','Description', 'Amount(Credit)']],
                    
                    body:  receiveC.filter(e=>
      
                        e.Date.includes(serQuary)||
                        e.Description.toLowerCase().includes(serQuary)
                          
                          ).map(function(e,i){
                                    return( 
                                        [ i+1,
                                            e.Date ,
                                     
                                            e.Description, 
                                            e.Amount] 
                                       
                                              
                                    );
                          }) 
      
                          })
    

    doc.save("Available Receivable.pdf");
  }


        const amountD = receiveD.map((e) => e.Amount);
        console.log(amountD)
        let sumD = 0;
        for (let i = 0; i < amountD.length; i++){
            sumD = amountD[i] + sumD
        }
        console.log(sumD)


        const amountC = receiveC.map((e) => e.Amount);
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
        <h1 className="header1" style={{color:"white"}}><center>Receivable Ledger</center></h1>
            <div className="container">
            
                
                <br></br>
                        <input
                            onChange={searchReceivable}
                            className='form-control'
                            type='search'
                            placeholder='search'
                            name='searchQuery'>
                        </input>
                        <br/>
                        <div className='generatebutton'><button onClick={downloadPDF} type="button2"
                                class="btn btn-info" style={{backgroundColor:"#2E2EFF" }} ><SimCardDownloadIcon /> Generate Report</button></div>
                        <br/> <br/> <br/>

                        
               
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
                            <th>Description</th>
                            <th>Amount</th>
                            <th></th>
                                
                            </tr>
                        </thead>
                            <tbody>
                            

                            {
                                            receiveD.filter(e=>
                                                e.Date.includes(serQuary)||
                                                e.Description.toLowerCase().includes(serQuary)

                                                )
                                
                                .map((e,i) => (
                                    
                                <tr>
                                <td>{i+1}</td>
                                        <td>{e.Date}</td>
                                        <td>{e.Description}</td>
                                        <td>{e.Amount}</td>
                                   
                                    
                                        <td><Link to={'/updateReceivableD/' + e._id} >
                                            <Button style={{ backgroundColor: "#B4B731"}} variant="contained" startIcon={<EditIcon />}>Edit</Button></Link>

                                            <Button color="error" sx={{ ml: 2 }} onClick={() => { deleteDataD(e) }} variant="contained" startIcon={<DeleteIcon />}> Delete</Button>
                                        </td>
                                    
                                </tr>
                                ))
                            }
                            </tbody> 
                    </table>

                    <table className="table table-hover" style={{marginTop:'-190px',marginLeft :'580px' ,width: '650px'}}>
                    <thead class="thead-dark">
                            <tr>
                            <th>No</th>    
                            <th>Date</th>
                            <th>Description</th>
                            <th>Amount</th>
                            <th></th>
                                
                                <th></th>
                               
                            </tr>
                        </thead>
                            <tbody>
                            {
                                            receiveC.filter(e=>
                                                e.Date.includes(serQuary)||
                                                e.Description.toLowerCase().includes(serQuary)
                                                )
                                
                                .map((e,i) => (
                                    
                                <tr>
                                 <td>{i+1}</td>
                                <td>{e.Date}</td>
                                <td>{e.Description}</td>
                                <td>{e.Amount}</td>
                                    
                                    
                               
                                    
                                <td><Link to={'/updateReceivableC/' + e._id} >
                                            <Button style={{ backgroundColor: "#B4B731"}} variant="contained" startIcon={<EditIcon />}>Edit</Button></Link>

                                            <Button color="error" sx={{ ml: 2 }} onClick={() => { deleteDataC(e) }} variant="contained" startIcon={<DeleteIcon />}> Delete</Button>
                                        </td>
                                    
                                </tr>
                                ))
                            }
                            </tbody> 
                    </table>
                    <Link to = "receiveD"><button type="button" class="btn btn-warning btn-lg" >Add  </button></Link>
            
            <Link to = "ledger"><button type="button" class="m-5 btn btn-secondary btn-lg" >Back </button></Link>       
            </div>


        </div>


            
            </div>

        </div>
        
    )
}