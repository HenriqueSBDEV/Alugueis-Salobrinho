import React from "react";
import "../styles/Sobre/Sobre.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Collapse } from 'antd';
const { Panel } = Collapse;



const Sobre = () => {
  return (
    <div style={{display:"flex", justifyContent: "center"}}>
      <Header></Header>
      <div className="sobre-container">
        <h2 className="title">História do Salobrinho</h2>
        <p className="paragrafo">O bairro Salobrinho, localizado em Ilhéus, Bahia, teve seu desenvolvimento inicialmente associado à expansão da Universidade Estadual de Santa Cruz (UESC). O crescimento populacional do bairro foi impulsionado em grande parte pela presença de estudantes, professores e funcionários da universidade, que buscavam moradia nas proximidades. Antes disso, Salobrinho era uma área predominantemente rural, com propriedades de pequeno porte e áreas agrícolas. Com o passar do tempo, a urbanização tomou conta da região, e o bairro passou a contar com mais infraestrutura e serviços.O nome "Salobrinho" pode ter origem nas características geográficas ou hídricas do local, com a presença de águas salobras (uma mistura de água doce e salgada). Ao longo dos anos, o bairro cresceu de forma significativa, ganhando comércios, escolas e melhor infraestrutura para atender às necessidades de sua população crescente, formada majoritariamente por universitários e famílias de baixa a média renda.</p>
        <h2 className="title">Localização do Salobrinho</h2>
        <p className="paragrafo">O bairro Salobrinho está localizado na zona norte da cidade de Ilhéus, Bahia, às margens da rodovia BR-415, que liga Ilhéus a Itabuna. Ele está situado a aproximadamente 12 km do centro de Ilhéus, e sua localização estratégica oferece fácil acesso tanto à cidade quanto a outras regiões próximas, como Itabuna, através de transporte público e particular. A proximidade com a Universidade Estadual de Santa Cruz (UESC), que fica a poucos minutos do bairro, é um dos principais atrativos da região. Muitos estudantes e profissionais da universidade optam por morar em Salobrinho devido à conveniência de estar perto do campus. O bairro também possui acesso direto à rodovia principal, facilitando o deslocamento para outras áreas da cidade e da região.Salobrinho é um bairro em desenvolvimento, com potencial de crescimento e que continua se expandindo à medida que mais serviços e infraestrutura são introduzidos para atender a sua população crescente.</p>
        <section>
          <h2 className="title">Localização do Salobrinho no Google Maps:</h2>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7714.956655125967!2d-39.1818810044291!3d-14.798388769853675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x739a822b11ea6c5%3A0xa1783a583b5f6e6f!2sSalobrinho%2C%20Ilh%C3%A9us%20-%20BA!5e0!3m2!1spt-BR!2sbr!4v1728530025014!5m2!1spt-BR!2sbr"
            width="600"
            height="450" 
            style={{ border: 0 }}
            allowFullScreen = {true}
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </section>
        <h2>Infraestrutura</h2>
        <div className="acordion">
          <Collapse defaultActiveKey={['1']}>
            <Panel header="Comércio Local" key="1">
              <p>Salobrinho possui uma variedade de pequenos comércios, 
                  como mercados, padarias e farmácias, que atendem às necessidades
                  diárias dos moradores. Além disso, há lojas de conveniência e 
                  estabelecimentos voltados para alimentação, como lanchonetes e restaurantes
              </p>
            </Panel>
            <Panel header="Saúde" key="2">
              <p>O bairro conta com um posto de saúde que oferece
                  atendimentos básicos, como consultas médicas, 
                  vacinas e serviços de enfermagem. Para serviços 
                  médicos mais especializados, os moradores podem se 
                  deslocar até o centro de Ilhéus, que fica a poucos minutos de distância.
              </p>
            </Panel>
            <Panel header="Transporte Público" key="3">
              <p>O Salobrinho é bem servido por linhas de transporte público
                  que ligam o bairro a diferentes partes de Ilhéus, incluindo 
                  o centro da cidade e outros bairros. Os ônibus passam com 
                  regularidade, facilitando a mobilidade dos estudantes e 
                  trabalhadores que vivem no bairro.
              </p>
            </Panel>
            <Panel header="Proximidade com a UESC" key="4">
              <p>Um dos grandes diferenciais do Salobrinho é a proximidade
                  com a Universidade Estadual de Santa Cruz (UESC). 
                  Essa localização estratégica atrai estudantes e professores 
                  que buscam residir perto da universidade, criando uma demanda
                  por serviços voltados para a comunidade acadêmica.
              </p>
            </Panel>                        
          </Collapse>
        </div>
        <section>
          <h2 className="title">Video sobre o bairro:</h2>
          <iframe 
            src="https://www.youtube.com/embed/EVKPa719W2k" 
            width="560"
            height="315"
            title="Vídeo sobre o Salobrinho"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{marginBottom:"50px"}}
          ></iframe>
        </section>
      <Footer style={{position:'static',}}></Footer>
      </div>
    </div>    
  );
};

export default Sobre;