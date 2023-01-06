import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./TransportNavbar"

export default function AddVehicle() {
    const [model, setModel] = useState("");
    const [registrationNo, setRegNo] = useState("");
    const [fuelType, setFuel] = useState("");
    const [millage, setMillage] = useState("");
    const [VehicleStatus, setStatus] = useState("");

    function sendData(e) {
        e.preventDefault();
        const newVehicle = {
            model,
            registrationNo,
            fuelType,
            millage,
            VehicleStatus
        }
        axios.post("http://localhost:8889/Vehicle/add", newVehicle).then(() => {
            alert("Vehicle added");
        }).catch((err) => {
            alert(err);
        })

    }

    return (
        <div className="icc">
            <Navbar/>
            <div className="container">
        <div className='border' >
          <div className='col-md-8 mt-4 mx-auto'></div>
            <form onSubmit={sendData}>
                <div class="mb-3">
                    <label for="model" className="form-label">Vehicle Model</label>
                    <input type="text" className="form-control" id="model" placeholder="Enter Vehicle Model" onChange={(e) => {
                        setModel(e.target.value);
                    }} />

                </div>
                <div class="mb-3">
                    <label for="registrationNo" className="form-label">Vehicle registrationNo</label>
                    <input type="text" className="form-control" id="registrationNo" placeholder="Enter Vehicle registrationNo" onChange={(e) => {
                        setRegNo(e.target.value);
                    }} />

                </div>
                <div class="mb-3">

                    <label for="fuelType" className="form-label">Fuel Type</label>
                    <input type="text" className="form-control" id="fuelType" placeholder="Enter Fuel Tyoe" onChange={(e) => {
                        setFuel(e.target.value);
                    }} />

                </div>
                <div class="mb-3">

                    <label for="millage" className="form-label">Millage</label>
                    <input type="text" className="form-control" id="millage" placeholder="Enter millage" onChange={(e) => {
                        setMillage(e.target.value);
                    }} />

                </div>
                <div className="mb-3 ">
                    <label for="VehicleStatus" className="form-label">Vehicle Status</label>
                    <input type="text" className="form-control" id="VehicleStatus" placeholder="Enter Vehicle Status" onChange={(e) => {
                        setStatus(e.target.value);
                    }} />
                </div>
                <Link to="/ViewVehicles">
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
