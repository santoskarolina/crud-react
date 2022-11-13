import { Route, Routes } from "react-router-dom";
import React from "react";
import HomePage from "./pages/home";
import { CreateBookPage } from "pages/createBook";

function App() {
  return (
    <div>
        <Routes>
          <Route  path="/" element={<HomePage />}/>
          <Route path="/novo-livro"  element={<CreateBookPage />} />
          <Route path="/atualizar-livro/:id" element={<CreateBookPage />} />
        </Routes>
    </div>
  );
}

export default App;
