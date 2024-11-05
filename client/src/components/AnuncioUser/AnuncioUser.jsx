import React from "react";
import casa from "../../image/casa.jpg";
import "../../styles/AnunciosUser/AnunciosUser.css";

const AnuncioUser = () => {
  return (
    <div  className="container-anuncios-user">
    <div className="anuncios-user">
      <div className="anuncio-user">
        <div className="image-container">
          <img src={casa} alt="" />
        </div>
        <div className="info-containe">
          <div className="info-header">
            <h3>Salobrinho - Rua do Ouro</h3>
            <h4>Casa para alugar</h4>
          </div>
          <div className="info-footer">
            <h3>R$ 800</h3>
            <div>
              <button className="edit-aluguel">Editar</button>
              <button className="delete-aluguel">Deletar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AnuncioUser;