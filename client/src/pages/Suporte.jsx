import React from "react";
import HeaderLogado from "../components/Header-logado/Header-logado";
import Footer from "../components/Footer/Footer";
import "../styles/Suporte/Suporte.css"
import { Collapse } from "antd";
const {Panel} = Collapse;

const Suporte = () =>{
  return(
    <div style={{display:"flex", justifyContent:"center", paddingBottom:"160px"}}>
      <HeaderLogado></HeaderLogado>
        <div className="container-suport">
          <h2 className="titulo-suport">Ajuda e suporte</h2>
          <div className="perguntas">
            <h3>Duvidas e perguntas frequentes</h3>
            <Collapse defaultActiveKey={['1']} className="acordion">
              <Panel header="Como posso criar um anúncio?" key="1">
                Para criar um anúncio, acesse sua conta e clique em "Criar Anúncio".
                Preencha todas as informações necessárias, como descrição, preço e 
                fotos do imóvel, e clique em "Enviar".
              </Panel>
              <Panel header="Como posso editar meu anúncio?" key="2">
                Acesse sua conta e vá para "Meus Anúncios". Selecione o anúncio que 
                deseja editar, faça as alterações necessárias e clique em "Salvar".
              </Panel>
              <Panel header="Posso excluir meu anúncio?" key="3">
                Sim, você pode excluir seu anúncio. Vá para "Meus Anúncios", selecione
                o anúncio que deseja excluir e clique em "Excluir". Confirme a ação quando solicitado.
              </Panel>
              <Panel header="Como posso entrar em contato com o suporte?" key="4">
                Você pode entrar em contato conosco através do formulário de contato na seção "Suporte"
                ou enviar um e-mail para [henriquesousa5507@gmail.com].
              </Panel>
              <Panel header="Qual é a política de privacidade do site?" key="5">
                Nossa política de privacidade descreve como coletamos, usamos e protegemos suas informações
                pessoais. Você pode lê-la completa no link disponível na parte inferior da página.
              </Panel>
              <Panel header="Como posso alterar minha senha?" key="6">
                Para alterar sua senha, acesse sua conta, vá para "Configurações" e clique em "Alterar Senha". 
                Siga as instruções para definir uma nova senha.
              </Panel>
              <Panel header="Qual é o papel dos moderadores na plataforma?" key="7">
                Os moderadores são responsáveis por revisar e aprovar os anúncios antes que eles sejam publicados
                no site. Eles garantem que os anúncios atendam às diretrizes da plataforma e que não contenham 
                conteúdo inapropriado ou enganoso.
              </Panel>
              <Panel header="Quanto tempo leva para um anúncio ser aprovado?" key="8">
                O tempo de espera para a aprovação de um anúncio pode variar, mas geralmente leva entre 24 e 48 horas.
                O processo pode ser mais rápido ou mais demorado, dependendo do volume de anúncios que estamos recebendo.
              </Panel>
              <Panel header="Quais são as taxas para anunciar um imóvel?" key="9">
                Fico feliz em informar que anunciar um imóvel na nossa plataforma é completamente gratuito! 
                Não cobramos nenhuma taxa de listagem ou comissão sobre os aluguéis. Você pode criar e
                gerenciar seus anúncios sem custos adicionais, garantindo que você tenha a melhor 
                experiência possível ao utilizar nosso site.
              </Panel>                            
            </Collapse>
          </div>
          <div className="form">
            <h3>Formulario de contato</h3>
            <form action="">
              <h4>Nome</h4>
              <input type="text"/>
              <h4>Email</h4>
              <input type="email" name="" id="" />
              <h4>Escreva sua dúvida</h4>
              <textarea name="" id="" rows="7"></textarea>
              <br />
              <button className="button-suport" type="submit">Enviar</button>
            </form>
          </div>
        </div>
      <Footer></Footer>
    </div>
  );
}

export default Suporte;