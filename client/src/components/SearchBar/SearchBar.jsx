import React, { useState } from "react";
import "../../styles/SearchBar/SearchBar.css";

const SearchBar = () => {
  const [quartosSelecionados, setQuartosSelecionados] = useState(null);

  const handleQuartoClick = (numero) => {
    setQuartosSelecionados(quartosSelecionados === numero ? null : numero);
  };

  return (
    <div className="pai-aside">
      <aside>
        <h2>Filtrar</h2>
        <h3>Localização do imóvel</h3>
        <input type="text" placeholder="Ex. Rua do ouro" />
        <h3>Tipo do imóvel</h3>
        <select name="" id="">
          <option value="">Mostrar todos</option>
          <option value="">Casa</option>
          <option value="">Apartamento</option>
          <option value="">Kitnet</option>
          <option value="">Sobrado</option>
        </select>
        <h3>Preço mínimo - Preço máximo</h3>
        <div className="min-max">
          <input type="text" name="" id="" placeholder="Min" className="input-min-max" />
          <h3>-</h3>
          <input type="text" name="" id="" placeholder="Max" className="input-min-max" />
        </div>
        <h3>Número de quartos</h3>
        <div className="num-quartos">
          {[1, 2, 3, '4+'].map((quarto) => (
            <button
              key={quarto}
              className={`button-Search ${quartosSelecionados === quarto ? 'ativo' : ''}`}
              onClick={() => handleQuartoClick(quarto)}
            >
              {quarto}
            </button>
          ))}
        </div>
        <h3>Ordenar por</h3>
        <div id="order-label">
          <label>
            <input type="radio" name="sort" id="" className="input-radio" />
            <p>Menor Preço</p>
          </label>
          <label>
            <input type="radio" name="sort" id="" className="input-radio" />
            <p>Maior Preço</p>
          </label>
          <label>
            <input type="radio" name="sort" id="" className="input-radio" />
            <p>Mais recentes</p>
          </label>
        </div>
        <input type="button" value="Buscar" className="buscar" />
      </aside>
    </div>
  );
};

export default SearchBar;
