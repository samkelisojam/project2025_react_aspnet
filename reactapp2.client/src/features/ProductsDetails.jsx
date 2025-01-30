/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';

function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch product details by id
    useEffect(() => {
        async function fetchProduct() {
            try {
                const response = await fetch(`https://localhost:7028/api/Product/${id}`);
                if (!response.ok) {
                    throw new Error('Product not found');
                }
                const data = await response.json();
                setProduct(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchProduct();
    }, [id]);

    if (loading) {
        return <Typography variant="h6">Loading...</Typography>;
    }

    if (error) {
        return <Typography variant="h6">{error}</Typography>;
    }

    return (
        <Container>
            <Card>
                <CardMedia
                    component="img"
                    alt={product.name}
                    height="300"
                    image={product.pictureUrl || "https://via.placeholder.com/300"} // Placeholder image if no image URL is provided
                    title={product.name}
                />
                <CardContent>
                    <Typography variant="h4" component="h1" gutterBottom>
                        {product.name}
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Typography variant="body1" component="p">
                                Id: {product.id}
                            </Typography>
                            <Typography variant="body1" component="p">
                                Quantity In Stock: {product.quantityInStock}
                            </Typography>
                            <Typography variant="body1" component="p">
                                Price: ${product.price}
                            </Typography>
                            <Typography variant="body1" component="p">
                                Is In Store: {product.isInStore ? "Yes" : "No"}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body1" component="p">
                                Type: {product.type}
                            </Typography>
                            <Typography variant="body1" component="p">
                                Brand: {product.brand}
                            </Typography>
                            <Typography variant="body1" component="p">
                                Description: {product.description}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Container>
    );
}

export default ProductDetails;