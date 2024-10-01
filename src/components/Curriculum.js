import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';

export default function Curriculum() {
  const [zoomLevel, setZoomLevel] = useState(1); // Valeur de zoom initiale en tant que multiplicateur

  const handleZoomIn = () => {
    setZoomLevel((prevLevel) => Math.min(prevLevel + 0.1, 2)); // Limite le zoom à 200%
  };

  const handleZoomOut = () => {
    setZoomLevel((prevLevel) => Math.max(prevLevel - 0.1, 0.5)); // Limite le zoom à 50%
  };

  return (
    <Box sx={{ padding: '20px', textAlign: 'center' }}>
      <Typography variant="h5" gutterBottom>
        Mon CV
      </Typography>
      <Box>
        <Button
          variant="outlined"
          onClick={handleZoomOut}
          sx={{ margin: 2, backgroundColor: 'black', color: 'white' }}
        >
          <ZoomOutIcon />
        </Button>
        <Button
          variant="outlined"
          onClick={handleZoomIn}
          sx={{ margin: 2, backgroundColor: 'black', color: 'white' }}
        >
          <ZoomInIcon />
        </Button>
      </Box>
      <img
        src="/assets/CV_DF_Nabil_Kajeiou.jpg"
        alt="Curriculum Vitae"
        style={{
          width: `${zoomLevel * 100}%`, 
          maxWidth: '100%',
          borderRadius: '8px',
        }}
      />
    </Box>
  );
}
