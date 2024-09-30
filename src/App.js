import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Formations from './components/Formations';
import Experiences from './components/Experiences';
import { Box } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import Curriculum from './components/Curriculum';

function App() {
  return (
    <Router>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Nav />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/formations" element={<Formations />} />
            <Route path="/competences" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/curruculum" element={<Curriculum />} />
          </Routes>
        </Box>


        <Footer/>
      </Box>
    </Router>
  );
}

export default App;
