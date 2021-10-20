import React, { useState } from "react";
import {
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,

} from "@mui/material";



import { Link } from "react-router-dom";

import MenuIcon from '@mui/icons-material/Menu';



function DrawerComponent() {
    const [openDrawer, setOpenDrawer] = useState(false);
    return (
        <>
            <Drawer
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <List>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/" sx={{
                                textDecoration: "none",
                                color: "primary",
                                fontSize: "20px",
                            }}>Home</Link>
                        </ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/about" sx={{
                                textDecoration: "none",
                                color: "primary",
                                fontSize: "20px",
                            }}>About</Link>
                        </ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/contact"  >Contact</Link>
                        </ListItemText>
                    </ListItem>
                    <Divider />


                </List>
            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)} sx={{
                color: "white"
            }}>
                <MenuIcon />
            </IconButton>
        </>
    );
}
export default DrawerComponent;