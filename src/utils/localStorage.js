const getDb = () => localStorage.getItem('shopping_cart');

const updateDb = cart => {
    localStorage.setItem('shopping_cart', JSON.stringify(cart));
};

const addToDb = (id) => {
    const exists = getDb();
    let shopping_cart = {};

    if (!exists) {
        shopping_cart[id] = 1;
    } else {
        shopping_cart = JSON.parse(exists);
        if (shopping_cart[id]) {
            const newCount = shopping_cart[id] + 1;
            shopping_cart[id] = newCount;
        }
        else {
            shopping_cart[id] = 1;
        }
    }
    updateDb(shopping_cart);
};


const removeFromDb = id => {
    const exists = getDb();
    if (!exists) {
        return;
    }
    else {
        const shopping_cart = JSON.parse(exists);
        delete shopping_cart[id];
        updateDb(shopping_cart);
    }
};

const getStoredCart = (books) => {
    const exists = getDb();

    if (exists) {
        let savedCart = JSON.parse(exists);
        const localCart = [];
        for (const key in savedCart) {
            const addedBook = books.find(book => book.id == key);
            console.log(addedBook);
            if (addedBook) {
                // set quantity
                const quantity = savedCart[key];
                addedBook.quantity = quantity;
                localCart.push(addedBook);
            }
        }
        return localCart;

    } else {
        return {};
    }


};

const clearTheCart = () => {
    localStorage.removeItem('shopping_cart');
};

export { addToDb, removeFromDb, clearTheCart, getStoredCart };