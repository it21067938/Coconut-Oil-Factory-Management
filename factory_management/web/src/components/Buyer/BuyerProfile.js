import Navbar from "./BuyerNavbar"
import { Link } from 'react-router-dom'
import './buyer.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Button } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';


export default function BuyerProfile() {

  //Get buyer details
  const [Account, setAccount] = useState([]);

  function getBuyerDetails() {
    axios.get("http://localhost:8889/buyer/account",
      {
        headers: {
          'Authorization': "bearer " + localStorage.getItem('token')
        }
      }).then((res) => {
        setAccount(res.data.buyer)

      }).catch((err) => {
        alert(err)
      })
  }

  useEffect(() => {
    getBuyerDetails();
  }, []);

  return (
    <div>
      <Navbar />

      <div className="DashBG" style={{ zIndex: 98 }}>

        <div className='border' style={{ backgroundColor: '#fffc' }}>
          <h1 className='h3 mb-3 font-weight-normal'><center><u>Profile</u></center></h1>
          <form >

            <div class="form-group" className='login_form'>
              <label for="exampleInputEmail1">Name :-</label>
              <input type="text" value={Account.name} class="form-control" />
            </div>

            <div class="form-group" className='login_form'>
              <label for="exampleInputEmail1">Nic :-</label>
              <input type="number" value={Account.nic} class="form-control" />
            </div>

            <div class="form-group" className='login_form'>
              <label for="exampleInputEmail1">Email :-</label>
              <input type="email" value={Account.email} class="form-control" />
            </div>

            <div class="form-group" className='login_form'>
              <label for="exampleInputEmail1">Contact No :-</label>
              <input type="text" value={Account.contactNo} class="form-control" />
            </div>

            <div class="form-group" className='login_form'>
              <label for="exampleInputEmail1">Address :-</label>
              <input type="text" value={Account.address} class="form-control" />
            </div>

            <div class="form-group" className='login_form'>
              <label for="exampleInputEmail1">User Name :-</label>
              <input type="text" value={Account.username} class="form-control" />
            </div>

            <div style={{ marginLeft: "100px" }}><Link to={'/profile_update'} >
              <Button style={{
                backgroundColor: "#B4B731"
              }} variant="contained" startIcon={<EditIcon />}>Edit</Button></Link>
              <Link to={'/buyer_home'} ><button type="button" class="mx-4 my-4 btn btn-danger"><ChevronLeftIcon />BACK </button></Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
