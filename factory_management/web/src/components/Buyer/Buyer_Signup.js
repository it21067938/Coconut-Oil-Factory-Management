import React, { useState } from 'react'
import axios from 'axios';
import './buyer.css'


export default function Buyer_Signup() {

  //signup
  const [name, setName] = useState("");
  const [nic, setNic] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function sendData(e) {
    e.preventDefault();

    const Buyer = {
      name,
      nic,
      email,
      contactNo,
      address,
      username,
      password
    }

    const ph = /^[0-9\b]+$/;
    const emi = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if ((!ph.test(String(contactNo))) || (contactNo.length != 10)) {
      alert("Invalid Contact Number !", "Contact number should be valid pattern", "error");
    } else if ((!emi.test(String(email)))) {
      alert("Invalid email address !", "Please enter valid email address", "error");
    } else if (name.length === 0 || nic.length === 0 || email.length === 0 ||
      contactNo.length === 0 || address.length === 0 || username.length === 0 ||
      password.length === 0) {
      alert("Please fill all the details")
    } else {

      axios.post("http://localhost:8889/buyer/signup", Buyer).then(() => {
        alert("Success !!");
        window.location.href = '/Buyer_Login';
      }).catch((err) => {
        alert(err)
      })
    }
  }

  function refreshPage() {

    window.location.reload(false);

  }

  return (

        <div class="register-photo" style={{background: "linear-gradient(to right, #ccff99 0%, #6699ff 100%)", height:"100vh"}}>

          <div class="form-container">

            <div class="image-holder_s"></div>

            <form noValidate onSubmit={sendData}>

              <h2 class="text-center"><strong>Create</strong> an account.</h2>
              <div class="form-group"><input class="form-control" type="text" placeholder="Name :-" onChange={(event) => {
                setName(event.target.value);
              }} /></div>
              <div class="form-group"><input class="form-control" type="Number" placeholder="Nic number :-" onChange={(event) => {
                setNic(event.target.value);
              }} /></div>
              <div class="form-group"><input class="form-control" type="email" placeholder="Email :-" onChange={(event) => {
                setEmail(event.target.value);
              }} /></div>
              <div class="form-group"><input class="form-control" type="Number" placeholder="Contact No :-" onChange={(event) => {
                setContact(event.target.value);
              }} /></div>
              <div class="form-group"><input class="form-control" type="text" placeholder="Address :-" onChange={(event) => {
                setAddress(event.target.value);
              }} /></div>
              <div class="form-group"><input class="form-control" type="text" placeholder="User Name :-" onChange={(event) => {
                setUsername(event.target.value);
              }} /></div>
              <div class="form-group"><input class="form-control" type="password" placeholder="Password :-" onChange={(event) => {
                setPassword(event.target.value);
              }} /></div>
              <div class="form-group">

              </div>
              <div class="form-group"><button class="btn btn-primary btn-block" type="submit">Sign Up</button></div><a href="#" class="already">You already have an account? Login here.</a></form>
          </div>
        </div>

  )
}


