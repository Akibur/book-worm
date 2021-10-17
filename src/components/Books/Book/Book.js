import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';

export default function Book(props) {
    const { name, description, price, image } = props.book;
    console.log(image);
    return (
        <Grid justifyContent item md={3} xs={12}>
            <Card sx={{}}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="350"
                        image={image}
                        alt={name}
                    />
                    <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                            Price: {price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Button color="primary" variant="contained">   Add To cart</Button>


                </CardActions>
            </Card>
        </Grid>
    );
}