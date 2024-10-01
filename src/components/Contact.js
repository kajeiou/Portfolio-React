import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Box sx={{ padding: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Me contacter
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Nom"
          name="name"
          value={formData.name}
          onChange={handleChange}
          margin="normal"
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'grey', // Couleur par défaut de la bordure
              },
              '&:hover fieldset': {
                borderColor: 'black', // Couleur de la bordure au survol
              },
              '&.Mui-focused fieldset': {
                borderColor: 'black', // Couleur de la bordure lorsque le champ est en focus
              },
              '& input': {
                color: 'black', // Couleur du texte par défaut
              },
              '&.Mui-focused input': {
                color: 'black', // Couleur du texte en focus
              },
            },
            '& input::placeholder': {
              color: 'black', // Couleur du texte par défaut du placeholder
            },
            '& .MuiInputLabel-root': {
              color: 'black', // Couleur du label
            },
            '& .Mui-focused .MuiInputLabel-root': {
              color: 'black', // Couleur du label en focus
            },
            '&:focus-within': {
              backgroundColor: '#f0f0f0', // Couleur de fond lorsque le champ est en focus
            },
          }}
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          margin="normal"
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'grey',
              },
              '&:hover fieldset': {
                borderColor: 'black',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'black',
              },
              '& input': {
                color: 'black', // Couleur du texte par défaut
              },
              '&.Mui-focused input': {
                color: 'black', // Couleur du texte en focus
              },
            },
            '& input::placeholder': {
              color: 'black', // Couleur du texte par défaut du placeholder
            },
            '& .MuiInputLabel-root': {
              color: 'black', // Couleur du label
            },
            '& .Mui-focused .MuiInputLabel-root': {
              color: 'black', // Couleur du label en focus
            },
            '&:focus-within': {
              backgroundColor: '#f0f0f0',
            },
          }}
        />
        <TextField
          fullWidth
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          margin="normal"
          multiline
          rows={4}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'grey',
              },
              '&:hover fieldset': {
                borderColor: 'black',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'black',
              },
              '& input': {
                color: 'black', // Couleur du texte par défaut
              },
              '&.Mui-focused input': {
                color: 'black', // Couleur du texte en focus
              },
            },
            '& input::placeholder': {
              color: 'black', // Couleur du texte par défaut du placeholder
            },
            '& .MuiInputLabel-root': {
              color: 'black', // Couleur du label
            },
            '& .Mui-focused .MuiInputLabel-root': {
              color: 'black', // Couleur du label en focus
            },
            '&:focus-within': {
              backgroundColor: '#f0f0f0',
            },
          }}
        />
        <Button variant="contained" type="submit" sx={{ marginTop: '20px', backgroundColor: 'black', color: 'white' }}>
          Envoyer
        </Button>
      </form>
    </Box>
  );
}
