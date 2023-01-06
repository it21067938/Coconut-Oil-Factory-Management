import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Container, Modal, Table } from "react-bootstrap";
import Navbar from "./FinanceNavbar"
import logo from '../Image/logo.jpg'


export default function PrintInvoice(){
            //display invoice details

            const[invoiceD,setInvoiceD] = useState([]);
            
            useEffect(() => {
                function getInvoiceD(){
                    axios.get("http://localhost:8889/invoiceDetails/view").then((res)=> {
                        console.log(res.data);
                        setInvoiceD(res.data[0])

                        
                    }).catch((err)=> {
                        alert(err.message)
                    })
                }
                getInvoiceD();
                
            },[])

            const invoiceNo = invoiceD.InvoiceNo;
            const date = invoiceD.Date;
            const companyName = invoiceD.CompanyName;
            const address = invoiceD.Address;
            const contactNo =invoiceD.ContactNo;

        
            console.log(invoiceNo);
            console.log(date);
            console.log(companyName);
            console.log(address);
            console.log(contactNo);
        
            //page refresh function
        
            function refreshPage() {
              window.location.reload(false);
            }


       //display item details
       const[itemD,setItemD] = useState([]);
        
       useEffect(() => {
           function getItemD(){
               axios.get("http://localhost:8889/itemsDetails/view").then((res)=> {
                   console.log("items tika",res.data);
                   setItemD(res.data)


                   
               }).catch((err)=> {
                   alert(err.message)
               })
           }
           getItemD();
           
       },[])

       function refreshPage() {
        window.location.reload(false);
      }

       const deleteData = (e) =>{
        var result = window.confirm("Are you want to print invoice?");
        window.print()
        refreshPage()
      if(result == true){
          axios.delete(`http://localhost:8889/itemsDetails/deleteAll`).then((res)=>{
          }).catch(e =>{
              alert(e)
          })
      }else{
          e.preventDefault();
      }
    
    
    
    }
      
    
       const amounts = itemD.map((item) => item.Amount);
       console.log(amounts)
        let sum = 0;
       for (let i = 0; i < amounts.length; i++){
            sum = amounts[i] + sum
       }
      console.log(sum)

      let tax =0;
      tax =sum * 15 /100; 


      let totalAmount = 0;
      totalAmount = sum + tax;



return(
<div>
                 




                 <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />

                 <div class="page-content container" style={{height:'1300px',width:'1100px',marginTop:'50px'}}>
                     <div class="page-header text-blue-d2">
                         <h1 class="page-title text-secondary-d1">
                             Invoice :- 
                             <small class="page-info">
                                 
                                 { invoiceNo}
                             </small>
                         </h1>

                         <div class="page-tools">
                             <div class="action-buttons">
                                 <button class="btn bg-white btn-light mx-1px text-95" data-title="Print"variant="primary" onClick={() => {deleteData()}}>
                                     <i class="mr-1 fa fa-print text-primary-m1 text-120 w-2"></i>
                                     Print
                                 </button>

                             </div>
                         </div>
                     </div>
                    
                     <div class="container px-0">
                         <div class="row mt-4">
                             <div class="col-12 col-lg-12">
                                 <div class="row">
                                     <div class="col-12">
                                         <div class="text-center text-150">
                                             <img class="fa fa-book fa-2x text-success-m2 mr-1" src={logo} style={{width:'100px'}}></img>
                                             <br/>
                                             <span class="text-default-d3">Jayasinghe Oil Mills</span>
                                         </div>
                                     </div>
                                 </div>
                             

                                 <hr class="row brc-default-l1 mx-n1 mb-4" />
                                 <br/>
                                 <div class="row">
                                     <div class="col-sm-6">
                                         <div>
                                             <span class="text-sm text-grey-m2 align-middle">To:</span>
                                             <span class="text-600 text-110 text-blue align-middle">{companyName}</span>
                                         </div>
                                         <div class="text-grey-m2">
                                             <div class="my-1">
                                                {address}
                                             </div>
                                             
                                             <div class="my-1"><i class="fa fa-phone fa-flip-horizontal text-secondary"></i> <b class="text-600">{contactNo}</b></div>
                                         </div>
                                     </div>
                                  
                                     <div class="text-95 col-sm-6 align-self-start d-sm-flex justify-content-end">
                                         <hr class="d-sm-none" />
                                         <div class="text-grey-m2">
                                             <div class="mt-1 mb-2 text-secondary-m1 text-600 text-125">
                                                 Invoice
                                             </div>

                                             <div class="my-2"><i class="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span class="text-600 text-90">ID:</span>{invoiceNo}</div>

                                             <div class="my-2"><i class="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span class="text-600 text-90">Issue Date:</span>{date}</div>

                                             <div class="my-2"><i class="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span class="text-600 text-90">Status:</span> <span class="badge badge-warning badge-pill px-25">Unpaid</span></div>
                                         </div>
                                     </div>
                                 

                                
                                         

                                     

                                     <div class="row border-b-2 brc-default-l2"></div>

                                 <br/>
                                 <div class="table-responsive">
                                     <table class="table table-striped table-borderless border-0 border-b-2 brc-default-l1">
                                         <thead className="tableheader">
                                             <tr >
                                                 <th class="opacity-2">No</th>
                                                 <th>Description</th>
                                                 <th>Qty</th>
                                                 <th>Unit Price</th>
                                                 <th width="140" classname="alnright">Amount</th>
                                            
                                             </tr>
                                         </thead>

                                         <tbody class="text-95 text-secondary-d3">
                                             {
                                                itemD.map((e,i)=>
                                                <tr>
                                                         <td>{i+1} </td>
                                                         <td>{e.Description}</td>
                                                         <td>{e.Quantity}</td>
                                                         <td>{e.Rate}</td>
                                                         <td class ="alnright">{e.Amount}.00</td>
                                                         
                                                 </tr>
                                                
                                              
                                                ) 


                                             }
                                         </tbody>
                                     </table>
                                 </div>
                            

                                     <div class="row mt-3">
                                         <div class="col-12 col-sm-7 text-grey-d2 text-95 mt-2 mt-lg-0">
                                         Kindly pay your invoice within 30 days.
                                         </div>

                                         <div class="col-12 col-sm-5 text-grey text-90 order-first order-sm-last">
                                             <div class="row my-2">

                                                 <div class="col-7 text-right">
                                                     SubTotal
                                                 </div>
                                                 <div class="col-5">
                                                     <span class="text-120 text-secondary-d1">{sum}.00</span>
                                                 </div>
                                             </div>

                                             <div class="row my-2">
                                                 <div class="col-7 text-right">
                                                     VAT (15%)
                                                 </div>
                                                 <div class="col-5">
                                                     <span class="text-110 text-secondary-d1">{tax}.00</span>
                                                 </div>
                                             </div>

                                             <div class="row my-2 align-items-center bgc-primary-l3 p-2">
                                                 <div class="col-7 text-right">
                                                     <b>Total Amount</b>
                                                 </div>
                                                 <div class="col-5">
                                                     <span class="text-150 text-success-d3 opacity-2"><b>{totalAmount}.00</b></span>
                                                 </div>
                                             </div>
                                         </div>
                                     </div>

                                     <hr></hr>

                                     <div>
                                         <span class="text-secondary-d1 text-105">Thank you for your business stay with us!</span>
                                       
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 


             </div> 
</div> 
            


       


)
}
