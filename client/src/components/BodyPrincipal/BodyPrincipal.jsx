import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import AluguelCard from "../AluguelCard.jsx/AluguelCard";
import "../BodyPrincipal/BodyPrincipal.css"

const Body = () =>{
  return(
    <div className="container-body">
      <SearchBar></SearchBar>
      <div className="container-aluguel">
        <AluguelCard></AluguelCard>
        <AluguelCard></AluguelCard>
        <AluguelCard></AluguelCard>
        <AluguelCard></AluguelCard>
        <AluguelCard></AluguelCard>
        <AluguelCard></AluguelCard>
        <AluguelCard></AluguelCard>
        <AluguelCard></AluguelCard> 
      </div>
    </div>
  );
}

export default Body;