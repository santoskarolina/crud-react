import { GET_BOOK_SUCESS } from './actions';
import { BookModel } from '../models/book.model';
import { Action } from 'redux';

export interface AplicationState{
    loading: boolean,
    books: BookModel[]
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

export interface GenericAction{
    type: string,
    books: BookModel[]
}


// export type ApplicationAction = | loadBookSucess | LoadBooksRequest