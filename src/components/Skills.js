import React from 'react';
import { Box, Typography, ListItem, LinearProgress, Grid, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import skillsData from '../data/skillsData';  

export default function Skills() {
  return (
    <Box sx={{ padding: '10px' }}>
      <Typography variant="h5" gutterBottom>
        Mes compétences
      </Typography>
      {skillsData.map((category, categoryIndex) => (
        <Accordion key={categoryIndex}>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls={`panel${categoryIndex}-content`}
            id={`panel${categoryIndex}-header`}
          >
            <Typography variant="subtitle1">{category.category}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={0.5}>
              {category.skills.map((skill, skillIndex) => (
                <Grid item xs={12} sm={6} key={skillIndex}>
                  <ListItem sx={{ display: 'block', mb: 1 }}>
                    <Typography variant="body2">{skill.name}</Typography>
                    <Box sx={{ position: 'relative', display: 'inline-flex', width: '100%' }}>
                      <LinearProgress
                        variant="determinate"
                        value={skill.completion}
                        sx={{ 
                          height: 6,  
                          borderRadius: 4, 
                          width: '100%', 
                          bgcolor: '#e0e0e0',
                          '& .MuiLinearProgress-bar': {
                            backgroundColor: category.color,
                          },
                        }}
                      />
                      <Typography
                        variant="caption"  
                        sx={{
                          position: 'absolute',
                          top: 8,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          color: 'black', 
                          fontWeight: 'bold',
                        }}
                      >
                        {skill.completion}%
                      </Typography>
                    </Box>
                  </ListItem>
                </Grid>
              ))}
            </Grid>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
