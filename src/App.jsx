import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Levels from './pages/levels';        
import Level1 from './pages/level1';  
import Cours from './pages/Cours';      
import './styles/App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/levels" element={<Levels />} /> 
        <Route path="/level1" element={<Level1 />} />  
        <Route path="/cours" element={<Cours />} />    
      </Routes>
    </Router>
  );
}

export default App;
