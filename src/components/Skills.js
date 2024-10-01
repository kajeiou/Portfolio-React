import React, { useState } from 'react';
import {
  Box,
  Typography,
  ListItem,
  LinearProgress,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import skillsData from '../data/skillsData';

export default function Skills() {
  const [progressValues, setProgressValues] = useState({});

  const handleAccordionChange = (categoryIndex) => (event, isExpanded) => {
    if (isExpanded) {
      const newProgressValues = { ...progressValues };

      skillsData[categoryIndex].skills.forEach((skill, skillIndex) => {
        newProgressValues[`${categoryIndex}-${skillIndex}`] = 10;
        const targetCompletion = skill.completion;

        const interval = setInterval(() => {
          setProgressValues((prevValues) => {
            const currentValue = prevValues[`${categoryIndex}-${skillIndex}`] || 10;
            if (currentValue < targetCompletion) {
              return { ...prevValues, [`${categoryIndex}-${skillIndex}`]: Math.min(currentValue + 2, targetCompletion) };
            } else {
              clearInterval(interval);
              return prevValues;
            }
          });
        }, 20);
      });
    } else {
      const resetValues = { ...progressValues };
      skillsData[categoryIndex].skills.forEach((_, skillIndex) => {
        resetValues[`${categoryIndex}-${skillIndex}`] = undefined;
      });
      setProgressValues(resetValues);
    }
  };

  return (
    <Box sx={{ padding: '10px' }}>
      <Typography variant="h5" gutterBottom>
        Mes compétences
      </Typography>
      {skillsData.map((category, categoryIndex) => (
        <Accordion key={categoryIndex} onChange={handleAccordionChange(categoryIndex)}>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls={`panel${categoryIndex}-content`}
            id={`panel${categoryIndex}-header`}
          >
            <Typography variant="subtitle1">{category.category}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={0.5}>
              {category.skills.map((skill, skillIndex) => {
                const key = `${categoryIndex}-${skillIndex}`;
                return (
                  <Grid item xs={12} sm={6} key={skillIndex}>
                    <ListItem sx={{ display: 'block', mb: 1 }}>
                      <Typography
                        variant="body2"
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          fontWeight: progressValues[key] > 70 ? 'bold' : 'normal', // Met en gras si le progrès > 70%
                        }}
                      >
                        {skill.name}
                        {progressValues[key] > 70 && (
                          <ThumbUpOffAltIcon
                            sx={{
                              marginLeft: 1,
                              color: category.color, // Couleur selon la catégorie
                            }}
                          />
                        )}
                      </Typography>
                      <Box sx={{ position: 'relative', display: 'inline-flex', width: '100%' }}>
                        <LinearProgress
                          variant="determinate"
                          value={progressValues[key] || 0}
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
                          {progressValues[key] || 0}%
                        </Typography>
                      </Box>
                    </ListItem>
                  </Grid>
                );
              })}
            </Grid>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
