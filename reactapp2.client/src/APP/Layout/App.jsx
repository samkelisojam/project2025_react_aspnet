/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Catalog from '../../features/Catalog';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavBar from './NavBar';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#0D47A1', // BMW Blue
        },
        secondary: {
            main: '#FF5722', // Accent color
        },
        background: {
            default: '#ffffff', // Light mode background color
        },
    },
    typography: {
        h4: {
            fontWeight: 'bold',
        },
        body1: {
            fontSize: '1.2rem',
        },
    },
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#0D47A1', // BMW Blue
        },
        secondary: {
            main: '#FF5722', // Accent color
        },
        background: {
            default: '#303030', // Dark mode background color
        },
    },
    typography: {
        h4: {
            fontWeight: 'bold',
        },
        body1: {
            fontSize: '1.2rem',
        },
    },
});

function App() {
    const [products, setProducts] = useState([]);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        fetch('https://localhost:7028/api/Product/')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <>
            <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
                <div style={{ backgroundColor: isDarkMode ? darkTheme.palette.background.default : lightTheme.palette.background.default, minHeight: '100vh' }}>
                    <NavBar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
                    <Container maxWidth="xl" sx={{ mt: 14 }}>
                        <Typography variant="h4" component="h1" gutterBottom color="primary">
                            Welcome to the BMW Group PPE Application
                        </Typography>
                        <Typography variant="body1" component="p" color="secondary">
                            We are excited to have you onboard. This application is designed to streamline personal protective equipment management within the BMW Group.
                        </Typography>
                        <Catalog products={products} />
                    </Container>
                </div>
            </ThemeProvider>
        </>
    );
}

export default App;