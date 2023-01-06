import React, { Component } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import Navbar from '../Navbar/staffNavbar';
import logo from '../../../assect/images/logo.png'
import '../../NavbarTabs/.css'



export default class AttendaceDash extends Component {
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
    axios.get("showroom/showroom").then(res => {
      if (res.data.success) {
        this.setState({
          posts: res.data.existingPosts
        });

        console.log(this.state.posts);
      }
    });
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
    axios.get("showroom/showroom").then(res => {
      if (res.data.success) {

        this.filterData(res.data.existingPosts, searchKey)
      }
    });
  }

  createPdf = (pdfBody) => {

    var doc = new jsPDF();
    var totalPagesExp = "{total_pages_count_string}"; //placeholder for total number of pages 
    doc.autoTable({
        didDrawPage: function (data) {

          var today = new Date();
                var curr_date = today.getDate();
                var curr_month = today.getMonth();
                var curr_year = today.getFullYear();
          
                today = [curr_month + 1] + "/ " + curr_date + "/ " + curr_year;
                var newdat = today;

            // Header
            doc.setFontSize(15)
            doc.text("Jayasinghe Oil Mills", 15, 50);
            doc.text(newdat, 175, 50);
            doc.setFontSize(18);
            var fileTitle = "Attendance Report";
            doc.text(fileTitle, 85, 90);

            // Footer
            var pageSize = doc.internal.pageSize;
            // jsPDF 1.4+ uses getHeight, <1.4 uses .height
            var pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight();
            // jsPDF 1.4+ uses getWidth, <1.4 uses .width
            var pageWidth = pageSize.width ? pageSize.width : pageSize.getWidth();

            doc.autoTable({
                html: '#my-table',
                startY: pageHeight - 200,
                theme: 'grid'
            });

            var str = "Page " + doc.internal.getNumberOfPages()
            // Total page number plugin only available in jspdf v1.0+
            if (typeof doc.putTotalPages === 'function') {
                str = str + " of " + totalPagesExp;
            }
            doc.setFontSize(10);
            doc.text(str, data.settings.margin.left, pageHeight - 10);
        },
        margin: {
            bottom: 60, //this decides how big your footer area will be
            top: 40 //this decides how big your header area will be.
        }
    });
    // Total page number plugin only available in jspdf v1.0+
    if (typeof doc.putTotalPages === 'function') {
        doc.putTotalPages(totalPagesExp);
    }

    doc.save('Attendance report.pdf'); //this downloads a copy of the pdf in your local instance.
};

  render() {
    return (
      <>
      <Navbar/>
      <div className="order_bground" style={{ zIndex: 98,height:"100vh" }} >

      {/* <div class='DashBGS'> */}
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
            <center><h1><span class="badge bg-warning text-dark opacity-90" style={{ marginBlockStart:'5%' }}>Attendance Details Report</span></h1></center>
        <div >
          <br />
          
          <table  id="my-table" class="table table-bordered" style={{ width:'80%',marginBlockStart: '-1%'}}>
            <thead class="table-info">
              <tr>
                <th scope="col">Serial No</th>
                {/* <th scope="col">employeeID</th>        */}
                <th scope="col">ename</th>   
                <th scope="col">department</th>
                <th scope="col">EmployeeStatus</th>
                <th scope="col">intime</th>
                <th scope="col">outtime</th>
                <th scope="col">day</th>
                <th scope="col">month</th>
                <th scope="col">year</th>
                
              </tr>
            </thead>
            <tbody>
              {this.state.posts.map((posts, index) => (
                <tr key={index}>
                  <th class="table-light" scope="row" width='100px'>{index + 1}</th>
                  {/* <td class="table-light">
                    <a href={`/showroompost/${posts._id}`} style={{ textDecoration: 'none' }}>
                      {posts.employeeID}
                    </a>
                  </td> */}
                  

                  <td class="table-light">{posts.ename}</td>                 
                  <td class="table-light">{posts.department}</td>
                  <td class="table-light">{posts.EmployeeStatus}</td>
                  <td class="table-light">{posts.intime}</td>
                  <td class="table-light">{posts.outtime}</td>
                  <td class="table-light">{posts.day}</td>
                  <td class="table-light">{posts.month}</td>
                  <td class="table-light">{posts.year}</td>
                  
                </tr>
              ))}
            </tbody>
          </table>       
          
          <div>
         
                  <a className="btn btn-warning text-dark " style={{marginLeft:'35%'}} onClick={this.createPdf}>
                    <i className="fa fa-file-pdf-o"></i>&nbsp;&nbsp;Download PDF
                  </a>
                  &nbsp;
                  <a className="btn btn-warning text-dark " style={{marginLeft:'1%'}}  href="/dashshow" >
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














