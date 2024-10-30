// src/routes/Routes.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Sobre from '../pages/Sobre'; 
import Cadastro from '../pages/Cadastro';
import Login from '../pages/Login';
import InfoCard from '../pages/InfoCard';
import HomeCadastro from '../pages/HomeCadastro';
import AlterarDados from '../pages/AlterarDados';
import AnunciosUser from '../pages/AnunciosUser';
import Suporte from '../pages/Suporte';
import CadAnuncio from '../pages/CadAnuncio1';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sobre" element={<Sobre/>} />
        <Route path="/cadastro" element={<Cadastro/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/infocard" element={<InfoCard/>} />
        <Route path="/home-cadastro" element={<HomeCadastro/>} />
        <Route path="/alterar-dados" element={<AlterarDados/>}/>
        <Route path="/anuncios-user" element={<AnunciosUser/>}/>
        <Route path="/suporte" element={<Suporte/>}/>
        <Route path="/CadAnuncio1" element={<CadAnuncio/>}/>
      </Routes>
    </Router>
  );
};

export default AppRoutes;