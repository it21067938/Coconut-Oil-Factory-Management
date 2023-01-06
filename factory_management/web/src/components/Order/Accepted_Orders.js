import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Navbar from "./SalesManagerNavBar"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from "@mui/material";
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import '../Order/.css'
import jsPDF from 'jspdf'
import 'jspdf-autotable'



export default function Accepted_Orders() {


    //view all accepted orders
    const [Accepted, setAccpted] = useState([]);
    useEffect(() => {
        function getAcceptedOrders() {
            axios.get("http://localhost:8889/Accept_order/view").then((res) => {
                // console.log(res.data);
                setAccpted(res.data)
            }).catch((err) => {
                alert(err.message)
            })
        }
        getAcceptedOrders();

    }, [])


    //Search date and get details
    const [search, setSerch] = useState("");

    function searchItem(event) {
        setSerch(event.target.value);
    }


    //Delete complete orders
    const deleteDataD = (e) => {

        var result = window.confirm("Are you sure?");

        if (result == true) {

            axios.delete(`http://localhost:8889/Accept_order/delete/${e._id}`).then((res) => {

            }).catch(e => {
                alert(e)
            })

        } else {
            e.preventDefault();
        }

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
        doc.text("Accepted orders", 130, 12);

        doc.autoTable({
            head: [['OrderID', 'UserName', 'Category', 'Quantity', 'Date', 'Transport_Details', 'Note']],
            body: Accepted.filter(e =>

                e.date.includes(search) ||
                e.UserName.toLowerCase().includes(search) ||
                e.category.toLowerCase().includes(search)

            ).map(function (e, i) {

                return (

                    [e.orderID,
                    e.UserName,
                    e.category,
                    e.quantity,
                    e.date,
                    e.transport_details,
                    e.note
                    ]

                );

            })

        })
        doc.save("Accepted orders.pdf");
    }


    return (
        <div>
            <Navbar />

            <div className="order_bground" style={{ zIndex: 98 }} >

                <div className='all_container'>

                    <div className='row'>
                        <div className='col-lg-9 mt-2 mb-2'>
                            <h2 class="B_heading"><center><u>Accepted Orders</u></center></h2>
                            <br></br><br></br>
                        </div>

                        <div className='col-lg-3 mt-2 mb-2'>
                            <br></br>
                            <div className='generatebutton'><button onClick={downloadPDF} type="button2"
                                class="btn btn-info" style={{ backgroundColor: "#2E2EFF" }} ><SimCardDownloadIcon /> Generate Report</button></div>
                        </div>
                    </div>

                    <input
                        onChange={searchItem}
                        className='form-control'
                        type='search'
                        placeholder='Search....'
                        name='searchQuery'>
                    </input>
                    <br></br>

                    <table class="table" style={{ width: "1350px" }}>
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">OrderID</th>
                                <th scope="col">UserName</th>
                                <th scope="col">Category</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Date</th>
                                <th scope="col">Transport_Details</th>
                                <th scope="col">Note</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                        </thead>

                        <tbody>
                            {Accepted.filter(e =>
                                e.UserName.toLowerCase().includes(search) ||
                                e.date.includes(search) ||
                                e.orderID.includes(search) ||
                                e.category.toLowerCase().includes(search)

                            ).map(e => (
                                <tr>
                                    <td>{e.orderID}</td>
                                    <td>{e.UserName}</td>
                                    <td>{e.category}</td>
                                    <td>{e.quantity}</td>
                                    <td>{e.date}</td>
                                    <td>{e.transport_details}</td>
                                    <td>{e.note}</td>
                                    <td></td>
                                    <td></td>
                                    <td><Link to={'/change_date/' + e._id} >
                                        <Button style={{
                                            backgroundColor: "#B4B731"
                                        }} variant="contained" startIcon={<EditIcon />}>Edit</Button></Link>

                                        <Button color="error" sx={{ ml: 2 }} onClick={() => { deleteDataD(e) }} variant="contained" startIcon={<DeleteIcon />}>
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
