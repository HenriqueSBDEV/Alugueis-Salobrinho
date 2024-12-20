import React, { useRef } from "react";
import "../../styles/AluguelCard/AluguelCard.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"; 
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; 
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
      <div className="info" onClick={() => window.location.href = "/infocard"}>
        <h3 className="title-card">Salobrinho - Ilhéus - Bahia</h3>
        <h4 className="subtitle-card">Casa para alugar - 100m²</h4>
        <div className="valor-contato">
          <h3 className="valor">R$ 800.00</h3>
          <a href="https://encurtador.com.br/I9WjW" target="_blank" className="contato" rel="noreferrer">Entrar em contato</a>
        </div>
      </div>
    </div>
  );
}

export default AluguelCard;
