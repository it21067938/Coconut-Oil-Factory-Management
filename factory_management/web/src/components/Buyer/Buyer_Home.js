import React from 'react'
import Navbar from "./BuyerNavbar"
import './buyer.css'
import Button from '@mui/material/Button';
import verginoil from '../../assect/images/verginoil.jpeg'
import oil_product from '../../assect/images/oil_product.jpg'
import white_oil from '../../assect/images/white_oil.jpg'
import coco_husk from '../../assect/images/coco_husk.jpeg'
import coco_shell from '../../assect/images/coco_shell.jpg'
import Punnakku from '../../assect/images/Punnakku.gif'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


export default function Buyer_Home() {

  return (
    <div >
      <Navbar />

      <div className='buyer_back'>

        <div className='back'>
          <u style={{ color: "black" }}><h1 className='name' style={{ color: "black" }}><center>Jayasinghe Oil Mills</center></h1></u>
          <p className='para' style={{ color: "black" }}><center>Jayasinghe oil mill is one of the best virgin coconut oil manufacturers in Sri Lanka.</center> </p>
        </div>

        <h2 className='buyerHead'><center><u>Order Our Products</u></center></h2>

        <div class="card_buyer">
          <img className='oil_vergin_buyer' src={verginoil} />
          <div class="card-body">
            <h5 class="card-title"><center>Virgin Coconut Oil</center></h5><br></br>
            <p style={{ marginLeft: "10px" }}>1KG - Rs.485.00</p>
            <Button sx={{ ml: 2 }} href="placeOrder" variant="contained" color="success">
              Order now <NavigateNextIcon />
            </Button>
          </div>
        </div>

        <div class="card_buyer" style={{ marginTop: '-450px', marginLeft: "850px", marginBottom: "50px" }}>
          <img className='oil_coco_buyer' src={oil_product} />
          <div class="card-body">
            <h5 class="card-title"><center>Coconut Oil</center></h5><br></br>
            <p style={{ marginLeft: "10px" }}>1KG - Rs.400.00</p>
            <Button sx={{ ml: 2 }} href="placeOrder" variant="contained" color="success" >
              Order now <NavigateNextIcon />
            </Button>
          </div>
        </div>

        <div class="card_buyer">
          <img className='oil_white_buyer' src={white_oil} />
          <div class="card-body">
            <h5 class="card-title"><center>White Oil</center></h5><br></br>
            <p style={{ marginLeft: "10px" }}>1KG - Rs.550.00</p>
            <Button sx={{ ml: 2 }} href="placeOrder" variant="contained" color="success">
              Order now <NavigateNextIcon />
            </Button>
          </div>
        </div>

        <div class="card_buyer" style={{ marginTop: '-450px', marginLeft: "850px", marginBottom: "50px" }}>
          <img className='oil_white_buyer' src={coco_husk} />
          <div class="card-body">
            <h5 class="card-title"><center>Coconut Husk</center></h5><br></br>
            <p style={{ marginLeft: "10px" }}>1KG - Rs.20.00</p>
            <Button sx={{ ml: 2 }} href="placeOrder" variant="contained" color="success" >
              Order now <NavigateNextIcon />
            </Button>
          </div>
        </div>

        <div class="card_buyer">
          <img className='coco_shell_buyer' src={coco_shell} />
          <div class="card-body">
            <h5 class="card-title"><center>Coconut Shelles</center></h5><br></br>
            <p style={{ marginLeft: "10px" }}>1KG - Rs.100.00</p>
            <Button sx={{ ml: 2 }} href="placeOrder" variant="contained" color="success">
              Order now <NavigateNextIcon />
            </Button>
          </div>
        </div>

        <div class="card_buyer" style={{ marginTop: '-450px', marginLeft: "850px", marginBottom: "50px" }}>
          <img className='oil_white_buyer' src={Punnakku} />
          <div class="card-body">
            <h5 class="card-title"><center>Punnakku</center></h5><br></br>
            <p style={{ marginLeft: "10px" }}>1KG - Rs.100.00</p>
            <Button sx={{ ml: 2 }} href="placeOrder" variant="contained" color="success" >
              Order now <NavigateNextIcon />
            </Button>
          </div>
        </div>

      </div>
    </div>
  )

}
