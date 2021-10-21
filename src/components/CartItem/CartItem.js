import { Box } from '@mui/system';
import React from 'react';
import classes from './CartItem.module.css';

const CartItem = (props) => {
    const price = `$${props.price?.toFixed(2)}`;

    return (
        <li className={classes['cart-item']}>
            <Box >
                <Box
                    component="img"
                    src={props.img}
                    sx={{ width: '30%' }}
                ></Box>
                <h2>{props.name}</h2>


                <span className={classes.price}>{price}</span>
                <span className={classes.amount}>x {props.quantity}</span>
            </Box>
            <div className={classes.actions}>
                <button onClick={props.onRemove}>−</button>
                <button onClick={props.onAdd}>+</button>
            </div>
        </li>
    );
};

export default CartItem;
