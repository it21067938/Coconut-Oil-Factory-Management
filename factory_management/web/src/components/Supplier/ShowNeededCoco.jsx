import React,{useState,useEffect} from "react";
import axios from "axios";
import SupHeader from './Header'

function ShowNeededCoco(){

          const [needcoco,setNeedCoco]=useState([]);

          useEffect(()=>{
                     function getCount(){
                              axios.get("http://localhost:8889/supplier",{
                                headers: {
                                  'Authorization': "bearer "+localStorage.getItem('token')
                                }
                              }).then((res)=>{
                                       setNeedCoco(res.data[0]);
                                       console.log(res.data[0])
                              })
                             
                    } getCount();
                    

          },[])

          const needCoco = needcoco.neededQuantity;
          const priceof = needcoco.buyingPrice;

        
         


          


return( 
<div>
<SupHeader/>
<div className="textCenter ">


                    <h1 className="hometext1">Coconut</h1>
                    <h1 className="hometext2">{needCoco} KG</h1>
                    <h1 className="hometext1">needed for us</h1>
                    <h3 className="hometext3">Buying Rate</h3>
                    <h2 className="hometext4">RS {priceof}/KG</h2>
                    

          </div>
</div>
)

}

export default ShowNeededCoco;