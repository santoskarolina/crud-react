// eslint-disable-next-line react-hooks/exhaustive-deps
import { useEffect } from "react";
import "./style.css";
import {LivroCard} from "../../book/components/livroCard"
import { BookModel } from "models/book.model";
import { Link } from "react-router-dom";
import { LoaderComponent } from "components/Loader";
import { Dispatch } from "redux";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { AplicationState } from "store/types";
import { getBooksSucess, loadBookRequest } from "store/actions";
import { getBooks } from "book/services/book.service";

const HomePage = ()  =>{
  const loading = useSelector((state: AplicationState) => state.loading, shallowEqual);
  const books = useSelector((state: AplicationState) => state.books, shallowEqual);
  const dispatch: Dispatch<any> = useDispatch()
  
  const getPosts = async () => {
    dispatch(loadBookRequest());
    return getBooks()
    .then(users => {
      dispatch(getBooksSucess(users.data))
    })
  }

  useEffect(() => {
    getPosts()
  },[])

  return (
    <div className="livros__container">
      <div className="livros__header">
      <h1>Livros Story</h1>
      <Link to="/novo-livro" className="livros__button__nagivate">Adicionar livro</Link>
      </div>

      {!loading && (
        <div className="livros__content">
          {books.map((livro: BookModel) => {
            return (<LivroCard book={livro} key={livro.id} />
            )
          })}
        </div>
      )}

      {loading && (
        <div className="loader__container">
          <LoaderComponent />
        </div>
      )}
    </div>
  );
}

export default HomePage