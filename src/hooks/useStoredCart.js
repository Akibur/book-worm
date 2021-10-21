import { useState, useEffect } from 'react';
import { getStoredCart } from '../utils/localStorage';

const useStoredCart = books => {
    const [storedCart, setStoredCart] = useState([]);

    useEffect(() => {
        if (books.length) {
            const savedCart = getStoredCart(books);
            setStoredCart(savedCart);
        }

    }, [books]);

    return [storedCart, setStoredCart];
};

export default useStoredCart;