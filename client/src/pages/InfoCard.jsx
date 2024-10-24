import React, { useRef } from "react";
import "../styles/InfoCard/InfoCard.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Slider from "react-slick"; 
import { FaWhatsapp } from 'react-icons/fa';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Importando a imagem da pasta
import casa from "../image/casa.jpg";

const InfoCard = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Mostrando 3 imagens
    slidesToScroll: 1,
    autoplay: false,
    arrows: false, // Remover setas padrão
  };
  
  const next = () => {
    sliderRef.current.slickNext(); // Avança para a próxima imagem
  };

  const previous = () => {
    sliderRef.current.slickPrev(); // Volta para a imagem anterior
  };

  const images = [casa, casa, casa, casa, casa]; // Usando a mesma imagem 5 vezes

  return (
    <div>
      <Header />
      <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }} className="container-info-card">
        <div className="container-fotos">
          <Slider {...settings} ref={sliderRef}>
            {images.map((image, index) => (
              <div key={index} className="slider-item"> {/* Adicionando uma classe para o item do slider */}
                <img className="img-info-card" src={image} alt={`Foto ${index + 1}`} />
              </div>
            ))}
          </Slider>
          <div className="nav-buttons">
            <button onClick={previous} className="nav-button">
              <FaChevronLeft className="icon-style" />
            </button>
            <button onClick={next} className="nav-button">
              <FaChevronRight className="icon-style" />
            </button>
          </div>
        </div>
        <div className="container-title-card">
          <h2 style={{fontSize:'20px'}}>Aluguel/BA/Ilhéus/Salobrinho/Rua do ouro</h2>
        </div>
        <div className="infocard">
          <div className="infocard">
            <h2>Aluguel</h2>
            <h2 style={{fontSize:'40px'}}>R$ 800 <p style={{fontSize:'20px', display:'inline'}}>/mes</p></h2>
          </div>
        </div>
        <button className="button-info">
          <FaWhatsapp className="whatsapp-icon"/> Entrar em contato
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default InfoCard;
