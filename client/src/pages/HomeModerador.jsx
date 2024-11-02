import React from "react";
import HeaderModerador from "../components/HeaderPainel";
import Footer from "../components/Footer/Footer";
import InfoDasbord from "../components/InfoDasbord";
import StatusAluguel from "../components/GraficoAprovado";
import CrescimentoGrafico from "../components/GraficoCrescimento";

const HomeModerador = () => {

  const style = {
    display: "flex",
    flexDirection: "column",
  };
  const stylediv ={
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "130px",
    flexWrap: "wrap",
  }

  return (
    <div style={{display:"flex", justifyContent:"center"}}>
      <HeaderModerador />
      <div style={style}>
        <InfoDasbord/>
        <div style={stylediv}>
         <StatusAluguel/>
          <CrescimentoGrafico/>
        </div>
      </div>
      <Footer/>
    </div>
  );
};  

export default HomeModerador