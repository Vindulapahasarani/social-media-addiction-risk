import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Box textAlign="center" p={5}>
      <Typography variant="h3" gutterBottom>
        Welcome to Social Media Addiction Predictor
      </Typography>
      <Typography variant="body1" gutterBottom>
        Analyze your social media habits and assess your risk of addiction. 
        Start by entering your details in the form.
      </Typography>
      <Button 
        component={Link} 
        to="/predict" 
        variant="contained" 
        color="primary" 
        sx={{ mt: 2 }}
      >
        Get Started
      </Button>
    </Box>
  );
};

export default Home;
