import React from 'react';

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: () => { },
    removeItem: () => { },
    cartInit: () => { },
});

export default CartContext;