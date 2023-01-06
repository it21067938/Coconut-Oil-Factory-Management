import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import Navbar from '../Navbar/staffNavbar';
import logo from '../../../assect/images/logo.png'
import '../../NavbarTabs/.css'


export default class EmployeeDash extends Component {

  constructor(props) {
    super(props);

    this.state = {
      employees: []
    };
  }

  componentDidMount() {
    this.retrievEmployees();
  }

  retrievEmployees() {
    axios.get("/employees/employees").then(res => {
      if (res.data.success) {
        this.setState({
          employees: res.data.existingEmployee
        });

        console.log(this.state.employees)
      }
    });
  }

  onDelete = (id) => {
    axios.delete(`/employees/employee/delete/${id}`).then((res) => {
      alert("Deleted Successfully");
      this.retrievEmployees();
    })
  }

  filterData(employees, searchKey) {
    const result = employees.filter((employee) =>
      employee.phone.includes(searchKey) ||
      employee.EmpID.toLowerCase().includes(searchKey) ||
      employee.EmpID.includes(searchKey) ||
      employee.firstName.toLowerCase().includes(searchKey) ||
      employee.firstName.includes(searchKey) ||
      employee.department.toLowerCase().includes(searchKey) ||
      employee.email.toLowerCase().includes(searchKey) ||
      employee.position.toLowerCase().includes(searchKey) ||
      employee.empStatus.toLowerCase().includes(searchKey) ||
      employee.department.includes(searchKey) ||
      employee.email.includes(searchKey) ||
      employee.position.includes(searchKey) ||
      employee.empStatus.includes(searchKey)
    )

    this.setState({ employees: result })
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("/employees/employees").then(res => {
      if (res.data.success) {
        this.filterData(res.data.existingEmployee, searchKey)
      }
    });
  }

  render() {

    return (
    <>
      <Navbar/>
      <div className="order_bground" style={{ zIndex: 98,height:"100vh" }} >
      {/* <div className="Khome" > */}
      
        <br />
        <div style={{ width: '20%', marginLeft: '80%', marginBlockStart: '2%'}}>
          <form className="d-flex">
            <input className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search" onChange={this.handleSearchArea}>
            </input>
          </form>
        </div>

        <center>
          <h1><span class="badge bg-warning text-dark opacity-90 fs-2" style={{ marginBlockStart: '3%'}}>All Employees</span></h1>
        </center>
        <br />

        <div >
          <table class="table table-bordered" style={{ width:'100%',marginBlockStart: '-1%'}} >
            <thead class="table-info">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Employee ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Contact Number</th>
                <th scope="col">Department</th>
                <th scope="col">Employee Status</th>
                <th scope="col">Position</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody >
              {this.state.employees.map((employees, index) => (
                <tr key={index}>
                  <th class="table-light" scope="row">{index + 1}</th>
                  <td class="table-light">
                    <a href={`/employeeDet/${employees._id}`} style={{ textDecoration:'none' }}>
                      {employees.EmpID}
                    </a>
                  </td>
                  <td class="table-light">{employees.firstName}</td>
                  <td class="table-light">{employees.email}</td>
                  <td class="table-light">{employees.phone}</td>
                  <td class="table-light">{employees.department}</td>
                  <td class="table-light">{employees.empStatus}</td>
                  <td class="table-light">{employees.position}</td>
                  <td class="table-light">
                  
                    <a class="btn btn-warning" style={{marginLeft:'-1%',width:'50%'}}  href={`/editEmployee/${employees._id}`}> <i className="fas fa-edit"></i>Edit</a>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                  < a class="btn btn-danger" style={{marginLeft:'50%',width:'50%',marginBlockStart:'-34%'}} onClick={() => this.onDelete(employees._id)} ><i className="far fa-trash-alt"></i>Delete</a>

                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <br></br>
        
          <div>

                  <a style={{marginLeft:'35%'}} className="btn btn-warning text-dark " href="/addEmployee" >
                    <i className="fas fa-user-plus"></i>&nbsp;Add New Employee
                  </a>
                  &nbsp;
                  <a style={{marginLeft:'1%'}} className="btn btn-warning text-dark " href="/staff_dash" >
                    Dash Board
                  </a>
          </div>
          <br></br>
          <br></br>
        </div>
        
      {/* </div> */}
      </div>
      </>
    )

  }
}