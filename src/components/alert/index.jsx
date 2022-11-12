import React from "react";
import "./styles.css";

export const AlertComponent = ({handleClose}) => (
  <dialog className="alert__content" open>
    <div className="alert__header">
      <div onClick={handleClose}>
        <p>x</p>
      </div>
    </div>

    <div className="alert__middle">
      <h1>Sucesso!</h1>
      <p>Livro cadastrado com sucesso!</p>
    </div>

    <div className="alert__footer">
        <button onClick={handleClose}>Fechar</button>
    </div>

  </dialog>
);