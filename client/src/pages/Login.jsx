import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../styles/Login/Login.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Login = () => {
  return (
    <div style={{display:"flex", justifyContent: "center"}}>
      <Header LinksOn={false}></Header>
      <div className="container-section">
        <div className="container-secundary">
          <h3>Login</h3>
          <h6>Digite os seus dados de acesso abaixo</h6>
          <form>
            <div className="form-login">
              <h4>E-mail</h4>
              <div className="input-container">
                <i className="fas fa-user"></i> 
                <input required={true} type="email" placeholder="Digite o seu e-mail" />
              </div>
              <h4>Senha</h4>
              <div className="input-container">
                <i className="fas fa-lock"></i>
                <input required={true} type="password" placeholder="Digite a sua senha" />
              </div>
              <a href="#">Esqueci minha senha</a>
              <button className="buuton">Entrar</button>
              <div>
              <p>Não tem conta?</p><a href="/cadastro">Cadastre-se aqui</a>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Login;
