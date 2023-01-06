import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../Transport/style.css';
import Navbar from "./TransportNavbar"

export default function AddDriver() {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [age, setAge] = useState("");
    const [NIC, setNIC] = useState("");
    const [gender, setGender] = useState("");
    const [ContactNo, setContactNo] = useState("");
    const [Driverstatus, setDriverstatus] = useState("");
    function sendData(e) {
        e.preventDefault();
        const newDriver = {
            name,
            address,
            age,
            NIC,
            gender,
            ContactNo,
            Driverstatus
        }
        const ph = /^[0-9\b]+$/;
        if ((!ph.test(String(ContactNo))) || (ContactNo.length != 10)) {
            alert("Invalid Contact Number !", "contact number should be valid pattern", "error");
        }
        else {
            axios.post("http://localhost:8889/Driver/add", newDriver).then(() => {
                alert("Driver added");
            }).catch((err) => {
                alert(err);
            })
        }

    }


    return (
        <div className="icc">
            <Navbar/>
            <div className="container">
                <div className='border' >
                    <div className='col-md-8 mt-4 mx-auto'></div>
                    <form onSubmit={sendData}>
                        <div class="mb-3">
                            <label for="name" className="form-label">Driver Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter Driver Name" onChange={(e) => {
                                setName(e.target.value);
                            }} />

                        </div>
                        <div class="mb-3">
                            <label for="address" className="form-label">Driver Address</label>
                            <input type="text" className="form-control" id="address" placeholder="Enter Driver address" onChange={(e) => {
                                setAddress(e.target.value);
                            }} />

                        </div>
                        <div class="mb-3">

                            <label for="age" className="form-label">Driver Age</label>
                            <input type="text" className="form-control" id="age" placeholder="Enter Driver Age" onChange={(e) => {
                                setAge(e.target.value);
                            }} />

                        </div>
                        <div class="mb-3">

                            <label for="NIC" className="form-label">Driver NIC</label>
                            <input type="text" className="form-control" id="NIC" placeholder="Enter Driver NIC" onChange={(e) => {
                                setNIC(e.target.value);
                            }} />

                        </div>
                        <div className="mb-3 ">
                            <label for="gender" className="form-label">Driver Gender</label>
                            <input type="text" className="form-control" id="gender" placeholder="Enter Driver Gender" onChange={(e) => {
                                setGender(e.target.value);
                            }} />
                        </div>
                        <div class="mb-3">

                            <label for="ContactNO" className="form-label">Driver ContactNO</label>
                            <input type="Number" className="form-control" id="ContactNO" placeholder="Enter Driver ContactNO" onChange={(e) => {
                                setContactNo(e.target.value);
                            }} />

                        </div>
                        <div class="mb-3">

                            <label for="Driverstatus" className="form-label">Driver Driverstatus</label>
                            <input type="text" className="form-control" id="Driverstatus" placeholder="Enter Driver Driverstatus" onChange={(e) => {
                                setDriverstatus(e.target.value);
                            }} />

                        </div>

                        <button type="submit" className="btn btn-success" style={{ marginLeft: '240px' }}>
                            Submit

                        </button>
                        <Link to="/ViewDrivers">
                            <button className="btn btn-danger" style={{}}>
                                Back
                            </button></Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
