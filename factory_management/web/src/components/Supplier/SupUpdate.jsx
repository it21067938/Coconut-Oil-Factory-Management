import React,{useState,useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
//import { useNavigate } from 'react-router-dom';
import SupHeader from './Header'
import Swal from 'sweetalert2'

function SupUpdate(){
 // const navigate = useNavigate()

          const updateRowId = "";
         
          const {id} = useParams();

          console.log(id);
 
          const [amount, setCocoCount] = useState("");
          const [location, setCocoLocation] = useState("");

//-------------------------------------------------------
         
          // const [preAmount,setpreAmount] = useState("");
          // const [preLocation,setPreLocation] = useState("");

          useEffect(()=>{
                     function getCount(){
                      console.log("1st");

                              axios.get("http://localhost:8889/supplier/updateview/"+id, 
                              {
                                headers: {
                                  'Authorization': "bearer "+localStorage.getItem('token')
                                }
                              }).then((res)=>{
                                console.log("2nd");
                                       
                                       console.log(res);
                                       console.log(res.data.location);
                                       setCocoCount(res.data.amount);
                                       setCocoLocation(res.data.location);
                              }).catch((err)=>{
                                console.log(err);
                              })
                             
                    } getCount();
                    

          },[])
        
 //----------------------------------------------------------
        
          function cocountFun(event) {
            setCocoCount(event.target.value);
            //  console.log(event.target.value);
          }
        
          function coLocationFun(event) {
            setCocoLocation(event.target.value);
            // console.log(event.target.value);
          }
        
          function sendData(event) {
        
            event.preventDefault();
        
            const newCocoSyp = {
              amount,
              location
            }
        
            console.log(newCocoSyp); 
        
            axios.patch("http://localhost:8889/supplier/supplyform/update/"+id, newCocoSyp, {
              headers: {
                'Authorization': "bearer "+localStorage.getItem('token')
              }
            }).then(() => {
             
              //navigate('/viewpending')
              Swal.fire({
                icon: 'success',
                title: 'Your entry Update successfully',
                
              }).then(()=>{
                window.location.href='/viewpending';
              })
              
            }).catch((err) => {
              alert(err)
            })
          } 
        

        
         


          


return( 
  <div className="bggradiant">
     <SupHeader/> 
  


                    <div>
      <div class="card cardalign">
      
      <div class="card-body">
        <div class="d-flex flex-column align-items-center text-center">
          
          <div class="mt-3">
            <h3>Update supply form</h3>
            <br />
            <p class="text-secondary mb-1">Coconut Count : <input type="Number" value={amount} onChange={cocountFun}  class="form-control" id="inputPassword3"/></p><br />
            <p class="text-muted font-size-sm">Location : <input type="text" value={location} onChange={coLocationFun} class="form-control" id="inputPassword3" /></p>
            <br />
            <button onClick={sendData}  type="submit" className="m-2  btn btnUpdate">Update</button>
            
        
          </div>
        </div>
      </div>
    </div> 
      </div>


                    </div>

)

}

export default SupUpdate;