import React from 'react'
import Navbar from "./SalesManagerNavBar"
import '../Order/.css'
import sales from '../../assect/images/sales.jpg'
import sales2 from '../../assect/images/sales2.jpg'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


export default function SaledsM_Home() {

    return (
        <div>
            <Navbar />

            <div className="DashBG1" style={{ zIndex: 98 }}>

                <center>
                    <h1><span class="badge bg-warning text-dark opacity-90 fs-2" style={{ marginBlockStart: '3%' }}>Sales Dashboard</span></h1>
                </center>


                <div class="card">
                    <img src={sales} class="card-img-top" alt="Income image" />
                    <div class="card-body">
                        <h5 class="card-title">Pending Orders</h5>
                        <p class="card-text">When you click this button, you can view all pending orders and after checking invetory, you can accept these orders and if you want to delete pending order then you can delete it. </p>
                        <a href="pending_orders" class="btn btn-primary">Go <NavigateNextIcon /></a>
                    </div>
                </div>

                <div class="card" style={{ marginTop: '-600px', marginLeft: "850px", marginBottom: "50px" }}>
                    <img src={sales2} class="card-img-top" alt="expenses image" />
                    <div class="card-body">
                        <h5 class="card-title">Accepted Orders</h5>
                        <p class="card-text"><justify>When you click this button, you can view all accepted orders and you can update that orders estiamted date and if you want to delete complete order then you can delete it.</justify></p>
                        <a href="accepted_orders" class="btn btn-primary">Go <NavigateNextIcon /></a>
                    </div>
                </div>

            </div>
        </div>


    )
}