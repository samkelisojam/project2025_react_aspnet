/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Typography } from '@mui/material';

function WelcomeMessage() {
    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom>
                Welcome to the BMW Group PPE Application
            </Typography>
            <Typography variant="body1" component="p">
                We are excited to have you onboard. This application is designed to streamline personal protective equipment management within the BMW Group.
            </Typography>
        </Container>
    );
}

export default WelcomeMessage;