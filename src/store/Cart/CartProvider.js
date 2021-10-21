import { useReducer } from 'react';
import React from 'react';

import CartContext from './CartContext';

//Initial state of the cart
const initialCartState = {
    items: [],
    totalAmount: 0
};

//Cart reducer
const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity + 1,
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat({ ...action.item, quantity: 1 });
        }
        console.log(state);
        console.log(action.item.price);
        const updatedTotalAmount = state.totalAmount + action.item.price;
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }

    if (action.type === 'REMOVE') {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );

        let updatedItems;

        if (action.item.quantity == 1) {
            updatedItems = state.items.filter(item => item.id !== action.item.id);

        } else {
            const updatedItem = { ...action.item, quantity: action.item.quantity - 1 };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        const updatedTotalAmount = state.totalAmount - action.item.price;

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }
    return initialCartState;
};


//Cart Provider
const CartProvider = (props) => {

    const [cartState, dispatChartAction] = useReducer(cartReducer, initialCartState);

    const addToCartHandler = (item) => {
        dispatChartAction({ type: "ADD", item: item });
    };
    const removeFromCartHandler = (item) => {
        dispatChartAction({ type: "REMOVE", item: item });
    };
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addToCartHandler,
        removeItem: removeFromCartHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;