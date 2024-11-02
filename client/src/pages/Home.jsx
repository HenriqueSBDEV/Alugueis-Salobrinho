import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SearchBar from "../components/SearchBar/SearchBar";
import AluguelCard from "../components/AluguelCard.jsx/AluguelCard";
import BodyPrincipal from "../components/BodyPrincipal/BodyPrincipal";

const Home = () =>{
  return(
    <div>
      <Header></Header>
      <div style={{display:"flex", justifyContent: "space-around"}}>
        <SearchBar></SearchBar>
          <BodyPrincipal></BodyPrincipal>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Home;