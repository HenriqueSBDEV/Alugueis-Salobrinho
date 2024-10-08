import React from "react";
import "../../styles/SearchBar.module.css";

const SearchBar = () =>{
  return(
    <aside>
      <h2>Filtar</h2>
      <h3>Localização do imóvel</h3>
      <input type="text" placeholder="Ex. Rua do ouro"></input>
      <h3>Tipo do imóvel</h3>
      <select name="" id="">
        <option value="">Mostrar todos</option>
        <option value="">Casa</option>
        <option value="">Apartamento</option>
        <option value="">Kitnet</option>
        <option value="">Sobrado</option>
      </select>
      <h3>Preço minimo - Preço maximo</h3>
      <div className="min-max">
        <input type="text" name="" id="" placeholder="Min" className="input-min-max"/>
        <h3>-</h3>
        <input type="text" name="" id="" placeholder="Max" className="input-min-max"/>
      </div>
      <h3>Número de quartos</h3>
      <div className="num-quartos">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4+</button>
      </div>
      <h3>Ordenar por</h3>
        <div id="order-label">
          <label>
            <input type="radio" name="sort" id="" className="input-radio"/> Menor Preço
          </label>
          <label>
            <input type="radio" name="sort" id="" className="input-radio"/> Maior Preço
          </label>
          <label>
            <input type="radio" name="sort" id="" className="input-radio"/> Mais recentes
          </label>                    
        </div>
      <input type="button" value="Buscar" />
    </aside>
  );
}

export default SearchBar;