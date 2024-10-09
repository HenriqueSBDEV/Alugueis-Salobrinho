import React from "react";
import "../BodyPrincipal/BodyPrincipal.css"
import SearchBar from "../SearchBar/SearchBar";
import AluguelCard from "../AluguelCard.jsx/AluguelCard";

const Body = () =>{
  return(
    <div className="container-body">
      <SearchBar></SearchBar>
      {/* <div className="aluguel"> */}
      <AluguelCard></AluguelCard>
      {/* <AluguelCard></AluguelCard>
      <AluguelCard></AluguelCard>
      <AluguelCard></AluguelCard>
      <AluguelCard></AluguelCard>
      <AluguelCard></AluguelCard>
      <AluguelCard></AluguelCard>
      <AluguelCard></AluguelCard>
      </div> */}
    </div>
  );
}

export default Body;