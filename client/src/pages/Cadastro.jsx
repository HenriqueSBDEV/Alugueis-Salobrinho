import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../styles/Cadastro/Cadastro.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


const Cadastro = () => {
  return (
    <div style={{display:"flex", justifyContent: "center"}}>
      <Header LinksOn={false}></Header>
      <div className="container-section">
        <div className="container-secundary">
          <h3>Cadastrar</h3>
          <h6>Digite os seus dados para cadastrar</h6>
          <form>
            <div className="form-login">
              <h4>Nome</h4>
              <div className="input-container">
                <i className="fas fa-user"></i> {/* Ícone de usuário */}
                <input type="email" placeholder="Digite o seu nome" />
              </div>              
              <h4>Telefone</h4>
              <div className="input-container">
                <i className="fas fa-phone"></i> {/* Ícone de usuário */}
                <input type="email" placeholder="Digite o seu telefone" />
              </div>              
              <h4>E-mail</h4>
              <div className="input-container">
                <i className="fas fa-envelope"></i> {/* Ícone de usuário */}
                <input type="email" placeholder="Digite o seu e-mail" />
              </div>
              <h4>Senha</h4>
              <div className="input-container">
                <i className="fas fa-lock"></i> {/* Ícone de cadeado */}
                <input type="password" placeholder="Digite a sua senha" />
              </div>
              <button className="button">Cadastrar</button>
              <div>
              <p>Já tem conta?</p><a href="/login">Entre aqui</a>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Cadastro;
