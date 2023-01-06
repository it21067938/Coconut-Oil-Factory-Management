import axios from "axios";
import React from "react";
import { useState } from "react";
import './login.css'


function ManagerLogin(){

    const[uname,setUname]= useState("");
    const[pass,setPass] = useState("");

    function inUname(e){
      
        setUname(e.target.value)
    }
    function inPassword(e){
        
        setPass(e.target.value)
    }


    function logindata(e){
        e.preventDefault();

            logindata = {
                username :uname,
                password :pass
            }

            axios.post("http://localhost:8889/admin/login",logindata).then(function(res){

                const rolle = res.data.rolletype;
                alert(rolle)


                //supply manager
                if(rolle == 'T1'){
                    
                    console.log("yes")
                    window.location.href='/reqcoco';
                }

                //sales manager
                else if(rolle == 'T2'){
                    
                    console.log("yes")
                    window.location.href='/sm_home';
                }

                //finance manager
                else if(rolle == 'T3'){
                    
                    console.log("yes")
                    window.location.href='/dash';
                }

                //manufacture manager
                else if(rolle == 'T4'){
                    
                    console.log("yes")
                    window.location.href='/manuDash';
                }

                //transport manager
                else if(rolle == 'T5'){
                    
                    console.log("yes")
                    window.location.href='/TransportHome';
                }

                //staff manager
                else if(rolle == 'T6'){
                    
                    console.log("yes")
                    window.location.href='/staff_home';
                }
                //stock manager
                else if(rolle == 'T7'){
                    
                    console.log("yes")
                    window.location.href='/inventorydash';
                }else{
                    console.log("noo"+res.data)
                }


            })

            console.log(logindata)
        
    }


    return(
    
    
    <div>



<section class="myform-area">
    {/* <div className="bground"></div> */}
              <div class="container">
                  <div class="row justify-content-center">
                      <div class="col-lg-8">
                          <div class="form-area login-form">
                              <div class="form-content">
                                  <h2>Login</h2>
                                  <p>Login to the manager accounts. After Login managers can work their divisions.</p>
                                  <br></br>
                                  <br></br>
                                  <br></br>
                                  <br></br>
                                  <br></br>
                                  <br></br>
                                  <ul>
                                      <li><a href="https://www.facebook.com" target="_blank" class="facebook"><i class="fa fa-facebook-f"></i><span>facebook</span></a></li>
                                      <li><a href="https://twitter.com/i/flow/login"target="_blank" class="twitter"><i class="fa fa-twitter"></i><span>twitter</span></a></li>
                                  </ul>
                              </div>
                              <div class="form-input">
                                  <h2>Login Form</h2>
                                  <form onSubmit={logindata}>
                                      <div class="form-group">
                                          <input type="text"   name="name" onChange={inUname} required/>
                                          <label>User ID</label>
                                      </div>
                                      <div class="form-group">
                                          <input type="password" name="password"  onChange={inPassword} required/>
                                          <label>password</label>
                                      </div>
                                      <div class="myform-button">
                                          <button class="myform-btn" type="submit" >Login</button>
                                      </div>
                                  </form>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>



  </div>

    )
}

export default ManagerLogin;