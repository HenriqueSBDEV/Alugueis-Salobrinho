// src/routes/Routes.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Sobre from '../pages/Sobre'; 
import Cadastro from '../pages/Cadastro';
import Login from '../pages/Login';
import InfoCard from '../pages/InfoCard';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sobre" element={<Sobre/>} />
        <Route path="/cadastro" element={<Cadastro/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/infocard" element={<InfoCard/>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
