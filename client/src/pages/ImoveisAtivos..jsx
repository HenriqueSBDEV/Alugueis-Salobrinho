import React from "react";
import HeaderModerador from "../components/HeaderPainel";
import Footer from "../components/Footer/Footer";
import ImovelAtivo from "../components/ImovelAtivo";

const ImoveisAtivos = () =>{
  return(
    <div style={{display:"flex", justifyContent:"center"}}>
      <HeaderModerador></HeaderModerador>
      <div style={{marginTop:"130px", marginBottom:"130px"}}>
      <h2 style={{textAlign:"center"}}>Imovéis ativos</h2>
        <ImovelAtivo></ImovelAtivo>
        <ImovelAtivo></ImovelAtivo>
        <ImovelAtivo></ImovelAtivo>
        <ImovelAtivo></ImovelAtivo>
        <ImovelAtivo></ImovelAtivo>
        <ImovelAtivo></ImovelAtivo>
        <ImovelAtivo></ImovelAtivo>
        <ImovelAtivo></ImovelAtivo>
        <ImovelAtivo></ImovelAtivo>
        <ImovelAtivo></ImovelAtivo>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default ImoveisAtivos;