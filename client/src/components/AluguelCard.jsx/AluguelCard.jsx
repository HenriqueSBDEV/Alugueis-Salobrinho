import React, { useRef } from "react";
import "../../styles/AluguelCard/AluguelCard.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"; 
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Importando os ícones
import casa from "../../image/casa.jpg";

const AluguelCard = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false, // Remover setas padrão
  };

  // Funções para navegação
  const next = () => {
    sliderRef.current.slickNext(); // Avança para a próxima imagem
  };

  const previous = () => {
    sliderRef.current.slickPrev(); // Volta para a imagem anterior
  };

  return (
    <div className="container-card">
      <div className="carrosel-fotos">
        <Slider {...settings} ref={sliderRef}>
          <div>
            <img className="img-card" src={casa} alt="Casa 1" />
          </div>
          <div>
            <img className="img-card" src={casa} alt="Casa 2" />
          </div>
          <div>
            <img className="img-card" src={casa} alt="Casa 3" />
          </div>
        </Slider>
        <div className="nav-buttons">
          <button onClick={previous} className="nav-button">
            <FaChevronLeft /> {/* Ícone para "Anterior" */}
          </button>
          <button onClick={next} className="nav-button">
            <FaChevronRight /> {/* Ícone para "Próximo" */}
          </button>
        </div>
      </div>
      <div className="info">
        <h3 className="title-card">Salobrinho - Ilhéus - Bahia</h3>
        <h4 className="subtitle-card">Casa para alugar - 100m²</h4>
        <div className="valor-contato">
          <h3 className="valor">R$ 800.00</h3>
          <h3 className="contato">Entrar em contato</h3>
        </div>
      </div>
    </div>
  );
}

export default AluguelCard;
