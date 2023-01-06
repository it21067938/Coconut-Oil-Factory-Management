
import React,{useState,useEffect} from "react";
import axios from "axios";

import Swal from 'sweetalert2'
//import { useNavigate } from 'react-router-dom';
import SupHeader from './Header'

function ProfileView(){

  //const navigate = useNavigate();
  
  // const [SupName,setSupName] = useState("");
  // const [supNic, setSupNic] = useState("");
  // const [supTp, setSupTp] = useState("");
  const [detail, setDetail] = useState([]);

  

  function getSupplierdata(){
    axios.get("http://localhost:8889/supplier/suplierprofile", 
    {
      headers: {
        'Authorization': "bearer "+localStorage.getItem('token')
      }
    }).then((res) => {
                     
                    //  setSupName(res.data.username);
                    //  setSupNic(res.data.nic);
                    //  setSupTp(res.data.telephoneNum);

                    //   console.log(res.data.username);
                    //   console.log(res.data.nic);
                    //   console.log(res.data.telephoneNum);

                    setDetail(res.data);
                      
                      


                    }).catch((err) => {
                      alert(err)
                    })
  }
  
  useEffect(()=>{
    getSupplierdata();
   

},[]);



function proUpdate(){
  //navigate ('/supplierprofile/update/'+id);
  
 

  Swal.fire({
    title: 'Are you need to update your profile?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#008000',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes!',
    cancelButtonText: 'No!'
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href='/supplierprofileupdate';

    }
  })
}

function changePass(){
  

  Swal.fire({
    title: 'Are you need to change your password?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#008000',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes!',
    cancelButtonText: 'No!'
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href='/supChangepass';

    }
  })



}

function deleteProfile(){
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete my account!'
  }).then((result) => {
    if (result.isConfirmed) {

          Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!'
          }).then((result) => {
            if (result.isConfirmed) {

                
              axios.delete("http://localhost:8889/supplier/profile/delete",{
                headers: {
                  'Authorization': "bearer "+localStorage.getItem('token')
                }
              }).then(function(res){
                console.log(" errrrrrrrrrr    "+res)
                
                  Swal.fire(
                    'Deleted!',
                    'Your account has been deleted.',
                    'success'
                  ).then((result) => {
                    if (result.isConfirmed) {
                      
                      window.location.href='/products';
    
                    }
                  })



                
              }).catch(function(err){
                alert(err);
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Something went wrong!',
                 
              })
          }

          )
            }
          })
   

    }
  })

}




    return(
        <div className="bggradiant">
           <SupHeader/> 
        
  
 




      <div>


      <div class="card cardalign">
      
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150"/>
                    <div class="mt-3">
                      <h4>User Name : <b>{detail.username}</b></h4>
                      <p class="text-secondary mb-1">Nic : <b>{detail.nic}</b></p>
                      <p class="text-muted font-size-sm">Telephone number : <b>{detail.telephoneNum}</b></p>
                      <br />
                      <button onClick={proUpdate} class="m-2 btn btnUpdate">Edit Profile</button>
                      <button  onClick={changePass} class="m-2 btn btnChangPass">Change Password</button>
                      <button  onClick={deleteProfile} class="m-2 btn btn-primary btnDelete">Delete Profile</button>
                  
                    </div>
                  </div>
                </div>
              </div> 
            

      </div>



        </div>
    )


}
export default ProfileView;