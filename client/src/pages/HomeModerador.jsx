import React from "react";
import HeaderModerador from "../components/HeaderPainel";
import Footer from "../components/Footer/Footer";
import InfoDasbord from "../components/InfoDasbord";

const HomeModerador = () => {
  return (
    <div style={{display:"flex", justifyContent:"center"}}>
      <HeaderModerador />
      <InfoDasbord/>
      <Footer />
    </div>
  );
};  

export default HomeModerador