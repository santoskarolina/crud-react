import { Route, Routes } from "react-router-dom";
import HomePage from "pages/home";
import { CreateBookPage } from "pages/createBook";
import "./style.css";

function App() {
  return (
    <div className="book__store__container">
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/novo-livro"  element={<CreateBookPage />} />
          <Route path="/atualizar-livro/:id" element={<CreateBookPage />} />
        </Routes>
    </div>
  );
}

export default App;
