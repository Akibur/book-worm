/* eslint-disable no-unused-vars */
import { useEffect, useReducer } from 'react';
import React from 'react';
import { addToDb, removeFromDb } from '../../utils/localStorage';


import CartContext from './CartContext';
import useStoredCart from '../../hooks/useStoredCart';
import useBooks from '../../hooks/useBooks';
//Initial state of the cart
let initialCartState = {
    items: [],
    totalAmount: 0
};

//Cart reducer
const cartReducer = (state, action) => {
    if (action.type === 'INIT') {
        console.log('INNIT Action called');
        let total = 0;

        action.items.forEach((p) => {
            total = total + (p.quantity * p.price);
        });

        return {
            items: action.items,
            totalAmount: total,
        };

    }
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
        const updatedTotalAmount = state.totalAmount + action.item.price;
        addToDb(action.item.id);

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
        removeFromDb(action.item.id);
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }


    return initialCartState;
};


//Cart Provider
const CartProvider = (props) => {

    //Get stored cart from Local storage
    const [books,
        displayBooks,
        setDisplayBooks] = useBooks();
    const [storedCart, setStoredCart] = useStoredCart(books);




    const [cartState, dispatChartAction] = useReducer(cartReducer, initialCartState);

    //init stored Cart 
    useEffect(() => {
        dispatChartAction({ type: "INIT", items: storedCart });
    }, [storedCart]);



    const addToCartHandler = (item) => {
        dispatChartAction({ type: "ADD", item: item });
    };
    const removeFromCartHandler = (item) => {
        dispatChartAction({ type: "REMOVE", item: item });
    };

    const cartInitHandler = (items) => {
        dispatChartAction({ type: "INIT", items: items });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addToCartHandler,
        removeItem: removeFromCartHandler,
        cartInit: cartInitHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;