import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "./TransportNavbar"

function UpdateDelivery() {
  const [CustomerName, setName] = useState("");
  const [address, setAddress] = useState("");
  const [CustomerContactNo, setContactNo] = useState("");
  const [VehicleId, setVehicleID] = useState("");
  const [DriverNIC, setNIC] = useState("");
  const [Date, setDate] = useState("");

  const { id } = useParams();
  console.log(id);

  //const id = "12";

  const getDelivery = () => {
    axios
      .get("http://localhost:8889/Delivery/getdelivery/" + id)
      .then((res) => {
        const UpdateDelivery = {
          CustomerName: res.data.CustomerName,
          address: res.data.address,
          CustomerContactNo: res.data.CustomerContactNo,
          VehicleId: res.data.VehicleId,
          DriverNIC: res.data.DriverNIC,
          Date: res.data.Date,
        };

        console.log(UpdateDelivery);
        setName(UpdateDelivery.CustomerName);
        setAddress(UpdateDelivery.address);
        setContactNo(UpdateDelivery.CustomerContactNo);
        setVehicleID(UpdateDelivery.VehicleId);
        setNIC(UpdateDelivery.DriverNIC);
        setDate(UpdateDelivery.Date);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  useEffect(() => {
    getDelivery();
  }, []);

  return (
    <div className="App icc">
      <Navbar/>
      <div className="container" >
        <div className='border' >
          <div className='col-md-8 mt-4 mx-auto'></div>
          <br></br>
          <br></br>
          <center>
            <h1 >Update Delivery</h1>
          </center>
          <br></br>
          <div className="w">
            <form
              onSubmit={(e) => {
                e.preventDefault();

                const newDelivery = {
                  CustomerName,
                  address,
                  CustomerContactNo,
                  VehicleId,
                  DriverNIC,
                  Date
                };
                console.log("hi", newDelivery);
                axios
                  .put("http://localhost:8889/Delivery/update/" + id, newDelivery)
                  .then(() => {
                    alert("Delivery updated");
                  })
                  .catch((err) => {
                    alert(err);
                  });
              }}
            >

              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Customer Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={CustomerName}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="age" className="form-label">
                  Contact No
                </label>
                <input
                  type="Number"
                  className="form-control"
                  id="no"
                  value={CustomerContactNo}
                  onChange={(e) => {
                    setContactNo(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="vid" className="form-label">
                  Vehicle Id
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="vid"
                  value={VehicleId}
                  onChange={(e) => {
                    setVehicleID(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="gender" className="form-label">
                  Driver NIC
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="gender"
                  value={DriverNIC}
                  onChange={(e) => {
                    setNIC(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Date" className="form-label">
                  Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="Date"
                  value={Date}
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                />
              </div>

              <br />
              <div className="form-group">
              <button type="submit" className="btn btn-success" style={{ marginLeft: '240px' }}>
                  Submit

                </button>
                <Link to="/ViewDelivery">
                <button className="btn btn-danger" style={{}}>
                    Back
                  </button></Link>

              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateDelivery;
