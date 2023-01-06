import React from 'react'
import Navbar from './Navbar'
import verginoil from '../../assect/images/verginoil.jpeg'
import oil_product from '../../assect/images/oil_product.jpg'
import normail_oil from '../../assect/images/normail_oil.webp'
import white_oil from '../../assect/images/white_oil.jpg'

const Products = () => {
  return (
    <div>
      <Navbar />
      <br></br>
      <h2 className='productHedaing'><center>Our Products</center></h2><br></br>

      <table>
        <tr>
          <td>
            <div>
              <img className='oil_vergin' src={verginoil} /><br></br>
              <h3 className='virgin_product'>Virgin Oil</h3>
            </div>
          </td>
          <td>
            <div>
              <img className='oil_coco' src={oil_product} /><br></br>
              <h3 className='coconut_product'>Coconut Oil</h3>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div>
              <img className='oil_normal' src={normail_oil} /><br></br>
              <h3 className='virgin_product'>Normal Oil</h3>
            </div>
          </td>
          <td>
            <div>
              <img className='oil_white' src={white_oil} /><br></br>
              <h3 className='coconut_product'>Coconut Oil</h3>
            </div>
          </td>
        </tr>
      </table>




    </div>
  )
}

export default Products
