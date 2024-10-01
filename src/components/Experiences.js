import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import experiences from '../data/experiencesData';

export default function Experiences() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: { xs: '90%', sm: '600px' }, textAlign: 'center', mx: 'auto', padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Mes expériences
      </Typography>
      <Stepper activeStep={activeStep} orientation="vertical">
        {experiences.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              StepIconComponent={() => (
                <div
                  style={{
                    backgroundColor: activeStep === index ? 'black' : 'gray',
                    color: 'white',
                    borderRadius: '50%',
                    width: 24,
                    height: 24,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {index + 1}
                </div>
              )}
              optional={
                <Typography variant="caption" sx={{ fontSize: '14px', mb: 1 }}>
                  {step.date}
                </Typography>
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography
                sx={{
                  mb: 2,
                  textAlign: 'left',
                  overflow: 'hidden',
                  whiteSpace: 'pre-line',
                  wordWrap: 'break-word',
                }}
              >
                {step.description}
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 1, mr: 1, backgroundColor: 'black', color: 'white' }}
                >
                  {index === experiences.length - 1 ? 'Fermer' : 'Continuer'}
                </Button>
                <Button
                  disabled={index === 0}
                  onClick={handleBack}
                  sx={{ mt: 1, mr: 1, color: 'black' }}
                >
                  Retour
                </Button>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === experiences.length && (
        <Paper square elevation={0} sx={{ p: 3, backgroundColor: 'transparent' }}>
        <Typography>
          Enfin, je compte 3 ans d'alternance, 1 an en tant qu'indépendant, et 2 mois de stage
        </Typography>
        <Button onClick={handleReset} sx={{ mt: 1, mr: 1, color: 'black' }}>
          Refaire un tour sur mes expériences
        </Button>
      </Paper>
      
      )}
    </Box>
  );
}
