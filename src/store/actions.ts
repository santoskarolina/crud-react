import { BookModel } from "models/book.model"
import { LoadBooksRequest, loadBookSucess } from "./types"

export const DELETE_BOOK_REQUEST = 'DELETE_BOOK_REQUEST'
export const GET_BOOK_REQUEST = 'GET_BOOK_REQUEST'
export const GET_BOOK_SUCESS = 'GET_BOOK_SUCESS'

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