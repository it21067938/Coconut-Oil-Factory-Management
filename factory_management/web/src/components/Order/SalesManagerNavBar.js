import * as React from 'react';
import { Link } from "react-router-dom";
import { AppBar, Grid, Toolbar, Tabs, Tab, Box, Button, useTheme, useMediaQuery } from "@mui/material";
import logo from '../../assect/images/logo.png'
import '../../components/Order/.css'



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
    <AppBar position="static" top="fixed" sx={{ backgroundColor: '#0D2938' }}>
      <Toolbar>
        {isMatch ?
          <>
            <h4>Jayasinghe Oil Meals</h4>
          </> : <Grid container>
            <Grid item xs={2}>
              <img class="logo" src={logo} alt=""></img>
            </Grid>
            <Grid item xs={8}>
              <Box sx={{ width: '100%' }}>
                <Tabs value={value} onChange={handleChange} textColor="#ffff" indicatorColor="secondary">
                  <Tab to="/sm_home" LinkComponent={Link} label="Sales Home" />
                  <Tab to="/pending_orders" LinkComponent={Link} label="Pending Orders" />
                  <Tab to="/accepted_orders" LinkComponent={Link} label="Accepted Orders" />

                </Tabs>
              </Box>
            </Grid>
            <Grid item xs={1} />
            <Grid item xs={1}>
              <Box display='flex'>
                <Button to="/products" LinkComponent={Link} sx={{ marginLeft: 1, background: 'rgba(180,58,58,1)' }} variant="contained">SignOut</Button>
              </Box>
            </Grid>
          </Grid>}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar