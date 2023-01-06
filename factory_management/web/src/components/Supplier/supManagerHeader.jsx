import React from 'react';
import {Link} from 'react-router-dom'

import {AppBar, Grid, Toolbar, Tabs, Tab, Box, Button, useTheme, useMediaQuery} from "@mui/material";

import logo from '../../assect/images/logo.png'




function ManagerHeader(){

  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));//use decresing  window size
  console.log(isMatch);//use decresing  window size

  const [value, setValue] = React.useState('one');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

          return(
           <div>
            {/* <nav className="navbar navbar-expand-lg  " style={{backgroundColor:"#004166"}}>
            <div className="container-fluid d-flex">
              <a className="navbar-brand" href="#" style={{color:"white"}} >JOM Coco Oil</a>
              
              <div className="float-right " id="navbarNav" >
                <ul className="navbar-nav">
                  
                <li className="nav-item">
                    <a className="nav-link text-light" href="/reqcoco">Get Coco</a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link text-light" href="/allsupply">All supplies</a>
                  </li>
                  
                
                  <li className="nav-item">
                    <a className="nav-link text-light " href="/allsuppliers">Suplier details</a>
                  </li>
                  
                  
                  <li className="nav-item">
                    <a className="nav-link text-muted" href="/suppliersignupandlogin">Logout</a>
                  </li>
        
                </ul>
              </div>
            </div>
          </nav> */}
          
          <div>

          <AppBar  position="static" top="fixed" sx={{backgroundColor: '#0D2938'}}>
        <Toolbar>
          {isMatch ? 
          <> 
            <h4>Jayasinghe Oil Meals</h4>
          
          </> : <Grid container>
            <Grid item xs={2}>
              <img class="logo" src={logo} alt=""></img>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ width: '100%' }}>
                <Tabs value={value} onChange={handleChange} textColor="#ffff" indicatorColor="secondary">
                  <Tab to="/reqcoco" LinkComponent={Link} label="Get Coco" />
                  <Tab to="/allsupply" LinkComponent={Link} label="Supply details" />
                  <Tab to="/allsuppliers" LinkComponent={Link} label="suppliers details" />
                
                </Tabs>
              </Box>
            </Grid>
            <Grid item xs={1} />
            <Grid item xs={3}>
              <Box display='flex'>
                  <Button to="/products" LinkComponent={Link} sx={{marginLeft:"auto", background: 'rgba(180,58,58,1)'}} variant="contained">Log out</Button>
                 
              </Box>
            </Grid>
          </Grid>}
        </Toolbar>
      </AppBar>


      </div>
      </div>


          )


}
export default ManagerHeader;
