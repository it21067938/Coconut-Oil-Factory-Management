import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./FinanceNavbar";
import { useParams } from "react-router-dom";


function UpdateIncome() {
  const [Date, setDate] = useState("");
  const [Description, setDescription] = useState("");
  const [Amount, setAmount] = useState("");

  const { id } = useParams();

  console.log(id);



  const getIncome = () => {
    axios
      .get("http://localhost:8889/ManageIncome/getIncome/" + id)
      .then((res) => {

        console.log(res.data.Date);
        console.log(res.data.Description);
        console.log(res.data.Amount);
        setDate(res.data.Date);
        setDescription(res.data.Description);
        setAmount(res.data.Amount);


      })
      .catch((err) => {
        alert(err.message);
      });
  };

  useEffect(() => {
    getIncome();
  }, []);

  //page refresh function

  function refreshPage() {
    window.location.reload(false);
  }



  return (




    <div>
      <Navbar />
      <div className="order_bground" style={{ zIndex: 98, height: "100%" }} >
        <div className="container">
          <div className='border' style={{height:"500px"}}>
            <div className='col-md-8 mt-4 mx-auto'>
              <h2 className='h4 mb-3 font-weight-normal' style={{color:"white"}}><center>Update Income</center></h2>
              <form className='needs-validation'
                onSubmit={(e) => {
                  e.preventDefault();

                  const newIncome = {
                    Date,
                    Description,
                    Amount
                  };
                  console.log("income updated", newIncome);
                  axios
                    .put("http://localhost:8889/ManageIncome/update/" + id, newIncome)
                    .then(() => {
                      alert("Income updated", refreshPage());
                    })
                    .catch((err) => {
                      alert(err);
                    });
                }}
              >


                <div className='form-group' style={{ marginBottom: '15px' }}>
                  <label style={{ marginBottom: '5px' }} className="lable">Date</label>
                  <input value={Date} type="date" className="form-control" name='id' placeholder='Enter Date'
                    onChange={(event) => {
                      setDate(event.target.value);

                    }} />
                </div>

                <div className='form-group' style={{ marginBottom: '15px' }}>
                  <label style={{ marginBottom: '5px' }} className="lable">Description</label>
                  <input value={Description} type="text" className="form-control" name='name' placeholder='Enter description'
                    onChange={(event) => {
                      setDescription(event.target.value);

                    }} />
                </div>

                <div className='form-group' style={{ marginBottom: '15px' }}>
                  <label style={{ marginBottom: '5px' }} className="lable">Amount </label>
                  <input value={Amount} type="number" className="form-control" name='amount' placeholder='Enter amount'
                    onChange={(event) => {
                      setAmount(event.target.value);

                    }} />
                </div>





                <button className='btn btn-success' type='submit' style={{ marginTop: '15px' ,marginLeft:"20px"}}>Update</button>

                <a className='btn btn-danger' href="/disI" style={{ marginTop: '15px',marginLeft:"20px" }} > Back</a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateIncome;
