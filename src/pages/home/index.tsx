// eslint-disable-next-line react-hooks/exhaustive-deps
import { useEffect } from "react";
import {LivroCard} from "../../book/components/livroCard"
import { BookModel } from "models/book.model";
import { Link } from "react-router-dom";
import { LoaderComponent } from "components/Loader";
import { Dispatch } from "redux";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { AplicationState } from "store/types";
import { getBooksSucess, loadBookRequest, loadBookRequestError } from "store/actions";
import { getBooks } from "book/services/book.service";
import "./style.css";

const HomePage = ()  =>{
  const loading = useSelector((state: AplicationState) => state.loading, shallowEqual);
  const books = useSelector((state: AplicationState) => state.books, shallowEqual);
  const dispatch: Dispatch<any> = useDispatch()
  
  useEffect(() => {
    async function getPosts() {
      dispatch(loadBookRequest());
      return getBooks()
      .then(users => {
        dispatch(getBooksSucess(users.data))
      }).catch(() => {
        dispatch(loadBookRequestError())
      })
    }
    getPosts()
  },[dispatch])

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