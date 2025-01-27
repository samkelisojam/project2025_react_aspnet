/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://localhost:7028/api/Product/')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    const addProduct = () => {
        setProducts(prevState => [
            ...prevState,
            {
                id: prevState.length + 1,
                quantityInStock: 100,
                name: 'Product ' + (prevState.length + 1),
                description: 'Description for Product ' + (prevState.length + 1),
                price: (prevState.length + 1) * 100,
                isInStore: true,
                pictureUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmnRPm1tS2H5AgLIgnDtVp2ZVSNwR-thGRqw&s',
                type: 'Type ' + (prevState.length + 1),
                brand: 'Brand ' + (prevState.length + 1)
            }
        ]);
    };

    return (
        <div>
            <h1 style={{ color: 'red' }}>APP</h1>
            <ul style={{ color: 'green' }}>
                {products.map((item, index) => (
                    <li key={index}>
                        {item.name} - {item.price}
                    </li>
                ))}
            </ul>
            <button onClick={addProduct}>Add product</button>
        </div>
    );
}

export default App;