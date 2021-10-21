import { Alert, Button, Container, TextField } from '@mui/material';
import React, { useRef, useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import classes from './Login.module.css';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const emailRef = useRef();
    const passwordRef = useRef();
    const { emailLogin } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError("");
            setLoading(true);
            await emailLogin(emailRef.current.value, passwordRef.current.value);
            history.push(redirect_uri);
        } catch {
            setError("Failed to log in");
        }
        setLoading(false);
    }



    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(() => {
                console.log(redirect_uri);
                history.push(redirect_uri);
            }).catch((err) => {
                console.log(err);
            });
    };

    return (
        <Container sx={{ width: '30%', textAlign: 'center', my: 20 }}>
            <div className={classes.loginForm}  >
                <h2>Login</h2>
                {error && <Alert severity="error">{error}</Alert>}
                <TextField fullWidth inputRef={emailRef} sx={{ my: 1 }} id="outlined-basic" label="Email" variant="outlined" />
                <br />
                <TextField fullWidth inputRef={passwordRef} type="password" sx={{ my: 1 }} id="outlined-basic" label="Password" variant="outlined" />
                <br />
                <Button fullWidth disabled={loading} onClick={handleSubmit} sx={{ my: 1 }} variant="contained">Sign In</Button>
                <p>Dont have an account? <Link to="/register">Create Account</Link></p>
                <Button
                    onClick={handleGoogleLogin} className={classes.textField} variant="contained">Sign In using Google</Button>
            </div>
        </Container >
    );
};

export default Login;