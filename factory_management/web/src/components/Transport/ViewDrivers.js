import React, { useState, useEffect } from "react";
import axois from "axios";
import { Link } from "react-router-dom";
import axios from "axios";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from "@mui/material";
import Navbar from "./TransportNavbar"


export default function ViewDrivers() {
  const [Drivers, setDrivers] = useState([]);
  const [serQuery, setQuery] = useState("")

  useEffect(() => {
    function getDrivers() {
      axois
        .get("http://localhost:8889/Driver/View")
        .then((res) => {
          console.log(res.data);
          setDrivers(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getDrivers();
  }, []);
  const deleteData = (e) => {
    var result = window.confirm("Are you sure?");

    if (result == true) {
      axois
        .delete(`http://localhost:8889/Driver/delete/${e._id}`)
        .then((res) => { })
        .catch((e) => {
          alert(e);
        });
    } else {
      e.preventDefault();
    }
  };
 
  function searchfun(e) {

    setQuery(e.target.value)
}
  return (
    <div className="icc" >
      <Navbar/>
      <br></br>
      <div className="row">
      
        <div className="col-md-8"></div>
        <div className="col-md-4">
          <div className="row">
            <div className="col-sm-8">
              
            </div>
            <div className="col-sm-4">
             
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-9 mt-2 mb-2" style={{ marginTop: "40px" ,width:"1300px",marginLeft:"300px"}}>
          <center><h4 class="heading">Drivers</h4>
          <input style={{width:"1200px",height:'40px',marginRight:"180px",marginLeft:"-100px"}}onChange={searchfun} placeholder="Search..." /></center>
          
        </div>

        
      </div>
      

      <table className="table" style={{ marginTop: "40px", width: "1200px", marginLeft: "200px" }}>
        <thead class="thead-dark">
          {Drivers && (
            <tr>
              <th scope="col">Driver Name</th>
              <th scope="col">Address </th>
              <th scope="col">Age</th>
              <th scope="col">NIC</th>
              <th scope="col">Gender </th>
              <th scope="col">Contact NO</th>
              <th scope="col">Driver Status </th>
              <th></th>
              <th></th>
            </tr>
          )}
        </thead>

        <tbody>
          {Drivers &&
            Drivers.filter(e =>



              e.name.toLowerCase().includes(serQuery) ||
              e.name.includes(serQuery) ||

              e.address.toLowerCase().includes(serQuery) ||
              e.address.includes(serQuery) ||

              e.NIC.toLowerCase().includes(serQuery) ||
              e.NIC.includes(serQuery)



          ).map((e, i) => (
              <tr>
                <td>{e.name}</td>
                <td>{e.address}</td>
                <td>{e.age}</td>
                <td>{e.NIC}</td>
                <td>{e.gender}</td>
                <td>{e.ContactNo}</td>
                <td>{e.Driverstatus}</td>
                <td>{e.Date}</td>
                {/* <td className="middle">
                                    <button className="up_pur" >Update</button> */}
                <td><Link to={"/UpdateDriver/" + e._id} >
                    <Button style={{
                      backgroundColor: "#B4B731"
                    }} variant="contained" startIcon={<EditIcon />}>Edit</Button></Link>

                    <Button color="error" sx={{ ml: 2 }} onClick={() => {
                      deleteData(e);
                    }} variant="contained" startIcon={<DeleteIcon />}>
                      Delete
                    </Button>
                  </td>
                {/* <td className="middle">
                  <Link to={"/UpdateDriver/" + e._id}>
                    <button className="btn btn-success mr">Update</button>
                  </Link>
                  <button className="btn btn-danger" onClick={() => { deleteData(e); }} >
                    Delete
                  </button>
                </td> */}
                
                {/* <td><button href="/accepted_orders" type="button2" class="rejectButton">Delete</button></td> */}
              </tr>
            ))}
        </tbody>
      </table>
      <div className="buttons">
        <Link to="AddDriver">
          <center>
            <button type="button2" class="btn btn-success" style={{ marginLeft: "-200px" }}>
              Add Drivers
            </button>
          </center>
        </Link>
      </div>
    </div>
  );
}
