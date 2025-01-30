/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavBar from './NavBar';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#0D47A1',
        },
        secondary: {
            main: '#FF5722',
        },
        background: {
            default: '#ffffff',
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
            main: '#0D47A1',
        },
        secondary: {
            main: '#FF5722',
        },
        background: {
            default: '#303030',
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
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <div style={{ backgroundColor: isDarkMode ? darkTheme.palette.background.default : lightTheme.palette.background.default, minHeight: '100vh' }}>
                <NavBar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
                <Container maxWidth="xl" sx={{ mt: 14 }}>
                    <Outlet />
                </Container>
            </div>
        </ThemeProvider>
    );
}

export default App;