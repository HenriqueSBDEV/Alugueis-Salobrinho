import React from "react";
import "../../styles/Header/Header.css";
import { Link } from "react-router-dom";

const HeaderModerador = () => {
  return (
    <header style={{ position: "fixed" }}>
      <div className="title">
        <h1 className="title-up" style={{padding:"20px"}}>Painel Adiministrativo</h1>
      </div>
      <div className="header-links">
        <Link className="link" to="/home-moderador">Dashboard</Link>
        <Link className="link" to="/gerenciamento-user">Gerenciamento de Usuários</Link>
        <Link className="link" to="/imoveis-ativos">Imóveis Ativos</Link>
        <Link className="link" to="/imoveis-pendentes">Imóveis Pendentes</Link>
      </div>
    </header>
  );
};

export default HeaderModerador;
