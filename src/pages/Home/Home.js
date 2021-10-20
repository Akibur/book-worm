import { Box } from '@mui/system';
import React, { Fragment } from 'react';

import headerImage from '../../assets/books-header.jpg';
import Books from '../../components/Books/Books';
// import { Box } from '@mui/system';

export default function Home() {
    return (
        <Fragment>
            <Box
                component="img"
                sx={{
                    display: 'block',
                    height: 550,
                    maxHeight: { xs: 233, md: 550 },
                    maxWidth: { xs: 1, md: 1 },
                    width: '100%',
                }}
                alt="Cover"
                src={headerImage} >

            </Box>
            <Books></Books>

        </Fragment >
    );
}
