import React from "react";
import HeaderLogado from "../components/Header-logado/Header-logado";
import Footer from "../components/Footer/Footer";
import TopoCadAnuncio from "../components/TopoCadAnuncio/TopoCadAnuncio";
import "../styles/CadAnuncioUser/CadAnuncioUser.css";
import { useNavigate } from "react-router-dom";

const CadAnuncio = () =>{
  const navigate = useNavigate();
  const redirect = () =>{
    navigate("/CadAnuncio2")
  }
  return(
    <div style={{display:"flex", flexDirection: "column"}}>
      <HeaderLogado></HeaderLogado>
          <TopoCadAnuncio rota={1}></TopoCadAnuncio>
          <div className="main-container">
            <form action="" className="form-cad1">
              <h2>Informações do imóvel</h2>
              <input type="text" name="" id="" placeholder="Titulo do imóvel"/>
              <select name="" id="">
                <option value="">Casa</option>
                <option value="">Apartamento</option>
                <option value="">Kitnet</option>
                <option value="">Sobrado</option>
              </select>
              <input className="sem-setas" type="number" name="" id="" placeholder="Aréa M² (ex: 40)"/>
              <h3>Número de quartos</h3>
              <div className="num-quartos">
                <button className="button-Search">1</button>
                <button className="button-Search">2</button>
                <button className="button-Search">3</button>
                <button className="button-Search">4+</button>
              </div>
              <h3>Quantidade de banheiros</h3>
              <div className="num-quartos">
                <button className="button-Search">1</button>
                <button className="button-Search">2</button>
                <button className="button-Search">3</button>
                <button className="button-Search">4+</button>
              </div>
              <h3>Mobiliado</h3>
              <div className="num-quartos">
                <button className="button-Search">Sim</button>
                <button className="button-Search">Não</button>
              </div>
              <input className="sem-setas" type="number" name="" id="" placeholder="Valor R$"/>
              <br/>
              <button onClick={redirect} className="btn-prox" style={{marginTop:"20px"}}>Proximo</button>
            </form>
          </div>
      <Footer></Footer>
    </div>
  );
}

export default CadAnuncio;