import React from "react";
import HeaderModerador from "../components/HeaderPainel";
import Footer from "../components/Footer/Footer";
import AluguelCard from "../components/AluguelCard.jsx/AluguelCard";
import AluguelPendente from "../components/AluguelPendente";

const ImoveisPendentes = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <HeaderModerador />
      <div className="container-imoveis" style={{marginTop:"130px", marginBottom:"130px"}}>
        <h2 style={{textAlign:"center"}}>Imóveis pendentes</h2>
        <div>
          <AluguelPendente/>
          <AluguelPendente/>
          <AluguelPendente/>
          <AluguelPendente/>
          <AluguelPendente/>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ImoveisPendentes;