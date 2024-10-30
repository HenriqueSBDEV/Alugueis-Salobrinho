import React from "react";
import HeaderLogado from "../components/Header-logado/Header-logado";
import Footer from "../components/Footer/Footer";
import TopoCadAnuncio from "../components/TopoCadAnuncio/TopoCadAnuncio";

const CadAnuncio = () =>{
  return(
    <div style={{display:"flex", flexDirection: "column"}}>
      <HeaderLogado></HeaderLogado>
          <TopoCadAnuncio></TopoCadAnuncio>
      <Footer></Footer>
    </div>
  );
}

export default CadAnuncio;