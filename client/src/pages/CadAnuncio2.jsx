import React from "react";
import HeaderLogado from "../components/Header-logado/Header-logado";
import Footer from "../components/Footer/Footer";
import TopoCadAnuncio from "../components/TopoCadAnuncio/TopoCadAnuncio";
import "../styles/CadAnuncioUser/CadAnuncioUser.css";

const CadAnuncio2 = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <HeaderLogado />
      <TopoCadAnuncio rota={2} />
      <div className="main-container">
        <form action="" className="form-cad1">
          <h2>Localização do Imóvel</h2>
          <input className="sem-setas" type="number" placeholder="CEP" />
          <input type="text" placeholder="Cidade" />
          <input type="text" placeholder="Bairro" />
          <input type="text" placeholder="Rua" />
          <input className="sem-setas" type="number" placeholder="Número" />
          <textarea placeholder="Descrição" />
          <h2 style={{ marginTop: "20px" }}>Imagens do imóvel</h2>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" , marginTop: "0px"}}>
            <label htmlFor="file-upload" className="custom-file-upload">
              Escolher arquivo
            </label>
            <input type="file" id="file-upload" className="file-input" />
          </div>
          <br />
          <div className="btn-container">
            <button type="submit" className="btn-ant">Anterior</button>
            <button type="submit" className="btn-prox">Próximo</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default CadAnuncio2;
