import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import Navbar from "./SalesManagerNavBar"
import '../Order/.css'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';


export default function CheckInvetory() {

  //retrive data in inventory table
  const [inventoryD, setInventoryD] = useState([]);
  useEffect(() => {
    function getInventory() {
      axios.get("http://localhost:8889/Inventory/view").then((res) => {
        setInventoryD(res.data)
      }).catch((err) => {
        alert(err.message)
      })
    }
    getInventory();

  }, [inventoryD])


  //Search inventory
  const [search, setSearch] = useState("");
  function searchItem(event) {

    setSearch(event.target.value);

  }


  return (

    <div>
      <Navbar />

      <div className="order_bground" style={{ zIndex: 98 }} >

        <div className="body">
          <div className="all_container">

            <div className='col-lg-9 mt-2 mb-2'><center>
              <h2 class="B_heading"><u>Inventory</u></h2></center>
              <br>
              </br>
            </div>

            <br></br>
            <input
              onChange={searchItem}
              className='form-control'
              type='search'
              placeholder='search'
              name='searchQuery'>
            </input><br></br>


            <table class="table" style={{ width: "1350px" }}>
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Product Code</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Quantity (KG)</th>
                  <th scope="col">Stock Price</th>
                </tr>
              </thead>
              <tbody>
                {

                  inventoryD.filter(e =>

                    e.productName.toLowerCase().includes(search) ||
                    e.productId.toLowerCase().includes(search)


                  ).map((e) => (

                    <tr>

                      <td>{e.productId}</td>
                      <td>{e.productName}</td>
                      <td>{e.quantity}</td>
                      <td>{e.costPrice}</td>

                    </tr>
                  ))
                }
              </tbody>
            </table>

            <Link to="pending_orders"><button type="button" class="btn btn-danger" ><ChevronLeftIcon />back</button></Link>

          </div>

        </div>


      </div>

    </div>

  )
}



