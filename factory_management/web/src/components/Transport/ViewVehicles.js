import React, { useState, useEffect } from "react";
import axois from "axios";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from "@mui/material";
import { Link } from 'react-router-dom';
import Navbar from "./TransportNavbar"

export default function ViewVehicles() {

    const [Vehicles, setVehicles] = useState([]);
    const [serQuery, setQuery] = useState("")
    useEffect(() => {
        function getVehicles() {
            axois.get("http://localhost:8889/Vehicle/View").then((res) => {
                console.log(res.data);
                setVehicles(res.data);

            }).catch((err) => {
                alert(err.message);
            })
        }
        getVehicles();
    }, [])
    const deleteData = (e) => {

        var result = window.confirm("Are you sure?");

        if (result == true) {

            axois.delete(`http://localhost:8889/Vehicle/delete/${e._id}`).then((res) => {

            }).catch(e => {

                alert(e)

            })

        } else {

            e.preventDefault();

        }


    }

    function searchfun(e) {

        setQuery(e.target.value)
    }

    return (


        <div className="icc">
            <div  >
                <Navbar />
                <div className='row'>
                    <div className='col-lg-9 mt-2 mb-2'>
                        <center><h4 class="heading">Vehicles</h4>
                            <input style={{ width: "1200px", height: "40px", marginRight: "120px", marginLeft: "200px" }} onChange={searchfun} placeholder="Search..." /></center>


                    </div>



                </div>


                <table className="table" style={{ marginTop: "40px", width: "1200px", marginLeft: "200px" }}>
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Vehicle Model</th>
                            <th scope="col">Registration No </th>
                            <th scope="col">fuelType</th>
                            <th scope="col">millage</th>
                            <th scope="col">Vehicle Status </th>
                            <th></th>




                        </tr>
                    </thead>

                    <tbody>
                        {
                            Vehicles.filter(e =>



                                e.model.toLowerCase().includes(serQuery) ||
                                e.model.includes(serQuery) ||

                                e.registrationNo.toLowerCase().includes(serQuery) ||
                                e.registrationNo.includes(serQuery) ||

                                e.fuelType.toLowerCase().includes(serQuery) ||
                                e.fuelType.includes(serQuery)



                            ).map((e, i) => (
                                <tr>
                                    <td>{e.model}</td>
                                    <td>{e.registrationNo}</td>
                                    <td>{e.fuelType}</td>
                                    <td>{e.millage}</td>
                                    <td>{e.VehicleStatus}</td>
                                    <td><Link to={"/UpdateVehicle/" + e._id} >
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
                                    <Link to={"/UpdateVehicle/" + e._id}>
                                        <button className="btn btn-success mr" >Update   </button>
                                    </Link>
                                    <button className="de_pur btn btn-danger" onClick={() => { deleteData(e) }}>Delete</button>

                                </td> */}

                                    {/* <td><button href="/accepted_orders" type="button2" class="rejectButton">Delete</button></td> */}
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <div className='buttons'>
                    <Link to="AddVehicle">
                        <center>
                            <button type="button2" class="btn btn-success" style={{ marginLeft: "-200px" }}>
                                Add Vehicle
                            </button>
                        </center></Link>

                </div>
            </div>
        </div>
    )
}
