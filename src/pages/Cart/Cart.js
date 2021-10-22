import { Box } from '@mui/system';
import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import CartItem from '../../components/CartItem/CartItem';
import CartContext from '../../store/Cart/CartContext';
import classes from './Cart.module.css';


export const Cart = () => {
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItemsInCart = cartCtx.items.length > 0;
    const history = useHistory();

    const cartItemRemoveHandler = (item) => {
        cartCtx.removeItem(item);
    };

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 });
    };

    const checkoutHandler = () => {
        history.push('/checkout');
    };

    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    price={item.price}
                    img={item.image}
                    onRemove={cartItemRemoveHandler.bind(null, item)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            ))}
        </ul>
    );

    return (
        <Box
            sx={{ textAlign: 'center', mx: 'auto', maxWidth: '80%', my: 20 }}
        >
            {hasItemsInCart ? cartItems :
                <h1>Cart is empty</h1>}
            {hasItemsInCart && (<>
                <div className={classes.total}>
                    <span>Total Amount</span>
                    <span>{totalAmount}</span>
                </div>
                <div className={classes.actions}>
                    <button onClick={checkoutHandler} className={classes.button}>Checkout</button>
                </div>
            </>)}

        </Box>
    );
};
