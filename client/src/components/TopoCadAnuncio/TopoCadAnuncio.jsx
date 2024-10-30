import React from "react";
import "../../styles/TopoCadAnuncio/TopoCadAnuncio.css";

const TopoCadAnuncio = ({ rota }) => {
  return (
    <div className="topo-container">
      <div className={`primeiro ${rota === 1 ? "ativo" : ""}`}>
        <h2>1°</h2>
      </div>
      <hr/>
      <div className={`segundo ${rota === 2 ? "ativo" : ""}`}>
        <h2>2°</h2>
      </div>
      <hr/>
      <div className={`terceiro ${rota === 3 ? "ativo" : ""}`}>
        <h2>3°</h2>
      </div>
    </div>
  );
}

export default TopoCadAnuncio;
