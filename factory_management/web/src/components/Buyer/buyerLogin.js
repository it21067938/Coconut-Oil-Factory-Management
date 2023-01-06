import React, { useState } from 'react'
import axios from 'axios';
import './buyer.css'


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
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


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



export default function Buyer_Login() {

    const [uName, setUname] = useState("");
    const [uPassword, setPassword] = useState("");


    function logusername(e) {
        console.log(e.target.value)
        setUname(e.target.value)
    }

    function logpass(e) {
        console.log(e.target.value)
        setPassword(e.target.value)
    }

    function submitdata(e) {
        e.preventDefault();

        const logdata = {
            username: uName,
            password: uPassword
        }
        console.log(logdata);

        axios.post("http://localhost:8889/buyer/login", logdata).then(res => {

            const token = res.data.acsessToken

            if (token) {

                localStorage.setItem('token', token)

                console.log(res.data.acsessToken)

                window.location.href = '/buyer_home';
            } else {
                alert("Pleace check your Credential")
            }
        })
    }



    return (

        <div style={{ background: "linear-gradient(to right, #ccff99 0%, #6699ff 100%)", height: "100%", marginTop:"-10px" }}>

            <Box
                justifyContent='center'

                sx={boxDefault}
            >

                <ThemeProvider theme={theme} >
                    <div>
                        <Grid container component="main" sx={{ height: '50vh', width: '120vh', align: 'Right' }}>
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
                                        <AccountCircleIcon fontSize='large' />
                                    </Avatar>
                                    <Typography component="h1" variant="h5">
                                        Buyer login
                                    </Typography>
                                    <Box component="form" noValidate onSubmit={submitdata} sx={{ mt: 1 }}>
                                        <TextField
                                            onChange={logusername}
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="number"
                                            type="text"
                                            label="User Name"
                                            name="uname"
                                            autoComplete="username"
                                            autoFocus
                                        />
                                        <TextField
                                            onChange={logpass}
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
                                            sx={{ mt: 3, mb: 2 }}
                                            style={{ backgroundColor: "#0000FF" }}
                                        >
                                            Sign In
                                        </Button>
                                        <Grid container>

                                            <Grid item>
                                                <Link style={{ marginLeft: "57px" }} href="/Buyer_Signup" variant="body2">
                                                    {"Don't have an account? Sign Up"}
                                                </Link>
                                            </Grid>
                                        </Grid>
                                        <Copyright sx={{ mt: 5 }} />
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </div>
                </ThemeProvider>

            </Box>

        </div >

    )
}


