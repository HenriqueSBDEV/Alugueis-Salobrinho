import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Container from "../components/Container/Container";

const Cadastro = () => {
  return(
    <div>
      <Header LinksOn={false}></Header>
      <Container></Container>
      <Footer></Footer>
    </div>
  );
}

export default Cadastro;