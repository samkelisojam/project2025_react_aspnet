/* eslint-disable no-unused-vars */
// router.jsx
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App/layout/App';
import Home from '../features/Home';
import Catalog from '../features/Catalog';
import ProductDetails from '../features/ProductsDetails';
import AboutPage from '../features/AboutPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <Home />,
            },
            {
                path: 'catalog',
                element: <Catalog />,
            },
            {
                path: 'catalog/:id',
                element: <ProductDetails />,
            },
            {
                path: 'about',
                element: <AboutPage />,
            },
        ],
    },
]);

function AppRouter() {
    return <RouterProvider router={router} />;
}

export default AppRouter;
