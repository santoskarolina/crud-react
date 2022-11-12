// eslint-disable-next-line react-hooks/exhaustive-deps
import axios from "axios";
import { useEffect, useState } from "react";
import "./style.css";
import {LivroCard} from "../../book/components/livroCard"
import { BookModel } from "models/book.model";

export function HomePage() {
  const [Livros, setLivros] = useState([]);

  const getPosts = () => {
    axios.get(`https://636bda197f47ef51e13c1fe5.mockapi.io/api/v1/books`).then(response => {
      const novosLivro = response.data
      setLivros(novosLivro)
    }).catch(err => console.log(err))
}

  useEffect(() => {
    getPosts()
  },[])

  return (
    <div className="livros__container">
      <div className="header">
      <h1>Livros Story</h1>
      <button>Adicionar livro</button>
      </div>
    <div className="livros__content">
         {Livros.map((livro: BookModel) => {
          return (
           <LivroCard livro={livro} key={livro.id}/>
          )
        })}
    </div>
    </div>
  );
}