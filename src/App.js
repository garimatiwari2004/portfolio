import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import  BioSection  from './components/biosection';
import Hero from './components/hero';
import Techstack from './components/techstack';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <BioSection />
            <Techstack/>
          </>
        } />
        
      </Routes>
    </>
  );
}

export default App;
