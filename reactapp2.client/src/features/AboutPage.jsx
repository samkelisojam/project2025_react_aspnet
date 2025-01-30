/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Typography } from '@mui/material';

function AboutPage() {
    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom>
                About Us
            </Typography>
            <Typography variant="body1" component="p">
                Welcome to our application! We are dedicated to providing the best service to our users.
                Our team is committed to ensuring that you have the most efficient and enjoyable experience possible.
            </Typography>
            <Typography variant="body1" component="p">
                Our mission is to streamline personal protective equipment management within the BMW Group.
                We hope you find our application helpful and easy to use.
            </Typography>
        </Container>
    );
}

export default AboutPage;