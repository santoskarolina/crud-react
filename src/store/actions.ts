import { ActionsType } from './actionsType';
import { LoadBooksRequestError, LoadBookByIdRequest, loadBookByIdSucess} from './types.d';
import { BookModel } from "models/book.model"
import { LoadBooksRequest, loadBookSucess } from "./types"

export const loadBookRequest = (): LoadBooksRequest => ({
  type: ActionsType.GET_BOOK_REQUEST
})

export const loadRemoveBookRequest = (): LoadBooksRequest => ({
  type: ActionsType.DELETE_BOOK_REQUEST,
})

export const getBooksSucess = (books: BookModel[]): loadBookSucess => ({
  type: ActionsType.GET_BOOK_SUCESS,
  books
})

export const loadBookRequestError = (): LoadBooksRequestError => ({
  type: ActionsType.GET_BOOK_REQUEST_ERROR
})

export const loadGetBookByIdRequest = (): LoadBookByIdRequest => ({
  type: ActionsType.GET_BOOK_BY_ID_REQUEST
})


export const getBookByIdSucess = (book: BookModel): loadBookByIdSucess => ({
  type: ActionsType.GET_BOOK_BY_ID_SUCESS,
  book
})