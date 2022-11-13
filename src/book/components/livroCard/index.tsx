import { useDispatch } from 'react-redux'
import { BookModel } from "models/book.model";
import { Link } from 'react-router-dom';
import { Dispatch } from "react";
import { getBooksSucess, loadBookRequest } from "store/actions";
import * as bookService from "book/services/book.service";
import "./style.css";

type Props = {
    book: BookModel;
};

export const LivroCard = ({book}: Props) => {
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
            <button onClick={() => handleDeleteBook(book.id)} className="livro__button__delete">Deletar livro</button>
            <button className="livro__button__delete">
                <Link to={{pathname: `atualizar-livro/${book.id}`}}>Atualizar livro</Link>
            </button>
        </div>
    </div>
    )
}

