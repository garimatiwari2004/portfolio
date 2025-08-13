import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import { BioSection } from './components/biosection';
import Hero from './components/hero';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <BioSection />
          </>
        } />
        
      </Routes>
    </>
  );
}

export default App;
