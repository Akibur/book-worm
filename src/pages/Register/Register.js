import { Alert, Button, Container, TextField } from '@mui/material';
import React, { useRef, useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import useAuth from '../../hooks/useAuth';

import classes from './Register.module.css';


export default function Register() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const { emailsignup } = useAuth();


    async function handleSubmit(e) {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match");
        }

        try {
            setError("");
            setLoading(true);
            await emailsignup(emailRef.current.value, passwordRef.current.value);
            history.push("/");
        } catch (e) {
            console.log(e);
            setError("Failed to create an account.Check if email is valid or password is atleast 6 charecters long");
        }

        setLoading(false);
    }

    return (
        <Container sx={{ width: '30%', textAlign: 'center', my: 20 }}>
            <div className={classes.form}  >
                <h2>Register</h2>
                {error && <Alert severity="error">{error}</Alert>
                }
                <TextField fullWidth inputRef={emailRef} sx={{}} id="outlined-basic" label="Email" variant="outlined" />
                <br />
                <TextField fullWidth inputRef={passwordRef} type="password" sx={{}} id="outlined-basic" label="Password" variant="outlined" />
                <br />
                <TextField fullWidth inputRef={passwordConfirmRef} type="password" sx={{}} id="outlined-basic" label="Re-Enter Password" variant="outlined" />
                <br />
                <Button fullWidth disabled={loading} onClick={handleSubmit} sx={{}} variant="contained">Register</Button>
                <p>Already have an account? <Link to="/login">Login</Link></p>


                {/* <Button
                        onClick={handleGoogleLogin} className={classes.textField} variant="contained">Sign In using Google</Button> */}

            </div>
        </Container >
    );
}
