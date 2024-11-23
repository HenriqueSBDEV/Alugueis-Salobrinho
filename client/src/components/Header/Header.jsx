import React from "react";
import "../../styles/Header/Header.css";
import { Link } from "react-router-dom";

const Header = ({ LinksOn = true }) => {
  return (
    <header style={{ position: "fixed"}}>
      <div className={`title ${!LinksOn ? "title-center" : ""}`}>
        <h1 className="title-up">ALUGUÉIS</h1>
        <h1 className="title-down">SALOBRINHO<p style={{fontSize: "20px", display: "inline", margin: "0"}}>/Ilhéus/BA</p>
        </h1>
      </div>
      {/* Exibe os links apenas se LinksOn for true */}
      {LinksOn && (
        <div className="header-links">
          <Link className="link" to="/">HOME</Link>
          <Link className="link" to="/sobre">SOBRE O SALOBRINHO</Link>
          <button className="button" onClick={() => window.location.href = "/login"}>ANUNCIE SEU ALUGUEL</button>
        </div>
      )}
    </header>
  );
};

export default Header;
