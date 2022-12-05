
import React from 'react';
import { Grid, Typography, Button, Box, Container } from '@mui/material';

function Hero() {
    return (
        <Box
            padding={5}
            sx={{
            width: '100%',
            backgroundColor: '#efefef',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
        }}>
            <Container>
                <Typography padding={2} variant="h1" sx={{paddingBottom: '15px', color: 'black'}}>
                    Achieve your dreams
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ width: '200px', fontSize: '16px' }}
                >
                    Learn More
                </Button>
            </Container>
        </Box>
    )
}

export default Hero;