import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import '../Style/my.css'
import Navbar from '../Navbar/staffNavbar';
import logo from '../../../assect/images/logo.png'
import '../../NavbarTabs/.css'

export default class OwnerDash extends Component {
  render() {
    return (<>
        <Navbar/>
        <div className="Report" style={{ zIndex: 98 }}>
        <div style={{marginBlockStart:'2%'}}>
          <center>
         <h1><span class="badge bg-warning text-dark opacity-90 fs-1">Staff Management Dashboard</span></h1>
         </center>
         </div>
          
      <div style={{marginBlockStart:'-2%', marginLeft:'1%'}}>
          <div class="card" style={{width:'25rem'}}>
            <img src="./staffImages/OwnerDa.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Create new Employee</h5>
              <p class="card-text">Creating new employee details form to save them in to the company system.</p>
              <a href="/EMD" class="btn btn-primary">Add Employee</a>
            </div>
          </div> 
      </div>

      <div style={{marginBlockStart:'-44%', marginLeft:'42%'}}>
          <div class="card" style={{width:'25rem'}}>
            <img src="./staffImages/report.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Employee Report</h5>
              <p class="card-text">These Reports are helping to get data about Employee as PDF.</p>
              <a href="/OwnerReport" class="btn btn-primary">Report</a>
            </div>
          </div> 
          
      </div>
    </div>    
    </>

        
       
    )
  }
}
