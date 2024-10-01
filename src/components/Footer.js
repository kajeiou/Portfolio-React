import React from 'react';
import { Box, Typography, IconButton, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';


export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: '#333',
        color: 'white',
        padding: '40px',
        textAlign: 'center',
        position: 'relative',
        bottom: 0,
        width: '100%',
      }}
    >
      <Typography variant="body2" sx={{ mb: 2 }}>
        © 2024 Nabil Kajeiou. Tous droits réservés.
      </Typography>

      <Box>
        <IconButton
          component="a"
          href="https://github.com/kajeiou" 
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: 'white' }}
        >
          <GitHubIcon />
        </IconButton>

        <IconButton
          component="a"
          href="https://www.linkedin.com/in/kajeiou" 
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: 'white' }}
        >
          <LinkedInIcon />
        </IconButton>
      </Box>

      <Typography variant="body2" sx={{ mt: 2 }}>
        <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Button variant="text" sx={{ mt: 1, mr: 1, color: 'white' }}>
              Me contacter
            </Button>
        </Link>
      </Typography>
    </Box>
  );
}
