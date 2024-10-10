// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from "react";
import "../styles/Sobre/Sobre.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer"

const Sobre = () => {
  return (
    <div>
      <Header></Header>
      <div className="sobre-container">
        <h2 className="title">História do Salobrinho</h2>
        <p className="paragrafo">O bairro Salobrinho, localizado em Ilhéus, Bahia, teve seu desenvolvimento inicialmente associado à expansão da Universidade Estadual de Santa Cruz (UESC). O crescimento populacional do bairro foi impulsionado em grande parte pela presença de estudantes, professores e funcionários da universidade, que buscavam moradia nas proximidades. Antes disso, Salobrinho era uma área predominantemente rural, com propriedades de pequeno porte e áreas agrícolas. Com o passar do tempo, a urbanização tomou conta da região, e o bairro passou a contar com mais infraestrutura e serviços.O nome "Salobrinho" pode ter origem nas características geográficas ou hídricas do local, com a presença de águas salobras (uma mistura de água doce e salgada). Ao longo dos anos, o bairro cresceu de forma significativa, ganhando comércios, escolas e melhor infraestrutura para atender às necessidades de sua população crescente, formada majoritariamente por universitários e famílias de baixa a média renda.</p>
        <h2 className="title">Localização do Salobrinho</h2>
        <p className="paragrafo">O bairro Salobrinho está localizado na zona norte da cidade de Ilhéus, Bahia, às margens da rodovia BR-415, que liga Ilhéus a Itabuna. Ele está situado a aproximadamente 12 km do centro de Ilhéus, e sua localização estratégica oferece fácil acesso tanto à cidade quanto a outras regiões próximas, como Itabuna, através de transporte público e particular. A proximidade com a Universidade Estadual de Santa Cruz (UESC), que fica a poucos minutos do bairro, é um dos principais atrativos da região. Muitos estudantes e profissionais da universidade optam por morar em Salobrinho devido à conveniência de estar perto do campus. O bairro também possui acesso direto à rodovia principal, facilitando o deslocamento para outras áreas da cidade e da região.Salobrinho é um bairro em desenvolvimento, com potencial de crescimento e que continua se expandindo à medida que mais serviços e infraestrutura são introduzidos para atender a sua população crescente.</p>
        <h2>Infraestrutura</h2>
        <section>
          <h2 className="title">Video sobre o bairro:</h2>
          <iframe 
            src="https://www.youtube.com/embed/EVKPa719W2k" 
            width="560"
            height="315"
            title="Vídeo sobre o Salobrinho"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </section>
      </div>
      <Footer></Footer>
    </div>    
  );
};

export default Sobre;