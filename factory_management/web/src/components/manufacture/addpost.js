import React,{useState,useEffect} from "react"
import axios from "axios"
import '../manufacture/.css'


export default function Addpost(){

        const[id,setId] = useState("");
        const[name,setName] = useState("");
        const[quantity,setQuantity] = useState("");

        
        function SendData(e){
            e.preventDefault();
            
        
                const newpost ={
                    id ,
                    name,
                    quantity
                }
                function refreshPage() {
                    window.location.reload(false);
                  }
                axios.post("http://localhost:8889/post/add",newpost).then(()=>{
                    alert("Details added",refreshPage())
                    
                }).catch((err)=> {
                    alert(err)
                })
                console.log(newpost)
                
            }
           
    
    return(
        // <div className="order_bground" style={{ zIndex: 98,height:"100%" }} ></div>
        <div className="order_bground" style={{ zIndex: 98,height:"100%"}} >
        <div className="container">
            <div className='border' style={{}}>
            
                <h1 className='header1'>Add Item</h1>
                <form className='needs-validation' noValidate onSubmit={SendData}>

                    <div className='form-group' style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}} className="lable">ID</label>
                        <input type="text"className="form-control" name='date' placeholder='Enter ID'
                        onChange={(event)=>{
                            setId(event.target.value);

                        }}/>
                    </div>

                    <div className='form-group' style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}} className="lable">Name</label>
                        <input type="text"className="form-control"name='description'placeholder='Enter Name'
                                onChange={(event)=>{
                                setName(event.target.value);
                    
                             }}/>
                    </div>

                    <div className='form-group' style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}} className="lable">Quantity </label>
                        <input type="number"className="form-control"name='amount'placeholder='Enter Quantity'
                        onChange={(event)=>{
                            setQuantity(event.target.value);
                
                         }} />
                    </div>

                

                    <button className='btn btn-success mr-' type='submit' style={{marginTop:'15px'}}>Add</button>
                    &nbsp;
                    <a className='btn btn-danger' href="/postDetails" style={{marginTop:'15px'}} > Back</a>
                </form>
            </div>
           
        </div>
        <br></br>
        <br></br>
        <br></br>
        </div>
    )
}