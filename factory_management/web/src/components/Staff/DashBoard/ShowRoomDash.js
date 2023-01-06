import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import '../Style/my.css';
import Navbar from '../Navbar/staffNavbar';
import logo from '../../../assect/images/logo.png'
import '../../NavbarTabs/.css'


export default class ShowRoomDash extends Component {
  render() {
    return (<>
        <Navbar/>
        <div className="Report" style={{ zIndex: 98 }}>
        <div style={{marginBlockStart:'2%'}}>
          <center>
         <h1><span class="badge bg-warning text-dark opacity-90 fs-1">Attendance Management Dashboard</span></h1>
         </center>
         </div>
          

          <div style={{marginBlockStart:'-2%', marginLeft:'1%'}}>
              <div class="card" style={{width:'25rem'}}>
                <img src="./staffImages/attendancedash.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">View Attendance</h5>
                  <p class="card-text">Employee Attendance handling and listing.</p>
                  <a href="/SRH" class="btn btn-primary">Add Attendance</a>
                </div>
              </div> 
          </div>

          <div style={{marginBlockStart:'-44%', marginLeft:'42%'}}>
            <div class="card" style={{width:'25rem'}}>
              <img src="./staffImages/report.jpg" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Report Generate</h5>
                <p class="card-text">Employee attendance Details Report(PDF).</p>
                <a href="/SRrg" class="btn btn-primary">Report</a>
              </div>
            </div> 
              
            </div>
       
        </div>   
      </>        
       
    )
  }
}
