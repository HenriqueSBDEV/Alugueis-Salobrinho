import React from "react";
import "../../styles/Footer/Footer.css";

const Footer = ({ style }) => {
  return (
    <div style={{ ...style }} className="div-footer">
      <h4 className="text-footer">© 2024 Henrique Sousa Brito. Todos os direitos reservados.</h4>
      <div className="footer-links">
        <a href="/docs/Termos_de_uso.pdf" target="_blank" download={true} className="link-footer">Termos de uso</a>
        <a href="/docs/Politica_de_privacidade.pdf" target="_blank" download={true} className="link-footer">Política de privacidade</a>
      </div>
    </div>
  );
};

export default Footer;
