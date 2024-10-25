import React, { useState } from "react";
import "../../styles/Header/Header.css";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";

const HeaderLogado = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  const mostrarMenu = () => setMenuAberto(true);
  const esconderMenu = () => setMenuAberto(false);

  return (
    <header style={{ position: "fixed" }}>
      <div className="title">
        <h1 className="title-up">ALUGUÉIS</h1>
        <h1 className="title-down">SALOBRINHO <p style={{ fontSize: "20px", display: "inline", margin: "0" }}>/Ilhéus/BA</p></h1>
      </div>
      <div className="header-links">
        <Link className="link" to="/home-cadastro">Início</Link>
        <Link className="link" to="/suporte">Suporte</Link>
        <Link className="link" to="/anuncios-user">Meus anúncios</Link>

        {/* Ícone do Usuário */}
        <div 
          className="user-menu" 
          onMouseEnter={mostrarMenu} 
          onMouseLeave={esconderMenu}
        >
          <FaRegUserCircle className="user-icon" />
          {menuAberto && (
            <div className="dropdown-menu">
              <Link to="/configuracoes" className="dropdown-item">Alterar Dados</Link>
              <Link to="/apagar-conta" id="apagar-conta" className="dropdown-item">Apagar Conta</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default HeaderLogado;
