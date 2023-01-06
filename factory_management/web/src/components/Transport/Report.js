import React, { useState, useEffect } from "react";
import axois from "axios";
import { Link } from "react-router-dom";
import { Button, Container, Modal, Table } from "react-bootstrap";
import Navbar from "./TransportNavbar"

const Report = () => {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [Delivery, setDelivery] = useState([]);
  useEffect(() => {
    function getDelivery() {
      axois
        .get("http://localhost:8889/Delivery/View")
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
  return (
    <div>
      <Navbar/>
      <br></br>
      <br></br>
      <br></br>
      <div className="row">
        <div className="col-md-10"></div>

        <div className="col">
          <Button
            variant="primary"
            onClick={() => {
              window.print();
            }}
          >
            Print Report
          </Button>
        </div>
      </div>
      <br></br>
      <table className="table table-hover" style={{ marginTop: "40px" }}>
        <thead>
          <tr>
            <th scope="col">Customer Name</th>
            <th scope="col">Address </th>
            <th scope="col">Customer Contact No</th>
            <th scope="col">Vehicle Id</th>
            <th scope="col">Driver NIC </th>
            {/* <th scope="col">Vehicle Status</th>
                     <th scope="col">Driver Status</th> */}
          </tr>
        </thead>

        <tbody>
          {Delivery.map((e, i) => (
            <tr>
              <td>{e.CustomerName}</td>
              <td>{e.address}</td>
              <td>{e.CustomerContactNo}</td>
              <td>{e.VehicleId}</td>
              <td>{e.DriverNIC}</td>
              {/* <td>{e.VehicleStatus}</td>
                             <td>{e.DriverStatus}</td> */}

              {/* <td><button href="/accepted_orders" type="button2" class="rejectButton">Delete</button></td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Report;
