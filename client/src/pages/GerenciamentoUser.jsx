import React from "react";
import HeaderModerador from "../components/HeaderPainel";
import Footer from "../components/Footer/Footer";
import "../styles/GerenciamentoUser/style.css";

const GerenciamentoUser = () => {
  const usuarios = [
    { id: 1, nome: "Henrique", telefone: "(11) 99999-9999", email: "teste@uesc.com", senha: "123456" },
    { id: 2, nome: "Maria", telefone: "(11) 98888-8888", email: "teste@uesc.com", senha: "abcdef" },
    { id: 3, nome: "Carlos", telefone: "(11) 97777-7777", email: "teste@uesc.com", senha: "ghijkl" },
    { id: 4, nome: "Henrique", telefone: "(11) 99999-9999", email: "teste@uesc.com", senha: "123456" },
    { id: 5, nome: "Maria", telefone: "(11) 98888-8888", email: "teste@uesc.com", senha: "abcdef" },
    { id: 6, nome: "Carlos", telefone: "(11) 97777-7777", email: "teste@uesc.com", senha: "ghijkl" },
    { id: 7, nome: "Henrique", telefone: "(11) 99999-9999", email: "teste@uesc.com", senha: "123456" },
    { id: 8, nome: "Maria", telefone: "(11) 98888-8888", email: "teste@uesc.com", senha: "abcdef" },
    { id: 9, nome: "Carlos", telefone: "(11) 97777-7777", email: "teste@uesc.com", senha: "ghijkl" },
    { id: 10, nome: "Henrique", telefone: "(11) 99999-9999", email: "teste@uesc.com", senha: "123456" },
    { id: 11, nome: "Maria", telefone: "(11) 98888-8888", email: "teste@uesc.com", senha: "abcdef" },
    { id: 12, nome: "Carlos", telefone: "(11) 97777-7777", email: "teste@uesc.com", senha: "ghijkl" },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <HeaderModerador />
      <div className="container-user">
        <h2>Gerenciamento de Usuários</h2>
        <div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Telefone</th>
                <th>E-mail</th>
                <th>Senha</th>
                <th>Apagar User</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario) => (
                <tr key={usuario.id}>
                  <td>{usuario.id}</td>
                  <td>{usuario.nome}</td>
                  <td>{usuario.telefone}</td>
                  <td>{usuario.email}</td>
                  <td>{usuario.senha}</td>
                  <td>
                    <button className="apagar-user">APAGAR</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GerenciamentoUser;
