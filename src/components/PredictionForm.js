import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import axios from 'axios';

const PredictionForm = ({ onResult }) => {
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    usageTime: '',
    postsPerDay: '',
    happiness: '',
    anxiety: '',
    sadness: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/predict', formData); // Update the URL if backend is deployed
      onResult(response.data);
    } catch (error) {
      console.error('Error making prediction:', error);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} p={3} maxWidth={600} mx="auto">
      <Typography variant="h5" mb={2} textAlign="center">
        Enter Your Details
      </Typography>
      <TextField 
        label="Age" 
        name="age" 
        type="number" 
        onChange={handleChange} 
        fullWidth 
        margin="normal" 
      />
      <TextField 
        label="Gender" 
        name="gender" 
        onChange={handleChange} 
        fullWidth 
        margin="normal" 
      />
      <TextField 
        label="Daily Usage Time (hours)" 
        name="usageTime" 
        type="number" 
        onChange={handleChange} 
        fullWidth 
        margin="normal" 
      />
      <TextField 
        label="Posts Per Day" 
        name="postsPerDay" 
        type="number" 
        onChange={handleChange} 
        fullWidth 
        margin="normal" 
      />
      <TextField 
        label="Happiness Level (1-10)" 
        name="happiness" 
        type="number" 
        onChange={handleChange} 
        fullWidth 
        margin="normal" 
      />
      <TextField 
        label="Anxiety Level (1-10)" 
        name="anxiety" 
        type="number" 
        onChange={handleChange} 
        fullWidth 
        margin="normal" 
      />
      <TextField 
        label="Sadness Level (1-10)" 
        name="sadness" 
        type="number" 
        onChange={handleChange} 
        fullWidth 
        margin="normal" 
      />
      <Button 
        type="submit" 
        variant="contained" 
        color="primary" 
        fullWidth 
        sx={{ mt: 3 }}
      >
        Predict Risk
      </Button>
    </Box>
  );
};

export default PredictionForm;
