import React, { useState, useEffect } from "react";
import axois from "axios";
import { Link } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from "@mui/material";
import Navbar from "./TransportNavbar"
import jsPDF from 'jspdf'
import 'jspdf-autotable'

export default function ViewDelivery() {
  const [Delivery, setDelivery] = useState([]);
  const [serQuery, setQuery] = useState("")
  

  useEffect(() => {
    function getDelivery() {
      axois
        .get("http://localhost:8889/Delivery/view")
        .then((res) => {
          console.log(res.data);
          setDelivery(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getDelivery();
  }, []);
  const deleteData = (e) => {
    var result = window.confirm("Are you sure?");

    if (result == true) {
      axois
        .delete(`http://localhost:8889/Delivery/delete/${e._id}`)
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
  //pdf generation;
  function downloadPDF() {

    var today = new Date();
    var curr_date = today.getDate();
    var curr_month = today.getMonth();
    var curr_year = today.getFullYear();

    today = [curr_month + 1] + "/ " + curr_date + "/ " + curr_year;
    var newdat = today;


    const doc = new jsPDF('landscape');
    doc.text("Jayasinghe Oil Mills", 15, 5);
    doc.text(newdat, 255, 5);
    doc.text("Transport", 130, 12);

    doc.autoTable({
        head: [['Customer Name', 'Address', 'Customer Contact Number', 'Vehicle ID', 'Driver NIC', 'Date']],
        body: Delivery.filter(e =>

          e.CustomerName.toLowerCase().includes(serQuery) ||
          e.CustomerName.includes(serQuery) ||

          e.address.toLowerCase().includes(serQuery) ||
          e.address.includes(serQuery) ||

          e.VehicleId.toLowerCase().includes(serQuery) ||
          e.VehicleId.includes(serQuery)

        ).map(function (e, i) {

            return (

              [e.CustomerName,
              e.address,
              e.CustomerContactNo,
              e.VehicleId,
              e.DriverNIC,
              e.Date,]

            );

        })

    })
    doc.save("Delivery.pdf");
    }
  return (
    <div className="icc">
      <div>
        <Navbar />
        <br></br>
        <div style={{ width: "1200px" }}>
          <div className="row">

            <center><h4 class="heading" >Transport</h4>
              <input style={{ width: "1200px", height: '40px', marginLeft: '200px' }} onChange={searchfun} placeholder="Search..." /></center>




          </div>

          <table className="table" style={{ marginTop: "40px", width: "1200px", marginLeft: "200px" }}>
            <thead class="thead-dark">
              <tr>
                <th scope="col">Customer Name</th>
                <th scope="col">Address </th>
                <th scope="col">Customer Contact No</th>
                <th scope="col">Vehicle Id</th>
                <th scope="col">Driver NIC </th>
                <th scope="col">Date </th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {Delivery &&
                Delivery.filter(e =>



                  e.CustomerName.toLowerCase().includes(serQuery) ||
                  e.CustomerName.includes(serQuery) ||

                  e.address.toLowerCase().includes(serQuery) ||
                  e.address.includes(serQuery) ||

                  e.VehicleId.toLowerCase().includes(serQuery) ||
                  e.VehicleId.includes(serQuery)



                ).map((e, i) => (
                  <tr>
                    <td>{e.CustomerName}</td>
                    <td>{e.address}</td>
                    <td>{e.CustomerContactNo}</td>
                    <td>{e.VehicleId}</td>
                    <td>{e.DriverNIC}</td>
                    <td>{e.Date}</td>
                    <td><Link to={"/UpdateDelivery/" + e._id} >
                      <Button style={{
                        backgroundColor: "#B4B731"
                      }} variant="contained" startIcon={<EditIcon />}>Edit</Button></Link>

                      <Button color="error" sx={{ ml: 2 }} onClick={() => {
                        deleteData(e);
                      }} variant="contained" startIcon={<DeleteIcon />}>
                        Delete
                      </Button>
                    </td>



                    {/* <td><button href="/accepted_orders" type="button2" class="rejectButton">Delete</button></td> */}
                  </tr>
                ))}
            </tbody>
          </table>
          <div className="buttons">
            <Link to="AddDelivery">
              <center>
                <button type="button2" class="btn btn-success" style={{ marginLeft: "-200px" }}>
                  Add Delivery
                </button>
              </center>
            </Link>
            

              <button type="button2" class="btn btn-success" style={{ marginLeft: "1000px" }} onClick={downloadPDF}>
                Generate Report
              </button>

            
          </div>
        </div>
      </div>
    </div>
  );
}
