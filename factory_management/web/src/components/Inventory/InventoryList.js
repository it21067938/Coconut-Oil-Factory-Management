import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import Navbar from "./InventoryNavBar"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from "@mui/material";
import '../Inventory/.css'
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import AddIcon from '@mui/icons-material/Add';



export default function InventoryList(){
  
  
  const[inventoryD,setInventoryD] = useState([]);
  useEffect(() => {
    function getInventory(){
      axios.get("http://localhost:8889/Inventory/view").then((res)=> {
        console.log(res.data);
        setInventoryD(res.data)
      }).catch((err)=> {
        alert(err.message)
      })
    }
    getInventory();
    
  },[inventoryD])
  
  const deleteData = (e) =>{
    
    var result = window.confirm("Are you sure?");
    
    if(result == true){
      
      axios.delete(`http://localhost:8889/Inventory/delete/${e._id}`).then((res)=>{
        console.log(e);
      }).catch(e =>{
        
        alert(e)
        
      })
      
    }else{
      
      e.preventDefault();
      
    }

  
  }
  const[search,setSearch] = useState("");
  function searchItem(event){

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


        doc.text("Inventory ",130,12);

        doc.autoTable({
              head: [['Product Code', 'Product Name', 'Quantity','Stock Price']],
              body:  inventoryD.filter(e=>

                e.productName.toLowerCase().includes(search)||
                e.productId.toLowerCase().includes(search)
                
                    ).map(function(e,i){
                              return( 
                             [ e.productId ,
                               e.productName, 
                               e.quantity,
                                e.costPrice
                            ] 
                                 
                                        
                              );
                    }) 

                    })
        

        doc.save("Inventory.pdf");
      }
    return (
        
      
      <div>
          <Navbar/>
          
         <div className="body">
         <div className="order_bground" style={{ zIndex: 98 }} >
                <div className="container">
               
                    <h1 className="header1" style={{color:"black" }}><center>Inventory</center></h1>
                    
                    <br></br>
                          <input
                              onChange={searchItem}
                              className='form-control'
                              type='search'
                              placeholder='search'
                              name='searchQuery'>
                          </input>
                          <br></br>
                    
                          <div className='generatebutton'><button  onClick={downloadPDF} type="button2" class="btn btn-info" style={{backgroundColor:"#2E2EFF" }}><SimCardDownloadIcon />Generate Report</button></div>
                    
                    <table className="table table-hover" style={{marginTop:'50px'}}></table>
                    <table class="table">
                    <thead class="thead-dark">
                                <tr>
                                  
                                  <th scope="col">Product Code</th>
                                  <th scope="col">Product Name</th>
                                  <th scope="col">Quantity (KG)</th>
                                  <th scope="col">Stock Price</th>
                                  <th></th>
                                  <th></th>
                                  <th></th>
                                </tr>
                            </thead>
                              <tbody>
                                {

                                    inventoryD.filter(e=>
                                      
                                      e.productName.toLowerCase().includes(search)||
                                      e.productId.toLowerCase().includes(search)
                                      
                                      
                                      ).map((e) => (
                                        
                                    <tr>
                                    
                                        <td>{e.productId}</td>
                                        <td>{e.productName}</td>
                                        <td>{e.quantity}</td>
                                        <td>{e.costPrice}</td>
                                        <td></td>
                                        <td></td>
                                        
                                        <td className="middle">
                                            
                                            <Link to={"/inventoryupdate/"+e._id} ><Button style={{
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
                <Link to = "inventoryadd"><button type="button" class="btn btn-warning btn-lg" ><AddIcon/> Add Product </button></Link>
                
                <Link to = "inventorymanufactureview"><button type="button" class="m-5 btn btn-primary btn-lg" > View Manufacture </button></Link>
        
        </div>
        {/* <div class="d-grid gap-2 col-6 mx-auto"> */}
                
                
        {/* </div> */}

        
        
   </div>
   
</div>
    )
  }


