import React from "react";
import "./style.css";

export const LivroCard = ({ livro }) => (
    <div className="livro__box">
        <div className="livro__content__box">
            <p className="livro__title">{livro.Book}</p>
            <p className="livro__subtitle">Autor: {livro.Name}</p>
            <span className="livro__category">Categoria: {livro.Category}</span>
        </div>
    </div>
)

