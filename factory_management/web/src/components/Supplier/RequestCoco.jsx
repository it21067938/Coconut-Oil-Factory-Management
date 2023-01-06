//import React from 'react';
import React, { PureComponent } from 'react';
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'
import axios from "axios";
import ManagerHeader from './supManagerHeader';
import { useEffect } from 'react';
import { useState } from 'react';
import './supManager.css'


import Typography from '@mui/material/Typography';




import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';



function RequestCoco(){

    const [amount,setAmount]=useState("")
    const[price,setPrice]=useState("")
    const[allsup,setAll] = useState([])

    function updateCoco(e){
        e.preventDefault();
        
        const Details = {
                neededQuantity:e.target[0].value,
                buyingPrice:e.target[1].value
        };

        axios.patch("http://localhost:8889/supplier/addcoco",Details).then((res)=>{
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Requesting data Updated',
                showConfirmButton: false,
                timer: 1500
              }).then(()=>{
                document.location.reload();
              })
                
        })

    
}


    function viewcocodetails(){
        
        axios.get("http://localhost:8889/supplier/managerhome").then((res)=>{
                
                setAmount(res.data[0].neededQuantity)
                setPrice(res.data[0].buyingPrice)
                
        })





    }


    function calPending(){
      
            axios.get("http://localhost:8889/supplier/supplymanager").then((res)=>{
                      
                    // console.log(res.data);
                     let edaa = res.data;
                    setAll(
                        edaa.map(function(items){
                        return(
                           Number( items.amount)
                        )
                    })
                    );

            })
           
   
    }


    // console.log(
    //     allsup.reduce((a, b) => a + b, 0)
    //   )



    useEffect(function(){
       viewcocodetails()
        calPending()
       
    })
    
    const data = [
        { name: "Needed Qty", value: amount },
        { name: "PendingQty", value: allsup.reduce((a, b) => a + b, 0) }
      ];
      
      const COLORS = ["#FF8042","#00C49F"];
      
      const RADIAN = Math.PI / 180;
      const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
        index
      }: any) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return (
          <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > cx ? "start" : "end"}
            dominantBaseline="central"
          >
            {`${(percent * 100).toFixed(0)}%`}
          </text>
        );
      }; 



          return(
            
           
            <div className="supbg">
                
                <ManagerHeader/>

            <div className="d-flex justify-content-center  pieChart">
            <div >
            
            <Typography variant='h3' className='textbg' align='center' sx={{fontWeight: 700, color: 'text.secondary'}}> Suppy Status </Typography>
            <br />  <br />
            <PieChart width={420} height={420} className='ml-5'>
                <Pie
                    data={data}
                    cx={200}
                    cy={200}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={200}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                
             </PieChart>
             
             <div className='d-flex mt-4'>
             <div className='d-flex m-3'>
             <div className='orangeArea'/> <Typography variant='h6' className='ml-3'>Needed amount </Typography> 
             </div>
             <div className='d-flex m-3'>
             <div className='greenArea'/><Typography variant='h6' className='ml-3'>Collected amount </Typography> 
             </div>
            </div>
            </div>
            
            <div className='midlespase'/> 

            <div >
              
              <Typography variant='h3' className='textbg' sx={{fontWeight: 600, color: 'text.secondary'}}> Needed amount </Typography>
              <Typography variant='h1' sx={{fontWeight: 300,}}> {amount}KG </Typography>
              <br />

              <Typography variant='h3' className='textbg'  sx={{fontWeight: 600, color: 'text.secondary'}}> Collected amount </Typography>
              <Typography variant='h1' sx={{fontWeight: 300,}}>  {allsup.reduce((a, b) => a + b, 0)}KG  </Typography>
              <br />

              <Typography variant='h3' className='textbg'  sx={{fontWeight: 600, color: 'text.secondary'}}>   Our buying Price  </Typography>
              <Typography variant='h2' sx={{fontWeight: 400,}}>   Rs {price}  </Typography>

         

                </div>
                </div>
                      

               
              
                   

            

                <br />
                

                <div className='getCocoform'>

                <Typography className='margin textbg' variant='h4' align='center' sx={{fontWeight: 600, color: 'text.secondary'}}> Update Details </Typography>
                <form onSubmit={updateCoco} className='text-center m-5 form-group' >

                
                <label>Needed Coconut Quantity</label>
                <input type="Number" className='form-control' required placeholder={amount+' KG'} /><br />

                <label>Coconut Buying Price</label>
                <input type="price" className='form-control' required placeholder={price }/><br /><br />
                <button type='submit'  className='btn btn-primary form-control formheadcol'>Update</button>

               
                </form>
                </div>  
                 
                
            </div>

          )


}
export default RequestCoco;
