import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import AppRouter from './Routes/routes.jsx'; // Ensure this path is correct

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AppRouter />  {/* Use AppRouter here */}
    </StrictMode>,
);