/* eslint-disable no-unused-vars */
import { Alert, Avatar, Button, Checkbox, Container, FormControlLabel, Grid, TextField, Typography } from '@mui/material';
import { Box, } from '@mui/system';
import React, { useContext, useRef, useState } from 'react';
import CartContext from '../../store/Cart/CartContext';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import useAuth from '../../hooks/useAuth';
import { useHistory } from 'react-router';
import useOrders from '../../hooks/useOrders';


export default function Checkout() {

    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const { user } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const nameRef = useRef();
    const shippingRef = useRef();
    const phoneRef = useRef();
    const termsRef = useRef();

    const [submitOrder] = useOrders();


    let total = 0;
    cartCtx.items.forEach((item) => {
        total += item.price * item.quantity;
    });
    const order = {
        items: cartCtx.items,
        total: total
    };


    const handleCheckout = async (event) => {
        event.preventDefault();
        if (nameRef.current.value == "") {
            return setError("Name is required");
        }
        if (shippingRef.current.value == "") {
            return setError("Shipping address is required");
        }
        if (phoneRef.current.value == "") {
            return setError("Phone number is required");
        }
        if (termsRef.current.checked == false) {
            return setError("You must accept the terms");
        }

        try {
            setError('');
            setLoading(true);
            await submitOrder(user.uid, user.email, nameRef.current.value, shippingRef.current.value, phoneRef.current.value, order).then(res => {
                setLoading(false);
                localStorage.removeItem("shopping_cart");
                history.push('./orderPlaced');
                cartCtx.clearCart();
                console.log(res);
            });

        } catch (err) {
            setError(err);
            setLoading(false);
        }

        // eslint-disable-next-line no-console

    };


    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 25,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <ShoppingCartIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Checkout
                </Typography>
                {error && <Alert severity="error">{error}</Alert>
                }
                <Box sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} >
                            <TextField
                                inputRef={nameRef}
                                autoComplete="given-name"
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="Name"
                                autoFocus
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                inputRef={shippingRef}

                                required
                                fullWidth
                                id="shipping"
                                label="Shipping Address"
                                name="shipping"
                                autoComplete="shipping"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                inputRef={phoneRef}
                                required
                                fullWidth
                                name="phone"
                                label="phone"
                                type="phone"
                                id="phone"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                required
                                control={<Checkbox inputRef={termsRef} color="primary" />}
                                label="I accept the terms and conditions."
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={handleCheckout}
                    >
                        Place Order
                    </Button>
                </Box>
            </Box>
        </Container>

    );
}
