import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import Navbar from "./CoconutStockNavBar"
import '../CoconutStock/.Ccss'
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from "@mui/material";
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import AddIcon from '@mui/icons-material/Add';

export default function CoconutStockList(){

  const[stockD,setStockD] = useState([]);
  useEffect(() => {
      function getCoconutStock(){
          axios.get("http://localhost:8889/CoconutStock/view").then((res)=> {
              console.log(res.data);
              setStockD(res.data)
          }).catch((err)=> {
              alert(err.message)
          })
      }
      getCoconutStock();
      
  },[stockD])
  
  const deleteData = (e) =>{

    var result = window.confirm("Are you sure?");

   if(result == true){

      axios.delete(`http://localhost:8889/CoconutStock/delete/${e._id}`).then((res)=>{
      console.log(e);
      }).catch(e =>{

          alert(e)

      })

   }else{

      e.preventDefault();

  }
}

//search function 

    const[search,setSearch] = useState("");
    function searchStock(event){
        setSearch(event.target.value);
    }


    //pdf generation 


    function downloadPDF(){
        var today = new Date();
        var curr_date = today.getDate();
        var curr_month = today.getMonth();
        var curr_year = today.getFullYear();

        today = [curr_month+1] + "/ " + curr_date + "/ " + curr_year;
        var newdat = today;

        const doc = new jsPDF('landscape');
        doc.text("Jayasinghe Oil Mills", 15, 5);
        doc.text(newdat, 255, 5);


        doc.text("Coconut Stock ",130,12);
        

        doc.autoTable({
              head: [['Location Code', 'Supplier Name', 'Quantity','Date']],
              body:  stockD.filter(e=>

                e.locationCode.toLowerCase().includes(search)||
                e.supplierName.toLowerCase().includes(search)
                    
                    ).map(function(e,i){
                              return( 
                             [ e.locationCode ,
                               e.supplierName, 
                               e.quantity,
                                e.date
                            ] 
                                 
                                        
                              );
                    }) 

                    })
        

        doc.save("Coconut Stock.pdf");
    }

    return (
      
      <div>
          <Navbar/>
           
         <div className='body'>
            <div className="order_bground" style={{ zIndex: 98 }} >
                <div className="container">
                
                    <h1 className="header1" style={{color:"black" }} ><center>Coconut Stock</center></h1>
                    <br></br>
                    <input
                     onChange={searchStock}
                     className='form-control'
                     type='search'
                     placeholder='search'
                     name='searchQuery'>
                </input>
                    <br></br>
                    <div className='generatebutton'><button  onClick={downloadPDF} type="button2" class="btn btn-info"  style={{backgroundColor:"#2E2EFF" }}><SimCardDownloadIcon />Generate Report</button></div>

                    <table className="table table-hover" style={{marginTop:'50px'}}></table>
                    <table class="table">
                    <thead class="thead-dark">
                                <tr>
                                  
                                  <th scope="col">Location Code</th>
                                  <th scope="col">Supplier Name</th>
                                  <th scope="col">Quantity (KG)</th>
                                  <th scope="col">Date</th>
                                  <th></th>
                                  <th></th>
                                  <th></th>
                                </tr>
                            </thead>
                              <tbody>
                                {
                                    stockD.filter(e=>
                                        e.locationCode.toLowerCase().includes(search)||
                                        e.supplierName.toLowerCase().includes(search)

                                    ).map((e,i) => (
                                        
                                    <tr>
                                    
                                        <td>{e.locationCode}</td>
                                        <td>{e.supplierName}</td>
                                        <td>{e.quantity}</td>
                                        <td>{e.date}</td>
                                        <td></td>
                                        <td></td>
                                        <td className="middle">
                                            
                                            <Link to={"/coocnutstockupdate/"+e._id} ><Button style={{
                                            backgroundColor: "#B4B731"
                                        }} variant="contained" startIcon={<EditIcon />}>Edit</Button></Link>

                                        <Button color="error" sx={{ ml: 2 }} onClick={() => { deleteData(e) }} variant="contained" startIcon={<DeleteIcon />}>
                                            Delete
                                        </Button>
                                            </td>
                                        
                                    </tr>
                                    
                                    ))
                                }
                                </tbody> 
                        
                            </table>
                     
                </div>
        
                <Link to = "coconutstockadd"><button type="button" class="btn btn-warning btn-lg" style={{marginLeft:"600px"}}  ><AddIcon/> Add Stock </button></Link>
        </div>
        <br></br>
               

                
                

        
      
   </div>
   </div>
   

    )
  
}

