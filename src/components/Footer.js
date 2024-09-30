import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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
        {/* Icône GitHub */}
        <IconButton
          component="a"
          href="https://github.com/kajeiou" // Lien vers ton GitHub
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: 'white' }}
        >
          <GitHubIcon />
        </IconButton>

        {/* Icône LinkedIn */}
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
        <a
          href="#contact" 
          style={{ color: 'white', textDecoration: 'none' }}
        >
          Me contacter
        </a>
      </Typography>
    </Box>
  );
}
