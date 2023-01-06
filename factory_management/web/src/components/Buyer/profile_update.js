import React, { useState, useEffect } from "react";
import Navbar from "./BuyerNavbar"
import { Link } from 'react-router-dom'
import CheckIcon from '@mui/icons-material/Check';
import axios from 'axios';
import Swal from 'sweetalert2'

export default function Profile_update() {

    const [name, setName] = useState("");
    const [nic, setNic] = useState("");
    const [email, setEmail] = useState("");
    const [contactNo, setContact] = useState("");
    const [address, setAddress] = useState("");
    const [username, setUsername] = useState("");

    function BuyerProfile() {
        axios.get("http://localhost:8889/buyer/account",
            {
                headers: {
                    'Authorization': "bearer " + localStorage.getItem('token')
                }
            }).then((res) => {
                setName(res.data.buyer.name);
                setNic(res.data.buyer.nic);
                setEmail(res.data.buyer.email);
                setContact(res.data.buyer.contactNo);
                setAddress(res.data.buyer.address);
                setUsername(res.data.buyer.username);

            }).catch((err) => {
                alert(err)
            })
    }

    useEffect(() => {
        BuyerProfile();
    }, []);


    function submitdata() {
        const newData = {
            name,
            nic,
            email,
            contactNo,
            address,
            username
        }
        console.log(newData);

        axios.patch("http://localhost:8889/buyer/update", newData,
            {
                headers: {
                    'Authorization': "bearer " + localStorage.getItem('token')
                }
            }
        ).then((res) => {

            Swal.fire({
                icon: 'success',
                title: res.data,

            }).then(() => {
                window.location.href = '/profile';
            })

        }).catch((err) => {
            alert(err);
        })

    }

    return (
        <div> <Navbar />

            <div className="DashBG" style={{ zIndex: 98 }}>

                <div className='border' style={{ backgroundColor: '#fffc' }}>
                    <h1 className='h3 mb-3 font-weight-normal'><center><u>Update Your Profile</u></center></h1>
                    <form >

                        <div class="form-group" className='login_form'>
                            <label for="exampleInputEmail1">Name :-</label>
                            <input type="text" onChange={e => setName(e.target.value)} value={name} class="form-control" />
                        </div>

                        <div class="form-group" className='login_form'>
                            <label for="exampleInputEmail1">Nic :-</label>
                            <input type="number" onChange={e => setNic(e.target.value)} value={nic} class="form-control" />
                        </div>

                        <div class="form-group" className='login_form'>
                            <label for="exampleInputEmail1">Email :-</label>
                            <input type="email" onChange={e => setEmail(e.target.value)} value={email} class="form-control" />
                        </div>

                        <div class="form-group" className='login_form'>
                            <label for="exampleInputEmail1">Contact No :-</label>
                            <input type="number" onChange={e => setContact(e.target.value)} value={contactNo} class="form-control" />
                        </div>

                        <div class="form-group" className='login_form'>
                            <label for="exampleInputEmail1">Address :-</label>
                            <input type="text" onChange={e => setAddress(e.target.value)} value={address} class="form-control" />
                        </div>

                        <div class="form-group" className='login_form'>
                            <label for="exampleInputEmail1">User Name :-</label>
                            <input type="text" onChange={e => setUsername(e.target.value)} value={username} class="form-control" />
                        </div>

                        <button onClick={submitdata} type="submit" class="btn btn-success"><CheckIcon /> Confirm</button>
                        <Link to={'/buyer_home'} ><button type="button" class="mx-4 my-4 btn btn-danger">Cancel </button></Link>

                    </form>
                </div>
            </div>
        </div>
    )
}
