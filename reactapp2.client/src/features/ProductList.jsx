/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

function ProductList({ products, addToCart }) {
    return (
        <Grid container spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4}>
                    <Card>
                        <CardMedia
                            component="img"
                            alt={product.name}
                            height="140"
                            image={product.pictureUrl || "https://via.placeholder.com/140"} // Placeholder image if no image URL is provided
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {product.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {product.description}
                            </Typography>
                            <Typography variant="h6" color="text.primary">
                                ${product.price}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary" onClick={() => addToCart(product.id)}>
                                Add to Cart
                            </Button>
                            <Button
                                size="small"
                                color="secondary"
                                component={Link}
                                to={`/catalog/${product.id}`}
                            >
                                View Details
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

export default ProductList;