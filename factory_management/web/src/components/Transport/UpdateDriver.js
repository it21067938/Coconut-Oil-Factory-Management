import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import '../Transport/style.css';
import Navbar from "./TransportNavbar"

function UpdateDriver() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [NIC, setNIC] = useState("");
  const [gender, setGender] = useState("");
  const [ContactNo, setContactNo] = useState("");
  const [Driverstatus, setDriverstatus] = useState("");

  const { id } = useParams();
  console.log(id);

  //const id = "12";

  const getDriver = () => {
    axios
      .get("http://localhost:8889/Driver/getdriver/" + id)
      .then((res) => {
        const UpdateDriver = {
          name: res.data.name,
          address: res.data.address,
          age: res.data.age,
          NIC: res.data.NIC,
          gender: res.data.gender,
          ContactNo: res.data.ContactNo,
          Driverstatus: res.data.ContactNo,
        };

        // console.log(res.data);
        setName(UpdateDriver.name);
        setAddress(UpdateDriver.address);
        setAge(UpdateDriver.age);
        setNIC(UpdateDriver.NIC);
        setGender(UpdateDriver.gender);
        setContactNo(UpdateDriver.ContactNo);
        setDriverstatus(UpdateDriver.Driverstatus);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  useEffect(() => {
    getDriver();
  }, []);

  return (
    <div className=" icc">
      <Navbar/>
      <div className="container">
        <div className='border' >
          <div className='col-md-8 mt-4 mx-auto'></div>
          <br></br>
          <br></br>
          <center>
            <h1 >Update Driver</h1>
          </center>
          <br></br>
          <div className="w">
            <form
              onSubmit={(e) => {
                e.preventDefault();

                const newDriver = {
                  name,
                  address,
                  age,
                  NIC,
                  gender,
                  ContactNo,
                  Driverstatus,
                };
                console.log("hi", newDriver);
                axios
                  .put("http://localhost:8889/Driver/update/" + id, newDriver)
                  .then(() => {
                    alert("Driver updated");
                  })
                  .catch((err) => {
                    alert(err);
                  });
              }}
            >

              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={name}
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
                  Age
                </label>
                <input
                  type="Number"
                  className="form-control"
                  id="age"
                  value={age}
                  onChange={(e) => {
                    setAge(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="nic" className="form-label">
                  NIC
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nic"
                  value={NIC}
                  onChange={(e) => {
                    setNIC(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="gender" className="form-label">
                  Gender
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="gender"
                  value={gender}
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="no" className="form-label">
                  Contact NO
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="no"
                  value={ContactNo}
                  onChange={(e) => {
                    setContactNo(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="driverS" className="form-label">
                  Driver Status
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="driverS"
                  value={Driverstatus}
                  onChange={(e) => {
                    setDriverstatus(e.target.value);
                  }}
                />
              </div>
              <br />
              <div className="form-group">
                <button type="submit" className="btn btn-success" style={{ marginLeft: '240px' }}>
                  Submit

                </button>
                <Link to="/ViewDrivers">
                  <button className="btn btn-danger" style={{}}>
                    Back
                  </button></Link>
              </div>
            </form>
          </div>
        </div>
      </div></div>
  );
}

export default UpdateDriver;
