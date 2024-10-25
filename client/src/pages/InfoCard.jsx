import React, { useRef } from "react";
import "../styles/InfoCard/InfoCard.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Slider from "react-slick"; 
import { FaRulerCombined, FaHome, FaBed, FaToilet, FaCouch, FaFileContract } from "react-icons/fa";
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
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false, 
  };

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const images = [casa, casa, casa, casa, casa]; 
  return (
    <div>
      <Header />
      <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }} className="container-info-card">
        <div className="container-fotos">
          <Slider {...settings} ref={sliderRef}>
            {images.map((image, index) => (
              <div key={index} className="slider-item"> {}
                <img className="img-info-card" src={image} alt={`Foto ${index + 1}`} />
              </div>
            ))}
          </Slider>
          <div className="nav-buttons">
            <button onClick={previous} className="nav-buton">
              <FaChevronLeft className="icon-style" />
            </button>
            <button onClick={next} className="nav-buton">
              <FaChevronRight className="icon-style" />
            </button>
          </div>
        </div>
        <div className="container-title-card">
          <h2 style={{fontSize:'20px'}}>Aluguel - BA - Ilhéus - Salobrinho - <prop>Rua do ouro</prop></h2>
        </div>
        <div className="infocard">
          <div className="infocard">
            <h2>Aluguel</h2>
            <h2 style={{fontSize:'40px'}}>R$ 800 <p style={{fontSize:'20px', display:'inline'}}>/mes</p></h2>
            <div className="div-line1">
              <FaRulerCombined style={{width:'30px', height:'30px'}}></FaRulerCombined>
              <h2>100m²</h2>
              <FaHome style={{width:'30px', height:'30px'}}></FaHome>
              <h2>CASA</h2>
            </div>
            <div className="div-line2">
              <FaBed style={{width:'30px', height:'30px'}}></FaBed>
                <h2>2 quartos</h2>
              <FaToilet style={{width:'30px', height:'30px'}}></FaToilet>
                <h2>2 banheiro</h2>
            </div>
            <div className="div-line3">
              <FaCouch style={{width:'30px', height:'30px'}}></FaCouch>
                <h2>Com mobilia</h2>
              <FaFileContract style={{width:'30px', height:'30px'}}></FaFileContract>
                <h2>Contrato de 6 meses</h2>
            </div>
          </div>
        </div>
        <a target="_blank" className="button-info" href="https://encurtador.com.br/I9WjW" rel="noreferrer">
          <FaWhatsapp className="whatsapp-icon"/> Entrar em contato
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default InfoCard;
