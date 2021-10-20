import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import React from 'react';
import classes from './Footer.module.css';

export default function Footer() {
    return (
        <AppBar className={classes.footer} position="static" color="primary">
            <Container maxWidth="md">
                <Toolbar >
                    <Typography variant="body1" sx={{ mx: "auto" }} color="inherit">
                        © 2021 Akib All rights reserved
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
