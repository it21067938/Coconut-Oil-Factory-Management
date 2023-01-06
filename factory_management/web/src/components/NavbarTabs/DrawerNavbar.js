import React ,  {useState} from 'react'
import {Link} from "react-router-dom";
import {Drawer, Tab, IconButton} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const DrawerNavbar = () => {
    const[open, setOpen] = useState(false)
    
    return (
        <>
            <Drawer PaperProps={{sx:{backgroundColor: 'rgba(252,176,69,1)'}}} open={open} onClose={() => setOpen(false)}>
                
                <Tab to="/overview" LinkComponent={Link} label="Overview" />
                <Tab to="/products" LinkComponent={Link} label="Products" />
                <Tab to="/services" LinkComponent={Link} label="Services" />
                <Tab to="/contactUs" LinkComponent={Link} label="Contact Us" />
                
            </Drawer>
    
            <IconButton sx={{marginLeft: 'auto', color: 'white'}} onClick={()=>setOpen(!open)}>
                <MenuIcon />
            </IconButton>
            

        </>
    )
}

export default DrawerNavbar