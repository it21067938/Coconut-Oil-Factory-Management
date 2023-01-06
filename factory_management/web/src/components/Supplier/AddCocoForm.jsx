import React, { useState } from 'react';
import axios from "axios";
//import { useNavigate } from 'react-router-dom';
import SupHeader from './Header'
import Swal from 'sweetalert2'

function AddCocoForm() {

  
  const [coAmount, setCocoCount] = useState("");
  const [coLocation, setCocoLocation] = useState("");


  function cocountFun(event) {
    setCocoCount(event.target.value);
    //  console.log(event.target.value);
  }

  function coLocationFun(event) {
    setCocoLocation(event.target.value);
    // console.log(event.target.value);
  }

  function sendData(event) {

   

    const newCocoSyp = {
      coAmount,
      coLocation
    }

    console.log(newCocoSyp); 

    axios.post("http://localhost:8889/supplier/supplyform", newCocoSyp, {
      headers: {
        'Authorization': "bearer "+localStorage.getItem('token')
      }
    }).then(() => {


      Swal.fire({
        icon: 'success',
        title: 'Thank you we will reach you soon....',
        
      }).then(()=>{
        window.location.href='/home';
      })


    }).catch((err) => {
      alert(err)
    })
  } 



  return (
    <div className='bggradiant'>
     <SupHeader/> 
  <div className='formwidth'>
  <div className='container'>
   
    

    <div>
      <div class="card cardalign">
      
      <div class="card-body">
        <div class="d-flex flex-column align-items-center text-center">
          
          <div class="mt-3">
            <h3>To supply coconuts</h3>
            <br />
            <p class="text-secondary mb-1">Coconut Count : <input type="Number"  onChange={cocountFun}  class="form-control" id="inputPassword3"/></p><br />
            <p class="text-muted font-size-sm">Location : <input type="text"  onChange={coLocationFun} class="form-control" id="inputPassword3" /></p>
            <br />
            <button onClick={sendData}  type="submit" className="m-2  btn btnUpdate">Add +</button>
            
        
          </div>
        </div>
      </div>
    </div> 
      </div>


  </div>
  </div>
  </div>
  )


}




export default AddCocoForm;