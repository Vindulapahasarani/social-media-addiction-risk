import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" textAlign="center" py={2} bgcolor="lightgray">
      <Typography variant="body2">
        © 2024 Social Media Addiction Predictor. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
