import React, { useState, useEffect } from "react";
import axois from "axios";
import { Link } from 'react-router-dom';

export default function GetOrderDetails() {

    const [Orders, setOrders] = useState([]);
    useEffect(() => {
        function getOrders() {
            axois.get("http://localhost:8889/Accepted-Order/view").then((res) => {
                console.log(res.data);
                setOrders(res.data);

            }).catch((err) => {
                alert(err.message);
            })
        }
        getOrders();
    }, [])
    return (



        <div className='container'>
            <div className='row'>
                <div className='col-lg-9 mt-2 mb-2'>
                    <h4 class="heading">Drivers</h4>
                    <br>
                    </br>
                </div>

                <div className='col-lg-3 mt-2 mb-2'>
                    <br></br>
                    <div><Link to="report"><button
                        type="button2"
                        class="btn btn-info">Generate Report</button></Link></div>
                </div>
            </div>

            <table className="table table-hover" style={{ marginTop: '40px' }}>
                <thead>
                    <tr>
                        <th scope="col">Order ID</th>
                        <th scope="col">User Name </th>
                        <th scope="col">Category</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">date </th>
                        <th scope="col">Transport Details</th>
                        <th scope="col">Note </th>

                    </tr>
                </thead>

                <tbody>
                    {
                        Orders.map((e, i) => (
                            <tr>
                                <td>{e.orderID}</td>
                                <td>{e.UserName}</td>
                                <td>{e.category}</td>
                                <td>{e.quantity}</td>
                                <td>{e.date}</td>
                                <td>{e.transport_details}</td>
                                <td>{e.note}</td>

                                {/* <td><button href="/accepted_orders" type="button2" class="rejectButton">Delete</button></td> */}
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className='buttons'>
                <Link to="change_date"><button type="button2" class="CButton">Change Date</button></Link>
                <Link to="send_email"><button type="button2" class="send_email">Send Email</button></Link>
            </div>
        </div>

    )
}
