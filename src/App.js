
import './App.css';
import './index.css';
import Hero from './components/hero';
import { BrowserRouter, Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path='/' element={<Hero/>}/>
      </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;
