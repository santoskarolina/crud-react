import { ActionsType } from './actionsType';
import { AplicationState, GenericAction } from './types';
import produce from 'immer';

export const initialState : AplicationState = {
  loading: true, 
  loadingBook: false,
  books: [],
  book: null
}

const reducer = (state = initialState, action: GenericAction ) => {
  if(action.type === ActionsType.GET_BOOK_REQUEST){
    return produce(state, draft => {
      draft.loading = true;
    });
  }
  if(action.type === ActionsType.GET_BOOK_SUCESS){
    return produce(state, draft => {
      draft.loading = false;
      draft.books = action.books;
    });
  }

  if(action.type === ActionsType.GET_BOOK_REQUEST_ERROR){
    return produce(state, draft => {
      draft.loading = false;
      draft.books = [];
    });
  }

  if(action.type === ActionsType.GET_BOOK_BY_ID_REQUEST){
    return produce(state, draft => {
      draft.loadingBook = true;
    });
  }

  if(action.type === ActionsType.GET_BOOK_BY_ID_SUCESS){
    return produce(state, draft => {
      draft.loadingBook = false;
      draft.book = action.book;
    });
  }


    return state
  }

  
  export default reducer