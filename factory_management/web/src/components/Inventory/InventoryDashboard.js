import React from 'react'
import Navbar from "./InventoryNavBar"
import '../Inventory/.css'
import in1 from '../../assect/images/db1.jpg'
import in2 from '../../assect/images/db2.jpg'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


export default function InventoryHome() {

    return (

        <div >
            <Navbar />
            <div className="DashBG" style={{ zIndex: 98 , height:"800px"}}>
            <br />
            <h1><center><u>Inventory Dashboard</u></center></h1>


            <div class="card">
                <img src={in1} class="card-img-top" alt="Income image" />
                <div class="card-body">
                    <h5 class="card-title">Coconut Stock</h5>
                    <p class="card-text">view all stock of coconut, you can add and update after suppliers gave the coconuts if you want to delete coconut stock then you can delete it. </p>
                    <a href="coconutstock" class="btn btn-primary">Go <NavigateNextIcon/></a>
                </div>


            </div>
            <div class="card" style={{ marginTop: '-606px', marginLeft: "850px" }}>
                <img src={in2} class="card-img-top" alt="expenses image" />
                <div class="card-body">
                    <h5 class="card-title">Inventory</h5>
                    <p class="card-text"><justify>When you click this button, you can view all the products and you can add,update and delete  products </justify></p>
                    <a href="inventory" class="btn btn-primary">Go <NavigateNextIcon/></a>
                </div>


            </div>
            </div>

        </div>


 )
}