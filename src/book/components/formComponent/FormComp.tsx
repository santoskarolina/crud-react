/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import * as React from "react";
import { useState , useEffect} from "react";
import "./styles.css";
import { useForm } from "react-hook-form";
import { AlertComponent } from "../../../components/alert";
import { BookModel } from "models/book.model";
import { useNavigate } from "react-router-dom";
import * as bookService from "book/services/book.service";
import { InputBoxComponent } from "../inputComponent";
import { CustomMessages } from "models/messages";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Dispatch } from "react";
import { AplicationState } from "store/types";
import { getBookByIdSucess, loadGetBookByIdRequest } from "store/actions";
import { LoaderComponent } from "components/Loader";
import { MyInputTypes } from "models/inputTypes.model";
import { InputSelectBoxComponent } from "../inputSelectComp";
import { categoryOptions } from "../../../models/category.options";


export function FormComp ({bookId}: any) {
  const loadingBook = useSelector((state: AplicationState) => state.loadingBook, shallowEqual);
  const dispatch: Dispatch<any> = useDispatch();
  const [loading, setloading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<MyInputTypes>();
  const [title, setTitle] = useState("Atenção");
  const [message, setMessage] = useState("Aguardando resposta");
  const navigate = useNavigate();

  // form fields
  const [Name, SetName] = useState("");
  const [Book, SetBook] = useState("");
  const [Category, SetCategory] = useState(categoryOptions[0]);

  // close the alert
  function handleClose() {
    setDialogOpen(false);
    navigate("/");
  }

  useEffect(() => {
    const getBookById = async() => {
      if(bookId){
        dispatch(loadGetBookByIdRequest());
        await bookService.getBookById(bookId)
        .then(({data}) => {
          const book: BookModel = data
          handleUpdateForm(book)
        })
      }
    }
    const handleUpdateForm = (book: BookModel) => {
      SetName(book.Name)
      SetBook(book.Book)
      SetCategory(book.Category)
      dispatch(getBookByIdSucess(book))
    }
    getBookById()
  }, [bookId,dispatch,])

  const postBook = async () => {
    setloading(true);
    let response;
    const book: BookModel = { Name, Book, Category };
    if(bookId) {
      response = await bookService.updateBook(bookId,book)
    }else{
      response = await bookService.createBook(book);
    }
    setloading(false);
    reset();
    handleRequestResponse(response.status)
  };
  
  const handleRequestResponse = (status: number) => {
    if (status === 201 || status === 200) {
      setTitle(CustomMessages.TITLE_OF_SUCCESS);
      setMessage(status === 201 ? CustomMessages.REGISTERED_SUCCESSFULLY : CustomMessages.SUCCESSFULLY_UPDATED);
      setDialogOpen(true);
    } else {
      setTitle(CustomMessages.FAULT_TITLE);
      setMessage(CustomMessages.FAILED_TO_REGISTER);
      setloading(false);
    }
  }

  return (
    <div className="form__container">
      {!loadingBook && (
      <form className="container-wrapp" onSubmit={handleSubmit(postBook)}>
        <h1 className="title">{bookId ? 'Atualizar livro' : 'Novo livro'}</h1>

        <InputBoxComponent
          nome="Autor"
          placeholder="Nome do autor"
          value={Name}
          register={register}
          name={"name"}
          errors={errors}
          onChange={(value: any) => SetName(value.target.value)}
        />

        <InputBoxComponent
          nome="Livro"
          value={Book}
          placeholder="Nome do livro"
          register={register}
          name={"book"}
          errors={errors}
          onChange={(value: any) => SetBook(value.target.value)}
        />
        
        <InputSelectBoxComponent 
          value={Category}
          register={register}
          name={"category"}
          errors={errors}
          onChange={(value: any) => SetCategory(value.target.value)}
        />

        {!loading && (
          <button className="box__button" type="submit">
            Adicionar!
          </button>
        )}

        {loading && (
          <div className="box__button">
            <div className="box__button__loader"></div>
          </div>
        )}
      </form>
      )}

      {dialogOpen && (
        <AlertComponent
          title={title}
          message={message}
          handleClose={handleClose}
        />
      )}

    {loadingBook && (
        <div className="loader__container">
          <LoaderComponent />
        </div>
      )}
    </div>
  );
}
