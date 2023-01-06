import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import Navbar from './manufacture-navbar';
import jsPDF from 'jspdf'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from "@mui/material";
import 'jspdf-autotable'
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';

export default function PostDetails(){

  const[ManufactureD,setManufactureD] = useState([]);
  useEffect(() => {
      function getManufacture(){
          axios.get("http://localhost:8889/post/view").then((res)=> {
              console.log(res.data);
              setManufactureD(res.data)
          }).catch((err)=> {
              alert(err.message)
          })
      }
      getManufacture();
      
  },[ManufactureD])
  



  const deleteData = (e) =>{

    var result = window.confirm("Are you sure?");

    if(result == true){

    axios.delete(`http://localhost:8889/post/delete/${e._id}`).then((res)=>{
        

           }).catch(e =>{

                alert(e)

            })

        }else{

            e.preventDefault();

        }

    }

    // serch function
    const [search,setSearch]=useState("");

    function searchPost(event){
          
        setSearch(event.target.value);
    }

    console.log(search);
    
    //pdf generation;
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
        doc.text("Manufacture",130,12);

        doc.autoTable({
              head: [['Product code', 'Product Name', 'Quantity']],
              body:  ManufactureD.filter(e=>    

                e.ID.includes(search) ||
                e.Name.toLowerCase().includes(search)
                    
                    ).map(function(e,i){
                              return( 
                             [ e.ID ,
                               e.Name, 
                               e.Quantity] 
                                 
                                        
                              );
                    }) 

                    })
        

        doc.save("products.pdf");
      }

    

    return (
      
      <div>
          
      <Navbar/>
      <div className="order_bground" style={{ zIndex: 98,height:"100%" }} >
         <div>
                <div className="container">
               
                    <h1 className="header1"><center>Manufacture</center></h1>
                    <input
                              onChange={searchPost}
                              className='form-control'
                              type='search'
                              placeholder='search'
                              name='searchQuery'>
                          </input>
                    <br></br>
                    <div className='generatebutton'><button  onClick={downloadPDF} type="button2" class="btn btn-info"  style={{backgroundColor:"#2E2EFF" }}><SimCardDownloadIcon />Generate Report</button></div>
                    {/* <div className='generatebutton'><button  style={{backgroundColor:"#2E2EFF" }} onClick={downloadPDF} type="button2" class="btn btn-info">Generate Report</button></div> */}

                    <table className="table table-hover" style={{marginTop:'50px'}}>
                    <thead class="thead-dark">
                                <tr>
                                  
                                  <th scope="col">Product Code</th>
                                  <th scope="col">Product Name</th>
                                  <th scope="col">Quantity (KG/L)</th>
                                  <th></th>
                                  <th></th>
                                  <th></th>
                                </tr>
                            </thead>
                              <tbody>
                                {
                                    ManufactureD.filter(e=>
                                        e.ID.includes(search) ||
                                        e.Name.toLowerCase().includes(search)
                                        ).map((e,i) => (
                                        
                                    <tr>
                                    
                                        <td>{e.ID}</td>
                                        <td>{e.Name}</td>
                                        <td>{e.Quantity}</td>
                                
                                        <td></td>
                                        <td></td>

                                         <td><Link to={"/update/"+e._id} >
                                        <Button style={{
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
        
        
        </div>
        <div class="d-grid gap-2 col-6 mx-auto">
                <Link to = "/post"><button type="button" class="btn btn-warning btn-lg" >Add Product </button></Link>
                
                
        </div>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      
   </div>
   </div>

    )
  }