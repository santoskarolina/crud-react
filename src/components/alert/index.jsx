import React from "react";
import "./styles.css";

export const AlertComponent = ({handleClose, title, message}) => (
  <dialog className="alert__content" open>
    <div className="alert__header">
      <div onClick={handleClose}>
        <p>x</p>
      </div>
    </div>

    <div className="alert__middle">
      <h1>{title}</h1>
      <p>{message}</p>
    </div>

    <div className="alert__footer">
        <button onClick={handleClose}>Fechar</button>
    </div>

  </dialog>
);