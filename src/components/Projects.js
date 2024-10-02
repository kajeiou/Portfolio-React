import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button, Chip, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
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

                <Button
                  variant="contained"
                  color="black"
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ marginTop: '10px' }}
                >
                  Voir sur <GitHubIcon sx={{ marginLeft: 1 }} />
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
