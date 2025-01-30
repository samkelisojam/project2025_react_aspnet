/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button } from "@mui/material";
import { Brightness4, Brightness7, Home, Store, Info } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function NavBar({ toggleTheme, isDarkMode }) {
    return (
        <AppBar position="static" style={{ backgroundColor: isDarkMode ? '#333' : '#3f51b5' }}>
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1, fontWeight: 'bold' }}>
             VPE APP
                </Typography>
                <Button
                    component={Link}
                    to="/"
                    startIcon={<Home />}
                    style={{ color: 'inherit', textTransform: 'none', marginRight: 16 }}
                >
                    Home
                </Button>
                <Button
                    component={Link}
                    to="/catalog"
                    startIcon={<Store />}
                    style={{ color: 'inherit', textTransform: 'none', marginRight: 16 }}
                >
                    Catalog
                </Button>
                <Button
                    component={Link}
                    to="/about"
                    startIcon={<Info />}
                    style={{ color: 'inherit', textTransform: 'none', marginRight: 16 }}
                >
                    About
                </Button>
                <IconButton color="inherit" onClick={toggleTheme}>
                    {isDarkMode ? <Brightness7 /> : <Brightness4 />}
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;