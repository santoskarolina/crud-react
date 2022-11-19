import { SearchBook } from "components/searchBookComp";
import { Link } from "react-router-dom"
import "./style.css";

export const HeaderComponent = () => {
  return (
    <div className="header__container">
      <div className="header__content">
        <h1>Livros Story</h1>
        <div className="header__search__container">
          <SearchBook />
        </div>
        <Link to="/novo-livro" className="livros__button__nagivate">Adicionar livro</Link>
      </div>
    </div>
  )
}