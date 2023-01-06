import React, { Component } from 'react';
// import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import Navbar from '../Navbar/staffNavbar';
import logo from '../../../assect/images/logo.png'
import '../../NavbarTabs/.css'




export default class OwnerDash extends Component {
  render() {
    return (
    <>
        <Navbar/>

   <div className="Report" style={{ zIndex: 98 }}>
        <div style={{marginBlockStart:'2%'}}>
          <center>
         <h1><span class="badge bg-warning text-dark opacity-90 fs-1">Staff Management Dashboard</span></h1>
         </center>
         </div>

<div style={{marginBlockStart:'-2%', marginLeft:'1%'}}>
    <div class="card" style={{width:'25rem'}}>
      <img src="./staffImages/staff.png" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Employee Registration</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="/staff_dash" class="btn btn-primary">Click Here</a>
      </div>
    </div> 
</div>

<div style={{marginBlockStart:'-44%', marginLeft:'42%'}}>
    <div class="card" style={{width:'25rem'}}>
      <img src="./staffImages/attendance.webp" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Attendance Listing</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="/dashshow" class="btn btn-primary">Click Here</a>
      </div>
    </div>          
</div>
</div>

    </>
   

        
       
    )
  }
}
