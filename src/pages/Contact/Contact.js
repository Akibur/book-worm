import React from 'react';
import { Button, Container, TextField } from '@mui/material';
import classes from './Contact.module.css';


export default function Contact() {
    return (
        <Container sx={{ width: '40%', mx: 'auto', textAlign: 'center', my: 25 }}>
            <div className={classes.form}  >
                <h2>Contact Us</h2>
                <TextField sx={{ width: 1, my: 1 }} id="outlined-basic" label="Name" variant="outlined" />
                <br />
                <TextField sx={{ width: 1, my: 1 }} id="outlined-basic" label="Email" variant="outlined" />
                <br />
                <TextField
                    sx={{ width: 1, my: 1 }}
                    id="outlined-multiline-static"
                    label="Message"
                    multiline
                    rows={4}
                />
                <br />
                <Button sx={{ width: 1, my: 1 }} variant="contained">Send</Button>
            </div>
        </Container >
    );
}
