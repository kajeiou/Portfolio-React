import React from 'react';
import { useInView } from 'react-intersection-observer';
import Experiences from './Experiences';
import Carousel from 'react-bootstrap/Carousel';
import Skills from './Skills';
import Contact from './Contact';
import { Box, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';
import projects from '../data/projectsData';
import Curriculum from './Curriculum';
import { Link } from 'react-router-dom';
import Typical from 'react-typical';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import './Home.css'; // Assurez-vous d'ajouter ce fichier CSS pour les animations

export default function Home() {
    const { ref: experiencesRef, inView: experiencesInView } = useInView({ threshold: 0.1 });
    const { ref: projectsRef, inView: projectsInView } = useInView({ threshold: 0.1 });
    const { ref: skillsRef, inView: skillsInView } = useInView({ threshold: 0.1 });
    const { ref: curriculumRef, inView: curriculumInView } = useInView({ threshold: 0.1 });
    const { ref: contactRef, inView: contactInView } = useInView({ threshold: 0.1 });

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
                textAlign: 'center',
                cursor: 'url(/assets/mouse.png), auto',
            }}
        >
            <Box
                sx={{
                    marginTop: 10,
                    marginBottom: 4,
                    padding: 8,
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    width: '90%',
                    textAlign: 'center',
                    backgroundImage: 'url("assets/background_about.jpg")',
                    backgroundSize: '50%',
                    backgroundPosition: 'center',
                    transition: 'background-size 3s ease-in-out, filter 3s ease-in-out',
                    color: 'white',
                    '&:hover': {
                        backgroundSize: '80%',
                    },
                }}
            >
                <Typography variant="h2" sx={{ fontSize: { xs: '2rem', sm: '3rem', md: '4rem' } }}>
                    <Typical steps={['Nabil KAJEIOU', 1000]} loop={1} wrapper="span" />
                </Typography>
                <Typography variant="h4" sx={{ marginY: 2, height: { xs: '150px', sm: '120px', md: '80px' }, lineHeight: { xs: '40px', sm: '65px', md: '40px' } }}>
                    <Typical steps={["<span>Développeur Full Stack &#x1F680;</span>", 1000, 'Développeur Full Stack 🚀', 1000]} loop={1} wrapper="span" />
                </Typography>
                <Typography variant="body1" sx={{ maxWidth: '600px', margin: '0 auto' }}>
                    Je suis un développeur full-stack passionné avec une expérience de 4 ans dans le développement web. J'ai travaillé sur plusieurs projets en utilisant des technologies telles qu'Angular, React, Node.js, et Spring Boot.
                </Typography>
                <Typography variant="body1" sx={{ maxWidth: '600px', margin: '20px auto' }}>
                    Je suis également familiarisé avec le déploiement d'applications sur AWS et l'utilisation de Docker pour des environnements de développement optimisés. J'adore apprendre de nouvelles technologies et m'efforce d'améliorer continuellement mes compétences.
                </Typography>
            </Box>

            <Box
                ref={experiencesRef}
                className={`fade-in ${experiencesInView ? 'visible' : ''}`} 
                sx={{ marginBottom: 8, border: '1px solid #ddd', borderRadius: '8px', width: '90%', textAlign: 'center' }}
            >
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 4 }}>
                    <Experiences />
                </Box>
            </Box>

            <Box
                ref={projectsRef}
                className={`fade-in ${projectsInView ? 'visible' : ''}`}
                sx={{ marginBottom: 8, padding: 4, border: '1px solid #ddd', borderRadius: '8px', width: '90%', textAlign: 'center' }}
            >
                <Typography variant="h4" gutterBottom>
                    Mes projets
                </Typography>
                <Carousel style={{ marginTop: '20px' }}>
                    {projects.map((project, index) => (
                        <Carousel.Item key={index}>
                            <Card sx={{ backgroundColor: 'transparent', marginBottom: 6 }}>
                                <CardMedia component="img" alt={project.title} height="150" image={project.image} />
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
                        <RemoveRedEyeIcon sx={{ marginRight: 2 }} />Voir tous mes projets
                    </Button>
                </Link>
            </Box>

            <Box
                ref={skillsRef}
                className={`fade-in ${skillsInView ? 'visible' : ''}`}
                sx={{ marginBottom: 8, padding: 4, border: '1px solid #ddd', borderRadius: '8px', width: '90%', textAlign: 'center' }}
            >
                <Skills />
            </Box>

            <Box
                ref={curriculumRef}
                className={`fade-in ${curriculumInView ? 'visible' : ''}`}
                sx={{ marginBottom: 8, padding: 4, border: '1px solid #ddd', borderRadius: '8px', width: '90%', textAlign: 'center' }}
            >
                <Curriculum />
            </Box>

            <Box
                ref={contactRef}
                className={`fade-in ${contactInView ? 'visible' : ''}`}
                sx={{ marginBottom: 8, padding: 4, border: '1px solid #ddd', borderRadius: '8px', width: '90%', textAlign: 'center' }}
            >
                <Contact />
            </Box>
        </Box>
    );
}
