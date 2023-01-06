import React, { Component } from 'react';
import axios from 'axios';
import Navbar from '../Navbar/staffNavbar';
import logo from '../../../assect/images/logo.png'
import '../../NavbarTabs/.css'


export default class ShowRoomHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };

  }
  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    axios.get("/showroom/showroom").then(res => {
      if (res.data.success) {
        this.setState({
          posts: res.data.existingPosts
        });

        console.log(this.state.posts);
      }
    });
  }

  onDelete = (id) => {
    axios.delete(`/showroom/showroom/delete/${id}`).then((res) => {
      alert("Delete Successfully");
      this.retrievePosts();
    })
  }


  filterData(posts, searchKey) {
    const result = posts.filter((post) =>
      post.employeeID.toLowerCase().includes(searchKey) ||
      post.ename.toLowerCase().includes(searchKey) ||
      post.department.toLowerCase().includes(searchKey) ||
      post.EmployeeStatus.toLowerCase().includes(searchKey) ||
      post.intime.toLowerCase().includes(searchKey) ||
      post.outtime.toLowerCase().includes(searchKey) ||
      post.day.toLowerCase().includes(searchKey) ||
      post.month.toLowerCase().includes(searchKey) ||
      post.year.toLowerCase().includes(searchKey) 
 

    )
    this.setState({ posts: result })
  }

  handleSearchArea = (e) => {
    const searchKey = (e.currentTarget.value);
    axios.get("/showroom/showroom").then(res => {
      if (res.data.success) {

        this.filterData(res.data.existingPosts, searchKey)
      }
    });
  }

  render() {
    return (
      <>
      <Navbar/>
      <div className="order_bground" style={{ zIndex: 98,height:"100vh" }} >

      {/* <div className="Khome"> */}

        <br />
        <div style={{ width: '20%', marginLeft: '80%', marginBlockStart:'2%' }}>
          <form className="d-flex">
            <input className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search" onChange={this.handleSearchArea}>
            </input>
          </form>
        </div>
        <center>
          <h1><span class="badge bg-warning text-dark opacity-90 fs-1" style={{marginBlockStart:'2%'}}>Attendance Details</span></h1>
        </center>
        <div >
          <br/>
          
          <h3><span class="badge bg-warning text-dark opacity-95 ">Attendance List</span></h3><br></br>
          <table class="table table-bordered opacity-100 "  style={{ width:'100%',marginBlockStart: '-1%'}}>
            <thead class="table-info">
              <tr>
                <th scope="col">#</th>
                <th scope="col">EmployeeID</th>
                <th scope="col">Name</th>
                <th scope="col">Department</th>
                <th scope="col">Employee Status</th>
                <th scope="col">In time</th>
                <th scope="col">Out Time</th>
                <th scope="col">Day</th>
                <th scope="col">Month</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.posts.map((posts, index) => (
                <tr key={index}>
                  <th class="table-light" scope="row">{index + 1}</th>
                  <td class="table-light">
                    <a href={`/showroompost/${posts._id}`} style={{ textDecoration: 'none' }}>
                      {posts.employeeID}
                    </a>
                  </td>
                  <td class="table-light">{posts.ename}</td>
                  <td class="table-light">{posts.department}</td>
                  <td class="table-light">{posts.EmployeeStatus}</td>
                  <td class="table-light">{posts.intime}</td>
                  <td class="table-light">{posts.outtime}</td>
                  <td class="table-light">{posts.day}</td>
                  <td class="table-light">{posts.month}</td>
                  <td class="table-light">
                   
                    {/* <a className="btn btn-warning text-dark " href={`/showroomedit/${posts._id}`}> */}
                      {/* <i className="fas fa-edit"></i>Edit */}
                    {/* </a> */}
                  
                  <a class="btn btn-warning" style={{marginLeft:'1%',width:'45%'}} href={`/showroomedit/${posts._id}`}> <i className="fas fa-edit"></i>Edit</a>
                    {/* &nbsp;&nbsp; */}
                  < a class="btn btn-danger" style={{marginLeft:'48%',width:'40%',marginBlockStart:'-33%'}} onClick={() => this.onDelete(posts._id)} > <i className="far fa-trash-alt"></i>Delete</a>

                    {/* <a className="btn btn-danger text-dark " onClick={() => this.onDelete(posts._id)} >
                      <i className="far fa-trash-alt"></i>Delete
                    </a> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
         <br></br>
                  
          <div>
            <a style={{marginLeft:'35%'}}  className="btn btn-warning text-dark " href="/showroomadd" >
                    <i className="fas fa-user-plus"></i>Add New Listing
                  </a>
                  
                 <a style={{marginLeft:'1%'}}  className="btn btn-warning text-dark " href="/dashshow" >
                    Dash Board
                  </a>
          </div>
          
        <br></br>
        </div>
       
      {/* </div> */}
      </div>
      </>
    )
  }
}














