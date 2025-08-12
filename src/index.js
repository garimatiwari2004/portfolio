import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import Navbar from './components/navbar';
import { BioSection } from './components/biosection';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        
            <Navbar />

            <App />
            <BioSection />

    </React.StrictMode>
);
