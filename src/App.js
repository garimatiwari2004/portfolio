import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import  BioSection  from './components/biosection';
import Hero from './components/hero';
import Techstack from './components/techstack';
import Project from './components/projects';
import AboutMe from './components/aboutme';

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/projects" element={<Project/>}/>
        <Route path='/about' element={<AboutMe/>}/>
        <Route path="/" element={
          <>
            <Navbar />
            <Hero />
            <BioSection />
            <Techstack/>
            <Project/>
          </>
        } />
        
      </Routes>
    </>
  );
}

export default App;
