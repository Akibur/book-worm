import { Container, Grid } from '@mui/material';
import React, { Fragment, useEffect, useState } from 'react';
import Book from './Book/Book';

export default function Books() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBooks(data);
            }).catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <Fragment>
            <Container>
                <Grid
                    justifyContent="center"
                    alignItems="center"
                    container
                    spacing={5}
                >
                    {
                        books.map(book =>
                            <Book
                                key={book.name}
                                book={book}
                            >
                            </Book>

                        )
                    }
                </Grid>
            </Container>


        </Fragment>
    );
}
