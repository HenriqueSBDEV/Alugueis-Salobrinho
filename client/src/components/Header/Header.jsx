import React from "react";
import "../../styles/Header/Header.css";
import { Link } from "react-router-dom";

const Header = ({ LinksOn = true }) => {
  return (
    <header>
      <div className={`title ${!LinksOn ? "title-center" : ""}`}>
        <h1 className="title-up">ALUGUÉIS</h1>
        <h1 className="title-down">SALOBRINHO</h1>
      </div>
      {/* Exibe os links apenas se LinksOn for true */}
      {LinksOn && (
        <div className="header-links">
          <Link to="/">HOME</Link>
          <Link to="/sobre">SOBRE O SALOBRINHO</Link>
          <button className="button">ANUNCIE SEU ALUGUEL</button>
        </div>
      )}
    </header>
  );
};

export default Header;
