import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import Navbar from "./InventoryNavBar"
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
      
  },[])
  

    return (
      
      <div>
          
      <Navbar/>
      <div className="body">
      <div className="order_bground" style={{ zIndex: 98 }} >
                <div className="container">
               
                    <h1 className="header1"><center>Manufacture</center></h1>
                    <br></br>
                    <input
                    className='form-control'
                    type='search'
                    placeholder='search'
                    name='searchQuery'>
                </input>
                    <br></br>
                    

                    <table className="table table-hover" style={{marginTop:'50px'}}></table>
                          <table class="table">
                               <thead class="thead-dark">
                                <tr>
                                  
                                  <th scope="col">Product Code</th>
                                  <th scope="col">Product Name</th>
                                  <th scope="col">Quantity (KG/L)</th>
                      
                                </tr>
                            </thead>
                              <tbody>
                                {
                                    ManufactureD.map((e,i) => (
                                        
                                    <tr>
                                    
                                        <td>{e.ID}</td>
                                        <td>{e.Name}</td>
                                        <td>{e.Quantity}</td>
                                
                                        
                                    </tr>
                                    ))
                                }
                                </tbody> 
                        </table>
                     
                </div>
        
        
        </div>
        <div class="d-grid gap-2 col-6 mx-auto">
                
                             
        </div>

        
      
   </div>
   </div>
   )
}