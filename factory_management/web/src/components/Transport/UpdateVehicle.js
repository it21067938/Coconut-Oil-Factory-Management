import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
//import { useParams } from "react-router-dom";
import { useParams } from "react-router-dom";
import '../Transport/style.css';
import Navbar from "./TransportNavbar"

function UpdateVehicle() {
  const [model, setModel] = useState("");
  const [registrationNo, setReg] = useState("");
  const [fuelType, setFuel] = useState("");
  const [millage, setMillage] = useState("");
  const [VehicleStatus, setStatus] = useState("");


  const { id } = useParams();
  console.log(id);


  const getVehicle = () => {
    axios
      //retrive data
      .get("http://localhost:8889/Vehicle/getVehicle/" + id)
      .then((res) => {
        const UpdateVehicle = {
          model: res.data.model,
          registrationNo: res.data.registrationNo,
          fuelType: res.data.fuelType,
          millage: res.data.millage,
          VehicleStatus: res.data.VehicleStatus,

        };

        // console.log(res.data);
        setModel(UpdateVehicle.model);
        setReg(UpdateVehicle.registrationNo);
        setFuel(UpdateVehicle.fuelType);
        setMillage(UpdateVehicle.millage);
        setStatus(UpdateVehicle.VehicleStatus)
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  useEffect(() => {
    getVehicle();
  }, []);

  return (
    <div className="icc">
      <Navbar />
      <div className="App new">

        <div >
          <div className="container">
            <div className='border' >

              <br></br>
              <br></br>
              <center>
                <h1 >Update Vehicle</h1>
              </center>
              <br></br>
              <div className="w">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();

                    const newVehicle = {
                      model,
                      registrationNo,
                      fuelType,
                      millage,
                      VehicleStatus
                    };
                    // console.log("hi", newDriver);
                    axios
                      .put("http://localhost:8889/Vehicle/update/" + id, newVehicle)
                      .then(() => {
                        alert("Vehicle updated");
                      })
                      .catch((err) => {
                        alert(err);
                      });
                  }}
                >

                  <div className="form-group">
                    <label htmlFor="model" className="form-label">
                      Model
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="model"
                      value={model}
                      onChange={(e) => {
                        setModel(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="address" className="form-label">
                      Registration No
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      value={registrationNo}
                      onChange={(e) => {
                        setReg(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="age" className="form-label">
                      Fuel Type
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="fuel"
                      value={fuelType}
                      onChange={(e) => {
                        setFuel(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="gender" className="form-label">
                      Vehicle Status
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="gender"
                      value={VehicleStatus}
                      onChange={(e) => {
                        setStatus(e.target.value);
                      }}
                    />
                  </div>

                  <br />
                  <div className="form-group">
                    <Link to="/ViewVehicles">
                      <button className="btn btn-danger" style={{}}>
                        Back
                      </button></Link>
                    <button type="submit" className="btn btn-success" style={{ marginLeft: '240px' }}>
                      Submit

                    </button>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default UpdateVehicle;
