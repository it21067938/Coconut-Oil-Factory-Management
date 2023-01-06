import React,{useState} from "react"
import manu from '../manufacture/images/manufacture.webp'
import Navbar from "./manufacture-navbar"





export default function dashboard(){
    return(
        <div><Navbar/>
        
        {/* background-image: url("../../assect/images/bb.webp"); */}

        <div className="dashboardmanu" style={{ zIndex: 98,height:"100%" }} >
            {/* <div  style={{ zIndex: 0,height:"100%" }}></div> */}
            <h1><center>Manufacture Dashboard</center></h1>

            <div class="card" style= {{marginLeft:"561px",marginTop:"0px"}}>
            <img src={manu} class="card-img-top" alt="Income image"/>
            <div class="card-body">
                <h5 class="card-title">Manufacture Inventory </h5>
                <p class="card-text">When you click this button, you can view all Added products and you can update that product details and if you want to delete it you can delete it and also you can add new product details. </p>
                <a href="postDetails" class="btn btn-primary">Go</a>
            </div>
            


            </div>
         
            


        <br></br>
        </div>



       
</div>

    )
}