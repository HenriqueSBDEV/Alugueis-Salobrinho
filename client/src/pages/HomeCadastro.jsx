import React from "react";
import HeaderLogado from "../components/Header-logado/Header-logado";
import Footer from "../components/Footer/Footer";
import "../styles/HomeCadastro/HomeCadastro.css";
import Fundo from "../image/fundo.png";

const HomeCadastro = () =>{
  return(
    <div style={{display:"flex", justifyContent: "center"}}>
        <HeaderLogado></HeaderLogado>
        <div className="container-cadastro">
          {/* <img src={Fundo} alt="" /> */}
          <h2>Bem vindo, User</h2>
          <h3>Seu próximo inquilino está a um clique de distância! Cadastre seu imóvel.</h3>
          <button className="button-cadastro">Cadastre imovel</button>
        </div>
        <Footer></Footer>
    </div>
  );
}

export default HomeCadastro;