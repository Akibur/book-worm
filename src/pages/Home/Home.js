import { Box } from '@mui/system';
import React, { Fragment } from 'react';

import headerImage from '../../assets/books-header.jpg';
import Books from '../../components/Books/Books';
// import { Box } from '@mui/system';

export default function Home() {
    return (
        <Fragment>
            <Box sx={{
                display: 'block',
                height: 150,
                width: '100%',
                mt: -50,
            }} >
                <img src={headerImage} alt="header" />
                <Books></Books>
            </Box>
        </Fragment >
    );
}
