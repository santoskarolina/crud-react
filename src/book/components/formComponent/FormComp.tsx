/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import * as React from "react";
import { useState } from "react";
import "./styles.css";
import { useForm, } from "react-hook-form";
import { AlertComponent } from "../../../components/alert";
import { createBook } from "../../utils/createBook";
import { BookModel } from "models/book.model";


interface MyInputTypes {
  name: string;
  book: string;
  category: string;
}

export function FormComp() {
  const [Name, SetName] = useState("");
  const [Book, SetBook] = useState("");
  const [Category, SetCategory] = useState("");
  const [loading, setloading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset} = useForm<MyInputTypes>();

  function handleClose() {
    setDialogOpen(false);
  }

  const postData = async () => {
    setloading(true);
    const book: BookModel = { Name, Book, Category };
    const response = await createBook(book)
    if(response.status === 201){
      setloading(false)
      setDialogOpen(true)
      reset()
    }else{
      setloading(false)
    }
  };

  return (
    <div className="App">
      <form className="container-wrapp" onSubmit={handleSubmit(postData)}>
        <h1 className="title">Lista de Livros</h1>

        <input
          type="text"
          {...register("name", {
            required: {
              value: true,
              message: 'Campo obrigátorio'
            },
            maxLength: {
              value: 250,
              message: "Nome deve ter entre 5 e 255 caracteres",
            },
            minLength: {
              value: 5,
              message: "Nome deve ter entre 5 e 255 caracteres",
            },
          })}
          placeholder="Nome do livro"
          className="input"
          onChange={(e) => SetName(e.target.value)}
        />
        {errors?.name && <span>{errors.name.message}</span>}

        <input
          type="text"
          {...register("book", {
            required: {
              value: true,
              message: 'Campo obrigátorio'
            },
            maxLength: {
              value: 250,
              message: "Nome deve ter entre 5 e 255 caracteres",
            },
            minLength: {
              value: 5,
              message: "Nome deve ter entre 5 e 255 caracteres",
            },
          })}
          placeholder="Nome do livro"
          className="input"
          onChange={(e) => SetBook(e.target.value)}
        />
        {errors.book && <span>{errors.book.message}</span>}

        <input
          type="text"
          {...register("category", {
            required: {
              value: true,
              message: 'Campo obrigátorio'
            },
            maxLength: {
              value: 250,
              message: "Nome deve ter entre 5 e 255 caracteres",
            },
            minLength: {
              value: 5,
              message: "Nome deve ter entre 5 e 255 caracteres",
            },
          })}
          placeholder="Categoria"
          className="input"
          onChange={(e) => SetCategory(e.target.value)}
        />
        {errors.category && <span>{errors.category.message}</span>}

        {/* {!loading && (
          <button disabled={loading} style={{cursor: loading ? 'not-allowed' : 'pointer'}} className="box__button" onClick={PostData}>Adicionar!</button>
        )} */}

        {!loading && (
          <button className="box__button" type="submit">
            Adicionar!
          </button>
        )}

        {loading && (
          <div className="box__button">
            <div className="c-loader"></div>
          </div>
        )}
      </form>

      {dialogOpen && (
        <div className="alert__container">
          <AlertComponent handleClose={handleClose} />
        </div>
      )}
    </div>
  );
}