import React from "react";
import "../../styles/InfoDasbord/style.css"

const InfoDasbord = () =>{
  return(
    <div className="info-dashbord">
      <div className="info-container">
        <h4>Total de imóveis</h4>
        <h5>500</h5>
      </div>
      <div className="info-container">
        <h4>Imóveis pendentes</h4>
        <h5>50</h5>
      </div>
      <div className="info-container">
        <h4>Total de usuários</h4>
        <h5>600</h5>
      </div>
      <div className="info-container">
        <h4>Usuários ativos</h4>
        <h5>10</h5>
      </div>
    </div>
  );
}

export default InfoDasbord;