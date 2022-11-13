import { GET_BOOK_SUCESS, GET_BOOK_REQUEST_ERROR, GET_BOOK_BY_ID_SUCESS } from './actions';
import { BookModel } from '../models/book.model';
import { Action } from 'redux';

export interface AplicationState{
    loading: boolean,
    loadingBook: boolean,
    books: BookModel[],
    book: BookModel | null
}

export interface LoadingState {
    loading: boolean;
}

export interface LoadBooksRequest extends Action{
    type: GET_BOOK_REQUEST
}

export interface loadBookSucess extends Action{
    type: GET_BOOK_SUCESS
    books: BookModel[]
}

export interface LoadBooksRequestError extends Action{
    type: GET_BOOK_REQUEST_ERROR
}
export interface LoadBookByIdRequest extends Action{
    type: GET_BOOK_BY_ID_REQUEST
}

export interface loadBookByIdSucess extends Action{
    type: GET_BOOK_BY_ID_SUCESS
    book: BookModel
}
export interface GenericAction{
    type: string,
    books: BookModel[],
    book: BookModel
}


// export type ApplicationAction = | loadBookSucess | LoadBooksRequest