import React from 'react';
import { Box, Typography } from '@mui/material';

const Results = ({ result }) => {
  return (
    <Box textAlign="center" p={3}>
      {result ? (
        <Typography variant="h4" color="success.main">
          Risk Level: {result.risk}
        </Typography>
      ) : (
        <Typography variant="h6" color="error.main">
          Please submit your details to see the risk level.
        </Typography>
      )}
    </Box>
  );
};

export default Results;
