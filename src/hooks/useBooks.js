import { useEffect, useState } from "react";

const useBooks = () => {
    const [books, setBooks] = useState([]);
    const [displayBooks, setDisplayBooks] = useState([]);


    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBooks(data);
                setDisplayBooks(data);
            }).catch((err) => {
                console.log(err);
            });
    }, []);

    return [
        books,
        displayBooks,
        setDisplayBooks
    ];
};

export default useBooks;