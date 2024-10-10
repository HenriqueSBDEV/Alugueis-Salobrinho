import React from "react";
import "../../styles/Footer/Footer.css"

const Footer = ({style})=>{
  return(
    <div style={{position:'fixed', padding:5, width:"100%", marginTop:30, ...style}} className="div-footer">
      <h4 className="text-footer">© 2024 Henrique Sousa Brito. Todos os direitos reservados.</h4>
    </div>
  );
}

export default Footer;