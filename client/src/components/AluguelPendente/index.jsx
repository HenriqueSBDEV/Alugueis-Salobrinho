import React, { useRef } from "react";
import "../../styles/AluguelCard/AluguelCard.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"; 
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Importando os ícones
import casa from "../../image/casa.jpg";

const AluguelPendente = () => {

  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
  };

  const next = () => {
    sliderRef.current.slickNext(); 
  };

  const previous = () => {
    sliderRef.current.slickPrev();
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
            <FaChevronLeft />
          </button>
          <button onClick={next} className="nav-button">
            <FaChevronRight />
          </button>
        </div>
      </div>
      <div className="info info-moderador" style={{}}>
        <h3 className="title-card">Salobrinho - Ilhéus - Bahia</h3>
        <h4 className="subtitle-card" style={{all:"unset", marginLeft:"10px", marginTop:"10px"}}>Casa para alugar - 100m²</h4>
        <div className="info-casa" style={{display:"flex", gap:"40px",marginTop:"10px" ,marginLeft:"10px"}}>
          <h4 style={{all:"unset"}}>2 quartos</h4>
          <h4 style={{all:"unset"}}>2 banheiros</h4>
          <h4 style={{all:"unset"}}>Com mobilia</h4>
        </div>
        <div className="valor-contato">
          <h3 className="valor">R$ 800.00</h3>
          <div className="action-aluguel">
            <button className="aprovar">APROVAR</button>
            <button className="deletar">DELETAR</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AluguelPendente;
