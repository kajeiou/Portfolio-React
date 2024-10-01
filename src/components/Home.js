import React from 'react';
import Experiences from './Experiences';
import Carousel from 'react-bootstrap/Carousel';
import Skills from './Skills';
import Contact from './Contact';
import { Box, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';
import projects from '../data/projectsData';
import Curriculum from './Curriculum';
import { Link } from 'react-router-dom';


export default function Home() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
                textAlign: 'center',
            }}
        >
            <Box sx={{  marginTop: 10,marginBottom: 4, padding: 8, border: '1px solid #ddd', borderRadius: '8px', width: '90%', textAlign: 'center' }}>
                <Typography variant="h2">Nabil KAJEIOU</Typography>
                <Typography variant="h4" sx={{ marginY: 2 }}>
                    Développeur Full Stack
                </Typography>
                <Typography variant="body1" sx={{ maxWidth: '600px', margin: '0 auto' }}>
                    Je suis un développeur full-stack passionné avec une expérience de 4 ans dans le développement web. J'ai travaillé sur plusieurs projets en utilisant des technologies telles qu'Angular, React, Node.js, et Spring Boot.
                </Typography>
                <Typography variant="body1" sx={{ maxWidth: '600px', margin: '20px auto' }}>
                    Je suis également familiarisé avec le déploiement d'applications sur AWS et l'utilisation de Docker pour des environnements de développement optimisés. J'adore apprendre de nouvelles technologies et m'efforce d'améliorer continuellement mes compétences.
                </Typography>
            </Box>

            <Box sx={{ marginBottom: 8, padding: 4, border: '1px solid #ddd', borderRadius: '8px', width: '90%', textAlign: 'center' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 4 }}>
                    <Experiences />
                </Box>
            </Box>

            <Box sx={{ marginBottom: 8, padding: 4, border: '1px solid #ddd', borderRadius: '8px', width: '90%', textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom>
                    Mes projets
                </Typography>
                <Carousel style={{ marginTop: '20px' }}>
                    {projects.map((project, index) => (
                        <Carousel.Item key={index}>
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
                                </CardContent>
                            </Card>
                            
                        </Carousel.Item>
                    ))}
                </Carousel>
                <Link to="/projects" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Button variant="contained" sx={{ mt: 1, mr: 1, backgroundColor: 'black', color: 'white' }}>
                    Voir tous mes projets
                    </Button>
                </Link>
                

            </Box>

            <Box sx={{ marginBottom: 8, padding: 4, border: '1px solid #ddd', borderRadius: '8px', width: '90%', textAlign: 'center' }}>
                <Skills />
            </Box>
            <Box sx={{ marginBottom: 8, padding: 4, border: '1px solid #ddd', borderRadius: '8px', width: '90%', textAlign: 'center' }}>
                <Curriculum />
            </Box>
            <Box sx={{ marginBottom: 8, padding: 4, border: '1px solid #ddd', borderRadius: '8px', width: '90%', textAlign: 'center' }}>
                <Contact />
            </Box>
            
        </Box>
    );
}
