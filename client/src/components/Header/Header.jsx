import React from "react";
import "../../styles/Header.css"

const Header = () =>{
  return(
      <header>
        <div className="title">
          <h1 className="title-up">ALUGUÉIS</h1>
          <h1 className="title-down">SALOBRINHO</h1>
        </div>
        <div className="header-links">
          <a href="">HOME</a>
          <a href="">SOBRE O SALOBRINHO</a>
          <button>ANUNCIE SEU ALUGUEL</button>
        </div>
      </header>
  );
}

export default Header;