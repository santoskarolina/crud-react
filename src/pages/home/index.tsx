// eslint-disable-next-line react-hooks/exhaustive-deps
import { useEffect, useState } from "react";
import "./style.css";
import {LivroCard} from "../../book/components/livroCard"
import { BookModel } from "models/book.model";
import { Link } from "react-router-dom";
import { getBooks } from "book/utils/getBooks";
import { LoaderComponent } from "components/Loader";
import { Dispatch } from "redux";
import { removeBookAction } from "contexts/actionsCreator";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { StateCustom } from "contexts/types";
import { connect } from "react-redux";

const HomePage = ()  =>{
  const [Livros, setLivros] = useState([]);
  const loading = useSelector((state: StateCustom) => state.loading, shallowEqual);
  const dispatch: Dispatch<any> = useDispatch()
  
  const getPosts = async () => {
    console.log("🚀 ~ file: index.tsx ~ line 21 ~ getPosts", loading)
    const response = await getBooks()
    
    if(response.status === 200) {
      setLivros(response.data)
      dispatch(removeBookAction(false))
    }
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
          {Livros.map((livro: BookModel) => {
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