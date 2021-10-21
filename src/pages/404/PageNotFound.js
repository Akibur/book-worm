import { Box } from '@mui/system';
import React from 'react';

export default function PageNotFound() {
    return (
        <div>
            <Box
                sx={{ my: 25, mx: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
            >
                <h1>404</h1>
            </Box>

        </div>
    );
}
