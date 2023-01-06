import React from 'react';
import { Link } from 'react-router-dom';
import '../Transport/style.css';
import in1 from '../../assect/images/vehicle.jpeg'
import in2 from '../../assect/images/driver.jpg'
import in3 from '../../assect/images/delivery.jpg'
import in4 from '../../assect/images/order.jpg'
import Navbar from "./TransportNavbar"


function Home() {

    return (
        <div className='im'>
        <div >
            
            <Navbar/>

        <div >
            <div className='d-flex' >
            <div class="card">
                <img src={in2} class="card-img-top" alt="Income image" />
                <div class="card-body">
                    <h5 class="card-title">Drivers</h5>
                    <p class="card-text">View all Driver Details, you can add Drivers  and update Driver details if you want to remove Drivers then you can delete it. </p>
                    <a href="ViewDrivers" class="btn btn-primary">View Drivers</a>
                </div>
            </div>
            <div class="card" style={{ marginLeft: "250px"}}>
                <img src={in1} class="card-img-top" alt="Income image" />
                <div class="card-body">
                    <h5 class="card-title">Vehicles</h5>
                    <p class="card-text">View all Vehicle Details, you can add Vehicles  and update Vehicle details if you want to remove Vehicles then you can delete it. </p>
                    <a href="ViewVehicles" class="btn btn-primary">View Vehicles</a>
                </div>
            </div>
            </div>
            
            <div className='d-flex'  >
            <div class="card" >
                <img src={in3} class="card-img-top" alt="Income image" />
                <div class="card-body">
                    <h5 class="card-title">Delivery</h5>
                    <p class="card-text">View all Delivery Details, you can Place Orders and Update Delivery details if you want to remove Orders then you can delete it.  </p>
                    <a href="ViewDelivery" class="btn btn-primary">View Delivery</a>
                </div>
            </div>
            <div class="card" style={{ marginLeft: "250px"}}>
                <img src={in4} class="card-img-top" alt="Income image" />
                <div class="card-body">
                    <h5 class="card-title">Get Order Details</h5>
                    <p class="card-text">Get Delivery Details from Sales Manager </p>
                    <a href="accepted_orders" class="btn btn-primary">Get Order Details</a>
                </div>
            </div>
            </div>
            </div>

        </div>
        </div>


    )

}
export default Home;