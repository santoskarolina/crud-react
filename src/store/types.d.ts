import { Action } from 'redux';
import { ActionsType } from './actionsType';
import { BookModel } from '../models/book.model';

export interface AplicationState{
    loading: boolean,
    loadingBook: boolean,
    books: BookModel[],
    book: BookModel | null,
    filter: string
}

export interface LoadingState {
    loading: boolean;
}

export interface LoadBooksRequest extends Action{
    type: ActionsType.GET_BOOK_REQUEST
}

export interface loadBookSucess extends Action{
    type: ActionsType.GET_BOOK_SUCESS
    books: BookModel[]
}

export interface LoadBooksRequestError extends Action{
    type: ActionsType.GET_BOOK_REQUEST_ERROR
}
export interface LoadBookByIdRequest extends Action{
    type: ActionsType.GET_BOOK_BY_ID_REQUEST
}

export interface loadBookByIdSucess extends Action{
    type: ActionsType.GET_BOOK_BY_ID_SUCESS
    book: BookModel
}

export interface LoadSetSearchBook extends Action{
    type: ActionsType.REQUEST_SET_SEARCH__BOOK
    filter: string
}

export interface GenericAction{
    type: string,
    books: BookModel[],
    book: BookModel,
    filter: string
}


// export type ApplicationAction = | loadBookSucess | LoadBooksRequest