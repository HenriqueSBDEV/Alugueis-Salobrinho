import React from "react";
import  "../../styles/Header/Header.css"
import { Link } from "react-router-dom";

const Header = () =>{
  return(
      <header>
        <div className="title">
          <h1 className="title-up">ALUGUÉIS</h1>
          <h1 className="title-down">SALOBRINHO</h1>
        </div>
        <div className="header-links">
          <a><Link to="/">HOME</Link></a>
          <a><Link to="/sobre">SOBRE O SALOBRINHO</Link></a>
          <button className="button">ANUNCIE SEU ALUGUEL</button>
        </div>
      </header>
  );
}

export default Header;