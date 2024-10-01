import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Alert } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import CheckIcon from '@mui/icons-material/Check';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [alert, setAlert] = useState({ open: false, message: '', severity: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, formData, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
      .then((response) => {
        console.log('Email envoyé avec succès!', response.status, response.text);
        setAlert({ open: true, message: 'Votre message a été envoyé avec succès!', severity: 'success' }); 
        setFormData({ name: '', email: '', message: '' }); s
      }, (error) => {
        console.log('Échec de l\'envoi de l\'email', error);
        setAlert({ open: true, message: 'Échec de l\'envoi de votre message. Veuillez réessayer.', severity: 'error' });
      });
  };

  const handleAlertClose = () => {
    setAlert({ ...alert, open: false });
  };

  return (
    <Box sx={{ padding: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Me contacter
      </Typography>


      {alert.open && (
        <Alert
          icon={<CheckIcon fontSize="inherit" />}
          severity={alert.severity}
          onClose={handleAlertClose}
          sx={{ marginBottom: '20px' }}
        >
          {alert.message}
        </Alert>
      )}

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
                borderColor: 'grey',
              },
              '&:hover fieldset': {
                borderColor: 'black',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'black',
              },
              '& input': {
                color: 'black',
              },
              '&.Mui-focused input': {
                color: 'black',
              },
            },
            '& input::placeholder': {
              color: 'black',
            },
            '& .MuiInputLabel-root': {
              color: 'black',
            },
            '& .Mui-focused .MuiInputLabel-root': {
              color: 'black',
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: 'black',
            },
            '&:focus-within': {
              backgroundColor: '#f0f0f0',
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
                color: 'black',
              },
              '&.Mui-focused input': {
                color: 'black',
              },
            },
            '& input::placeholder': {
              color: 'black',
            },
            '& .MuiInputLabel-root': {
              color: 'black',
            },
            '& .Mui-focused .MuiInputLabel-root': {
              color: 'black',
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: 'black',
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
                color: 'black',
              },
              '&.Mui-focused input': {
                color: 'black',
              },
            },
            '& input::placeholder': {
              color: 'black',
            },
            '& .MuiInputLabel-root': {
              color: 'black',
            },
            '& .Mui-focused .MuiInputLabel-root': {
              color: 'black',
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: 'black',
            },
            '&:focus-within': {
              backgroundColor: '#f0f0f0',
            },
          }}
        />
        <Button
          variant="contained"
          type="submit"
          sx={{
            marginTop: '20px',
            backgroundColor: 'black',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          Envoyer
          <SendIcon sx={{ marginLeft: '8px', color: 'white' }} />
        </Button>
      </form>

      <Button
        variant="outlined"
        sx={{
          marginTop: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          color: 'black',
          borderColor: 'black'
        }}
        href="mailto:nabilkajeiou@gmail.com"
      >
        Ou m'envoyer un mail directement
        <EmailIcon sx={{ marginLeft: '8px' }} />
      </Button>
    </Box>
  );
}
