import React from "react";
import "./DeleteConta.css";

const DeleteConta = ({onClose, onConfirm}) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Tem certeza que deseja excluir sua conta?</h2>
        <p>Esta ação é irreversível e todos os seus anúncios serão excluídos.</p>
        <div className="modal-buttons">
          <button className="cancel-button" onClick={onClose}>Cancelar</button>
          <button className="delete-button" onClick={onConfirm}>Excluir conta</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConta;