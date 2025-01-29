/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Button from '@mui/material/Button';
import ProductList from './ProductList';

function Catalog({ products, addProduct, addToCart, viewProduct }) {
    return (
        <>
            <ProductList products={products} addToCart={addToCart} viewProduct={viewProduct} />
            <Button variant="contained" color="primary" onClick={addProduct} style={{ marginTop: '20px' }}>
                Add product
            </Button>
        </>
    );
}

export default Catalog;