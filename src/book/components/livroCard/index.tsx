import * as React from "react";
import { useDispatch } from 'react-redux'
import { BookModel } from "models/book.model";
import { Dispatch } from "react";
import { getBooksSucess, loadBookRequest } from "store/actions";
import "./style.css";
import * as bookService from "book/services/book.service";

type Props = {
    book: BookModel;
};

export const LivroCard: React.FC<Props> = ({book}) => {
    const dispatch: Dispatch<any> = useDispatch();

    const handleDeleteBook = async (id: any) => {
        dispatch(loadBookRequest());
        return bookService.deleteBook(id)
        .then(() => {
            bookService.getBooks().then(response => {
                dispatch(getBooksSucess(response.data))
            })
        })
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

