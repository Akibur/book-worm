import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CartContext from '../../store/Cart/CartContext';
import classes from './BookDetails.module.css';


export const BookDetail = () => {
    const { id } = useParams();
    const [book, setBook] = useState({});
    const cartCtx = React.useContext(CartContext);



    useEffect(() => {
        fetch('./../data.json')
            .then(res => res.json())
            .then(data => {
                const plan = data.find((el) => el.id == id);
                setBook(plan);
            }).catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <Container sx={{
            justifyContent: 'space-between',
            display: 'flex', flexDirection: 'row', my: '10%',
            width: '50%'
        }} >
            <Box
                component="img"
                src={book.image}
                sx={{ width: '30%' }}
            ></Box>
            <Box>
                <h1>{book.name}</h1>
                <p>{book.description}</p>
                <h3>${book.price}</h3>
                <h5>Category:{book.category}</h5>
                <div className={classes.actions}>
                    <button onClick={() => cartCtx.addItem(book)} className={classes.button}>Add To Cart</button>
                </div>
            </Box>

        </Container>
    );
};
