import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./TransportNavbar"

export default function AddDelivery() {
    const [CustomerName, setName] = useState("");
    const [address, setAddress] = useState("");
    const [CustomerContactNo, setNo] = useState("");
    const [VehicleId, setVehicleId] = useState("");
    const [DriverNIC, setDriverNIC] = useState("");
    const [Date, setDate] = useState("");


    function sendData(e) {
        e.preventDefault();
        const newDelivery = {
            CustomerName,
            address,
            CustomerContactNo,
            VehicleId,
            DriverNIC,
            Date,
            // VehicleStatus,
            // DriverStatus
        }
        const ph = /^[0-9\b]+$/;
        if ((!ph.test(String(CustomerContactNo))) || (CustomerContactNo.length != 10)) {
            alert("Invalid Contact Number !", "contact number should be valid pattern", "error");
        }
        else {
            axios.post("http://localhost:8889/Delivery/add", newDelivery).then(() => {
                alert("Delivery added");
            }).catch((err) => {
                alert(err);
            })
        }

    }

    return (
        <div className="icc">
            <Navbar/>
        <div className='border' >
          <div className='col-md-8 mt-4 mx-auto'></div>
        <div classNameName="container">
            <form onSubmit={sendData}>
                <div class="mb-3">
                    <label for="CustomerName" className="form-label">Customer Name</label>
                    <input type="text" className="form-control" id="CustomerName" placeholder="Enter Customer Name" onChange={(e) => {
                        setName(e.target.value);
                    }} />

                </div>
                <div class="mb-3">
                    <label for="address" className="form-label">Delivery Address</label>
                    <input type="text" className="form-control" id="address" placeholder="address" onChange={(e) => {
                        setAddress(e.target.value);
                    }} />

                </div>
                <div class="mb-3">

                    <label for="CustomerContactNo" className="form-label">Customer Contact No</label>
                    <input type="text" className="form-control" id="CustomerContactNo" placeholder="Contact" onChange={(e) => {
                        setNo(e.target.value);
                    }} />

                </div>
                <div class="mb-3">

                    <label for="VehicleId" className="form-label">Vehicle Registration No</label>
                    <input type="text" className="form-control" id="VehicleId" placeholder="VehicleId" onChange={(e) => {
                        setVehicleId(e.target.value);
                    }} />

                </div>
                <div class="mb-3">

                    <label for="DriverNIC" className="form-label">Driver NIC</label>
                    <input type="text" className="form-control" id="DriverNIC" placeholder="DriverNIC" onChange={(e) => {
                        setDriverNIC(e.target.value);
                    }} />

                </div>
                <div class="mb-3">

                    <label for="date" className="form-label">Date</label>
                    <input type="date" className="form-control" id="date" placeholder="DriverNIC" onChange={(e) => {
                        setDate(e.target.value);
                    }} />

                </div>
              
                <Link to="/ViewDelivery">
                <button className="btn btn-danger" style={{}}>
                    Back
                  </button></Link>
                  <button type="submit" className="btn btn-success" style={{ marginLeft: '240px' }}>
                  Submit

                </button>
            </form>
        </div>
        </div>
        </div>
    )
}
