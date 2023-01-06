import axios from "axios";
import React from "react";
import './register.css'
import {Link} from "react-router-dom";


function ManagerRegisterForm(){

    function submitRegistration(e){
        e.preventDefault();
      
       
            console.log(e.target)
     const fegdata={
        username:e.target[0].value,
        nic:e.target[1].value,
        type:e.target[3].value,
        telephoneNum:e.target[2].value,
        password:e.target[4].value,
        repassword:e.target[5].value
     } 

     console.log(fegdata)

     axios.post("http://localhost:8889/admin/register",fegdata).then(function(res){
        if(res){
            alert(res.data);
        }
     })

    }

    return(
        <div>
        
{/* 
            <form onSubmit={submitRegistration}>
                <input type="text" placeholder="User ID"/><br />
                <input type="text" placeholder="Nic" /><br />
                <input type="Number" placeholder="Telephone Number" /><br />
                <label for="managerType">Choose a manager Type:</label>
                <select name="managerType" id="manager">
                    <option value="T1">Supply</option>
                    <option value="T2">Sales</option>
                    <option value="T3">Finance</option>
                    <option value="T4">Manufacture</option>
                    <option value="T5">Transport</option>
                    <option value="T6">Staff</option>
                    <option value="T7">Stock</option>
                </select><br />
                <input type="password"  placeholder="Enter the password"/><br />
                <input type="password"  placeholder="ReEnter the password"/><br />
                <button type="submit">Register</button>
            </form> */}
<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
{/* <!------ Include the above in your HEAD tag ----------> */}

        <form onSubmit={submitRegistration}>
            <div class="container register">
                <div class="row">
                    <div class="col-md-3 register-left">
                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                        <h3>Welcome</h3>
                        <p>You are 30 seconds away from earning your own money!</p>
                        <Link to="managerlogin">
                        <input type="submit" name="" value="Login"/><br/>
                        </Link>
                       
                    </div>
                    <div class="col-md-9 register-right">
                        {/* <ul class="nav nav-tabs nav-justified" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Create</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Hirer</a>
                            </li>
                        </ul> */}
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 class="register-heading">Apply as a Employee</h3>
                                <div class="row register-form">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="User ID *"  />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="NIC *"  />
                                        </div>
                                        <div class="form-group">
                                        <input type="text" minlength="10" maxlength="10" name="txtEmpPhone" class="form-control" placeholder="Telephone Number *"  />
                                        </div>

                                        <div class="form-group">
                                            <p>Please select your manager type</p>
                                            <select name="managerType" class="form-control">
                                                <option value="T1">Supply manager</option>
                                                <option value="T2">Sales manager</option>
                                                <option value="T3">Finance manager</option>
                                                <option value="T4">Manufacture manager</option>
                                                <option value="T5">Transort manager</option>
                                                <option value="T6">Staff manager</option>
                                                <option value="T7">Stock manager</option>
                                            </select>
                                        </div>
                            
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="email" class="form-control" placeholder="Password *"  />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" minlength="10" maxlength="10" name="txtEmpPhone" class="form-control" placeholder="Confirm Password*"  />
                                        </div>
                                
                                     
                                        <input type="submit" class="btnRegister"  value="Register"/>
                                       
                                    </div>
                                </div>
                            </div>
      
                        </div>
                    </div>
                </div>

            </div>
        </form>


        </div>
    )
}

export default ManagerRegisterForm;