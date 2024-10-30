import React from "react";
import HeaderLogado from "../components/Header-logado/Header-logado";
import Footer from "../components/Footer/Footer";
import "../styles/HomeCadastro/HomeCadastro.css";

const HomeCadastro = () => {
  const handleRedirect = () => {
    window.location.href = "/CadAnuncio1";
  };
  
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <HeaderLogado />
      <div className="container-cadastro">
        <h2>Bem vindo, Henrique</h2>
        <h3>Seu próximo inquilino está a um clique de distância! Cadastre seu imóvel.</h3>
        <button className="button-cadastro" onClick={handleRedirect}>
          Cadastre imóvel
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default HomeCadastro;
