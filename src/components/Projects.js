import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button, Chip, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import Carousel from 'react-bootstrap/Carousel';
import projects from '../data/projectsData';

export default function Projects() {
  return (
    <Box sx={{ padding: '10px' }}>
      <Typography variant="h4" gutterBottom>
        Mes projets
      </Typography>
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                alt={project.title}
                height="150"
                image={project.image}
                
              />
              <CardContent>
                <Typography variant="h5">{project.title}</Typography>
                <Typography variant="body2">{project.description}</Typography>

                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ marginTop: '10px', flexWrap: 'wrap', rowGap: 1 }} 
                >
                  {project.technologies.map((tech, idx) => (
                    <Chip key={idx} label={tech} color="silver" />
                  ))}
                </Stack>

                <Stack
                  direction={{ xs: 'column', sm: 'row' }}  
                  spacing={2}  
                  sx={{
                    marginTop: '10px',
                    justifyContent: 'center',
                    alignItems: 'center', 
                  }}
                >
                  <Button
                    variant="contained"
                    color="black"
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    Voir le code sur <GitHubIcon sx={{ marginLeft: 1 }} />
                  </Button>

                  <Button
                    variant="contained"
                    color="black"
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      backgroundColor:"black",
                      color:'white'
                    }}
                  >
                    Voir une démonstration
                  </Button>
                </Stack>


                
                <Carousel
                  style={{
                    marginTop: '20px',
                    
                    marginLeft: 'auto',
                    marginRight: 'auto', 
                  }}
                >
                  {project.screenshots.map((screenshot, idx) => (
                    <Carousel.Item key={idx}>
                      <CardMedia
                        component="img"
                        alt={`Screenshot ${idx + 1} de ${project.title}`}
                        height="200"
                        image={screenshot}
                        sx={{ objectFit: 'cover' }}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
                
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
