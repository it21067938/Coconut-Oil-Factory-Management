import React, { useState, useEffect } from 'react'
import Navbar from "./BuyerNavbar"
import { Link } from 'react-router-dom'
import './buyer.css'
import axios from 'axios';

export default function Place_Order() {

  //place Order
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [date, setDate] = useState("");
  const [transport_details, setTDetails] = useState("");
  const [note, setNote] = useState("");

  function sendData(e) {
    e.preventDefault();

    const Place_order = {
      category,
      quantity,
      date,
      transport_details,
      note
    }

    axios.post("http://localhost:8889/buyer/order", Place_order, {

      headers: {

        'Authorization': "bearer " + localStorage.getItem('token')

      }

    }).then(() => {
      alert("Order Added", refreshPage())
    }).catch((err) => {
      alert(err)
    })
    console.log(Place_order)
  }

  //refreash
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>
      <Navbar />

      <div className="DashBG" style={{ zIndex: 98 }}>

        <div className='border' style={{ backgroundColor: '#fffc' }}>
          <h1 className='h3 mb-3 font-weight-normal'><center><u>Place Order</u></center></h1>
          <form noValidate onSubmit={sendData}>

            <div class="form-group" className='login_form'>
              <label for="exampleInputEmail1">Category: *</label><br></br>
              <select id="cars" name="cars"  class="form-control :-" onChange={(event) => {
                setCategory(event.target.value);
              }} required>
                <option>Virgin Oil</option>
                <option>Normal Oil</option>
                <option>White Oil</option>
                <option>Husk</option>
                <option>Punnakku</option>
                <option>Coconut shells</option>
              </select>
            </div>

            <div class="form-group" className='login_form'>
              <label for="exampleInputEmail1">Quantity: *(Kg)</label>
              <input type="number" class="form-control" placeholder="Enter quantity :-" onChange={(event) => {
                setQuantity(event.target.value);
              }} required/>
            </div>

            <div class="form-group" className='login_form'>
              <label for="exampleInputEmail1">Date: *</label>
              <input type="date" class="form-control" placeholder="Enter date :-" onChange={(event) => {
                setDate(event.target.value);
              }} required/>
            </div>

            <div class="form-group" className='login_form'>
              <label for="exampleInputEmail1">Transport :</label>
              <input type="text" class="form-control" placeholder="Enter transport details :-" onChange={(event) => {
                setTDetails(event.target.value);
              }} />
            </div>

            <div class="form-group" className='login_form'>
              <label for="exampleInputEmail1">Note:</label>
              <textarea class="form-control" placeholder="Enter note :-" onChange={(event) => {
                setNote(event.target.value);
              }} ></textarea>
            </div>

            <button type="submit" class="btn btn-success">Confirm</button>
            <button type="button" class="mx-4 my-4 btn btn-danger">Cancel </button>

          </form>
        </div>
      </div>
    </div>
  )

}
