import axios from "axios";
//import { set } from "mongoose";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//import { useNavigate } from 'react-router-dom';
import SupHeader from './Header'
import Swal from 'sweetalert2'

function UpdateProfile(){
   // const navigate = useNavigate()

   const [username,setnUname] = useState("");
   const [nic,setnNic] = useState("");
   const [telephoneNum,setnPhone] = useState("");

   
  

    function getSupplierdata(){
        axios.get("http://localhost:8889/supplier/suplierprofile", 
        {
          headers: {
            'Authorization': "bearer "+localStorage.getItem('token')
          }
        }).then((res) => {
          console.log(res.data.telephoneNum)
          setnUname(res.data.username);
          setnNic(res.data.nic);
          setnPhone(res.data.telephoneNum);

          

                          
                          
    
    
                        }).catch((err) => {
                          alert(err)
                        })
      }

    useEffect(()=>{
        getSupplierdata();
     },[]);


 function submitdata(){
      const newData ={
        username,
        nic,
        telephoneNum
      }
      console.log(newData);

      axios.patch("http://localhost:8889/supplier/suplierprofile/profileupdate", newData , 
      {
        headers: {
          'Authorization': "bearer "+localStorage.getItem('token')
        }
      }
       ).then((res)=>{

        Swal.fire({
          icon: 'success',
          title: res.data,
          
        }).then(()=>{
          window.location.href='/supplierprofile';
        })
       
          
                  

        
        
        
        
      }).catch((err)=>{
        alert(err);
      })





 }

    return(
    <div className="bggradiant">
       <SupHeader/> 
        
  


      <div>
      <div class="card cardalign2">
      
      <div class="card-body">
       
        <div class="d-flex flex-column align-items-center text-center">
        <h3><u> Profile Update</u></h3><br />
          <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150"/>
          <div class="mt-3">
            <h4>User Name : <input type="text" onChange={e=>setnUname(e.target.value)} value={username} class="form-control" id="inputEmail3" /></h4>
            <p class="text-secondary mb-1">Nic : <input type="Number" onChange={e=>setnNic(e.target.value)} value={nic} class="form-control" id="inputPassword3"/></p>
            <p class="text-muted font-size-sm">Telephone number : <input type="Number" onChange={e=>setnPhone(e.target.value)} value={telephoneNum} class="form-control" id="inputPassword3" /></p>
            <br />
            <button className="m-2 btn btnUpdate" onClick={submitdata}>Update Profile</button>
            
        
          </div>
        </div>
      </div>
    </div> 
      </div>




    </div>)

}
export default UpdateProfile;