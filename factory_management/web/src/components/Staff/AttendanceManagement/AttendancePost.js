
import React, { Component } from 'react'
import axios from 'axios'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';
import './Error.css'; 
// import swal from '@sweetalert/with-react';
import swal from 'sweetalert';
import Navbar from '../Navbar/staffNavbar';
import logo from '../../../assect/images/logo.png'
import '../../NavbarTabs/.css'



const priceRegex = RegExp(
    /^[\d]+[\.][\d]{2}$/
  );
  
  const formValid = formErrors => {
    let valid = true;
  
    Object.values(formErrors).forEach(val => {
      val.length > 0 && (valid = false)
    });
  
    return valid;
  };


export default class ShowRoomCreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employeeID: "",
            ename: "",
            department: "",
            EmployeeStatus: "",
            intime: "",
            outtime: "",
            day: "",
            month: "",
            year: "",

            formErrors:{
                intime:""
            }
        }
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        let formErrors = this.state.formErrors;

    switch (name) {
      case "intime":
        formErrors.intime = priceRegex.test(value) ? ""
        : "Time must be a decimal value";
        break;
      default:
        break;
    }

    this.setState({formErrors, [name]: value}, () => console.log(this.state));

        this.setState({
            ...this.state,
            [name]: value
        })
    }

    btnDemo = (e) => {
        e.preventDefault();

        const { employeeID, ename, department, EmployeeStatus, intime,outtime,day, month, year } = this.state;

        const data = {

            employeeID: employeeID,
                ename: ename,
                department: department,
                EmployeeStatus: EmployeeStatus,
                intime: intime,
                outtime:outtime,
                day: day,
                month: month,
                year: year
                
        }
        console.log(data)


        this.setState(
            {
                employeeID: "E44523",
                ename: "Sandun Darshana",
                department: "HR",
                EmployeeStatus: "Half Time",
                intime: "8.00",
                outtime: "16.00",
                day: "5",
                month: "July",
                year: "2022"
                

            }
        )

    }

    onSubmit = (e) => {
        e.preventDefault();

        if(formValid(this.state.formErrors)){
        const { employeeID, ename, department, EmployeeStatus, intime,outtime,day, month, year} = this.state;

        const data = {
            employeeID: employeeID,
            ename: ename,
            department: department,
            EmployeeStatus: EmployeeStatus,
            intime: intime,
            outtime:outtime,
            day: day,
            month: month,
            year: year
        }
        console.log(data)
        if (employeeID.length > 30)  {
            swal(" invalid Title !", "character should be less than 30", "error");
      } else if (ename.length > 30)  {
                swal(" invalid Sub Title !", "character should be less than 30", "error");
      }else if (employeeID.length === 0 || ename.length === 0 || EmployeeStatus.length === 0 ||
            intime.length === 0 || outtime.length === 0) {
            swal("Please fill all the details")
        }else {

        axios.post("showroom/showroom/save", data).then((res) => {
            let path = "/SRH";
            if (res.data.success) {
                alert("Item Listing Successfully")
                this.props.history.push(path);
                this.setState(
                    {
                        employeeID: "",
                        ename: "",
                        department: "",
                        EmployeeStatus: "",
                        intime: "",
                        outtime:"",
                        day: "",
                        month: "",
                        year: ""
                        
                    }
                )
            }
        })

    }
}
else {
        console.error('Form Invalid');
      }
    }
    render() {

        const { formErrors } = this.state;

        return (

<>
<Navbar/>
            <div className="order_bground" style={{ zIndex: 98,height:"100vh" }} >
            {/* <div className="Kwarehouse"> */}

                
                <div style={{ marginLeft: '7%', marginBlockStart: '-4%' }}>
               
                <div class="card" style={{width:'50rem', height:'50rem'}}>
                <div class="card-body">
                <center><h1><span class="badge bg-warning text-dark opacity-90">Add New Attendance</span></h1></center>

                <form className="need-validation" noValidate>

                <h4 className="text-dark">Attendance Details</h4>
                <div className="form-group" autocomplete="on" style={{ marginBottom: '15px' }}>
                    <lable style={{ marginBottom: '5px' }}>EmployeeID</lable>
                    <input type="text"
                        className="form-control"
                        name="employeeID"
                        placeholder="Enter EmployeeID (character should be less than 30)"
                        value={this.state.employeeID}
                        onChange={this.handleInputChange} />

                </div>



                <div className="form-group" style={{ marginBottom: '15px' }}>
                    <lable style={{ marginBottom: '5px' }}>Name</lable>
                    <input type="text"
                        className="form-control"
                        name="ename"
                        placeholder="Enter Name (character shuld be less than 30)"
                        value={this.state.ename}
                        onChange={this.handleInputChange} />
                </div>


                <div className="col">
                    <div className="form-group col-md-12" style={{ marginBottom: '15px' }}>
                        <lable style={{ marginBottom: '5px' }}>Department</lable>
                        <select name="department" onChange={this.handleInputChange} value={this.state.department} defaultValue="select type" className="form-select">
                            <option defaultValue>Select the Department</option>
                            <option>Finance</option>
                            <option>Transport</option>
                            <option>Manufacture</option>
                            <option>Marketing</option>
                            <option>HR</option>
                            <option>Sales</option>
                            <option>Cleaning</option>
                            
                        </select>
                    </div>
                </div>

                <div className="col">
                    <div className="form-group col-md-12" style={{ marginBottom: '15px' }}>
                        <lable style={{ marginBottom: '5px' }}>Employee Status</lable>
                        <select name="EmployeeStatus" onChange={this.handleInputChange} value={this.state.EmployeeStatus} defaultValue="select type" className="form-select">
                            <option defaultValue>Half Time/Full Time</option>
                            <option>Half Time</option>
                            <option>Full Time</option>
                        </select>
                    </div>
                </div>



                <h4 className="text-dark">Date</h4>
                <div className="row">
                    <div className="col">
                        <div className="form-group col-md-12" style={{ marginBottom: '15px' }}>
                            <lable style={{ marginBottom: '5px' }}>Day</lable>
                            <select name="day" onChange={this.handleInputChange} value={this.state.day} defaultValue="select type" className="form-select">
                                <option defaultValue>Select the Day</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                                <option>13</option>
                                <option>14</option>
                                <option>15</option>
                                <option>16</option>
                                <option>17</option>
                                <option>18</option>
                                <option>19</option>
                                <option>20</option>
                                <option>21</option>
                                <option>22</option>
                                <option>23</option>
                                <option>24</option>
                                <option>25</option>
                                <option>26</option>
                                <option>27</option>
                                <option>28</option>
                                <option>29</option>
                                <option>30</option>
                                <option>31</option>
                            </select>
                        </div>
                    </div>

                    <div className="col">
                        <div className="form-group col-md-12" style={{ marginBottom: '15px' }}>
                            <lable style={{ marginBottom: '5px' }}>Month</lable>
                            <select name="month" onChange={this.handleInputChange} value={this.state.month} defaultValue="select type" className="form-select">
                                <option defaultValue>Select the Month</option>
                                <option>January</option>
                                <option>February</option>
                                <option>March</option>
                                <option>April</option>
                                <option>May</option>
                                <option>June</option>
                                <option>July</option>
                                <option>August</option>
                                <option>September</option>
                                <option>October</option>
                                <option>November</option>
                                <option>December</option>
                                
                            </select>
                        </div>
                    </div>
                {/* title */}

                    <div className="col">
                        <div className="form-group col-md-12" style={{ marginBottom: '15px' }}>
                            <lable style={{ marginBottom: '5px' }}>Year</lable>
                            <select name="year" onChange={this.handleInputChange} value={this.state.year} defaultValue="select type" className="form-select">
                                <option defaultValue>Select the Year</option>
                                <option>2020</option>
                                <option>2021</option>
                                <option>2022</option>
                                <option>2023</option>
                                <option>2024</option>
                                <option>2025</option>
                                <option>2026 </option>
                                <option>2027</option>
                                <option>2028</option>
                                <option>2029</option>
                                <option>2030</option>
                                
                            </select>
                        </div>
                    </div>
                </div>
                <div>
                <lable style={{ marginBottom: '5px' }}>In Time</lable>
                    <input type="text"
                        className="form-control"
                        name="intime"
                        placeholder="Intime"
                        value={this.state.intime}
                        onChange={this.handleInputChange} />
                {formErrors.intime.length > 0 && (
                <span className="errorMessage">{formErrors.intime}</span>
                )} 
                        
                </div>
                <br />

                <div>
                <lable style={{ marginBottom: '5px' }}>Out Time</lable>
                    <input type="text"
                        className="form-control"
                        name="outtime"
                        placeholder="outtime"
                        value={this.state.outtime}
                        onChange={this.handleInputChange} />                          
                </div>
                <br />

                </form>

                    {/* <center> */}
                    <a className="btn btn-warning btn-lg text-dark" type="submit" style={{ marginTop: '15px',marginLeft:'220px' }} onClick={this.onSubmit}>
                        <i className="far fa-check-square" ></i>
                        &nbsp; save
                    </a>
                    
                    <button className="btn btn-success btn-lg text-dark" style={{ marginTop: '15px',marginLeft:'10px' }} type="submit" onClick={this.btnDemo}>
                        <i class='fas fa-bookmark'></i>
                        &nbsp; <b>Demo</b>
                    </button>
                    {/* </center>                    */}
                </div>
                </div>
                <br></br>
                </div>
            
            {/* </div> */}
            </div>
            </>

        )

    }
}

