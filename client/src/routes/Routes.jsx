// src/routes/Routes.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Sobre from '../pages/Sobre'; 

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sobre" element={<Sobre/>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
