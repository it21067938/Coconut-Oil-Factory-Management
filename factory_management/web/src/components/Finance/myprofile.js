import React,{useState} from "react"
import Navbar from'./FinanceNavbar'





export default function profile(){

    return(
    
        <div>
             <Navbar/>
             <div className="order_bground" style={{ zIndex: 98,height:"100%" }} >
          
             <div class="card align">

<div class="card-body">

  <div class="d-flex flex-column align-items-center text-center">

    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150"/>

    <div class="mt-3">

      <h4>Sandaruwan W.S.R</h4>

      <p class="text-secondary mb-1">Full Stack Developer</p>

      <p class="text-muted font-size-sm">399/C Gamunumawatha,palanwatta
      ,pannipitiye</p>
      <button class="btn btn-primary">Follow</button>

      <button class="btn btn-outline-primary">Message</button>

    </div>

  </div>

</div>

</div>
          
          </div>
        </div>


       


    )
}