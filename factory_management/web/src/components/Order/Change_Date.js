import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from 'react-router-dom'
import Navbar from "./SalesManagerNavBar"
import '../Order/.css'


function Change_Date() {

  const [orderID, setOrderID] = useState("");
  const [date, setDate] = useState("");

  const { id } = useParams();
  console.log(id);
  const getData = () => {

    axios
      .get("http://localhost:8889/Accept_order/getDetailsbyID/" + id)
      .then((res) => {

        console.log(res.data);


        setOrderID(res.data.orderID);
        setDate(res.data.date);

      })

      .catch((err) => {
        alert(err.message);
      });

  };
  useEffect(() => {
    getData();
  }, []);

  //page refresh function

  function refreshPage() {
    window.location.reload(false);
    window.location.href = '/accepted_orders';
  }

  return (
    <div>
      <Navbar />
      <div className='border' >
        <h1 className='h3 mb-3 font-weight-normal'><center>Change Estimated Date</center></h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();

            const newData = {

              date

            };
            console.log("date updated", newData);
            axios
              .put("http://localhost:8889/Accept_order/updateDate/" + id, newData)
              .then(() => {
                alert("Date updated", refreshPage());
              })
              .catch((err) => {
                alert(err);
              });
          }}
        >
          <div class="form-group" className='login_form'>
            <label for="exampleInputEmail1">OrderID</label>
            <input class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={orderID} onChange={(e) => {


            }} />
          </div>

          <div class="form-group" className='login_form'>
            <label for="exampleInputEmail1">Date</label>
            <input type="date" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={date} onChange={(e) => {
              setDate(e.target.value);
            }} />
          </div>

          <button type="button2" class="rejectButton" style={{ marginTop: '15px', marginLeft:'100px' }}>Update</button>


        </form>
      </div>

    </div>
  )

}
export default Change_Date; 