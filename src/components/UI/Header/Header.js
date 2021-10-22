import React, { Fragment, useContext } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { NavLink } from 'react-router-dom';

import classes from './Header.module.css';
import { AccountCircle } from '@mui/icons-material';
import useAuth from '../../../hooks/useAuth';
import Navbar from './Navbar';
import CartContext from '../../../store/Cart/CartContext';



export default function Header() {
    const { user, logOut } = useAuth();
    const cartCtx = useContext(CartContext);
    console.log(user);

    const totalItems = cartCtx.items.length;





    return (
        <Fragment>
            <Box sx={{ display: 'block', mb: 10 }}>
                <AppBar sx={{ py: 2, px: 3 }} position="fixed">
                    <Toolbar variant="dense">
                        <Typography variant="h6" color="inherit" component="h6" sx={{ flexGrow: 1 }}>
                            <NavLink
                                className={classes.Logo}
                                activeClassName={classes.activeRoute}
                                to="/home">
                                Book Worm
                            </NavLink>
                        </Typography>
                        <Navbar />
                        {user.email && <span style={{ color: 'white' }}>Hi {user.displayName} </span>}
                        {user.email ?
                            (<IconButton onClick={logOut} sx={{ mx: 1 }} edge="end" color="secondary" aria-label="account" >
                                <Typography>
                                    Logout
                                </Typography>
                                <AccountCircle sx={{ mr: 3 }} />
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
                                    <AccountCircle sx={{ mr: 3 }} />
                                </>
                            )}
                        <NavLink
                            className={classes.cart}
                            to="/cart">
                            <Badge badgeContent={totalItems} color="error">
                                <IconButton edge="end" color="inherit" aria-label="cart" >
                                    <ShoppingCartIcon />
                                </IconButton>
                            </Badge>
                        </NavLink>

                    </Toolbar>
                </AppBar>

            </Box>
        </Fragment >
    );
}
