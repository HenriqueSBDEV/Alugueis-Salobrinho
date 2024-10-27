import React from "react";
import HeaderLogado from "../components/Header-logado/Header-logado";
import Footer from "../components/Footer/Footer";
import "../styles/AnunciosUser/AnunciosUser.css";
import AnuncioUser from "../components/AnuncioUser/AnuncioUser";

const AnunciosUser = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <HeaderLogado/>
      <div className="main-container">
        <h2 className="title-anuncios">Seus anuncios cadastrados</h2>
        <div className="anuncios-list">
          <AnuncioUser />
          <AnuncioUser />
          <AnuncioUser />
          <AnuncioUser />
          <AnuncioUser />
          <AnuncioUser />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AnunciosUser;
