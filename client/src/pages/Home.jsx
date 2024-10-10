import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SearchBar from "../components/SearchBar/SearchBar";
import AluguelCard from "../components/AluguelCard.jsx/AluguelCard";

const Home = () =>{
  return(
    <div>
      <Header></Header>
      <div style={{display:"flex", justifyContent: "space-around"}}>
        <SearchBar></SearchBar>
          <AluguelCard></AluguelCard>
          {/* <AluguelCard></AluguelCard>
          <AluguelCard></AluguelCard>
          <AluguelCard></AluguelCard>        */}
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Home;