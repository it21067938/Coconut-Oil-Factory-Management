import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import { Button } from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export default class Login extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <div className="login_bground" style={{ zIndex: 98 }} >
          <center>
            <div class="login_container">
              <Link to="mannagerLogin"><Button style={{ width: "300px", height: "60px", marginTop: "30px" }} variant="contained">Manager Login</Button></Link><br></br>
              <Link to="supplierlogin"><Button style={{ width: "300px", height: "60px", marginTop: "30px" }} variant="contained">Supplier Login</Button></Link><br></br>
              <Link to="buyer_login"><Button style={{ width: "300px", height: "60px", marginTop: "30px" }} variant="contained">Buyer Login</Button></Link><br></br>
              <Link to="products"><button style={{ width: "100px", height: "40px", marginTop: "40px", marginRight: "200px" }} type="button" class="btn btn-danger" ><ChevronLeftIcon />back</button></Link>

            </div></center>
        </div>
      </div>
    )
  }
}
