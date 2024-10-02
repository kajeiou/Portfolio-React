import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import GetAppIcon from '@mui/icons-material/GetApp'; // Import de l'icône de téléchargement

export default function Curriculum() {
  const [zoomLevel, setZoomLevel] = useState(700); 

  const handleZoomIn = () => {
    setZoomLevel((prevLevel) => Math.min(prevLevel + 100, 1000)); 
  };

  const handleZoomOut = () => {
    setZoomLevel((prevLevel) => Math.max(prevLevel - 100, 100)); 
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/CV_DF_Nabil_Kajeiou.pdf'; 
    link.download = 'CV_DF_Nabil_Kajeiou.pdf'; 
    link.click();
  };

  return (
    <Box sx={{ padding: '10px', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Mon CV
      </Typography>
      <Box>
        <Button variant="outlined" onClick={handleZoomOut} sx={{ margin: 2, backgroundColor: 'black', color: 'white' }} >
          <ZoomOutIcon /> 
        </Button>
        <Button variant="outlined" onClick={handleZoomIn} sx={{ margin: 2, backgroundColor: 'black', color: 'white' }}>
          <ZoomInIcon />
        </Button>
        <Button variant="outlined" onClick={handleDownload} sx={{ margin: 2, backgroundColor: 'black', color: 'white' }}>
          <GetAppIcon /> Télécharger
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
