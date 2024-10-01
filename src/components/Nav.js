import React, { useState } from 'react';
import { AppBar, Toolbar,  Box, Typography, IconButton,  Drawer, List, ListItem,ListItemText, Button,  useTheme, useMediaQuery  } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import HandymanIcon from '@mui/icons-material/Handyman';

export default function Nav() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: 'Accueil', path: '/' },
    { text: 'Mes Experiences', path: '/experiences' },
    { text: 'Mes Formations', path: '/formations' },
    { text: 'Mes Compétences', path: '/competences' },
    { text: 'Mes Projets', path: '/projects' },
    { text: 'Me Contacter', path: '/contact' },
    { text: 'Mon CV', path: '/curruculum' },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#383838' }}>
        <Toolbar>
          
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              
                Nabil KAJEIOU
              </Link>
            </Typography>
          
          

          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer anchor="left" open={isDrawerOpen} onClose={() => toggleDrawer(false)}>
                <List>
                  {menuItems.map((item) => (
                    <ListItem button key={item.text} onClick={() => toggleDrawer(false)}>
                      <Link to={item.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <ListItemText primary={item.text} />
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </>
          ) : (
            <Box>
              {menuItems.map((item) => (
                <Button color="inherit" key={item.text}>
                  <Link to={item.path} style={{ textDecoration: 'none', color: 'white' }}>
                    {item.text}
                  </Link>
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
