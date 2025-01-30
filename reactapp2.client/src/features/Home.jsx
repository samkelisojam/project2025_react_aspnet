/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.default,
        minHeight: '100vh',
        padding: theme.spacing(4),
    },
    header: {
        marginBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(3),
        marginBottom: theme.spacing(4),
    },
    highlight: {
        color: theme.palette.primary.main,
        fontWeight: 'bold',
    },
}));

function Home() {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <Paper elevation={3} className={classes.paper}>
                <Typography variant="h4" component="h1" gutterBottom className={classes.header}>
                    Welcome to the <span className={classes.highlight}>BMW Group PPE Application</span>
                </Typography>
                <Typography variant="body1" component="p" paragraph>
                    We are excited to have you onboard. This application is designed to streamline personal protective equipment management within the BMW Group.
                </Typography>
                <Typography variant="body1" component="p" paragraph>
                    Personal protective equipment (PPE) is crucial in the automotive industry to ensure the safety and well-being of workers. Proper PPE helps prevent injuries, reduces the risk of accidents, and ensures compliance with safety regulations.
                </Typography>
                <Typography variant="body1" component="p" paragraph>
                    At BMW, we prioritize the safety of our employees by providing high-quality PPE, including gloves, helmets, safety glasses, and protective clothing. These items are essential in protecting against hazards such as chemical exposure, flying debris, and heavy machinery.
                </Typography>
                <Typography variant="body1" component="p" paragraph>
                    The BMW Group PPE Application helps manage inventory, track usage, and ensure that all employees have access to the necessary protective gear. By using this application, we strive to create a safer and more efficient workplace.
                </Typography>
            </Paper>
        </Container>
    );
}

export default Home;