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
            
            <div className="livro__footer">
            <span className="livro__category">Categoria: {book.Category}</span>
            <div className="livro__actions">
                <button onClick={() => handleDeleteBook(book.id)} className="livro__button livro__button__delete">
                    <img src="https://cdn-icons-png.flaticon.com/512/1799/1799391.png" alt="Deletar livro" />
                </button>
                <button className="livro__button livro__button__update">
                    <Link to={{pathname: `atualizar-livro/${book.id}`}}>
                        <img src="https://cdn-icons-png.flaticon.com/512/84/84380.png" alt="Atualizar livro" />
                    </Link>
                </button>
            </div>
            </div>
        </div>
    </div>
    )
}

