import { CssBaseline, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import React, { Fragment } from "react";
// import {
//     AppBar,
//     Toolbar,
//     CssBaseline,
//     Typography,
//     makeStyles,
//     useTheme,
//     useMediaQuery,
// } from "@material-ui/material";

import { NavLink } from "react-router-dom";
import DrawerComponent from "./Drawer";
import classes from './Navbar.module.css';



function Navbar() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Fragment>
            <CssBaseline />
            <Toolbar >

                {isMobile ? (
                    <DrawerComponent />
                ) : (
                    <div sx={{
                        marginLeft: 3,
                        display: "flex",

                    }}>
                        <NavLink to="/" className={classes.Nav_link}>
                            Home
                        </NavLink>
                        <NavLink to="/about" className={classes.Nav_link}>
                            About
                        </NavLink>
                        <NavLink to="/contact" className={classes.Nav_link}>
                            Contact
                        </NavLink>

                    </div>
                )}
            </Toolbar>
        </Fragment>
    );
}
export default Navbar;