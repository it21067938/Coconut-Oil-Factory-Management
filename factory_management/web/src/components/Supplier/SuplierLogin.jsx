import React, { useState } from 'react';
import axios from "axios";
//import { useNavigate } from 'react-router-dom';
import './loginAndReg.css'

//------------------------

//import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { width } from '@mui/system';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import { red } from '@mui/material/colors';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

const boxDefault = {
  height: 800,
  // border: '1px solid black',
  padding: 2,
  minWidth: 600,
  m: 1,
  display: 'flex'
}

//-------------------------

function SupplierLogin() {

  //-----------------------

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };

  //-----------------------

  const [Nic, setCocoCount] = useState("");
  const [password, setCocoLocation] = useState("");
  //const navigate = useNavigate()

  function nicFun(event) {
    setCocoCount(event.target.value);
    console.log(event.target.value);
  }

  function passFun(event) {
    setCocoLocation(event.target.value);
    console.log(event.target.value);
  }

  function logindata(event) {

    event.preventDefault();

    const suplogin = {
      Nic,
      password
    }

    console.log(suplogin);

    axios.post("http://localhost:8889/supplier/login", suplogin).then(res => {
      const token = res.data.acsessToken
      if (token) {
        localStorage.setItem('token', token)  /////////////////////////////////////
        console.log(res.data.acsessToken)
        // navigate('/')
        window.location.href = '/home';
      } else {
        alert("Pleace check your Credential")
      }


    });


  }






  return (

    <div>
      {/* <div className='formwidth'>
          <div className='container '>
          <h1 className='padMar hometext5'>Supplier login</h1>
          <form onSubmit={logindata}>
                    <div className="form-group margins">
                              <label for="coconutCount">Enter your Nic Number</label>
                              <input onChange={nicFun} type="number" className="margins form-control" id="spNIC" placeholder="Enter your Nic Number" />

                    </div>
                              <div className="form-group">
                              <label for="location">Enter Password</label>
                              <input onChange={passFun} type="password" className="margins form-control" id="spPassword" placeholder="Enter Password" />
                    </div>
                    
                              <button type="submit" className="btnWidth btn btn-primary btn-lg btn-block" >Login</button>
                              
          </form>

          </div>

          </div> */}



      {/* //------------------------- */}
      <br /><br /><br />
      <Box
        justifyContent='center'
        //alignItems='center'
        sx={boxDefault}
      >

<ThemeProvider theme={theme} >
<div >
      <Grid container component="main"  sx={{ height: '50vh', width:'120vh', align:'Right'}}>
        <CssBaseline />
        <Grid
        
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://ae01.alicdn.com/kf/Sdc52fadec727429a8a44c7a109e6c32e0/Coconut-Oil-Massage-Oil-Body-Face-Moisturizer-Nourish-Essential-Oil-Cosmetics-Facial-Skin-Care-Product-Massage.jpg_Q90.jpg_.webp)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: '110%',
            backgroundPosition: '50%',
            
          }}
        />
<<<<<<< HEAD
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 2, bgcolor: '#1a237e' }}>
              <AgricultureIcon fontSize='large'/>
            </Avatar>
            <Typography component="h1" variant="h5">
            Supplier login
            </Typography>
            <Box component="form" noValidate onSubmit={logindata} sx={{ mt: 1 }}>
              <TextField
              onChange={nicFun} 
                margin="normal"
                required
                fullWidth
                id="number"
                onInput = {(e) =>{
                  e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,12)
              }}
                type="number"
                label="NIC Number"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
              onChange={passFun}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                backgroundColor='primary'
                color='secondary'
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                
                <Grid item>
                  <Link href="/supplierregistaration" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
                
=======
       
              <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Box
                  sx={{
                    my: 8,
                    mx: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Avatar sx={{ m: 2, bgcolor: '#1a237e' }}>
                    <AgricultureIcon fontSize='large' />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    Supplier login
                  </Typography>
                  <Box component="form" noValidate onSubmit={logindata} sx={{ mt: 1 }}>
                    <TextField
                      onChange={nicFun}
                      margin="normal"
                      required
                      fullWidth
                      id="number"
                      onInput={(e) => {
                        e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 12)
                      }}
                      type="number"
                      label="NIC Number"
                      name="email"
                      autoComplete="email"
                      autoFocus
                    />
                    <TextField
                      onChange={passFun}
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                    />
                    <FormControlLabel
                      control={<Checkbox value="remember" color="primary" />}
                      label="Remember me"
                    />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      backgroundColor='primary'
                      color='secondary'
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Sign In
                    </Button>
                    <Grid container>
                      
                      <Grid item>
                        <Link href="/supplierregistaration" variant="body2">
                          {"Don't have an account? Sign Up"}
                        </Link>
                      </Grid>
                    </Grid>
                    <Copyright sx={{ mt: 5 }} />
                  </Box>
                </Box>
>>>>>>> 88365df6e8d8a5431a3a2ef7803eb50626e6afe5
              </Grid>
              
          </Grid>
          </div>
        </ThemeProvider>

      </Box>

      {/* --------------------------- */}



    </div>
  )



}
export default SupplierLogin;




