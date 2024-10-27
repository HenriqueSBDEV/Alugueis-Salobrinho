import React, { useState } from "react";
import HeaderLogado from "../components/Header-logado/Header-logado";
import Footer from "../components/Footer/Footer";
import "../styles/AlterarDados/AlterarDados.css";
import DeleteConta from "../modal/DeleteConta/DeleteConta";

const AlterarDados = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const abrirModal = () => {
    setModalOpen(true);
  }

  const fecharModal = () => {
    setModalOpen(false);
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <HeaderLogado onDeleteAccount={abrirModal} /> {/* Passando a função aqui */}
      <div className={modalOpen ? "container-dados desfocado" : "container-dados"}>
        <h2>Alterar dados</h2>
        <form>
          <div className="form-dados">
            <h4>E-mail</h4>
            <input type="email" placeholder="teste@gmail.com" className="input-dados" value={"teste@gmail.com"} />
            <h4>Telefone</h4>
            <input type="number" placeholder="00 000000000" className="input-dados sem-setas" />
            <h4>Senha atual</h4>
            <input type="password" placeholder="Digite sua senha atual" className="input-dados" />
            <h4>Nova senha</h4>
            <input type="password" placeholder="Digite sua nova senha" className="input-dados" />
            <h4>Confirmar nova senha</h4>
            <input type="password" placeholder="Confirme sua nova senha" className="input-dados" />
            <br />
            <button type="button" className="button-dados">Alterar dados</button>
          </div>
        </form>
      </div>
      <Footer />
      {modalOpen && (
        <DeleteConta
          onClose={fecharModal}
          onConfirm={() => {

            fecharModal(); 
          }}
        />
      )}
    </div>
  );
}

export default AlterarDados;
