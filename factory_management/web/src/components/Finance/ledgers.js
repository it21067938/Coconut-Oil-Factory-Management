import React,{useState} from "react"
import Navbar from'./FinanceNavbar'
import SP from '../Image/S&P.jpg'
import payble from '../Image/payble.png'
import receivable from '../Image/receivable.jpg'
import bank from '../Image/bank.jpg'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {Link} from "react-router-dom";


export default function Ledgers(){

    return(

        <div>
            <Navbar/>
            <br/>
            <h1><center>Financial Ledgers</center></h1>




            <div class="card">
            <img src={SP} class="card-img-top" alt="purchase image"/>
            <div class="card-body">
                <h5 class="card-title">Purchase Ledger</h5>
                <p class="card-text">you should enter all  relevant transactions for this  here. and also you can update and delete those.</p>
                <a href="displayPurchase" class="btn btn-primary">Go <NavigateNextIcon/></a>
            </div>


            </div>
            <div class="card" style={{marginTop:'-600px',marginLeft:"850px",marginBottom:"50px"}}>
            <img src={SP} class="card-img-top" alt="sales image"/>
            <div class="card-body">
                <h5 class="card-title">Sales Ledger</h5>
                <p class="card-text"><justify>you should enter all  relevant transactions for this  here. and also you can update and delete those.</justify></p>
                <a href="displaySales" class="btn btn-primary">Go <NavigateNextIcon/></a>
            </div>


            </div><div class="card">
            <img src={payble} class="card-img-top" alt="salary image"/>
            <div class="card-body">
                <h5 class="card-title">Payble Ledger</h5>
                <p class="card-text"><justify>you should enter all  relevant transactions for this  here. and also you can update and delete those.</justify></p>
                <a href="displayPayble" class="btn btn-primary">Go <NavigateNextIcon/></a>
            </div>


            </div><div class="card" style={{marginTop:'-600px',marginLeft:"850px",marginBottom:"50px"}}>
            <img src={receivable}class="card-img-top" alt="invoice image" />
            <div class="card-body">
                <h5 class="card-title">Receivable Ledger</h5>
                <p class="card-text">you should enter all  relevant transactions for this  here. and also you can update and delete those. </p>
                <a href="displayReceive" class="btn btn-primary">Go <NavigateNextIcon/></a>
            </div>

            
            </div>
            
            <div class="card" style={{marginLeft:"500px"}}>
            <img src={bank} class="card-img-top" alt="ledger image"/>
            <div class="card-body">
                <h5 class="card-title">Bank Ledger</h5>
                <p class="card-text">you should enter all  relevant transactions for this  here. and also you can update and delete those.</p>
                <a href="displayBank" class="btn btn-primary">Go <NavigateNextIcon/></a>
            </div>
            </div>



            <Link to = "dash" style={{marginLeft:"550px"}}><button type="button" class="m-5 btn btn-secondary btn-lg" >Back </button></Link>
            
        </div>
        


       


    )
}