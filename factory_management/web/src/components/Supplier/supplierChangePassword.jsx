import React, { useState } from "react";
import axios from "axios";
import SupHeader from './Header'
import Swal from 'sweetalert2'

function SupChangepass(){

    const [getoldpass,setoldpass]= useState("");
    const [getnewpass,setnewpass]= useState("");
    const [getrenewpass,setrenewpass]= useState("");

    function oldpass(e){
        console.log(e.target.value)
        setoldpass(e.target.value)
    }
    function newpass(e){
        console.log(e.target.value)
        setnewpass(e.target.value)
    }
    function renewpass(e){
        console.log(e.target.value)
        setrenewpass(e.target.value)
    }
    function subbtn(){
       

        if(getnewpass == getrenewpass){

          var changepass = {
                getoldpass,
                getrenewpass
            }

            console.log(changepass);

            axios.patch("http://localhost:8889/supplier/supplymanager/profile/changepass",changepass,{
                headers: {
                  'Authorization': "bearer "+localStorage.getItem('token')
                }
              }).then((err) => {
                
              if(err.data.type == "correct"){
        
                  Swal.fire({
                    icon: 'success',
                    title: 'Your password was successfully updated',
                    text: 'Please log in again. Thank you!',
                   
                  }).then(()=>{
                    window.location.href='/supplierlogin';
                  })



                }else if(err.data.type == "wrong"){

                  Swal.fire({
                    position: 'center',
                    icon: 'warning',
                    title: 'Your old password incorrect',
                    showConfirmButton: false,
                    timer: 1500
                  })

                  
                }

               
                
              }).catch((err) => {
                alert(err)
              })






           

            
        }else{

          Swal.fire({
            position: 'center',
            icon: 'question',
            title: 'Your newly entered passwords are not matching',
            showConfirmButton: false,
            timer: 1500
          })

        }




    }

    return(
        <div className="bggradiant">
          <SupHeader/> 
            
        
             



                <div class="card cardalign">
      
      <div class="card-body">
        <div class="d-flex flex-column align-items-center text-center">
        
          <div class="mt-3">
            <h4>Change Password</h4><br />
            <p class="text-secondary mb-1">Enter your old password : <input type="password" onChange={oldpass}  class="form-control" id="inputPassword3"/></p>
            <p class="text-secondary mb-1">Enter your new password : <input type="password" onChange={newpass}  class="form-control" id="inputPassword3"/></p>
            <p class="text-secondary mb-1">Re-Enter your new password : <input type="password" onChange={renewpass}  class="form-control" id="inputPassword3"/></p>
            
            <br />
            <button onClick={subbtn} class="m-2 btn btnUpdate">Change my password</button>
            
            
        
          </div>
        </div>
      </div>
    </div> 
            

        </div>
    )


}

export default SupChangepass;