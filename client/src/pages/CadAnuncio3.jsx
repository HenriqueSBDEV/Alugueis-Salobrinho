import React from "react";
import HeaderLogado from "../components/Header-logado/Header-logado";
import Footer from "../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import TopoCadAnuncio from "../components/TopoCadAnuncio/TopoCadAnuncio";

const CadAnuncio3 = () =>{
  const navigate = useNavigate();
  const redirectAnt = () =>{
    navigate("/CadAnuncio2");
  }
  return(
    <div style={{display:"flex", flexDirection:"column"}}>
    <HeaderLogado />
    <TopoCadAnuncio rota={3} />
    <div className="main-container main-container3">
      <h2>Confirmar publicação do anúncio</h2>
      <p>
          Você está prestes a confirmar a publicação do seu anúncio. 
          Clique em "Confirmar" para que o anúncio fique disponível para visualização.
      </p>
    <form className="form-cad1">
        <br />
        <div className="btn-container btn-container3">
          <button onClick={redirectAnt} type="submit" className="btn-ant">Anterior</button>
          <button type="submit" className="btn-prox">Cadastrar</button>
        </div>
      </form>
    </div>
    <Footer />
    </div>
  );
}

export default CadAnuncio3;