import React, { Fragment } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import Badge from '@mui/material/Badge';
import { NavLink } from 'react-router-dom';

import classes from './Header.module.css';
import { AccountCircle } from '@mui/icons-material';
import useAuth from '../../../hooks/useAuth';
import Navbar from './Navbar';



export default function Header() {
    const { user, logOut } = useAuth();

    return (
        <Fragment>
            <Box sx={{ flexGrow: 1, display: 'block', mb: 10 }}>
                <AppBar sx={{ py: 2, px: 3 }} position="fixed">
                    <Toolbar variant="dense">
                        <Typography variant="h6" color="inherit" component="h6" sx={{ flexGrow: 1 }}>
                            <NavLink
                                className={classes.Logo}
                                activeClassName={classes.activeRoute}
                                to="/home">
                                Health Hub
                            </NavLink>
                        </Typography>
                        <Navbar />
                        {user.email && <span style={{ color: 'white' }}>Hello {user.displayName} </span>}
                        {user.email ?
                            (<IconButton onClick={logOut} sx={{ mx: 1 }} edge="end" color="secondary" aria-label="account" >
                                <Typography>
                                    Logout
                                </Typography>
                                <AccountCircle />
                            </IconButton>)
                            :
                            (
                                <>
                                    <Typography >
                                        <NavLink
                                            className={classes.Nav_link}
                                            to="/login">
                                            Login
                                        </NavLink>
                                    </Typography>
                                    <AccountCircle />
                                </>


                            )}
                        {/* <Badge badgeContent={4} color="error">
                            <IconButton edge="end" color="inherit" aria-label="cart" >
                                <ShoppingCartIcon />
                            </IconButton>
                        </Badge> */}
                    </Toolbar>
                </AppBar>

            </Box>
        </Fragment >
    );
}
