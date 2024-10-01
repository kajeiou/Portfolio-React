import React, { useState } from 'react';
import { AppBar, Toolbar, Box, Typography, IconButton, Drawer, List, ListItem, ListItemText, Button, useTheme, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import BuildIcon from '@mui/icons-material/Build';
import FolderIcon from '@mui/icons-material/Folder';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import DescriptionIcon from '@mui/icons-material/Description';

export default function Nav() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: 'Accueil', path: '/', icon: <HomeIcon /> },
    { text: 'Mes Expériences', path: '/experiences', icon: <WorkIcon /> },
    { text: 'Mes Formations', path: '/formations', icon: <SchoolIcon /> },
    { text: 'Mes Compétences', path: '/competences', icon: <BuildIcon /> },
    { text: 'Mes Projets', path: '/projects', icon: <FolderIcon /> },
    { text: 'Me Contacter', path: '/contact', icon: <MarkunreadIcon /> },
    { text: 'Mon CV', path: '/curriculum', icon: <DescriptionIcon /> },
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
                    <ListItem button key={item.text} onClick={() => toggleDrawer(false)} sx={{ '&:hover': { transform: 'scale(1.05)', transition: 'transform 0.2s' } }}>
                      <Link to={item.path} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
                        {item.icon} 
                        <ListItemText primary={item.text} sx={{ marginLeft: 1 }} /> 
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </>
          ) : (
            <Box>
              {menuItems.map((item) => (
                <Button
                  color="inherit"
                  key={item.text}
                  startIcon={item.icon}
                  sx={{ '&:hover': { transform: 'scale(1.05)', transition: 'transform 0.2s' } }} 
                >
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
