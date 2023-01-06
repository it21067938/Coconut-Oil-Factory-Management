import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Navbar from "./FinanceNavbar";
import '../Order/.css'




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





    return (
        <div>
            <Navbar />
            <div className="order_bground" style={{ zIndex: 98,height:"100vh" }}>
            <div className='container'>

                <div className='row'>
                    <div className='col-lg-9 mt-2 mb-2'>
                        <h1 class="header1" style={{color:"white"}}><center>Accepted Orders</center></h1>
                        <br></br><br></br>
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

                <table class="table" style={{width:"1200px",marginLeft:"-40px"}}>
                    <thead class="thead-dark">
                        <tr>
                            <th>No</th>
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

                        ).map((e,i) => (
                            <tr>
                                <td>{i+1}</td>
                                <td>{e.orderID}</td>
                                <td>{e.UserName}</td>
                                <td>{e.category}</td>
                                <td>{e.quantity}</td>
                                <td>{e.date}</td>
                                <td>{e.transport_details}</td>
                                <td>{e.note}</td>
                                <td className="middle"><a className='btn btn-success mr' href="/addDetails"target="_blank" style={{width:"150px",height:"40px"}}> Create invoice</a>
                                </td>

                            </tr>
                        ))
                        }

                    </tbody>
                </table>
                <a href = "dash" style={{marginLeft:"400px"}}><button type="button" class="m-5 btn btn-secondary btn-lg">Back </button></a>
            </div>
            </div>
        </div>
    )
}