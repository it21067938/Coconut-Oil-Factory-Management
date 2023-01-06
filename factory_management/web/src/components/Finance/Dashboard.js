import React,{useState} from "react"
import Navbar from'./FinanceNavbar'
import income from '../Image/income2.jpg'
import expenses from '../Image/expenses.jpg'
import salary from '../Image/salary.jpg'
import invoice from '../Image/invoice.jpg'
import ledger from '../Image/ledger.jpg'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';




export default function dashboard(){

    return(
    
        <div>
             <Navbar/>
             <div className="order_bground" style={{ zIndex: 98,height:"100%" }} >
            <br/>
            <h1 style={{color:"white"}}><center>Finance Dashboard</center></h1>


            <div class="card">
            <img src={income} class="card-img-top" alt="Income image"/>
            <div class="card-body">
                <h5 class="card-title">Manage income</h5>
                <p class="card-text">When you click this button, you can view all Added income and you can update that income and if you want to delete it you can delete it and also you can add new income. </p>
                <a href="disI" class="btn btn-primary">Go  <NavigateNextIcon/></a>
            </div>


            </div>
            <div class="card" style={{marginTop:'-600px',marginLeft:"850px",marginBottom:"50px"}}>
            <img src={expenses} class="card-img-top" alt="expenses image"/>
            <div class="card-body">
                <h5 class="card-title">Manage expenses</h5>
                <p class="card-text"><justify>When you click this button, you can view all Added Expenses and you can update that expenses and if you want to delete it you can delete it and also you can add new expenses.</justify></p>
                <a href="disE" class="btn btn-primary">Go  <NavigateNextIcon/></a>
            </div>


            </div><div class="card">
            <img src={salary} class="card-img-top" alt="salary image"/>
            <div class="card-body">
                <h5 class="card-title">Calculate Salary</h5>
                <p class="card-text"><justify>When you click this button, you can view all calculated salaries and you can update that salaries and if you want to delete it you can delete it and also you can calculate new salary by checking the OT hours.</justify></p>
                <a href="salD" class="btn btn-primary">Go  <NavigateNextIcon/></a>
            </div>


            </div><div class="card" style={{marginTop:'-600px',marginLeft:"850px",marginBottom:"50px"}}>
            <img src={invoice}class="card-img-top" alt="invoice image" />
            <div class="card-body">
                <h5 class="card-title">Generate Invoice</h5>
                <p class="card-text">When you click this button, you can view available purchase orders and using those purchase order you can create the invoice and also u can update and delete invoices. </p>
                <a href="orders" class="btn btn-primary">Go  <NavigateNextIcon/></a>
            </div>

            
            </div>
            
            <div class="card" style={{marginLeft:"500px"}}>
            <img src={ledger} class="card-img-top" alt="ledger image"/>
            <div class="card-body">
                <h5 class="card-title">Financial ledgers</h5>
                <p class="card-text">When you click this button, there are five main Ledgers you can manage those ledgers.</p>
                <a href="ledger" class="btn btn-primary">Go  <NavigateNextIcon/></a>
            </div>
            </div>


            


            </div>
        </div>


       


    )
}