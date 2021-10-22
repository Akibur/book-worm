// import { useState } from "react";

const useOrders = () => {
    // const [orders, setOrders] = useState([]);

    const submitOrder = async (uid, email, name, address, phone, order) => {
        const data = {
            user: uid,
            email: email,
            name: name,
            address: address,
            phone: phone,
            order: order
        };
        const response = await fetch('https://book-worm-8d826-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json', {
            method: 'POST',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.json();
    };

    // const getOrders = async (uid) => {

    //     const response = await fetch('.https://book-worm-8d826-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json').then((res) => {
    //         res.body
    //     })

    //     response.json();
    // };




    return [
        // getOrders,
        submitOrder,
    ];
};

export default useOrders;