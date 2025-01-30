/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import ProductList from './ProductList';
import { Routes, Route } from 'react-router-dom';
import ProductDetails from './ProductsDetails';

function Catalog({ addProduct, addToCart }) {
    const [products, setProducts] = useState([]);

    // Fetch products from the API when the component mounts
    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch('https://localhost:7028/api/Product/');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }

        fetchProducts();
    }, []);

    return (
        <>
            <Routes>
                <Route path="/" element={
                    <>
                        <ProductList products={products} addToCart={addToCart} />
                        <Button variant="contained" color="primary" onClick={addProduct} style={{ marginTop: '20px' }}>
                            Add product
                        </Button>
                    </>
                } />
                <Route path=":id" element={<ProductDetails products={products} />} />
            </Routes>
        </>
    );
}

export default Catalog;