/* eslint-disable no-unused-vars */
import { Container, Grid, TextField } from '@mui/material';
import React, { Fragment, useEffect } from 'react';
import useBooks from '../../hooks/useBooks';
import CartContext from '../../store/Cart/CartContext';
import { getStoredCart } from '../../utils/localStorage';
import Book from './Book/Book';

export default function Books() {
    const [books,
        displayBooks,
        setDisplayBooks] = useBooks();









    const handleSearch = (e) => {
        const searchText = e.target.value;
        const matchedProducts = books.filter(book => book.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayBooks(matchedProducts);

    };


    return (
        <Fragment>
            <Container sx={{ textAlign: "center" }} >
                <TextField
                    onChange={(e) => handleSearch(e)}
                    sx={{
                        my: 3,
                    }}
                    fullWidth label="Search"
                    id="fullWidth" />
                <h1>Top Books</h1>
                <Grid
                    justifyContent="center"
                    alignItems="center"
                    container
                    spacing={5}
                >
                    {displayBooks.length > 0 ?

                        displayBooks.map(book =>

                            <Book
                                key={book.id}
                                book={book}

                            >
                            </Book>
                        ) : <h1>No Books Found </h1>
                    }
                </Grid>
            </Container>
        </Fragment >
    );
}
