import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
export default function Curriculum() {
  const [zoomLevel, setZoomLevel] = useState(700); 

  const handleZoomIn = () => {
    setZoomLevel((prevLevel) => Math.min(prevLevel + 100, 1000)); 
  };

  const handleZoomOut = () => {
    setZoomLevel((prevLevel) => Math.max(prevLevel - 100, 100)); 
  };

  return (
    <Box sx={{ padding: '20px', textAlign: 'center' }}>
      <Typography variant="h5" gutterBottom>
        Mon CV
      </Typography>
      <Box>
        <Button variant="outlined" onClick={handleZoomOut} sx={{ margin: 2, backgroundColor: 'black', color: 'white' }} >
          <ZoomOutIcon /> 
        </Button>
        <Button variant="outlined" onClick={handleZoomIn} sx={{ margin: 2, backgroundColor: 'black', color: 'white' }}>
          <ZoomInIcon />
        </Button>
      </Box>
      <img
        src="/assets/CV_DF_Nabil_Kajeiou.jpg"
        alt="Curriculum Vitae"
        width={zoomLevel} 
        style={{ borderRadius: '8px', maxWidth: '100%' }} 
      />
    </Box>
  );
}
