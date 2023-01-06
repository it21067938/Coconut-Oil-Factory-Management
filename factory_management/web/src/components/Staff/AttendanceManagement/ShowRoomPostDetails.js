import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard, MDBCardBody, MDBCardText } from 'mdb-react-ui-kit';
import { Nav } from 'react-bootstrap';
import Navbar from '../Navbar/staffNavbar';
import logo from '../../../assect/images/logo.png'
import '../../NavbarTabs/.css'


export default class ShowRoomPostDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            post: {}
        };
    }
    componentDidMount() {

        const id = this.props.match.params.id;

        axios.get(`/showroom/showroom/${id}`).then((res) => {
            if (res.data.success) {
                this.setState({
                    post: res.data.post
                });

                console.log(this.state.post);
            }
        });
    }


    render() {
        const { employeeID, ename, department, EmployeeStatus, intime, outtime, day, month, year } = this.state.post;

        return (
            <>
            <Navbar/>
            <div className="order_bground" style={{ zIndex: 98,height:"100vh" }} >

            <div style={{ marginBlockStart: '5%', marginLeft: '15%'}}>
            <div class="card" style={{width:'50%', height:'730px', borderBlockColor:'black', borderBlockWidth:'4px' , borderBlockStartStyle:'groove'}}>
            <div class="card-body">
            <div className="container" style={{ margingTop: '20px' }}>
                                <br></br>
                                <h4>Employee ID: {employeeID}</h4><br></br>

                                <form>
                                    <h5>Employee Attendance Details</h5>

                                    <br></br>
                                    <label>EmployeeID</label>
                                    <input className="form-control" type="text" placeholder={employeeID} aria-label="Disabled input example" disabled></input>


                                    <label>Employee Name</label>
                                    <input className="form-control" type="text" placeholder={ename} aria-label="Disabled input example" disabled></input>


                                    <label>Department</label>
                                    <input className="form-control" type="text" placeholder={department} aria-label="Disabled input example" disabled></input>


                                    <label>Employee Status</label>
                                    <input className="form-control" type="text" placeholder={EmployeeStatus} aria-label="Disabled input example" disabled></input>


                                    <label>In Time</label>
                                    <input className="form-control" type="text" placeholder={intime} aria-label="Disabled input example" disabled></input>

                                    <label>Out Time</label>
                                    <input className="form-control" type="text" placeholder={outtime} aria-label="Disabled input example" disabled></input>

                                    <br />
                                    
                                    <div className="row">
                                        <div className="col">
                                            <label>Day</label><br/>
                                            <input className="form-group col-md-10" type="text" placeholder={day} aria-label="Disabled input example" disabled></input>
                                        </div>


                                        <div className="col">
                                            <label>Month</label>
                                            <input className="form-group col-md-10" type="text" placeholder={month} aria-label="Disabled input example" disabled></input>
                                        </div>


                                        <div className="col">
                                            <label>Year</label><br></br>
                                            <input className="form-group col-md-10" type="text" placeholder={year} aria-label="Disabled input example" disabled></input>
                                        </div>
                                    </div>
                                    <br></br>

                                    
                                    <br></br>
                                    <br></br>

                                </form>

                            </div>
                         </div>
                    </div>
               
            </div>
            </div>
            </>


        )

    }
}