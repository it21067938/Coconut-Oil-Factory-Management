import * as React from 'react';
import {Link} from "react-router-dom";
import {AppBar, Grid, Toolbar, Tabs, Tab, Box, Button, useTheme, useMediaQuery} from "@mui/material";
import DrawerNavbar from './DrawerNavbar';
import logo from '../../assect/images/logo.png'
import './.css'



const Navbar = () => {
  const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));//use decresing  window size
    console.log(isMatch);//use decresing  window size

    const [value, setValue] = React.useState('one');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    };
    
    return (
      <AppBar  position="static" top="fixed" sx={{backgroundColor: '#0D2938'}}>
        <Toolbar>
          {isMatch ? 
          <> 
            <h4>Jayasinghe Oil Meals</h4>
            <DrawerNavbar />
          </> : <Grid container>
            <Grid item xs={2}>
              <img class="logo" src={logo} alt=""></img>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ width: '100%' }}>
                <Tabs value={value} onChange={handleChange} textColor="#ffff" indicatorColor="secondary">
                  <Tab to="/overview" LinkComponent={Link} label="Overview" />
                  <Tab to="/products" LinkComponent={Link} label="Products" />
                  <Tab to="/services" LinkComponent={Link} label="Services" />
                  <Tab to="/contactUs" LinkComponent={Link} label="Contact Us" />
                </Tabs>
              </Box>
            </Grid>
            <Grid item xs={1} />
            <Grid item xs={3}>
              <Box display='flex'>
                  <Button to="/login" LinkComponent={Link} sx={{marginLeft:"auto", background: 'rgba(180,58,58,1)'}} variant="contained">Login</Button>
                  <Button to="/signup" LinkComponent={Link} sx={{marginLeft: 1 , background: 'rgba(180,58,58,1)'}} variant="contained">Signup</Button>
              </Box>
            </Grid>
          </Grid>}
        </Toolbar>
      </AppBar>
    );
};

export default Navbar

