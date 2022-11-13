import { deleteBook } from "book/utils/deleteBook";
import "./style.css";
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { BookModel } from "models/book.model";
import { Dispatch } from "react";
import * as React from "react";
import { removeBookAction } from "contexts/actionsCreator";
import { StateCustom } from "contexts/types";

type Props = {
    book: BookModel;
};

export const LivroCard: React.FC<Props> = ({book}) => {
    const loading = useSelector((state: StateCustom) => state.loading, shallowEqual);
    const dispatch: Dispatch<any> = useDispatch();
    
    const handleDeleteBook = async (id: any) => {
        const newLoading = loading ? false :  true
        dispatch(removeBookAction(newLoading))
        const response = await deleteBook(id);

        if(response.status === 200){
            dispatch(removeBookAction(false))
        }
    }

    return (
    <div className="livro__box">
        <div className="livro__content__box">
            <p className="livro__title">{book.Book}</p>
            <p className="livro__subtitle">Autor: {book.Name}</p>
            <span className="livro__category">Categoria: {book.Category}</span>
            <button onClick={() => handleDeleteBook(book.id)} className="livro__button__delete">Delete</button>
        </div>
    </div>
    )
}

