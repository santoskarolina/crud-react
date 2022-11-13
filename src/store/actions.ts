import { LoadBooksRequestError, LoadBookByIdRequest, loadBookByIdSucess } from './types.d';
import { BookModel } from "models/book.model"
import { LoadBooksRequest, loadBookSucess } from "./types"

export const DELETE_BOOK_REQUEST = 'DELETE_BOOK_REQUEST'
export const GET_BOOK_REQUEST = 'GET_BOOK_REQUEST'
export const GET_BOOK_SUCESS = 'GET_BOOK_SUCESS'
export const GET_BOOK_REQUEST_ERROR = 'GET_BOOK_REQUEST_ERROR'
export const GET_BOOK_BY_ID_REQUEST = 'GET_BOOK_BY_ID_REQUEST'
export const GET_BOOK_BY_ID_SUCESS = 'GET_BOOK_BY_ID_SUCESS'

export const loadBookRequest = (): LoadBooksRequest => ({
  type:GET_BOOK_REQUEST
})

export const loadRemoveBookRequest = (): LoadBooksRequest => ({
  type: DELETE_BOOK_REQUEST,
})

export const getBooksSucess = (books: BookModel[]): loadBookSucess => ({
  type: GET_BOOK_SUCESS,
  books
})

export const loadBookRequestError = (): LoadBooksRequestError => ({
  type: GET_BOOK_REQUEST_ERROR
})

export const loadGetBookByIdRequest = (): LoadBookByIdRequest => ({
  type: GET_BOOK_BY_ID_REQUEST
})

export const getBookByIdSucess = (book: BookModel): loadBookByIdSucess => ({
  type: GET_BOOK_BY_ID_SUCESS,
  book
})