/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    card: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        margin: '10px',
        backgroundColor: '#f5f5f5',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    media: {
        height: 180,
    },
    content: {
        flexGrow: 1,
        padding: '16px',
    },
    actions: {
        justifyContent: 'space-between',
        padding: '8px 16px',
    },
    buttonPrimary: {
        backgroundColor: '#1976d2',
        color: '#fff',
        '&:hover': {
            backgroundColor: '#155a9c',
        },
    },
    buttonSecondary: {
        backgroundColor: '#dc004e',
        color: '#fff',
        '&:hover': {
            backgroundColor: '#a3003c',
        },
    },
}));

function ProductList({ products, addToCart, viewProduct }) {
    const classes = useStyles();

    return (
        <Container>
            <Grid container spacing={3}>
                {products.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.media}
                                component="img"
                                image={item.pictureUrl}
                                alt={item.name}
                            />
                            <CardContent className={classes.content}>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.name}
                                </Typography>
                                <Typography variant="body1" color="textSecondary">
                                    {item.brand}
                                </Typography>
                                <Typography variant="h6" component="div">
                                    ${item.price}
                                </Typography>
                            </CardContent>
                            <CardActions className={classes.actions}>
                                <Button size="small" className={classes.buttonPrimary} onClick={() => addToCart(item)}>
                                    Add to Cart
                                </Button>
                                <Button size="small" className={classes.buttonSecondary} onClick={() => viewProduct(item)}>
                                    View
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default ProductList;