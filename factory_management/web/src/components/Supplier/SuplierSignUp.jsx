import React, { useState } from 'react';
import './loginAndReg.css';
import axios from "axios";
//import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'



function SuplierSignUp(){

//sign in -----------------------------------------------
    const[Nic,setCocoCount] = useState("");
    const[password,setCocoLocation] = useState("");

//const navigate = useNavigate()

          function nicFun(event){
                    setCocoCount(event.target.value);
                  //  console.log(event.target.value);
          }

          function passFun(event){
                    setCocoLocation(event.target.value);
                   // console.log(event.target.value);
          }


          console.log(Nic+"  "+password);

          function logindata(event){

            event.preventDefault();

                   const suplogin={
                    Nic,
                    password
                    }

                    console.log(suplogin);

                   axios.post("http://localhost:8889/supplier/login",suplogin).then(res=>{
                    const token = res.data.acsessToken
                   if(token){
                    localStorage.setItem('token',token)  /////////////////////////////////////
                    console.log(res.data.acsessToken)
                   // navigate('/')
                   window.location.href='/home';
                   // <Link to="/"></Link>
                   }else{
                    alert("Pleace check your Credential")
                   }
                   
                   
                   });
                   
                  
          }

          //register ------------------------------------------------------------------


          const[gUserName, SetUname]= useState("");
          const[gNic,setNic]=useState('');
          const[gphone,setPhone]= useState("");
          const[gPass1,setPass1]=useState("");
          const[gPass2,setPass2]=useState("");

          function stUname(event){
            console.log(event.target.value);
            SetUname(event.target.value);
          }
          function stNic(event){
            console.log(event.target.value);
            setNic(event.target.value);
          }
          function stPhone(event){
            console.log(event.target.value);
            setPhone(event.target.value);
          }
          function stPassword1(event1){
            console.log("pass 1    "+event1.target.value);
            setPass1(event1.target.value);
              
          }

          function stPassword2(event){
            console.log("pass 2    "+event.target.value);
            setPass2(event.target.value);
          }

          function sendReg(e){
            e.preventDefault()
            if(gPass1 == gPass2){

                const newSup ={

                    username : gUserName,
                    nic : gNic,
                    telephoneNum : gphone,
                    password : gPass2

                }

                console.log(newSup);



                axios.post("http://localhost:8889/supplier/register",newSup).then(res=>{
                
                   if(res){
                    Swal.fire(
                      'You are successfuly registerd',
                      'Please log again',
                      'success'
                    ).then(()=>{
                      window.location.href='/supplierlogin';
                    })
                    //alert(res.data);
                    //navigate('/suppliersignup');
                   
                   }else{
                    alert("Pleace check your Credential")
                   }
                   
                   
                   }).catch((err)=>{
                    alert(err);
                   });


            }else{
              Swal.fire({
                position: 'center',
                icon: 'warning',
                title: 'You enterd passwords are not matching',
                showConfirmButton: false,
                timer: 1500
              })
            }

            

          }
 



    return(
        <div>
        
        
	<a href="https://front.codes/" class="logo" target="_blank">
		
	</a>

	
        


      <div>

          <div class="register-photo">
            <div class="form-container">
                <div class="image-holder"></div>
                <form onSubmit={sendReg}>
                    <h2 class="text-center"><strong>Create</strong> an account.</h2>
                    <div class="form-group"><input onChange={stUname} class="form-control" type="text" required placeholder="User Name"/></div>
                    <div class="form-group"><input onChange={stNic} class="form-control" type="Number" required placeholder="Nic number"/></div>
                    <div class="form-group"><input onChange={stPhone} class="form-control" type="Number" pattern="\d*" maxLength="10" required placeholder="Telephone Number"/></div>
                    <div class="form-group"><input onChange={stPassword1} class="form-control" type="password" required placeholder="Password"/></div>
                    <div class="form-group"><input onChange={stPassword2} class="form-control" type="password" required  placeholder="Password (repeat)"/></div>
                    <div class="form-group">
                        
                    </div>
                    <div class="form-group"><button class="btn btn-primary btn-block"   type="submit">Sign Up</button></div><a href="/supplierlogin" class="already">You already have an account? Login here.</a></form>
            </div>
        </div>

      </div>




        </div>
    )

}


export default SuplierSignUp;