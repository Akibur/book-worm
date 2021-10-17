import React, { Fragment } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';


export default function Header() {
    return (
        <Fragment>
            <Box sx={{ flexGrow: 1, display: 'block' }}>
                <AppBar sx={{ py: 2, px: 5 }} position="fixed">
                    <Toolbar variant="dense">
                        <Typography variant="h6" color="inherit" component="div" sx={{ flexGrow: 1 }}>
                            Book Worm
                        </Typography>
                        <Badge badgeContent={4} color="error">
                            <IconButton edge="end" color="inherit" aria-label="cart" >
                                <ShoppingCartIcon />
                            </IconButton>
                        </Badge>
                    </Toolbar>
                </AppBar>

            </Box>
        </Fragment>
    );
}
